/*
 *
 * SignInPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SignInForm from './SignInForm';
import { signIn } from './actions';
import { makeSelectError } from './selectors';

export class SignInPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { error } = this.props;
    return (
      <div>
        <SignInForm onSubmit={this.props.onSubmitForm} />
        <p>
          {error && error.message}
        </p>
      </div>
    );
  }
}

SignInPage.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  error: React.PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (values) => dispatch(signIn(values)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
