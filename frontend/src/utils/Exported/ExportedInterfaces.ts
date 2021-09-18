import mongoose from "mongoose";

export interface ISessions{
    sessionName?: string,
    sessionDescription?: string,
    timeTaken?: string,
    author?: mongoose.Types.ObjectId
    typeOfWorkout?: string,
    sets?: number,
    reps?: number,
    isPublic?: boolean,
    date?: Date
}

export interface IUser{
    username?: string,
    email?: string,
    password?: string,
    sessions?: [],
    date?: Date
}