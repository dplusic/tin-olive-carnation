import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { FormattedMessage } from 'react-intl';
import SignUpFormField from './SignUpFormField';
import validate from './validate';
import messages from './messages';

class SignUpForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          type="email"
          component={SignUpFormField}
          label={<FormattedMessage {...messages.email} />}
        />
        <Field
          name="password"
          type="password"
          component={SignUpFormField}
          label={<FormattedMessage {...messages.password} />}
        />
        <Field
          name="passwordCheck"
          type="password"
          component={SignUpFormField}
          label={<FormattedMessage {...messages.passwordCheck} />}
        />
        <button
          type="submit"
          disabled={submitting}
        >
          <FormattedMessage {...messages.submit} />
        </button>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
};

export default reduxForm({
  form: 'app/SignUpPage/SignUpForm',
  validate,
})(SignUpForm);
