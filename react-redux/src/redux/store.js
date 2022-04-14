import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger/src";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;