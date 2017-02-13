import React from 'react';

const SalesItem = ({ item, index }) => (
  <li>
    {item.date} {item.price}
  </li>
);

SalesItem.propTypes = {
  item: React.PropTypes.object,
  index: React.PropTypes.string,
};

export default SalesItem;
