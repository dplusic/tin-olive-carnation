
import {
  signIn,
} from '../actions';
import {
  SIGN_IN,
} from '../constants';

describe('SignInPage actions', () => {
  describe('Sign In Action', () => {
    it('has a type of SIGN_IN', () => {
      const expected = {
        type: SIGN_IN,
      };
      expect(signIn()).toEqual(expected);
    });
  });
});
