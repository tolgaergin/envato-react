import React from 'react';

import { BalanceContainer, Heading, Balance } from './style';

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
