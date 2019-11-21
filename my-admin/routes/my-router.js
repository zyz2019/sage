/*
 * @Author: Yanzhao.Zhang
 * @Date: 2019-10-29 13:36:09
 * @LastEditors: Yanzhao.Zhang
 * @LastEditTime: 2019-11-21 19:06:16
 * @Description: 数据库查询接口
 */
const express = require('express')
const router = express.Router()
const { select } = require('../models/request')
const filterParam = require('../models/params-format')

// 传递数据库数据
router.post('/test', (req, res) => {
  // 注意，此处是对前端返回数据的格式化和解析
  let params = {}
  req.on('data', rs => {
    params = filterParam(rs)
  })
  req.on('end', () => {
    let sql = ''
    // 此处根据数据库语句进行查询得到结果即可
    select(sql, (err, data) => {
      if (err) res.send({msg: '服务器开小差了', code: 0})
      res.send(data)
      res.end()
    })
  })
})

module.exports = router