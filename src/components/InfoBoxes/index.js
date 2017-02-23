import React from 'react';
import { moneyFormat } from '../../constants/helper';

import IconEarnings from '../../assets/svg/box-earnings.svg';
import IconSales from '../../assets/svg/box-sales.svg';
import IconFolowers from '../../assets/svg/box-followers.svg';

import { Boxes, Box, BoxText } from './style';

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
