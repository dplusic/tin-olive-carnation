
import {
  signUpConfirm,
} from '../actions';
import {
  SIGN_UP_CONFIRM,
} from '../constants';

describe('SignUpConfirmPage actions', () => {
  describe('Sign Up Confirm Action', () => {
    it('has a type of SIGN_UP_CONFIRM', () => {
      const expected = {
        type: SIGN_UP_CONFIRM,
      };
      expect(signUpConfirm()).toEqual(expected);
    });
  });
});
