import React from 'react';

const MonthlyChart = (userEarnings) => (
  <div>
    <h2>Monthly Chart</h2>
    {console.log(userEarnings)}
  </div>
);

MonthlyChart.propTypes = {
  userEarnings: React.PropTypes.array,
};

export default MonthlyChart;
