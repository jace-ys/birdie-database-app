import { columnData } from './columnData';
import { FETCH_COLUMN_DATA, FETCH_COLUMN_DATA_SUCCESS, FETCH_COLUMN_DATA_FAILURE } from '../actionTypes';

const initialState = {
  columnTitle: 'Title',
  columnData: [],
  isLoading: false,
  error: null
};

describe('Test reducer that handles state of column data', () => {
  test('Should return initial state', () => {
    expect(columnData(undefined, {})).toEqual(initialState);
  });

  test('Should update state if fetch successful', () => {
    const actionOne = {
      type: FETCH_COLUMN_DATA_SUCCESS,
      payload: {
        title: 'Test Column 1',
        summary: [ { type: 'Test 1', count: 1, averageAge: 1.0 } ]
      }
    }

    const actionTwo = {
      type: FETCH_COLUMN_DATA_SUCCESS,
      payload: {
        title: 'Test Column 2',
        summary: [ { type: 'Test 2', count: 2, averageAge: 2.0 } ]
      }
    }

    const expectedStateOne = {
      ...initialState,
      columnTitle: 'Test Column 1',
      columnData: [ {type: 'Test 1', count: 1, averageAge: 1.0} ]
    };

    const expectedStateTwo = {
      ...initialState,
      columnTitle: 'Test Column 2',
      columnData: [ {type: 'Test 2', count: 2, averageAge: 2.0} ]
    };

    expect(columnData(undefined, actionOne)).toEqual(expectedStateOne);
    expect(columnData(expectedStateOne, actionTwo)).toEqual(expectedStateTwo);
  });

  test('Should return error if fetch unsuccessful', () => {
    const errorAction = {
      type: FETCH_COLUMN_DATA_FAILURE,
      payload: 'Test failed'
    }

    const expectedErrorState = {
      ...initialState,
      isLoading: false,
      error: 'Test failed'
    }

    expect(columnData(undefined, errorAction)).toEqual(expectedErrorState);
  });
});
