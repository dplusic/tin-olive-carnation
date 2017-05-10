import { createSelector } from 'reselect';

/**
 * Direct selector to the signUpConfirmPage state domain
 */
const selectSignUpConfirmPageDomain = () => (state) => state.get('signUpConfirmPage');

/**
 * Other specific selectors
 */


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
};
