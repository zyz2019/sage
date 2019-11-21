/*
 * @Author: Yanzhao.Zhang
 * @Date: 2019-11-21 13:44:13
 * @LastEditors: Yanzhao.Zhang
 * @LastEditTime: 2019-11-21 13:47:24
 * @Description: 数据操作
 */
const { db } = require('./config')

// 新定义数据库查询方法
let select = (sql, callback) => {
  db.query(sql, (err, result) => {
    if (err) {
      console.log('错误：', err)
    }
    callback(err, {msg: '操作成功', code: 1, errorList: result, total: result.length})
  })
}

// 多条查询语句时
let selects = (sql, callback) => {
  db.query(sql, (err, result) => {
    if (err) {
      console.log('错误：', err)
    }
    let resultLength = result.length
    let resultArr = []
    for (let i=0;i<resultLength;i++) {
      resultArr.push(...result[i])
    }
    callback(err, {msg: '操作成功', code: 1, errorList: resultArr, total: result.length})
  })
}

exports.select = select
exports.selects = selects