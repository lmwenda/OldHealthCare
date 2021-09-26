/* eslint-disable @typescript-eslint/no-unused-vars */

import request from "../request";
import { BASE_URL, session_endpoints } from "../urls";
import { AxiosResponse } from "axios";

import { ISessions } from "../../utils/Exported/ExportedInterfaces";
import mongoose from "mongoose";

export class Sessions implements ISessions{
    public sessionName?: string;
    public sessionDescription?: string;
    public timeTaken?: string;
    public author?: mongoose.Types.ObjectId;
    public typeOfWorkout?: string;
    public sets?: number;
    public reps?: number;
    public isPublic?: boolean;
    public date?: Date;

    constructor(
        sessionName?: string, 
        sessionDescription?: string, 
        timeTaken?: string, 
        author?: mongoose.Types.ObjectId,
        typeOfWorkout?: string,
        sets?: number,
        reps?: number,
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

    public async createSession(): Promise<AxiosResponse>{
       const data = {
            sessionName: this.sessionName,
            sessionDescription: this.sessionDescription,
            timeTaken: this.timeTaken,
            author: this.author,
            typeOfWorkout: this.typeOfWorkout,
            sets: this.sets,
            reps: this.reps,
            isPublic: this.isPublic
       } 
       return await request(BASE_URL, {
            url: session_endpoints.POST_SESSION,
            method: "POST",
            data 
        })
    }

    public async updateSession(session_id: string): Promise<AxiosResponse>{
        const data = {
            sessionName: this.sessionName,
            sessionDescription: this.sessionDescription,
            timeTaken: this.timeTaken,
            author: this.author,
            typeOfWorkout: this.typeOfWorkout,
            sets: this.sets,
            reps: this.reps,
            isPublic: this.isPublic
       } 
       return await request(BASE_URL, {
            url: session_endpoints.UPDATE_SESSION+session_id,
            method: "POST",
            data 
        })
    }

    public async getSession(session_id: string): Promise<AxiosResponse>{
        return await request(BASE_URL, {
            url: session_endpoints.GET_SESSION+session_id,
            method: "GET"
        })
    }

    public async getAllSessions(): Promise<AxiosResponse>{
        return await request(BASE_URL, {
            url: session_endpoints.GET_ALL_SESSIONS,
            method: "GET"
        })
    }

    public async deleteSession(session_id: string): Promise<AxiosResponse>{
        return await request(BASE_URL, {
            url: session_endpoints.DELETE_SESSION+session_id,
            method: "DELETE"
        })
    }
}