import { authTypes } from './auth.types';

const INITIAL_STATE = {
  currentUser: null,
  accessToken: null,
  refreshToken: null,
  error: null,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authTypes.SIGN_OUT:
      return {
        ...state,
        currentUser: null,
      };
    case authTypes.SIGN_IN_SUCCESS:
      console.log(action);
      return {
        ...state,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };
    case authTypes.FETCH_USER_REJECTED:
    case authTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case authTypes.FETCH_USER_FULFILLED:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
