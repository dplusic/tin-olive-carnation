/*
 *
 * SignUpPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGN_UP,
} from './constants';

const initialState = fromJS({});

function signUpPageReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return state;
    default:
      return state;
  }
}

export default signUpPageReducer;
