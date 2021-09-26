import { authEnum } from "../../utils/redux-utils/authEnum";
import { UserClass } from "../../api/Users/Users";
import { Dispatch } from "redux";
import { loginDispatchType, registerDispatchType } from "../../utils/types";

export let registerResponse: any;

const register = (username: string, email: string, password: string) => {
     
    return function (dispatch: Dispatch<{ type: registerDispatchType, payload?: {}|string }>){
        return new UserClass(username, email, password).registerUser(dispatch);
    }
};

const login = (username: string, email: string, password: string) => {

    return function (dispatch: Dispatch<{ type: loginDispatchType, payload?: { user: any }}>){
        return new UserClass(username, email, password).loginUser(dispatch);
    }
}

const logout = () => (dispatch: Dispatch<{ type: authEnum.LOGOUT }>) => {
    localStorage.removeItem("token");

    dispatch({
        type: authEnum.LOGOUT,
    });

};

export { logout, login, register };