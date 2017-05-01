/*
 *
 * SignUpPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SignUpForm from './SignUpForm';
import makeSelectSignUpPage from './selectors';

export class SignUpPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <SignUpForm onSubmit={() => {}} />
      </div>
    );
  }
}

SignUpPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SignUpPage: makeSelectSignUpPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
