import { combineReducers } from 'redux';
import userReducer from './userReducer';
// import editUserReducer from './editUserReducer'; // Import your editUserReducer

const rootReducer = combineReducers({
  userState: userReducer,
  // editUserState: editUserReducer, // Add editUserState to your rootReducer
});

export default rootReducer;
