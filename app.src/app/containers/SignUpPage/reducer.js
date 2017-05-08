/*
 *
 * SignUpPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGN_UP,
  SIGN_UP_ERROR,
} from './constants';

const initialState = fromJS({});

function signUpPageReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return state
        .set('error', null);
    case SIGN_UP_ERROR:
      return state
        .set('error', action.error);
    default:
      return state;
  }
}

export default signUpPageReducer;
