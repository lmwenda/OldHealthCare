import { authEnum } from "./authEnum";

interface Register_Success_Action{
    type: authEnum.REGISTER_SUCCESS,
    payload: { user: {} }
}

interface Register_Fail_Action{
    type: authEnum.REGISTER_FAIL,
    payload: { user: {} }
}

interface Request_User_Success_Action{
    type: authEnum.REQUESTING_USER,
    payload: { user: {} } 
}

interface Request_User_Fail_Action{
    type: authEnum.REQUESTING_USER_FAIL,
    payload: { user: null }
}

interface Login_Success_Action{
    type: authEnum.LOGIN_SUCCESS,
    payload: { user: {} }
}

interface Login_Fail_Action{
    type: authEnum.LOGIN_FAIL,
    payload: { user: {} }
}

interface Logout_Action{
    type: authEnum.LOGOUT,
    payload: { user: {} }
}

export type Action = Logout_Action | Register_Success_Action | Register_Fail_Action | 
Login_Fail_Action | Login_Success_Action | Request_User_Success_Action | Request_User_Fail_Action;