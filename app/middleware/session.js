/*
 * @Description: session配置
 * @Author: hai-27
 * @Date: 2020-04-07 22:28:43
 * @LastEditors: hai-27
 * @LastEditTime: 2020-04-07 22:29:28
 */
const SQLiteStore = require('koa-sqlite3-session');

let CONFIG = {
  key: 'koa:session',
  maxAge: 86400000,
  autoCommit: true,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false,
  sameSite: null,
  store: new SQLiteStore('./session.db'),
}

module.exports = CONFIG;