const Koa = require('koa'); // 引入koa
const Router = require('koa-router'); // 引入koa-router
// CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
// 下面以koa2-cors为例，
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');

const app = new Koa(); // 创建koa应用
const router = new Router(); // 创建路由，支持传递参数

app.use(cors()); // 全部允许跨域

const responData = {
        "code":200,
        "msg":"success",
        "data":{
        }
};
const user = require("./modules/user/index");

router.prefix('/api')
// 指定一个url匹配
router.post('/login', async ctx => await user.login(ctx,responData))
      .post('/register', async ctx => await user.reg(ctx,responData))

// 安装 引入配置中间件
app.use(bodyParser());
// 调用router.routes()来组装匹配好的路由，返回一个合并好的中间件
// 调用router.allowedMethods()获得一个中间件，当发送了不符合的请求时，会返回 `405 Method Not Allowed` 或 `501 Not Implemented`
app.use(router.routes()); //启动路由文件
app.use(router.allowedMethods()); //设置响应头

// 启动服务监听本地3000端口
app.listen(3000, () => {
    console.log('应用已经启动，访问地址：http://192.168.0.129:3000');
})