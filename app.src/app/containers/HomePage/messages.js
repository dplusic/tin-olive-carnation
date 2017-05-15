/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';
import appMessages from '../App/messages';

export default defineMessages({
  header: {
    id: 'app.components.HomePage.header',
    defaultMessage: 'Tin Olive Carnation',
  },
  signup: appMessages.Sign.signup,
  signin: appMessages.Sign.signin,
});
