import { takeLatest, all, put, call } from 'redux-saga/effects';
import { login } from 'src/utils/api.utils';
import { authTypes } from './auth.types';
import { signInFailure, signInSuccess, signOutSuccess, signOutFailure, fetchUser } from './auth.actions';

export function* onEmailSignInStart() {
  yield takeLatest(authTypes.SIGN_IN_START, signInWithEmail);
}

export function* onSignOutStart() {
  yield takeLatest(authTypes.SIGN_OUT_START, signOutUser);
}

function* signInWithEmail({ payload: loginRequest }) {
  try {
    const tokens = yield call(login, loginRequest);
    yield put(signInSuccess(tokens));
    yield put(fetchUser());
    yield call(() => ({ type: 'FETCH_CURRENT_USER' }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signOutUser() {
  try {
    //yield signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

// export function* onSignUpStart() {
//   yield takeLatest(authTypes.SIGN_UP_START, signUpUser);
// }

// function* signUpUser({ payload: { displayName, email, password } }) {
//   try {
//     const { user } = yield call(createUserWithEmailAndPassword, auth, email, password);
//     yield put(signUpSuccess({ user, additionalData: { displayName } }));
//   } catch (error) {
//     yield put(signUpFailure(error));
//   }
// }

// function* signUpSuccessHandler({ payload: { user, additionalData } }) {
//   yield getSnapshotFromUserAuth(user, additionalData);
// }

// function* onSignUpSuccess() {
//   yield takeLatest(authTypes.SIGN_UP_SUCCESS, signUpSuccessHandler);
// }

export function* authSagas() {
  yield all([
    call(onEmailSignInStart),
    // call(onSignUpStart),
    // call(onSignUpSuccess),
    // call(onSignOutStart),
  ]);
}
