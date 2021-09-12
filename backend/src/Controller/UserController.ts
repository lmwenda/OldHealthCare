import User from "../models/User";
import { Error } from "mongoose";
import { Response } from "express";
import { UserClass } from "../utils/classes/UserClass";
import AuthenticateUser from "../authentication/AuthenticateUser";
import { IUser } from "../utils/exports/exportedInterfaces";

export class UserController extends UserClass{
    constructor(
        username?: string,
        email?: string,
        password?: string,
        sessions?: [],
        date?: Date
    ){
        super(username, email, password, sessions, date);
    }

    public async createUser(res: Response): Promise<any>{

        const body = {
            username: this.username,
            email: this.email,
            password: this.password
        }

        // VALIDATING OUR User
        const { error } = AuthenticateUser(body);
        if (error) return res.status(400).send(error.details[0].message);

        // CHECKING IF OUR USER'S EMAIL ALREADY EXISTS

        const emailExists = await User.findOne({ email: this.email});
        if (emailExists) return res.status(400).send("Email Already Exists.");

        // CREATING OUR NEW User 
        const user = new User(body);

        // SAVING THE User

        const savedUser = await user.save();
        res.json(savedUser);
    }

    public getAllUsers(res: Response): any{
        User.find({}, function(err: any, result: any) {
            if (err) {
              console.log(err);
              res.status(400).send(err);
            } else {
              res.json(result);
            }
        });
    }

    public getUser(id: string, res: Response):  void{
        User.findById(id, (err: Error, User: IUser) => {
            if (!err) {
              res.json(User);
            } else {
              res.json({ message: "Failed to Retrieve User." });
            }
          });
    }

    public async deleteUser(id: string, res: Response): Promise<any>{
        await User.findByIdAndDelete(id, {}, function(err){
            if(err){
                res.status(400).send("Failed to Delete User...")
            } else {
                res.status(200).send("Successfully Deleted User...");
            }
         });
    }

    public async updateUser(id: string, res: Response): Promise<any>{
        try{
            const body = {
                username: this.username,
                email: this.email,
                password: this.password
            }

            // VALIDATING OUR User

            const { error } = AuthenticateUser(body);
            if (error) return res.status(400).send(error.details[0].message);

            // UPDATING THE User

            await User.findByIdAndUpdate(id, body, function(err){
                if(err){
                    res.status(400).send("Failed to Update User...")
                } else {
                    res.status(200).send("Successfully Update User...");
                }
            })
        }catch(err){
            console.log(err);
            res.status(400).send(err);
        }
    }
}