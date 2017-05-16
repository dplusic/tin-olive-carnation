import { take, takeLatest, cancel, put, call } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { LOCATION_CHANGE } from 'react-router-redux';
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { SIGN_IN } from './constants';
import { signInError } from './actions';

export function* signIn({ values }) {
  const email = values.get('email');
  const password = values.get('password');

  const userPool = new CognitoUserPool({
    UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
    ClientId: process.env.AWS_COGNITO_USER_POOL_CLIENT_ID,
  });
  const cognitoUser = new CognitoUser({
    Username: email,
    Pool: userPool,
  });
  const authenticationDetail = new AuthenticationDetails({
    Username: email,
    Password: password,
  });

  try {
    yield call(authenticateUser, cognitoUser, authenticationDetail);
    yield call([browserHistory, browserHistory.push], '/');
  } catch (e) {
    yield put(signInError(e));
  }
}

function authenticateUser(cognitoUser, authenticationDetail) {
  return new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(authenticationDetail, {
      onSuccess: (result) => {
        resolve(result);
      },
      onFailure: (error) => {
        reject(error);
      },
    });
  });
}

// Individual exports for testing
export function* defaultSaga() {
  const watcher = yield takeLatest(SIGN_IN, signIn);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
