import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <div>
    <ul>
      <li><Link to='/' activeClassName="selected">Summary</Link></li>
      <li><Link to='/sales' activeClassName="selected">Sales</Link></li>
      <li><Link to='/templates' activeClassName="selected">Templates</Link></li>
      <li><Link to='/settings' activeClassName="selected">Settings</Link></li>
    </ul>
  </div>
);

export default Header;
