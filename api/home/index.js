//首页模块
const Router = require('koa-router'); // 引入koa-router
const router = new Router(); // 创建路由，支持传递参数
const homeModules = require("../../modules/home/index");

//默认响应对象
const respon = {
    "code": 200,
    "msg": "success",
    "data": {}
};

router.post('/news', async ctx => await homeModules.news(ctx, respon))


module.exports = router;