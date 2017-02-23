import React from 'react';

import {
  Template,
  TemplateBg,
  TemplateOverlay,
  TemplateName,
  CategoryName,
  SaleCount,
  Rating,
} from './style';

import { niceTemplateName, niceCategoryName } from '../../constants/helper';

import IconSaleCount from '../../assets/svg/sale-count.svg';
import IconStar from '../../assets/svg/star.svg';

const TemplateItem = ({ item, index }) => {
  const {
    item:itemName,
    rating_decimal:rating,
    sales,
    url,
    category,
    live_preview_url:bgImage,
  } = item;

  return (
    <Template href={url} target="_blank">
      <TemplateBg bgImage={bgImage} />
      <TemplateOverlay />
      <TemplateName>{niceTemplateName(itemName)}</TemplateName>
      <CategoryName>{niceCategoryName(category)}</CategoryName>
      <SaleCount><img src={IconSaleCount} alt="Sales" /> {sales}</SaleCount>
      <Rating><img src={IconStar} alt="Rating" /> {rating}</Rating>
    </Template>
  );
};

TemplateItem.propTypes = {
  item: React.PropTypes.object,
  index: React.PropTypes.string,
};

export default TemplateItem;
