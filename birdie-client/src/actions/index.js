import {
  FETCH_COLUMN_NAMES, FETCH_COLUMN_NAMES_SUCCESS, FETCH_COLUMN_NAMES_FAILURE,
  FETCH_COLUMN_DATA, FETCH_COLUMN_DATA_SUCCESS, FETCH_COLUMN_DATA_FAILURE
} from '../actionTypes';

export const fetchColumnNames = () => ({
  type: FETCH_COLUMN_NAMES
});

export const fetchColumnNamesSuccess = (columnNames) => ({
  type: FETCH_COLUMN_NAMES_SUCCESS,
  payload: columnNames
});

export const fetchColumnNamesFailure = (errorMessage) => ({
  type: FETCH_COLUMN_NAMES_FAILURE,
  payload: errorMessage
});

export const fetchColumnData = (columnName) => ({
  type: FETCH_COLUMN_DATA,
  payload: columnName
});

export const fetchColumnDataSuccess = (columnData) => ({
  type: FETCH_COLUMN_DATA_SUCCESS,
  payload: columnData
});

export const fetchColumnDataFailure = (errorMessage) => ({
  type: FETCH_COLUMN_DATA_FAILURE,
  payload: errorMessage
});
