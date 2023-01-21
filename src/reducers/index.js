import changeTheNumber from "./upDown";
import changeBackground from "./changeBg";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumber,
  changeBackground,
});

export default rootReducer;
