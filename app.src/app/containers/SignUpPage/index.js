/*
 *
 * SignUpPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SignUpForm from './SignUpForm';
import { signUp } from './actions';
import makeSelectSignUpPage from './selectors';

export class SignUpPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <SignUpForm onSubmit={this.props.onSubmitForm} />
      </div>
    );
  }
}

SignUpPage.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SignUpPage: makeSelectSignUpPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (values) => dispatch(signUp(values)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
