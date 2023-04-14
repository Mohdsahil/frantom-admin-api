const Constant = require('./constant');
const Response = require('./response')

const handleException = (res, error) => {
    try {
        const obj = {
            res, 
            msg: error.msg || error || Constant.ERROR_MSGS.INTERNAL_SERVER_ERROR
        }
        return Response.error(obj);
    } catch (error) {
        console.log(`Handle exception error:`, error);
        throw error;
    }
}

module.exports = { handleException };