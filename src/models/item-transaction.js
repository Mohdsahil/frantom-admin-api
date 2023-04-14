const mongooses = require('mongoose');
const Schema = mongooses.Schema
const { ObjectId } = mongoose.Types;

const itemTransactionSchema = new Schema(
    {
        itemId: { type: ObjectId, required: true },
        saleId: { type: ObjectId, default: null },
        quantity: { type: Number, default: 0 },
        pricePerQuantity: { type: Number, default: 0 },
        amount: { type: Number, default: 0 },
        gasFee: { type: Number, default: 0 },
        eventType: {
            type: String,
            enum: [
                'create',
                'list',
                'transfer',
                'cancel',
                'bids',
                'crypto',
                'export',
                'import',
                'b2b_transfer',
            ],
            default: null,
        },
        acceptedPaymentMethod: {
            type: String,
            enum: ['fiat', 'crypto', 'all'],
            default: 'all',
        },
        paymentMethodCurrencyType: {
            type: String,
            enum: ['USD', 'ETH', 'INR'],
            default: 'USD',
        },
        currencyType: {
            type: String,
            enum: ['USD', 'ETH', 'INR'],
            default: 'USD',
        },
        from: {
            type: String,
            default: null,
        },
        to: { type: String, default: null },
        cryptoEvent: {
            type: String,
            enum: ['pending', 'completed', 'expired'],
            default: 'pending',
        },
        randomHex: { type: String, default: null },
        txHash: { type: String, default: null },
        fromUserId: {
            type: ObjectId,
            default: null
        },
        toUserId: {
            type: ObjectId,
            default: null
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongooses.model('item-transactions', itemTransactionSchema)