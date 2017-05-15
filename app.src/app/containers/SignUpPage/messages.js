/*
 * SignUpPage Messages
 *
 * This contains all the text for the SignUpPage component.
 */
import { defineMessages } from 'react-intl';
import appMessages from '../App/messages';

export default defineMessages({
  email: appMessages.Sign.email,
  password: {
    id: 'app.containers.SignUpPage.password',
    defaultMessage: 'Password',
  },
  passwordCheck: {
    id: 'app.containers.SignUpPage.passwordCheck',
    defaultMessage: 'Password Check',
  },
  submit: {
    id: 'app.containers.SignUpPage.submit',
    defaultMessage: 'Sign Up',
  },
  error: {
    required: {
      id: 'app.containers.SignUpPage.error.required',
      defaultMessage: 'Required',
    },
    email: {
      invalid: {
        id: 'app.containers.SignUpPage.error.email.invalid',
        defaultMessage: 'Invalid email address',
      },
    },
    password: {
      short: {
        id: 'app.containers.SignUpPage.error.password.short',
        defaultMessage: 'Must be 8 characters or more',
      },
      noNumber: {
        id: 'app.containers.SignUpPage.error.password.noNumber',
        defaultMessage: 'Must contain at least 1 number',
      },
      noSpecial: {
        id: 'app.containers.SignUpPage.error.password.noSpecial',
        defaultMessage: 'Must contain at least 1 special character',
      },
      noUppercase: {
        id: 'app.containers.SignUpPage.error.password.noUppercase',
        defaultMessage: 'Must contain at least 1 uppercase letter',
      },
      noLowercase: {
        id: 'app.containers.SignUpPage.error.password.noLowercase',
        defaultMessage: 'Must contain at least 1 lowercase letter',
      },
      checkFailed: {
        id: 'app.containers.SignUpPage.error.password.checkFailed',
        defaultMessage: 'Must be same as password',
      },
    },
  },
});
