import {
    FETCH_COLUMN_DATA,
    FETCH_COLUMN_DATA_SUCCESS,
    FETCH_COLUMN_DATA_FAILURE
} from '../actionTypes';

const initialState = {
  columnTitle: 'Title',
  columnData: [],
  isLoading: false,
  error: null
};

export const columnData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLUMN_DATA:
      return {
        ...state,
        columnData: [],
        isLoading: true,
        error: null
      };
    case FETCH_COLUMN_DATA_SUCCESS:
      return {
        columnTitle: action.payload.title,
        columnData: [...action.payload.summary],
        isLoading: false,
        error: null
      };
    case FETCH_COLUMN_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
