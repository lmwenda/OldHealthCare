import { AxiosResponse } from "axios";
import request from "../request";
import { IUser } from "../../utils/Exported/ExportedInterfaces";
import { BASE_URL, user_endpoints } from "../urls";
import mongoose from "mongoose";

/*
    REGISTER - DONE
    GET ALL USER SESSIONS - DOEN
    LOGIN - DONE
*/

export class UserClass implements IUser{
    public username?: string;
    public email?: string;
    public password?: string;
    public sessions?: [];

    constructor(
        username?: string,
        email?: string,
        password?: string,
        sessions?: [],
    ){
        this.username = username;
        this.email = email;
        this.password = password;
        this.sessions = sessions;
    }

    public async getAllUserSessions(user_id: mongoose.Types.ObjectId): Promise<AxiosResponse>{
        const data = { user_id }
        return await request(BASE_URL, {
            url: user_endpoints.GET_ALL_USER_SESSIONS,
            method: "GET",
            data
        })
    }

    public deleteUser(id: string){
        return request(BASE_URL, {
            url: user_endpoints.DELETE_USER+id,
            method: "DELETE"
        });
    }

    public getUser(id: string){
        return request(BASE_URL, {
            url: user_endpoints.GET_USER+id,
            method: "GET"
        })
    }

    public getAllUsers(){
        return request(BASE_URL, {
            url: user_endpoints.GET_ALL_USERS,
            method: "GET"
        });
    }

    public updateUser(id: string){
        const data = {
            username: this.username,
            email: this.email,
            password: this.password
        }

        return request(BASE_URL, {
            url: user_endpoints.UPDATE_USER+id,
            method: "PUT",
            data
        });
    }

    public loginUser(){
        const data = {
            username: this.username,
            email: this.email,
            password: this.password
        }

        return request(BASE_URL, {
            url: user_endpoints.LOGIN_USER,
            method: "POST",
            data
        });
    }

    public registerUser(){
        const data = {
            username: this.username,
            email: this.email,
            password: this.password
        }

        return request(BASE_URL, {
            url: user_endpoints.POST_USER,
            method: "POST",
            data
        });
    }
}