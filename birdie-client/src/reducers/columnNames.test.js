import { columnNames } from './columnNames';
import { FETCH_COLUMN_NAMES, FETCH_COLUMN_NAMES_SUCCESS, FETCH_COLUMN_NAMES_FAILURE } from '../actionTypes';

const initialState = {
  columnNames: [],
  isLoading: false,
  error: null
};

describe('Test reducer that handles state of column names', () => {
  test('Should return initial state', () => {
    expect(columnNames(undefined, {})).toEqual(initialState);
  });

  test('Should update state if fetch successful', () => {
    const actionOne = {
      type: FETCH_COLUMN_NAMES_SUCCESS,
      payload: ['Test A', 'Test B', 'Test C']
    }

    const actionTwo = {
      type: FETCH_COLUMN_NAMES_SUCCESS,
      payload: ['Test D', 'Test E', 'Test F']
    }

    const expectedStateOne = {
      ...initialState,
      columnNames: ['Test A', 'Test B', 'Test C']
    };

    const expectedStateTwo = {
      ...initialState,
      columnNames: ['Test D', 'Test E', 'Test F']
    };

    expect(columnNames(undefined, actionOne)).toEqual(expectedStateOne);
    expect(columnNames(expectedStateOne, actionTwo)).toEqual(expectedStateTwo);
  });

  test('Should return error if fetch unsuccessful', () => {
    const errorAction = {
      type: FETCH_COLUMN_NAMES_FAILURE,
      payload: 'Test failed'
    }

    const expectedErrorState = {
      ...initialState,
      error: 'Test failed'
    }

    expect(columnNames(undefined, errorAction)).toEqual(expectedErrorState);
  });
});
