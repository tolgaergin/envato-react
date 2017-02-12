import React from 'react';

const SalesItem = ({ item, index }) => (
  <li>
    {item.date} {item.price}
  </li>
);

export default SalesItem;
