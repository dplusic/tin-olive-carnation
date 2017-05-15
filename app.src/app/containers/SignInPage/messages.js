/*
 * SignInPage Messages
 *
 * This contains all the text for the SignInPage component.
 */
import { defineMessages } from 'react-intl';
import appMessages from '../App/messages';

export default defineMessages({
  email: appMessages.Sign.email,
  password: appMessages.Sign.password,
  submit: {
    id: 'app.containers.SignInPage.submit',
    defaultMessage: 'Sign In',
  },
});
