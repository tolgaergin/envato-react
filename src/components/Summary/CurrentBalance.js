import React from 'react';

import styled from 'styled-components';

const BalanceContainer = styled.div `
  padding: 30px 20px;
`;

const Heading = styled.h2 `
  margin: 0 0 5px;
  font-size: 28px;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.4);
`;

const Balance = styled.div `
  font-size: 58px;
  font-weight: 100;
  color: #2dc542;

  sup {
    position: relative;
    top: -0.9em;
    vertical-align: baseline;
    margin-right: 15px;
    font-size: 24px;
    color: #377f35;
  }
`;

const CurrentBalance = ({ currentBalance }) => (
  <BalanceContainer>
    <Heading>Current Balance</Heading>
    <Balance><sup>$</sup>{currentBalance}</Balance>
  </BalanceContainer>
);

CurrentBalance.propTypes = {
  currentBalance: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
};

export default CurrentBalance;
