//路由模块化管理
const Router = require('koa-router'); // 引入koa-router
const router = new Router(); // 创建路由，支持传递参数

const user = require("./user/index")//用户模块
const home = require("./home/index")//首页模块

router.use('/user',user.routes());
router.use('/home',home.routes());

module.exports = router;