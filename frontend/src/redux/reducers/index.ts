import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";

export const combinedReducers = combineReducers({
    userAuth: authReducer,
    authMessage: messageReducer
});