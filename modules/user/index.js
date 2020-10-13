const user = {
    //登录
    login:function (ctx,responData) {
        ctx.type = 'application/json;charset=UTF-8';
        console.log('登录请求参数', ctx.request.body);
        req = ctx.request.body
        if (req.phone == '18025442878' && req.code == '123456') {
            responData.data.msg = '登录成功';
            responData.data.userUid = '956810141';
            ctx.body = responData;
        } else {
            responData.code = 400
            responData.msg = '登录失败，登录信息错误';
            ctx.body = responData;
        }
    },
    //注册
    reg:function (ctx,responData) {
        ctx.type = 'application/json;charset=UTF-8';
        console.log('注册请求参数', ctx.request.body);
        req = ctx.request.body
        if (req.phone) {
            responData.data.msg = '注册成功';
            responData.data = req.phone;
            ctx.body = responData;
        } else {
            responData.code = 400
            responData.msg = '注册失败，注册账号有误';
            ctx.body = responData;
        }
    }
}

module.exports = user