import React from 'react';

const CheckboxButton = ({ name, labelText, checked, onChange }) => (
  <label>
    <input type="checkbox" name={name}
    checked={checked}
    onChange={onChange} />
    {labelText}
  </label>
);

export default CheckboxButton;
