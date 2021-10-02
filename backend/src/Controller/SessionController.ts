import Session from "../models/Session";
import mongoose, { Error } from "mongoose";
import { Response } from "express";
import { SessionClass } from "../utils/classes/SessionClass";
import AuthenticateSession from "../authentication/AuthenticateSession";
import { ISession } from "../utils/exports/exportedInterfaces";
import User from "../models/User";
import AuthenticateUser from "../authentication/AuthenticateUser";

export class SessionController extends SessionClass{
    constructor(
        sessionName?: string, 
        sessionDescription?: string, 
        timeTaken?: string, 
        author?: mongoose.Schema.Types.ObjectId,
        typeOfWorkout?: string,
        sets?: number | undefined, 
        reps?: number | undefined, 
        isPublic?: boolean, 
        date?: Date,
    ){
        super(sessionName, sessionDescription, timeTaken, author, typeOfWorkout, reps, sets, isPublic, date);
    }

    // THIS METHOD DOESN'T WORK AND IS A BAD METHOD OF DOING SESSION AUTHOR'S
    // public async pushSessionsToUser(user_id: any, res: Response): Promise<any>{
    //     try{
    //         await Session.find({ "author": user_id }, function(err: any, result: any) {
    //             if (err) {
    //               console.log(err);
    //               res.status(400).send(err);
    //             } else {

    //                 try{
    //                     // UPDATING THE USER

    //                     User.findByIdAndUpdate(user_id, { sessions: result }, function(err){
    //                         if(err){
    //                             res.status(400).send("Failed to Push Session to User...")
    //                         } else {
    //                             res.status(200).send("Successfully Pushed Session to User...");
    //                         }
    //                     })
    //                 }
    //                 catch(err){
    //                     console.error(err);
    //                 }
    //             }
    //         });
    //     }catch(err){
    //         console.log(err);
    //         res.status(400).send(err);
    //     }
    // }

    public async createSession(res: Response): Promise<any>{
        try{
            const body = {
                sessionName: this.sessionName,
                sessionDescription: this.sessionDescription,
                timeTaken: this.timeTaken,
                author: this.author,
                typeOfWorkout: this.typeOfWorkout,
                sets: this.sets,
                reps: this.reps,
                isPublic: this.isPublic
            }
    
            // VALIDATING OUR SESSION
            const { error } = AuthenticateSession(body);
            if (error) return res.status(400).send(error.details[0].message);
    
            // CHECKING IF OUR SESSION EXISTS
            const sessionNameExists = await Session.findOne({ sessionName: this.sessionName });
            if (sessionNameExists) return res.status(400).send("Session Name Already Exists.");
    
            // CREATING OUR NEW SESSION 
            const session = new Session(body);
    
            // SAVING THE SESSION
    
            const savedSession = await session.save();
            res.json(savedSession);
        }catch(err){
            console.error(err);
        }
    }

    public getAllSessions(res: Response): any{
        Session.find({}, function(err: any, result: any) {
            if (err) {
              console.log(err);
              res.status(400).send(err);
            } else {
              res.json(result);
            }
        });
    }

    public getSession(id: string, res: Response):  void{
        Session.findById(id, (err: Error, session: ISession) => {
            if (!err) {
              res.json(session);
            } else {
              res.json({ message: "Failed to Retrieve Session." });
            }
          });
    }

    public async deleteSession(id: string, res: Response): Promise<any>{
        await Session.findByIdAndDelete(id, {}, function(err){
            if(err){
                res.status(400).send("Failed to Delete Session...")
            } else {
                res.status(200).send("Successfully Deleted Session...");
            }
         });
    }
    
    public async updateSession(id: string, res: Response): Promise<any>{
        try{
            const body = {
                sessionName: this.sessionName,
                sessionDescription: this.sessionDescription,
                timeTaken: this.timeTaken,
                typeOfWorkout: this.typeOfWorkout,
                sets: this.sets,
                reps: this.reps,
                isPublic: this.isPublic
            }

            // VALIDATING OUR SESSION

            const { error } = AuthenticateSession(body);
            if (error) return res.status(400).send(error.details[0].message);

            // UPDATING THE SESSION

            await Session.findByIdAndUpdate(id, body, function(err){
                if(err){
                    res.status(400).send("Failed to Update Session...")
                } else {
                    res.status(200).send("Successfully Update Session...");
                }
            })
        }catch(err){
            console.log(err);
            res.status(400).send(err);
        }
    }
}