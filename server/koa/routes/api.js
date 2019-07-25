/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userInfoController = require('../controllers/user')
const scheduleController = require('../controllers/schedule')
const queueController = require('../controllers/queue')

const routers = router
  .post('/user/signUp', userInfoController.signUp)
  .post('/user/userLogin', userInfoController.userLogin)
  .get('/start', scheduleController.start)
  .get('/stop', scheduleController.stop)
  .get('/alltask', scheduleController.alltask)
  .get('/queue', queueController.queue)

module.exports = routers