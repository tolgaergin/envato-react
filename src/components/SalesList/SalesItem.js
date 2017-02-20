import React from 'react';
import moment from 'moment';

import styled from 'styled-components';

const Item = styled.li `
  position: relative;
  height: 42px;
  padding: 22px 100px 15px 20px;
  border-bottom: 1px solid rgba(205, 206, 210, 0.5);

  &:last-of-type {
    margin-bottom: 20px;

    div::after {
      display: none;
    }
  }

  &:nth-child(even) {
    background-color: #fff;
  }
`;

const ItemName = styled.span `
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ItemDetail = styled.span `
  display: block;
  font-size: 14px;
  color: #8c8c8c;
  margin-top: 2px;
`;

const ItemPrice = styled.span `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  font-size: 22px;
  text-align: right;

  sup {
    position: relative;
    top: -0.4em;
    vertical-align: baseline;
    font-size: 14px;
  }
`;

const ItemDot = styled.div `
  position: absolute;
  top: 32px;
  right: 86px;
  z-index: 10;

  &::before {
    position: absolute;
    content: '';
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: #cdced2;
    box-shadow:
      inset 0px 0px 0px 3px #fff,
      0px 0px 0px 2px #cdced2;
  }

  &::after {
    position: absolute;
    content: '';
    top: 15px;
    left: 6px;
    width: 1px;
    height: 64px;
    background-color: #cdced2;
  }
`;

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
