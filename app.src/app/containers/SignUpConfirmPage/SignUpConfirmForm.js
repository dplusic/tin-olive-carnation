import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { FormattedMessage } from 'react-intl';
import FormField from '../../components/FormField';
import messages from './messages';

class SignUpConfirmForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="username"
          type="text"
          component={FormField}
          label={<FormattedMessage {...messages.username} />}
        />
        <Field
          name="confirmCode"
          type="text"
          component={FormField}
          label={<FormattedMessage {...messages.confirmCode} />}
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

SignUpConfirmForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
};

export default reduxForm({
  form: 'app/SignUpConfirmPage/SignUpConfirmForm',
})(SignUpConfirmForm);
