import { combineReducers } from 'redux';

import user from "./reducers/user";
import broker from "./reducers/broker";

export default combineReducers({
  user,
  broker
})
