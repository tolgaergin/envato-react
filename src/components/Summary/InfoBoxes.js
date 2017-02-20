import React from 'react';

import styled from 'styled-components';

import IconEarnings from '../../assets/svg/box-earnings.svg';
import IconSales from '../../assets/svg/box-sales.svg';
import IconFolowers from '../../assets/svg/box-followers.svg';

const Boxes = styled.ul `
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Box = styled.li `
  flex-basis: 33.3%;
  flex-grow: 1;
  background-color: #fff;
  border-right: 1px solid rgba(151, 151, 151, 0.14);
  padding: 24px 0;
  text-align: center;

  &:last-of-type {
    border-right: 0;
  }

  img {
    display: block;
    margin: 0 auto 20px;
  }

  BoxText {
    display: block;
  }
`;

const BoxText = styled.span `
  display: block;

  ${props => props.info && `
    font-size: 14px;
    opacity: 0.5;
    margin-bottom: 5px;
  `};
`;

function moneyFormat(money) {
  return parseFloat(money).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

const InfoBoxes = ({ totalEarnings, totalSales, followers }) => (
  <Boxes>
    <Box>
      <img src={IconEarnings} alt="Earnings" />
      <BoxText info>Earnings</BoxText>
      <BoxText>${moneyFormat(totalEarnings)}</BoxText>
    </Box>
    <Box>
      <img src={IconSales} alt="Sales" />
      <BoxText info>Sales</BoxText>
      <BoxText>{totalSales}</BoxText>
    </Box>
    <Box>
      <img src={IconFolowers} alt="Followers" />
      <BoxText info>Followers</BoxText>
      <BoxText>{followers}</BoxText>
    </Box>
  </Boxes>
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
