import { take, takeLatest, cancel, cps, put, call } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { LOCATION_CHANGE } from 'react-router-redux';
import { CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';
import { SIGN_UP_CONFIRM } from './constants';
import { signUpConfirmError } from './actions';

export function* signUpConfirm({ values }) {
  const email = values.get('email');
  const confirmCode = values.get('confirmCode');

  const userPool = new CognitoUserPool({
    UserPoolId: 'ap-northeast-2_W6d2OguRO',
    ClientId: '6idn80s1spobefoddgrq6dfrt',
  });
  const cognitoUser = new CognitoUser({
    Username: email,
    Pool: userPool,
  });

  try {
    yield cps([cognitoUser, cognitoUser.confirmRegistration], confirmCode, true);
    // TODO move to signin page
    yield call([browserHistory, browserHistory.push], '/');
  } catch (e) {
    yield put(signUpConfirmError(e));
  }
}

// Individual exports for testing
export function* defaultSaga() {
  const watcher = yield takeLatest(SIGN_UP_CONFIRM, signUpConfirm);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
