import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { fetchUserFulfilled } from './auth.actions';
import { authTypes } from './auth.types';

export const fetchUserEpic = (action$, state$) =>
  action$.pipe(
    ofType(authTypes.FETCH_USER),
    mergeMap(
      () =>
        ajax({
          url: 'http://localhost:5000/users/?me=true',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + state$.value.auth.accessToken,
          },
          method: 'GET',
        }).pipe(
          map((response) => fetchUserFulfilled(response.response)),
          catchError((error) =>
            of({
              type: authTypes.FETCH_USER_REJECTED,
              payload: error.xhr.response,
              error: true,
            })
          )
        )
      //   action$.pipe(
      //   ofType(FETCH_USER_CANCELLED),
      //   map(() => incrementCounter()),
      //   take(1)
      // )
    )
  );
