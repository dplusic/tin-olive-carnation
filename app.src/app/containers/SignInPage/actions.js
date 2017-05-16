/*
 *
 * SignInPage actions
 *
 */

import {
  SIGN_IN,
  SIGN_IN_ERROR,
} from './constants';

export function signIn(values) {
  return {
    type: SIGN_IN,
    values,
  };
}

export function signInError(error) {
  return {
    type: SIGN_IN_ERROR,
    error,
  };
}
