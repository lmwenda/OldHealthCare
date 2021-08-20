import { TSession } from "../exports/exportedInterfaces";

export class SessionClass implements TSession{
    public sessionName?: string;
    public sessionDescription?: string;
    public timeTaken?: string;
    public typeOfWorkout?: string;
    public sets?: number | undefined;
    public reps?: number | undefined;
    public isPublic?: boolean;
    public date?: Date;

    constructor(
        sessionName?: string, 
        sessionDescription?: string, 
        timeTaken?: string, 
        typeOfWorkout?: string,
        sets?: number | undefined, 
        reps?: number | undefined, 
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
}