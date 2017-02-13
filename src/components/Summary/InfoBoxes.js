import React from 'react';

const InfoBoxes = ({ totalEarnings, totalSales, followers }) => (
  <div>
    <h2>Info Box</h2>
    Total earnings: {totalEarnings} <br />
    Total Sales: {totalSales} <br />
    Followers: {followers} <br />
  </div>
);

InfoBoxes.propTypes = {
  totalEarnings: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  totalSales: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  followers: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
};

export default InfoBoxes;
