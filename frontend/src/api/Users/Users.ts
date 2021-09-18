import { IUser } from "../../utils/Exported/ExportedInterfaces";

export class UserClass implements IUser{
    public username?: string;
    public email?: string;
    public password?: string;
    public sessions?: [];
    public date?: Date;

    constructor(
        username?: string,
        email?: string,
        password?: string,
        sessions?: [],
        date?: Date
    ){
        this.username = username;
        this.email = email;
        this.password = password;
        this.sessions = sessions;
        this.date = date;
    }
}