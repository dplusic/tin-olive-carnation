/*
 *
 * SignUpConfirmPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SignUpConfirmForm from './SignUpConfirmForm';
import { signUpConfirm } from './actions';
import { makeSelectError } from './selectors';

export class SignUpConfirmPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { error } = this.props;
    return (
      <div>
        <SignUpConfirmForm onSubmit={this.props.onSubmitForm} />
        <p>
          {error && error.message}
        </p>
      </div>
    );
  }
}

SignUpConfirmPage.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  error: React.PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (values) => dispatch(signUpConfirm(values)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpConfirmPage);
