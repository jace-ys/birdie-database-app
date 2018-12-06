const dotenv = require('dotenv').config({ path: '../.env' });
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
const Koa = require('koa');
const api = new Koa();

const port = process.env.PORT || 5000;
const router = require('./router/routes');

api.use(koaBody());
api.use(router.routes());
api.use(koaStatic('../birdie-client/build'));
api.use(async (ctx, next) => {
  ctx.redirect('/');
});

const server = api.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});

module.exports = server;
