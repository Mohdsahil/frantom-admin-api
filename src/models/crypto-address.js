const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema(
    {
      address: {
        type: String,
        default: null,
      },
      privateWalletAddress:{
        type: String,
        default: null,
      },
      userId: {
        type: ObjectId,
        required: true,
      },
      signature: {
        type: String,
        default: null,
      },
      status: {
        type: Boolean,
        default: true,
      },
      privateKey: {
        type: Object,
        default: null,
      },
    },
    {
      timestamps: true,
    },
);

module.exports = mongoose.model('crypto-address', addressSchema);