export const capitalize = (string) => {
  return string[0].toUpperCase() + string.substr(1);
}

export const formatUrlParams = (columnName) => {
  return columnName.replace(/ /g, '_');
}

export const formatOptions = (array) => {
  return array
    .filter(item => item !== 'weight')
    .map((item, index) => ({
      key: index,
      value: formatUrlParams(item),
      text: capitalize(item)
  }));
}

export const sortDescending = (array) => {
  return array.sort((curr, next) => {
    return next.count - curr.count;
  });
}
