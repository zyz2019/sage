/*
 * @Author: Yanzhao.Zhang
 * @Date: 2019-11-21 13:44:13
 * @LastEditors: Yanzhao.Zhang
 * @LastEditTime: 2019-11-21 13:47:33
 * @Description: 错误日志配置
 */

const log4js = require('log4js') // 打印log模块

log4js.configure({
  appenders: { cheese: { type: 'file', filename: '/acs/log/node.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
})

const logger = log4js.getLogger('cheese')

module.exports = logger