/*
 * @Author: bing.ma
 * @Date: 2019-10-24 13:44:04
 * @LastEditors: Yanzhao.Zhang
 * @LastEditTime: 2019-11-21 17:20:22
 * @Description: 数据库连接配置
 */
let mysql = require('mysql')

// 创建连接池
let db = mysql.createPool({
  host     : ,
  user     : ,
  password : ,
  database: ,
  multipleStatements: true
})

exports.db = db