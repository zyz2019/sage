/*
 * @Author: Yanzhao.Zhang
 * @Date: 2019-11-21 13:44:14
 * @LastEditors: Yanzhao.Zhang
 * @LastEditTime: 2019-11-21 17:22:58
 * @Description: 主文件
 */

const express = require('express')
const server = express()
const cors = require('cors')
const logger = require('./models/logger')
const myRouter = require('./routes/my-router.js')
const mockRouter = require('./routes/mock-router')

// 监听全局未被捕获的错误
process.on('uncaughtException', (err) => {
  // 打印出错误
  logger.fatal(err)
  // 打印出错误的调用栈方便调试
  logger.fatal(err.stack)
})

server.use(cors())

// 跨域处理
server.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Authorization, Content-Type");  
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");  

  if (req.url.indexOf('status.check') > -1) {
    res.writeHead(200, 'okay')
    res.write('ok')
    res.end()
    return
  }
  next();
})

server.use('/',myRouter)
server.use('/',mockRouter)

server.listen(3000, '127.0.0.1')

