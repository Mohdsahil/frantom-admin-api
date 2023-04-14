const mongooses = require('mongoose');
const Schema = mongooses.Schema
const { ObjectId } = mongoose.Types;

const paymentSchema = new Schema(
    {
        userId: {
            type: ObjectId,
            required: true,
            ref: 'users',
        },
        saleId: {
            type: ObjectId,
            default: null,
            ref: 'item-sales',
        },
        itemId: {
            type: ObjectId,
            required: true,
            ref: 'items',
        },
        quantity: {
            type: Number,
            default: 0,
        },
        pricePerQuantity: {
            type: Number,
            default: 0,
        },
        amount: {
            type: Number,
            default: 0,
        },
        feeInPerct: {
            type: Number,
            default: 0,
        },
        feeInValue: {
            type: Number,
            default: 0,
        },
        royaltyFeeInValue: {
            type: Number,
            default: 0,
        },
        royaltyFeeInPerct: {
            type: Number,
            default: 0,
        },
        itemTransactionId: {
            type: String,
            default: null,
            ref: 'item-transactions',
        },
        paymentType: {
            type: String,
            enum: ['buy', 'offer'],
            default: 'buy'
        },
        paymentRef: {
            type: String,
            default: null,
        },
        modeOfPayment: {
            type: String,
            enum: ['card', 'crypto', 'payment_gateway'],
            required: true,
        },
        status: {
            type: String,
            enum: ['initiated', 'pending', 'success', 'reject'],
            default: 'initiated',
        },
        refundStatus: {
            type: String,
            enum: ['initiated', 'pending', 'failed', 'success', null],
            default: null,
        },
        transactionDump: {
            type: String,
        },
        txHash: {
            type: String,
        },         
    },
    {
        timestamps: true
    }
)

module.exports = mongooses.model('payment-transactions', paymentSchema)