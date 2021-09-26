import { authEnum } from "./redux-utils/authEnum";
import { combinedReducers } from "../redux/reducers";

export type userPayload = { user: any };
export type loginDispatchType = authEnum.LOGIN_SUCCESS | authEnum.LOGIN_FAIL | authEnum.SET_MESSAGE;
export type registerDispatchType = authEnum.REGISTER_SUCCESS | authEnum.SET_MESSAGE | authEnum.REGISTER_FAIL;

export type State = ReturnType<typeof combinedReducers>;