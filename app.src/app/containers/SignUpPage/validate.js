import messages from './messages';

export default (values) => {
  const errors = {};

  const username = values.get('username');
  if (!username) {
    errors.username = messages.error.required;
  } else if (!/^[A-Z0-9._-]+$/i.test(username)) {
    errors.username = messages.error.username.invalidCharacter;
  } else if (username.length < 6 || username.length > 31) {
    errors.username = messages.error.username.invalidLength;
  }

  const email = values.get('email');
  if (!email) {
    errors.email = messages.error.required;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = messages.error.email.invalid;
  }

  const password = values.get('password');
  if (!password) {
    errors.password = messages.error.required;
  } else if (password.length < 8) {
    errors.password = messages.error.password.short;
  } else if (!/(?=.*\d)/.test(password)) {
    errors.password = messages.error.password.noNumber;
  } else if (!/(?=.*[ ./<>?;:"'`!@#$%^&*()[\]{}_+=|\\-])/.test(password)) {
    errors.password = messages.error.password.noSpecial;
  } else if (!/(?=.*[A-Z])/.test(password)) {
    errors.password = messages.error.password.noUppercase;
  } else if (!/(?=.*[a-z])/.test(password)) {
    errors.password = messages.error.password.noLowercase;
  }

  const passwordCheck = values.get('passwordCheck');
  if (!passwordCheck) {
    errors.passwordCheck = messages.error.required;
  } else if (passwordCheck !== password) {
    errors.passwordCheck = messages.error.password.checkFailed;
  }
  return errors;
};
