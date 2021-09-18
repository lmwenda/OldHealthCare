import logger from "redux-logger";
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import { combinedReducers } from "../reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware, logger))

const store = createStore(combinedReducers, composedEnhancer)

export {
    store
}