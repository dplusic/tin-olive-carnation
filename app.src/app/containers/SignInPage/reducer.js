/*
 *
 * SignInPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGN_IN,
} from './constants';

const initialState = fromJS({});

function signInPageReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return state;
    default:
      return state;
  }
}

export default signInPageReducer;
