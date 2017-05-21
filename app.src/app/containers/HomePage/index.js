/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import AWS from 'aws-sdk';
import apigClientFactory from 'aws-api-gateway-client';
import messages from './messages';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  // TODO: temp
  async componentWillMount() {
    try {
      const apigClient = apigClientFactory.newClient({
        accessKey: AWS.config.credentials.accessKeyId,
        secretKey: AWS.config.credentials.secretAccessKey,
        sessionToken: AWS.config.credentials.sessionToken,
        region: AWS.config.region,
        invokeUrl: 'https://mvye08207h.execute-api.ap-northeast-2.amazonaws.com/dev',
      });
      const result = await apigClient.invokeApi({}, '/hello', 'get');
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <div>
          <Link to="/signin">
            <FormattedMessage {...messages.signin} />
          </Link>
        </div>
        <div>
          <Link to="/signup">
            <FormattedMessage {...messages.signup} />
          </Link>
        </div>
      </div>
    );
  }
}
