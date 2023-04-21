/*
 * @Description: 数据库连接
 * @Author: hai-27
 * @Date: 2020-02-07 16:51:56
 * @LastEditors: hai-27
 * @LastEditTime: 2020-02-27 13:20:11
 */
var mysql = require('mysql');
const { dbConfig } = require('../../../config');
var pool = mysql.createPool(dbConfig);

var db = {};

const DEBUG = false;

db.query = function (sql, params) {
  DEBUG && console.log('params -- ', params);

  return new Promise((resolve, reject) => {
    // 取出链接
    pool.getConnection(function (err, connection) {

      if (err) {
        reject(err);
        return;
      }

      connection.query(sql, params, function (error, results, fields) {
        console.log(`${ sql }  ---  `, params);
        // 释放连接
        connection.release();
        if (error) {
          reject(error);
          return;
        }
        DEBUG && console.log('results -- ', results);
        resolve(results);
      });

    });
  });
}
// 导出对象
module.exports = db;
