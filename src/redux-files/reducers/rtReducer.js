import { combineReducers } from "redux";

import versionTestReducer from "./versionTestReducer.js";

const rootReducer = combineReducers({
    versionTest: versionTestReducer
});

export default rootReducer;