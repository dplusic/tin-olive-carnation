/*
 *
 * SignInPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGN_IN,
  SIGN_IN_ERROR,
} from './constants';

const initialState = fromJS({});

function signInPageReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return state
        .set('error', null);
    case SIGN_IN_ERROR:
      return state
        .set('error', action.error);
    default:
      return state;
  }
}

export default signInPageReducer;
