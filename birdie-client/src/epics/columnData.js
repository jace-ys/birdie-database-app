import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { switchMap, map, catchError } from 'rxjs/operators';

import { FETCH_COLUMN_DATA } from '../actionTypes';
import { fetchColumnDataSuccess, fetchColumnDataFailure } from '../actions';
import { formatUrlParams } from '../libraries/utils';

export const fetchColumnDataEpic = action$ => {
  return action$.pipe(
    ofType(FETCH_COLUMN_DATA),
    switchMap(action => {
      return ajax(`/api/v1/columns/${formatUrlParams(action.payload)}`).pipe(
        map(data => data.response),
        map(result => fetchColumnDataSuccess(result.columnData))
      )
    }),
    catchError(error => of(fetchColumnDataFailure(error.message)))
  )
};
