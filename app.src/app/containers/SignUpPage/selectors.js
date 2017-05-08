import { createSelector } from 'reselect';

/**
 * Direct selector to the signUpPage state domain
 */
const selectSignUpPageDomain = () => (state) => state.get('signUpPage');

/**
 * Other specific selectors
 */

const makeSelectError = () => createSelector(
  selectSignUpPageDomain(),
  (signUpState) => signUpState.get('error')
);


/**
 * Default selector used by SignUpPage
 */

const makeSelectSignUpPage = () => createSelector(
  selectSignUpPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSignUpPage;
export {
  selectSignUpPageDomain,
  makeSelectError,
};
