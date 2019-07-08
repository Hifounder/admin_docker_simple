/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userInfoController = require('../controllers/user')

const routers = router
  .post('/user/signUp', userInfoController.signUp)
  .post('/user/userLogin', userInfoController.userLogin)
  
module.exports = routers