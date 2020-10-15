/**
 * ctx 上下文
 * respon 默认响应对象，可根据接口实际情况进行修改和使用
 */

//用户模块接口处理

const user = {
    //登录接口
    login:function (ctx,respon) {
        ctx.type = 'application/json;charset=UTF-8';
        console.log('登录请求参数', ctx.request.body);
        req = ctx.request.body
        if (req.phone == '18025442878' && req.code == '123456') {
            respon.data.msg = '登录成功';
            respon.data.userUid = '956810141';
            ctx.body = respon;
        } else {
            respon.code = 400
            respon.msg = '登录失败，登录信息错误';
            ctx.body = respon;
        }
    },
    //注册接口
    reg:function (ctx,respon) {
        ctx.type = 'application/json;charset=UTF-8';
        console.log('注册请求参数', ctx.request.body);
        req = ctx.request.body
        if (req.phone) {
            respon.data.msg = '注册成功';
            respon.data = req.phone;
            ctx.body = respon;
        } else {
            respon.code = 400
            respon.msg = '注册失败，注册账号有误';
            ctx.body = respon;
        }
    }
}

module.exports = user