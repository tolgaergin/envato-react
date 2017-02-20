import React from 'react';
import { Link, IndexLink } from 'react-router';

import IconSummary from './IconSummary';
import IconSales from './IconSales';
import IconTemplates from './IconTemplates';
import IconSettings from './IconSettings';

import styled from 'styled-components';

const Wrapper = styled.div `
  margin: 0 auto;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid rgba(205, 206, 210, 0.5);
`;

const UList = styled.ul `
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-align: center;
  font-size: 14px;
`;

const LItem = styled.li `
  flex-grow: 1;
  flex-basis: 25%;
  text-align: center;
`;

const StyledLink = () => `
  display: block;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
  padding: 16px 10px 12px;

  svg {
    display: block;
    margin: 0 auto 12px;
  }

  &:hover {
    color: #0da421;

    .svgFill {
      fill: #0da421;
    }
  }

  &.selected {
    color: #0da421;

    .svgFill {
      fill: #0da421;
    }
  }
`;

const AIndex = styled(IndexLink) `
  ${StyledLink}
`;

const A = styled(Link) `
  ${StyledLink}
`;

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
