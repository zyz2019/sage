/*
 * @Author: Yanzhao.Zhang
 * @Date: 2019-11-21 13:44:13
 * @LastEditors: Yanzhao.Zhang
 * @LastEditTime: 2019-11-21 17:25:14
 * @Description: 处理参数
 */

module.exports = function (params) {
  let obj = JSON.parse(params + '') 
  let _newPar = {};
  // 前端可以传空值，也可以过滤单双引号，方便数据库查找
  for (let key in obj) {
      if ((obj[key] === 0 ||obj[key] === false|| obj[key]) && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
          _newPar[key] = obj[key]
      }
  }
  return _newPar;
}