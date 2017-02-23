import React from 'react';
import moment from 'moment';

import { Item, ItemName, ItemDetail, ItemPrice, ItemDot } from './style';

const SalesItem = ({ item, index }) => (
  <Item>
    <ItemName>{item.detail}</ItemName>
    <ItemDetail>
      {item.other_party_country} &#8226; {moment(new Date(item.date)).fromNow()}
    </ItemDetail>
    <ItemPrice><sup>$</sup>{item.price}</ItemPrice>
    <ItemDot />
  </Item>
);

SalesItem.propTypes = {
  item: React.PropTypes.object,
  index: React.PropTypes.string,
};

export default SalesItem;
