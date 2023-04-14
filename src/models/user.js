const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        userNae: {
            type: String,
            default: null
        },
        email: {
            id: {
                type: String,
                required: true
            },
            password: {
                type: String,
            },
            registrationType: {
                type: String,
                enum: ['email', 'google']
            },
            verified: {
                type: Boolean,
                default: false
            },
            token: {
                token: {
                    type: String
                },
                createdAt: {
                    type: Date,
                    default: new Date()
                }
            }
        },
        blueTick: {
            type: Boolean,
            default: false
        },
        profilePic: {
            type: String,
            default: null
        },
        cover: {
            type: String,
            default: null
        },
        status: {
            type: Boolean,
            default: false
        },
        isPrivate: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

moduel.exports = mongoose.model('users', userSchema);