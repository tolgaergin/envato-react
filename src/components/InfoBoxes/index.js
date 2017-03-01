import React from 'react';
import { moneyFormat, printableNumber } from '../../constants/helper';

import IconEarnings from '../../assets/svg/box-earnings.svg';
import IconSales from '../../assets/svg/box-sales.svg';
import IconFolowers from '../../assets/svg/box-followers.svg';

import { Boxes, Box, BoxText, Badge } from './style';

const InfoBoxes = ({
  totalEarnings,
  sales,
  followers,
  previousFollowers,
  previousSales,
}) => (
  <Boxes>
    <Box>
      <img src={IconEarnings} alt="Earnings" />
      <BoxText info>Earnings</BoxText>
      {totalEarnings ? (
        <BoxText>${moneyFormat(totalEarnings)}</BoxText>
      ) : (
        <BoxText>-</BoxText>
      )}
    </Box>
    <Box>
      <img src={IconSales} alt="Sales" />
      <BoxText info>Sales</BoxText>
      {sales !== '0' ? (
        <BoxText>{sales}</BoxText>
      ) : (
        <BoxText>-</BoxText>
      )}

      {
        (sales !== previousSales && previousSales !== '') &&
          <Badge>{printableNumber(sales - previousSales)}</Badge>
      }
    </Box>
    <Box>
      <img src={IconFolowers} alt="Followers" />
      <BoxText info>Followers</BoxText>
      {followers !== '0' ? (
        <BoxText>{followers}</BoxText>
      ) : (
        <BoxText>-</BoxText>
      )}

      {
        (followers !== previousFollowers && previousFollowers !== '') &&
          <Badge>{printableNumber(followers - previousFollowers)}</Badge>
      }
    </Box>
  </Boxes>
);

InfoBoxes.propTypes = {
  totalEarnings: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  sales: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  followers: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  previousFollowers: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  previousSales: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
};

export default InfoBoxes;
