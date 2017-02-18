import React from 'react';
import { StyledInput, StyledSwitch } from './style';

const Switcher = ({ name, checked, onChange }) => (
  <label>
    <StyledInput
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange} />
    <StyledSwitch />
  </label>
);

Switcher.propTypes = {
  checked: React.PropTypes.bool.isRequired,
  name: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
};

export default Switcher;
