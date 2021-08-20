import mongoose from "mongoose";

export interface ISession extends mongoose.Document{
    sessionName: string,
    sessionDescription: string,
    timeTaken: string,
    typeOfWorkout: string,
    sets?: number,
    reps?: number,
    isPublic: boolean,
    date: Date
}

export interface TSession{
    sessionName?: string,
    sessionDescription?: string,
    timeTaken?: string,
    typeOfWorkout?: string,
    sets?: number,
    reps?: number,
    isPublic?: boolean,
    date?: Date
}