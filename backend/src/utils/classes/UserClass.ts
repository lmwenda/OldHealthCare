import { TUser } from "../exports/exportedInterfaces";

export class UserClass implements TUser{
    public username?: string;
    public email?: string;
    public password?: string;
    public date?: Date;

    constructor(
        username?: string,
        email?: string,
        password?: string,
        date?: Date
    ){
        this.username = username;
        this.email = email;
        this.password = password;
        this.date = date;
    }
}