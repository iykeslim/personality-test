import { combineReducers } from "redux";

import versionTestReducer from './versionTestReducer'

const rootReducer = combineReducers({
  versionTest: versionTestReducer
});

export default rootReducer;
