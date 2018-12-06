import { combineEpics } from 'redux-observable';
import { fetchColumnNamesEpic } from './columnNames';
import { fetchColumnDataEpic } from './columnData';

export const rootEpic = combineEpics(
  fetchColumnNamesEpic,
  fetchColumnDataEpic
);
