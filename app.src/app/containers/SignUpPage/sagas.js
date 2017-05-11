import { take, takeLatest, cancel, cps, put, call } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { LOCATION_CHANGE } from 'react-router-redux';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { SIGN_UP } from './constants';
import { signUpError } from './actions';

export function* signUp({ values }) {
  const email = values.get('email');
  const password = values.get('password');

  const userPool = new CognitoUserPool({
    UserPoolId: 'ap-northeast-2_W6d2OguRO',
    ClientId: '6idn80s1spobefoddgrq6dfrt',
  });
  const attributeList = [
    new CognitoUserAttribute({ Name: 'email', Value: email }),
  ];

  try {
    yield cps([userPool, userPool.signUp], email, password, attributeList, null);
    yield call([browserHistory, browserHistory.push], '/signupconfirm');
  } catch (e) {
    yield put(signUpError(e));
  }
}

// Individual exports for testing
export function* defaultSaga() {
  const watcher = yield takeLatest(SIGN_UP, signUp);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
