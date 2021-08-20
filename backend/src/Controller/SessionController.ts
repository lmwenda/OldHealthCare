import Session from "../models/Session";
import { Error } from "mongoose";
import { Response } from "express";
import { SessionClass } from "../utils/classes/SessionClass";
import AuthenticateSession from "../authentication/AuthenticateSession";
import { ISession } from "../utils/exports/exportedInterfaces";

export class SessionController extends SessionClass{
    constructor(
        sessionName?: string, 
        sessionDescription?: string, 
        timeTaken?: string, 
        typeOfWorkout?: string,
        sets?: number | undefined, 
        reps?: number | undefined, 
        isPublic?: boolean, 
        date?: Date,
    ){
        super(sessionName, sessionDescription, timeTaken, typeOfWorkout, reps, sets, isPublic, date);
    }

    public async createSession(res: Response): Promise<any>{

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

        // CHECKING IF OUR SESSION EXISTS
        const sessionNameExists = await Session.findOne({ sessionName: this.sessionName });
        if (sessionNameExists) return res.status(400).send("Session Name Already Exists.");

        // CREATING OUR NEW SESSION 
        const session = new Session(body);

        // SAVING THE SESSION

        const savedSession = await session.save();
        res.json(savedSession);
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

    public getSession(id: number, res: Response):  void{
        Session.findById(id, (err: Error, session: ISession) => {
            if (!err) {
              res.json(session);
            } else {
              res.json(err);
            }
          });
    }

    public async deleteSession(id: string, res: Response): Promise<void>{
        try{

            // Deleting Session
            
            Session.findByIdAndDelete(id);

            // Checking if Session was Deleted 

            Session.findById(id, (err: Error, session: ISession) => {
                if (!err) {
                res.json({ message: "Failed to Delete Session" });
                } else {
                res.json({ message: `${session.sessionName} was successfully deleted.` });
                }
            });
        }catch(err){
            console.log(err);
            res.send(err);
        }
    }

    public async updateSession(id: string, res: Response): Promise<any>{
        try{
            const session = Session.findById(id);
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

            // CHECKING IF OUR SESSION EXISTS

            const sessionNameExists = await Session.findOne({ sessionName: this.sessionName });
            if (sessionNameExists) return res.status(400).send("Session Name Already Exists.");

            // UPDATING THE SESSION

            await Session.findByIdAndUpdate(id, body)
        }catch(err){
            console.log(err);
            res.status(400).send(err);
        }
    }
}