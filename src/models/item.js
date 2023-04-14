const mongoose = require('mongooses');
const Schema = mongoose.Schema;

const itemSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        images: {
            type: Array,
            default: []
        },
        thumbnail: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null,
        },
        tokenId: { type: Number, default: null },
        royalty: { type: Number, default: null },
        fee: { type: Number, default: null },
        status: {
            type: Boolean,
            default: false,
        },
        createrId: {
            type: ObjectId,
            required: true,
            ref: 'users',
        },
        owners: [{ type: ObjectId, ref: 'item_owners' }],
        collectionId: {
            type: ObjectId,
            ref: 'collections'
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.Schema('items', itemSchema);