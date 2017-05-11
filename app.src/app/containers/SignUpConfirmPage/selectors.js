import { createSelector } from 'reselect';

/**
 * Direct selector to the signUpConfirmPage state domain
 */
const selectSignUpConfirmPageDomain = () => (state) => state.get('signUpConfirmPage');

/**
 * Other specific selectors
 */

const makeSelectError = () => createSelector(
 selectSignUpConfirmPageDomain(),
 (signUpConfirmState) => signUpConfirmState.get('error')
);


/**
 * Default selector used by SignUpConfirmPage
 */

const makeSelectSignUpConfirmPage = () => createSelector(
  selectSignUpConfirmPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSignUpConfirmPage;
export {
  selectSignUpConfirmPageDomain,
  makeSelectError,
};
