import { UserClass } from "../../api/Users/Users";

const getUser = (id: string) => {
    return new UserClass().getUser(id);
}

const getUserSessions = (id: string) => {
    return new UserClass().getAllUserSessions(id);
}

const getAllUsers = () => {
    return new UserClass().getAllUsers();
}

export {
    getUser,
    getAllUsers,
    getUserSessions
}