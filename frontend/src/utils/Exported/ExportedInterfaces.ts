export interface ISessions{
    sessionName?: string,
    sessionDescription?: string,
    timeTaken?: string,
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