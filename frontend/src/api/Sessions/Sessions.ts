/* eslint-disable @typescript-eslint/no-unused-vars */

import request from "../request";
import { BASE_URL, session_endpoints, user_endpoints } from "../urls";
import axios from "axios";

import { ISessions } from "../../utils/Exported/ExportedInterfaces";
import mongoose from "mongoose";

export class Sessions implements ISessions{
    public sessionName?: string;
    public sessionDescription?: string;
    public timeTaken?: string;
    public typeOfWorkout?: string;
    public sets?: number;
    public reps?: number;
    public isPublic?: boolean;
    public date?: Date;

    constructor(
        sessionName?: string, 
        sessionDescription?: string, 
        timeTaken?: string, 
        typeOfWorkout?: string,
        sets?: number,
        reps?: number,
        isPublic?: boolean,
        date?: Date
    ){
        this.sessionName = sessionName;
        this.sessionDescription = sessionDescription;
        this.timeTaken = timeTaken;
        this.typeOfWorkout = typeOfWorkout;
        this.sets = sets;
        this.reps = reps;
        this.isPublic = isPublic;
        this.date = date;
    }

    public createSession(){
        
    }

    public updateSession(session_id: string){

    }

    public getSession(session_id: string){

    }

    public getAllUserSessions(user_id: mongoose.Types.ObjectId){

    }

    public getAllSessions(){
 
    }

    public deleteSession(session_id: string){
        
    }
}