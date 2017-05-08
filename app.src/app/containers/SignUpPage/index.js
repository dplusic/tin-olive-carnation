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
import { makeSelectError } from './selectors';

export class SignUpPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { error } = this.props;
    return (
      <div>
        <SignUpForm onSubmit={this.props.onSubmitForm} />
        <p>
          {error && error.message}
        </p>
      </div>
    );
  }
}

SignUpPage.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  error: React.PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (values) => dispatch(signUp(values)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
