const _ = require('lodash');

const aggregateCountAge = (rows, columnName) => {
  const aggregated = aggregateBy(rows, columnName);
  return { title: columnName, summary: getCount(aggregated) };
}

const aggregateBy = (rows, columnName) => {
  return result = _.groupBy(rows, columnName);
}

const getCount = (rows) => {
  let result = [];

  for (const key in rows) {
    const array = rows[key];
    const row = {
      type: key,
      count: array.length,
      averageAge: calculateAverageAge(array)
    }
    result = [...result, row];
  }

  return result;
}

const calculateAverageAge = (array) => {
  const totalAge = array.reduce((acc, curr) => {
    return acc + curr.age;
  }, 0);
  const averageAge = totalAge / array.length;
  return Math.round(averageAge * 100) / 100;
}

const formatColumns = (array) => {
  return array.map(column => {
    return `\`${column.replace(/_/g, ' ')}\``;
  }).join(', ');
}

const formatName = (string) => {
  return string.replace(/_/g, ' ');
}

module.exports = {
  aggregateBy,
  aggregateCountAge,
  calculateAverageAge,
  formatColumns,
  formatName,
  getCount
};
