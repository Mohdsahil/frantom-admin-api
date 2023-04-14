const bcrypt = require('bcrypt');
const _ = require('underscore');
const Admin = require('../../models/admin');
const { handleException } = require('../../helpers/exception');
const Constant = require('../../helpers/constant');
const Response = require('../../helpers/response');
const Validation = require('../../helpers/joi-validation')

/**
 * Create Admin
 */
const registerAdmin = async (req, res) => {
    try {
        const { error } = Validation.registerWithEmailPassword(req.body)
        console.log("error1: ", error)
        if (error) {
            const obj = {
                res, 
                status: Constant.STATUS_CODE.BAD_REQUEST,
                msg: error.details[0].message
            }
            return Response.error(obj);
        } 
        console.log("before req.body", req.body)
        const { name, email, password } = req.body;
        console.log("after req.body", name, email, password)
        const userInfo = await Admin.findOne({ 'email.id': email });
        console.log("userInfoL ", userInfo)
        if (!_.isEmpty(userInfo)) {
            const obj = {
                res,
                status: Constant.status.BAD_REQUEST,
                msg: Constant.ERROR_MSGS.ACCOUNT_EXIST
            }
            return Response.error(obj)
        }
        const passwordHash = bcrypt.hashSync(password, 10)
        const admin = await Admin.create({
            name,
            email: {
                id: email,
                password: passwordHash
            }
        })

        const obj = {
            res,
            status: Constant.STATUS_CODE.CREATED,
            msg: Constant.INFO_MSGS.SUCCESS,
            data: admin
        }
        return Response.success(obj);
    } catch (error) {
        return handleException(res, error)
    }
}

module.exports = {
    registerAdmin
}