import React from 'react';

const InputField = ({ labelText, name, onBlur, value }) => (
  <label>
    {labelText + ' '}
    <input
    type="text"
    name={name}
    defaultValue={value}
    onBlur={onBlur} />
  </label>
);

InputField.propTypes = {
  labelText: React.PropTypes.string,
  name: React.PropTypes.string,
  onBlur: React.PropTypes.func,
  value: React.PropTypes.string,
};

export default InputField;
