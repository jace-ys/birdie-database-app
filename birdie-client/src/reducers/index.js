import { combineReducers } from 'redux';
import { columnNames } from './columnNames';
import { columnData } from './columnData';

export const rootReducer = combineReducers({
  columnNames,
  columnData
});
