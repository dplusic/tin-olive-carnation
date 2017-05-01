
import {
  signUp,
} from '../actions';
import {
  SIGN_UP,
} from '../constants';

describe('SignUpPage actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: SIGN_UP,
      };
      expect(signUp()).toEqual(expected);
    });
  });
});
