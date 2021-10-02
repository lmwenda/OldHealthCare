import { AxiosResponse, AxiosError } from "axios";
import request from "../request";
import { IUser } from "../../utils/Exported/ExportedInterfaces";
import { BASE_URL, user_endpoints } from "../urls";
import { authEnum } from "../../utils/redux-utils/authEnum";
import mongoose from "mongoose";
import { loginDispatchType, registerDispatchType } from "../../utils/types";
import { Dispatch } from "redux";
import { AxiosTypes } from "../../global-types";

export class UserClass implements IUser{
    public username?: string;
    public email?: string;
    public password?: string;

    constructor(
        username?: string,
        email?: string,
        password?: string
    ){
        this.username = username;
        this.email = email;
        this.password = password;
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

    public loginUser(dispatch: Dispatch<{ type: loginDispatchType, payload?: { user: any } | string}>): Promise<any>{
        const data = {
            email: this.email,
            password: this.password
        }

        return request(BASE_URL, {
            url: user_endpoints.LOGIN_USER,
            method: "POST",
            data
        }).then(

            (response: AxiosResponse<AxiosTypes.UserLoginTypes>) => {
                try{
                    console.log("Login Response:", response);
                    localStorage.setItem("token", response.headers['verification-token']);

                    // Testing Token

                    console.log(localStorage.getItem("token"));

                    dispatch({
                        type: authEnum.LOGIN_SUCCESS,
                        payload: { user: response.data },
                    });

                    dispatch({
                        type: authEnum.SET_MESSAGE,
                        payload: response.data.message,
                    });
                }catch(err){
                    console.error(err);
                }

            },
            (error: AxiosError<AxiosTypes.UserRegisterTypes>) => {

                const message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                dispatch({
                    type: authEnum.LOGIN_FAIL,
                });

                dispatch({
                    type: authEnum.SET_MESSAGE,
                    payload: message,
                });

            }
        );
    }

    public registerUser(dispatch: Dispatch<{ type: registerDispatchType, payload?: {}|string }>): Promise<any>{
        const data = {
            username: this.username,
            email: this.email,
            password: this.password
        }

        return request(BASE_URL, {
            url: user_endpoints.POST_USER,
            method: "POST",
            data
        }).then((response: AxiosResponse<AxiosTypes.UserRegisterTypes>) => {
            try{

                console.log(response.data);
                dispatch({
                    type: authEnum.REGISTER_SUCCESS,
                });

                dispatch({
                    type: authEnum.SET_MESSAGE,
                    payload: response.data.message,
                });
            }catch(err){
                console.error(err);
            }
            },
            (error: AxiosError<AxiosTypes.UserRegisterTypes>) => {

                const message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                dispatch({
                    type: authEnum.REGISTER_FAIL,
                });

                dispatch({
                    type: authEnum.SET_MESSAGE,
                    payload: message,
                });
            }
        );
    }
}