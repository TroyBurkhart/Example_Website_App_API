import { combineReducers } from '@reduxjs/toolkit';
import NotesReducer from './notes-reducer';

const rootReducer = combineReducers({
  notes: NotesReducer,
});

export default rootReducer;
