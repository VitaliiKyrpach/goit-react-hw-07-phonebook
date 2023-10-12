import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';
import { combineReducers } from '@reduxjs/toolkit';
export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
