const utils = require('./utils');
const db = require('./dbConn');
const tableName = process.env.MYSQL_TABLE_NAME;

module.exports = class DbClient {
  getColumnNames() {
    return new Promise((resolve, reject) => {
      const query = `SELECT column_name FROM information_schema.columns WHERE table_name = '${tableName}'`;
      db.query(query, (err, columns, fields) => {
        if (err) return reject(err);
        const result = columns.map(column => column.column_name);
        resolve(result);
      });
    });
  }

  getColumnData(arrayOfColumns) {
    const columns = utils.formatColumns(arrayOfColumns);
    return new Promise((resolve, reject) => {
      const query = `SELECT ${columns} FROM ${tableName}`;
      db.query(query, (err, rows, fields) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }
}
