import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { FormattedMessage } from 'react-intl';
import FormField from '../../components/FormField';
import messages from './messages';

class SignInForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          type="email"
          component={FormField}
          label={<FormattedMessage {...messages.email} />}
        />
        <Field
          name="password"
          type="password"
          component={FormField}
          label={<FormattedMessage {...messages.password} />}
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

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
};

export default reduxForm({
  form: 'app/SignInPage/SignInForm',
})(SignInForm);
