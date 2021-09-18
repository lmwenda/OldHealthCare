import mongoose from "mongoose";
import { TSession } from "../exports/exportedInterfaces";

export class SessionClass implements TSession{
    public sessionName?: string;
    public sessionDescription?: string;
    public timeTaken?: string;
    public author?: mongoose.Schema.Types.ObjectId;
    public typeOfWorkout?: string;
    public sets?: number | undefined;
    public reps?: number | undefined;
    public isPublic?: boolean;
    public date?: Date;

    constructor(
        sessionName?: string, 
        sessionDescription?: string, 
        timeTaken?: string, 
        author?: mongoose.Schema.Types.ObjectId,
        typeOfWorkout?: string,
        sets?: number | undefined, 
        reps?: number | undefined, 
        isPublic?: boolean, 
        date?: Date
    ){
        this.sessionName = sessionName;
        this.sessionDescription = sessionDescription;
        this.timeTaken = timeTaken;
        this.author = author;
        this.typeOfWorkout = typeOfWorkout;
        this.sets = sets;
        this.reps = reps;
        this.isPublic = isPublic;
        this.date = date;
    }
}