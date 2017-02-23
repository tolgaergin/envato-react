export function moneyFormat(money) {
  return parseFloat(money).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
};

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function dashToSpace(string) {
  return string.replace(/-/g, ' ');
}

export function niceCategoryName(category) {
  const mainCategory = category.split('/')[0];
  return capitalizeFirstLetter(dashToSpace(mainCategory));
}

export function niceTemplateName(itemName) {
  return itemName.split(' ')[0];
}
