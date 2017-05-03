import { take, takeLatest, cancel, cps } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { SIGN_UP } from './constants';

export function* signUp({ values }) {
  const username = values.get('username');
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
    const result = yield cps([userPool, userPool.signUp], username, password, attributeList, null);
    console.log(result);
  } catch (e) {
    console.log(e);
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
