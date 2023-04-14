const _ = require('underscore');
const { handleException } = require('../../helpers/exception');
const Constant = require('../../helpers/constant');
const Response = require('../../helpers/response');
const Validation = require('../../helpers/joi-validation')

/**
 * Creae NFT
 */
const createItem = async (req, res) => {
    const { logger } = req;
    try {
        const { error } = Validation.createItem(req.body);
        if (error) {
            const obj = {
                res,
                status: Constant.STATUS_CODE.BAD_REQUEST,
                msg: error.details[0].message
            }
            return Response.error(obj)
        }

        if (_.isUndefined(req.files['thumbnail']) 
        || _.isNull(req.files['thumbnail']) 
        || _.isEmpty(req.files['thumbnail'])) {
            const obj = {
                res,
                status: Constant.STATUS_CODE.BAD_REQUEST,
                msg: "Thumbnail  is required"
            }
        }

        const { name, description, quantity, fee, royalty, status } = req.body
        const { mimetype, md5, data } = req.files['thumbnail'];

        const result = await ipfs.add(data)
        console.log(result)
        console.log(result);

        console.log("ipfs upload images here")
        const obj = {
            res,
            status: 201,
            msg: "file uploaded successfully.",
            data: result
        };
          return Response.success(obj); 

    } catch (error) {
        return handleException(res, error)
    }
}

module.exports = {
    createItem,
    uploadImage
}