import { authEnum } from "../../utils/redux-utils/authEnum";
import { UserClass } from "../../api/Users/Users";
import { Dispatch } from "redux";
import { loginDispatchType, registerDispatchType } from "../../utils/types";

export let registerResponse: any;

const register = (username: string, email: string, password: string, dispatch: Dispatch<{ 
    type: registerDispatchType, payload?: {}|string  }>): Promise<any> => {
    return new UserClass(username, email, password).registerUser(dispatch);
};

const login = (email: string, password: string, dispatch: Dispatch<{ 
    type: loginDispatchType, payload?: { user: any } | string }>) => {
        return new UserClass("", email, password).loginUser(dispatch);
}

const logout = () => (dispatch: Dispatch<{ type: authEnum.LOGOUT }>) => {
    localStorage.removeItem("token");

    dispatch({
        type: authEnum.LOGOUT,
    });

};

export { logout, login, register };