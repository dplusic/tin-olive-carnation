/*
 *
 * SignUpConfirmPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGN_UP_CONFIRM,
  SIGN_UP_CONFIRM_ERROR,
} from './constants';

const initialState = fromJS({});

function signUpConfirmPageReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_CONFIRM:
      return state
        .set('error', null);
    case SIGN_UP_CONFIRM_ERROR:
      return state
        .set('error', action.error);
    default:
      return state;
  }
}

export default signUpConfirmPageReducer;
