//用户模块接口
const Router = require('koa-router'); // 引入koa-router
const router = new Router(); // 创建路由，支持传递参数
const userModules = require("../../modules/user/index");

//默认响应对象
const respon = {
    "code": 200,
    "msg": "success",
    "data": {}
};

router.post('/login', async ctx => await userModules.login(ctx, respon))
    .post('/register', async ctx => await userModules.reg(ctx, respon))


module.exports = router;