/* eslint-disable import/no-anonymous-default-export */

import { authEnum } from "../../utils/redux-utils/authEnum";
import { Action } from "../../utils/redux-utils/authActionsType";

const token = localStorage.getItem("token");

const initialState = token
    ? { isLoggedIn: true, user: { } }
    : { isLoggedIn: false, user: null };

export default function (state = initialState, action: Action) {
    const { type, payload } = action;

    switch (type) {
        case authEnum.REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };

        case authEnum.REQUESTING_USER:
            return{
                ...state,
                user: action.payload.user
            }

        case authEnum.REQUESTING_USER_FAIL:
            return {
                ...state,
                user: null
            }

        case authEnum.REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case authEnum.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
            };
        case authEnum.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case authEnum.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
}