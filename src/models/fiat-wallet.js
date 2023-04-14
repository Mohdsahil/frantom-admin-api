const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Types;

const fiatWalletSchema = new Schema(
  {
    currencyType: {
      type: String,
      enum: ['INR', 'USD', 'USD'],
      default: 'USD',
    },
    // What is wallet Type
    walletType: {
      type: String,
      default: null,
    },
    totalBalance: {
      type: Number,
      default: 0,
    },
    // Balance locked during action
    lockedBalance: {
      type: Number,
      default: 0,
    },
    // TotalBalance - LockedBalance
    freeBalance: {
      type: Number,
      default: 0,
    },
    status: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('fiat-wallets', fiatWalletSchema);