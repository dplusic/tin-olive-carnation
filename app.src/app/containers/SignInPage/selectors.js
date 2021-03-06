import { createSelector } from 'reselect';

/**
 * Direct selector to the signInPage state domain
 */
const selectSignInPageDomain = () => (state) => state.get('signInPage');

/**
 * Other specific selectors
 */

const makeSelectError = () => createSelector(
  selectSignInPageDomain(),
  (signInState) => signInState.get('error')
);


/**
 * Default selector used by SignInPage
 */

const makeSelectSignInPage = () => createSelector(
  selectSignInPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSignInPage;
export {
  selectSignInPageDomain,
  makeSelectError,
};
