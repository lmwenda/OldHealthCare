/* eslint-disable import/no-anonymous-default-export */

import { authEnum } from "../../utils/redux-utils/authEnum";
import { Action } from "../../utils/redux-utils/msgActionType";

const initialState = { type: "", message: "" };

export default function (state = initialState, action: Action) {
    const { type, payload } = action;

    switch (type) {
        case authEnum.SET_MESSAGE:
            return { ...state, type: authEnum.SET_MESSAGE, message: payload };

        default:
            return state;
    }
}