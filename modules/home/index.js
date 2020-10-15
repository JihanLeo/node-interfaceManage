/**
 * ctx 上下文
 * respon 默认响应对象，可根据接口实际情况进行修改和使用
 */

//首页模块接口处理

const home = {
    news: function(ctx,respon){
        ctx.type = 'application/json;charset=UTF-8';
        console.log('news接口请求参数', ctx.request.body);
        req = ctx.request.body
        if(req.userUid == '123456'){
            respon.data.msg = '操作成功';
            const newsList = [
                {
                    uid:'000001',
                    title:'新闻标题',
                    content:'这是新闻内容！'
                },
                {
                    uid:'000002',
                    title:'新闻标题',
                    content:'这是新闻内容！'
                }
            ]
            respon.data.newsList = newsList;
            ctx.body = respon;
        }else{
            respon.code = 400
            respon.msg = '用户信息错误';
            ctx.body = respon;
        }
    }
}

module.exports = home