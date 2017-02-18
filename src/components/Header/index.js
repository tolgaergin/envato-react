import React from 'react';
import { Link, IndexLink } from 'react-router';

import styled from 'styled-components';

const Wrapper = styled.div `
  margin: 0 auto;
  width: 100%;
`;

const UList = styled.ul `
  margin: 0;
  padding: 10px;
  list-style-type: none;
  text-align: center;
`;

const LItem = styled.li `
  display: inline-block;
`;

const StyledLink = () => `
  display: block;
  margin: 0 0.5em;
  padding: 0.5em;
  text-decoration: none;
  color: palevioletred;

  &:hover {
    text-decoration: underline;
  }

  &.selected {
    opacity: 0.5;
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
      <LItem><AIndex to='/' activeClassName="selected">Summary</AIndex></LItem>
      <LItem><A to='/sales' activeClassName="selected">Sales</A></LItem>
      <LItem><A to='/templates' activeClassName="selected">Templates</A></LItem>
      <LItem><A to='/settings' activeClassName="selected">Settings</A></LItem>
    </UList>
  </Wrapper>
);

export default Header;
