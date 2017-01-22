import React from 'react';

const InputField = ({ name, labelText, value, onBlur }) => (
  <label>
    {labelText + ' '} 
    <input
    type="text"
    name={name}
    defaultValue={value}
    onBlur={onBlur} />
  </label>
);

export default InputField;
