import React from 'react';

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
    <li>
      {itemName} / {rating} / {sales}
      / {url} {category} {bgImage}
    </li>
  );
};

TemplateItem.propTypes = {
  item: React.PropTypes.object,
  index: React.PropTypes.string,
};

export default TemplateItem;
