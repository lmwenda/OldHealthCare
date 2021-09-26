import User from "../models/User";
import bcrypt from "bcryptjs";
import { Error } from "mongoose";
import { Response } from "express";
import { UserClass } from "../utils/classes/UserClass";
import AuthenticateUser from "../authentication/AuthenticateUser";
import jwt from "jsonwebtoken";
import { IUser } from "../utils/exports/exportedInterfaces";
import Session from "../models/Session";

export class UserController extends UserClass{
    constructor(
        username?: string,
        email?: string,
        password?: string,
        date?: Date
    ){
        super(username, email, password, date);
    }

    public async createUser(res: Response): Promise<any>{

        const body = {
            username: this.username,
            email: this.email,
            password: this.password
        }

        // VALIDATING OUR USER
        const { error } = AuthenticateUser(body);
        if (error) return res.status(400).send(error.details[0].message);

        // CHECKING IF OUR USER'S EMAIL ALREADY EXISTS

        const emailExists = await User.findOne({ email: this.email});
        if (emailExists) return res.status(400).send("Email Already Exists.");

        // CREATING OUR NEW USER
        const user = new User(body);

        // SAVING THE User

        const savedUser = await user.save();
        res.json(savedUser);
    }

    public async loginUser(res: Response): Promise<any>{
        // constants
        let password: string;

        // Checking if this.password is not undefined

        if(typeof this.password !== "undefined"){
            password = this.password;

            // CHECKING IF OUR USER'S EMAIL IS VALID

            const user = await User.findOne({ email: this.email });
            if(!user) return res.status(400).send('Invalid Email or Password.');

            // CHECKING IF OUR PASSWORD IS VALID

            const validPassword = await bcrypt.compare(password, user.password);
            if(!validPassword) return res.status(400).send("Invalid Email or Password.");

            // CREATING AND ASSIGNING A JWT TOKEN

            let secret_token: string;

            if(typeof process.env.SECRET_TOKEN !== "undefined"){
                // Assigning Secret Token to .env.SECRET_TOKEN
                secret_token = process.env.SECRET_TOKEN;

                // Assigning new JWT Token and HTTP Header

                const token = jwt.sign({ _id: user._id }, process.env.SECRET_TOKEN, {
                    expiresIn: "7 days",
                });
                res.header('verification-token', token).send(token);
            }else{
                res.status(400).send(
                    "Secret Token is undefined. Contact the Development Team to resolve this issue"
                );
            }

            res.send("Welcome back " + user.username + " to HealthCare!")
        }else{
            // This happens if the this.password is undefined
            res.status(400).send("Password is Required...");
        }
    }

    public async getAllUserSessions(res: Response, author: any){
        try{
            await Session.find({ author: author }, (err, result) => {
                if(err){
                    console.log(err);
                    res.status(400).send(err);
                }else {
                    res.json(result);
                }
            });
        }catch(err){
            console.log(err);
        }
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
        User.findById(id, (err: Error, user: IUser) => {
            if (err) {
                res.json({ message: "Failed to Retrieve User." });
            } else {
                res.json(user);
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