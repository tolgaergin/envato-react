import React from 'react';

const CheckboxButton = ({ name, labelText, checked, onChange }) => (
  <label>
    <input type="checkbox" name={name}
    checked={checked}
    onChange={onChange} />
    {labelText}
  </label>
);

CheckboxButton.propTypes = {
  checked: React.PropTypes.bool.isRequired,
  labelText: React.PropTypes.string,
  name: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
};

export default CheckboxButton;
