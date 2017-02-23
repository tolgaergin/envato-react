import React from 'react';

import { Wrapper, UList, LItem, AIndex, A } from './style';

import IconSummary from './IconSummary';
import IconSales from './IconSales';
import IconTemplates from './IconTemplates';
import IconSettings from './IconSettings';

const Header = () => (
  <Wrapper>
    <UList>
      <LItem>
        <AIndex to='/' activeClassName="selected">
          <IconSummary />
          Summary
        </AIndex>
      </LItem>
      <LItem>
        <A to='/sales' activeClassName="selected">
          <IconSales />
          Statements
        </A>
      </LItem>
      <LItem>
        <A to='/templates' activeClassName="selected">
          <IconTemplates />
          Portfolio
        </A>
      </LItem>
      <LItem>
        <A to='/settings' activeClassName="selected">
          <IconSettings />
          Settings
        </A>
      </LItem>
    </UList>
  </Wrapper>
);

export default Header;
