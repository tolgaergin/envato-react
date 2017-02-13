import React from 'react';

const CurrentBalance = (currentBalance) => (
  <div>
    <h2>Current Balance</h2>
    {console.log(currentBalance)}
  </div>
);

CurrentBalance.propTypes = {
  currentBalance: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
};

export default CurrentBalance;
