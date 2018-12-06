const DbClient = require('../libraries/dbClient');
const router = require('koa-router')();
const utils = require('../libraries/utils');

const dbClient = new DbClient();

router.get('/api/v1/columns', columnNames);
router.get('/api/v1/columns/:name', columnData);

async function columnNames(ctx, next) {
  try {
    const columnNames = await dbClient.getColumnNames();
    ctx.body = { columnNames: columnNames };
  } catch (err) {
    ctx.status = 404;
    ctx.body = "404 Not Found";
  }
}

async function columnData(ctx, next) {
  try {
    const columnName = ctx.params.name;
    const rows = await dbClient.getColumnData([columnName, 'age']);
    const result = utils.aggregateCountAge(rows, utils.formatName(columnName));
    ctx.body = { columnData: result };
  } catch (err) {
    ctx.status = 404;
    ctx.body = "404 Not Found";
  }
}

module.exports = router;
