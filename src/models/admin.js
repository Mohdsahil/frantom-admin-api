const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema(
    {
        name: {
            type: String,
            default: null
        },
        email: {
            id: {
                type: String,
                lowercase: true,
            },
            password: {
                type: String,
                default: null,
            }
        },
        profilePicture: {
            type: String,
            default: null
        },
        status: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('admins', adminSchema);