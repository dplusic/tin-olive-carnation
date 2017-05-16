import { take, takeLatest, cancel, put, call, cps } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { LOCATION_CHANGE } from 'react-router-redux';
import AWS from 'aws-sdk';
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
    const authenticationResult = yield call(authenticateUser, cognitoUser, authenticationDetail);
    yield cps(refreshCredential, userPool, authenticationResult);
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

function refreshCredential(userPool, authenticationResult, callback) {
  const userPoolProviderName = `${userPool.client.endpoint.host}/${userPool.userPoolId}`;

  AWS.config.region = userPool.client.config.region;

  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
  });
  AWS.config.credentials.params.Logins = {};
  AWS.config.credentials.params.Logins[userPoolProviderName] = authenticationResult.getIdToken().getJwtToken();

  AWS.config.credentials.refresh(callback);
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
