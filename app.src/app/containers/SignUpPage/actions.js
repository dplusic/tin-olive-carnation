/*
 *
 * SignUpPage actions
 *
 */

import {
  SIGN_UP,
  SIGN_UP_ERROR,
} from './constants';

export function signUp(values) {
  return {
    type: SIGN_UP,
    values,
  };
}

export function signUpError(error) {
  return {
    type: SIGN_UP_ERROR,
    error,
  };
}
