import { authTypes } from './auth.types';

export const signInFailure = (error) => ({
  type: authTypes.SIGN_IN_FAILURE,
  payload: error,
});
export const signInSuccess = ({ accessToken, refreshToken }) => ({
  type: authTypes.SIGN_IN_SUCCESS,
  accessToken: accessToken,
  refreshToken: refreshToken,
});

export const emailSignInStart = (loginRequest) => ({
  type: authTypes.SIGN_IN_START,
  payload: loginRequest,
});

export const signOutFailure = (error) => ({
  type: authTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signOutSuccess = () => ({
  type: authTypes.SIGN_OUT_SUCCESS,
});

export const signOutStart = () => ({
  type: authTypes.SIGN_OUT_START,
});

export const fetchUser = () => ({ type: authTypes.FETCH_USER });

export const fetchUserFulfilled = (currentUser) => ({ type: authTypes.FETCH_USER_FULFILLED, payload: currentUser });
