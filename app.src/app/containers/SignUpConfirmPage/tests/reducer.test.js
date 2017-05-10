
import { fromJS } from 'immutable';
import signUpConfirmPageReducer from '../reducer';

describe('signUpConfirmPageReducer', () => {
  it('returns the initial state', () => {
    expect(signUpConfirmPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
