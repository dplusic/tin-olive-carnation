/*
 *
 * SignUpConfirmPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGN_UP_CONFIRM,
} from './constants';

const initialState = fromJS({});

function signUpConfirmPageReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_CONFIRM:
      return state;
    default:
      return state;
  }
}

export default signUpConfirmPageReducer;
