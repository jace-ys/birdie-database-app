import {
    FETCH_COLUMN_NAMES,
    FETCH_COLUMN_NAMES_SUCCESS,
    FETCH_COLUMN_NAMES_FAILURE
} from '../actionTypes';

const initialState = {
  columnNames: [],
  isLoading: false,
  error: null
};

export const columnNames = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLUMN_NAMES:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_COLUMN_NAMES_SUCCESS:
      return {
        columnNames: [...action.payload],
        isLoading: false,
        error: null
      };
    case FETCH_COLUMN_NAMES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
