import React from 'react';

import { BalanceContainer, Heading, Balance, Poor } from './style';

const CurrentBalance = ({ currentBalance }) => (
  <BalanceContainer>
    <Heading>Current Balance</Heading>
    {currentBalance === '0.00' ? (
      <Poor>As poor as Lazarus</Poor>
    ) : (
      <Balance><sup>$</sup>{currentBalance}</Balance>
    )}
  </BalanceContainer>
);

CurrentBalance.propTypes = {
  currentBalance: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
};

export default CurrentBalance;
