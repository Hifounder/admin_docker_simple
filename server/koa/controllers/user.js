const UserService = require('../services/user')
const Models = require('../db/models')
// 邏輯代碼
const userCode = require('../codes/user')

module.exports = {

    // 註冊會員
    async signUp(ctx) {
        const formData = ctx.request.body
        const result = {
            success: false,
            message: ''
        }
        try {
            // 檢驗用戶註冊
            let userResult = await UserService.checkUserInfo(formData)

            if (userResult.success === false) {
                ctx.status = 406
                ctx.body = userResult
            }

            if (userResult.success != false) {
                // 資料庫新增
                await Models.Admin.findAll({
                    where: { account_number: formData.account_number }
                }).then(res => {
                    if (!res.length) {
                        UserService.adminCreate(formData)
                        result.success = userResult.success
                        result.message = userCode.SUCCESS_USER
                        ctx.status = 200
                        ctx.body = result
                    } else {
                        result.success = userResult.success
                        result.message = userCode.HAVE_USER
                        ctx.status = 406
                        ctx.body = result
                    }
                })
            }

        } catch (error) {
            ctx.throw(500)
        }
    },

    // 會員登入
    async userLogin(ctx) {
        const formData = ctx.request.body
        const result = {
            success: false,
            message: userCode.FAIL_USER_NAME_OR_PASSWORD_ERROR
        }
        try {
            let checkLoginResult = await UserService.checkLogin(formData)

            if (checkLoginResult.success === false) {
                ctx.status = 406
                ctx.body = checkLoginResult
            }

            if (checkLoginResult.success != false) {
                result.success = checkLoginResult.success
                result.message = userCode.SUCCESS_LOGIN
                ctx.status = 200
                ctx.body = result
            }
        } catch (error) {
            ctx.throw(500)
        }
    }
}