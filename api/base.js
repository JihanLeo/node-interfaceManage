//定制消息体规范
const respon = {
    success:{
        code: 200,
        msg: "操作成功",
        data: {}
    },
    message:{
        code: 0,
        msg:"",
    },
    error:{
        code: 0,
        msg:"",
        error:""
    }
}

module.exports = respon;