/*
 *
 * SignUpConfirmPage actions
 *
 */

import {
  SIGN_UP_CONFIRM,
  SIGN_UP_CONFIRM_ERROR,
} from './constants';

export function signUpConfirm(values) {
  return {
    type: SIGN_UP_CONFIRM,
    values,
  };
}

export function signUpConfirmError(error) {
  return {
    type: SIGN_UP_CONFIRM_ERROR,
    error,
  };
}
