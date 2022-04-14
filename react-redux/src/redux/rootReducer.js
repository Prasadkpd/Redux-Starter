import {combineReducers} from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCremReducer from "./iceCream/iceCremReducer";

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCremReducer
});

export default rootReducer;
