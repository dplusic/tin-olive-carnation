/*
 * SignUpConfirmPage Messages
 *
 * This contains all the text for the SignUpConfirmPage component.
 */
import { defineMessages } from 'react-intl';
import appMessages from '../App/messages';

export default defineMessages({
  email: appMessages.Sign.email,
  confirmCode: {
    id: 'app.containers.SignUpConfirmPage.confirmCode',
    defaultMessage: 'Confirm Code',
  },
  submit: {
    id: 'app.containers.SignUpConfirmPage.submit',
    defaultMessage: 'Confirm',
  },
});
