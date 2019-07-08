// database Model
const Models = require('../db/models');
// 邏輯代碼
const userCode = require('../codes/user')
// 密碼加密
const bcrypt = require('bcrypt');
// 驗證
const {
    isEmail, // email驗證

} = require('validator');

module.exports = {

    /**
       * 檢驗用戶註冊
       * @param  {object} formData 用戶註冊data
       * @return {object}          檢驗結果
       */

    checkUserInfo(formData) {

        let result = {
            success: false,
            message: '',
        }

        if (/[a-z0-9\_\-]{6,16}/.test(formData.account_number) === false) {
            result.message = userCode.ERROR_USER_NAME
            return result
        }

        if (!isEmail(formData.email)) {
            result.message = userCode.ERROR_EMAIL
            return result
        }
        if (!/[\w+]{6,16}/.test(formData.password_number)) {
            result.message = userCode.ERROR_PASSWORD
            return result
        }

        result.success = true

        return result
    },

    /**
     * 創建用戶
     * @param  {object} formData 用戶訊息
     * @return {object}          創建結果
     */

    async adminCreate(formData) {
        // 密碼加密
        formData.password_number = await bcrypt.hash(formData.password_number, 10)

        let resultData = await Models.Admin.create({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            account_number: formData.account_number,
            password_number: formData.password_number
        })
        return resultData
    },

    /**
     * 登入驗證
     * @param  {object} formData 用戶訊息
     * @return {object}          檢查結果
     */

    async checkLogin(formData) {

        let result = {
            success: false,
            message: '',
        }

        await Models.Admin.findOne({
            where: { account_number: formData.account_number }
        }).then(async res => {
            let userPassword = formData.password_number
            let dbHashPassword = res.dataValues.password_number

            // 密碼驗證
            await bcrypt.compare(userPassword, dbHashPassword).then(res => {
                if(res === true){
                    return result.success = true
                } else {
                    return result.message = userCode.FAIL_USER_NAME_OR_PASSWORD_ERROR
                }
            })

        }).catch(err => {
            result.message = userCode.FAIL_USER_NO_EXIST
        });

        return result
    }
}