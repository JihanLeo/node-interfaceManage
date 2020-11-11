/**
 * ctx 上下文
 * respon 默认响应对象，可根据接口实际情况进行修改和使用
 */

const db = require("../../api/db");

//首页模块接口处理

const home = {
    news: async function (ctx, respon) {
        req = ctx.request.body
        let data = await new newsApi(req).query();
        ctx.type = 'application/json;charset=UTF-8';
        respon.success.data.newsList = data;
        ctx.body = respon.success;
    }
}

class newsApi {
    constructor(req) {
        this.sql_query_user = `SELECT userUid FROM user WHERE userUid = ${req.userUid}`
        this.sql_query_news = 'SELECT * FROM news'
    }
    query() {
        return new Promise((resolve) => {
            db.query(this.sql_query_user, (err, result) => {
                if (err) {
                    throw err;
                } else {
                    if (result) {
                        db.query(this.sql_query_news, (e, res) => {
                            if (e) {
                                throw e;
                            }
                            resolve(res)
                        })
                    }
                }
            })
        })
    }
}


module.exports = home