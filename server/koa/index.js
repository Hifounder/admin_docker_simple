const Koa = require('koa')
// koa-logger
const logger = require('koa-logger')
// koa-router 
const routers = require('./routes/index')
// koa-bodyParser formData 數據解析至 ctx.request.body中
const bodyParser = require('koa-bodyparser')
// cors
const cors = require('koa-cors');

const app = new Koa()

app.use(cors());

app.use(logger())

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message
    ctx.app.emit('error', err, ctx)
  }
})

// 特別 bodyParser 要在 routers 之前
app.use(bodyParser())
app.use(routers.routes()).use(routers.allowedMethods())

const server = app.listen(3000)
module.exports = server