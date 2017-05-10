/**
*
* FormField
*
*/

import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import Input from './Input';


class FormField extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { input, label, type, meta: { touched, error } } = this.props;
    return (
      <div>
        <label htmlFor={input.name}>{label}</label>
        <div>
          <Input id={input.name} {...input} type={type} />
          {touched && error &&
            <span>
              <FormattedMessage {...error} />
            </span>}
        </div>
      </div>
    );
  }
}

FormField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};

export default FormField;
