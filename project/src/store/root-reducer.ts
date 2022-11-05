import { combineReducers } from '@reduxjs/toolkit';
import { filmData } from './film-data/film-data';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: filmData.reducer,
  [NameSpace.User]: userProcess.reducer
});
