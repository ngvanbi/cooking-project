import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './userSlice';

const rootReducer = combineReducers({
  usersInfo: usersReducer,
});

export default rootReducer;
