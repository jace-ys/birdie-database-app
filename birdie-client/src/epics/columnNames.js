import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { switchMap, map, catchError } from 'rxjs/operators';

import { FETCH_COLUMN_NAMES } from '../actionTypes';
import { fetchColumnNamesSuccess, fetchColumnNamesFailure } from '../actions';

export const fetchColumnNamesEpic = action$ => {
  return action$.pipe(
    ofType(FETCH_COLUMN_NAMES),
    switchMap(() => {
      return ajax('/api/v1/columns').pipe(
        map(data => data.response)
      )
    }),
    map(result => fetchColumnNamesSuccess(result.columnNames)),
    catchError(error => of(fetchColumnNamesFailure(error.message)))
  )
};
