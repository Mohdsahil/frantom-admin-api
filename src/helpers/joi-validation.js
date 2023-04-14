const Joi = require('joi');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
/**
 * validating options for Joi
 */
const options = {
    abortEarly: false,
}

const email = (value, helpers) => {
    const domain = value.split('@');
    if (domain[1] === 'yopmail.com') {
        return helpers.error('any.invalid');
    } 
    return value
}

const emailSchema = Joi.string()
    .empty()
    .custom(email, 'custom validation')
    .message('Invalid Eamil')
    .max(256)
    .required()
    .messages({
        'string.base': 'Enter your email address in format: yourname@example.com',
        'string.empty': 'Enter your email address in format: yourname@example.com',
        'string.max': 'Name can maximum of 256 characters',
        'string.required': "Name must be required",
        'any.invalid': 'Invalid Email'
    })

const passwordSchema = Joi.string()
    .empty()
    .required()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, {
        name: 'required'
    })
    .message(
        `Enter a password with minimum one upper case, lowercase and number, ranging from 8-15 characters`
    )
    .min(8)
    .max(15)
    .messages({
        'string.base': 'Enter a password with minimum one upper case, lowercase and number, ranging from 8-15 characters',
        'string.empty': 'Password is required',
        'string.min': 'Password can have minimum of {#limit} characters',
        'string.max': 'Password can have maximum of {#limit} characters',
        'string.required': "Name must be required",
    })

const emailPasswordSchemaa = Joi.object()
    .keys({
        name: Joi.string() 
            .empty()
            .max(150)
            .required()
            .messages({
                'string.base': 'Name must be of type string',
                'string.empty': 'Name is required',
                'string.max': 'Name can maximum of 150 characters',
                'string.required': "Name must be required",
            }),
        email: emailSchema,
        password: passwordSchema
    })
    .unknown(true)

const createItemSchema = Joi.object()
    .keys({
    name: Joi.string() 
        .empty()
        .max(150)
        .required()
        .messages({
            'string.base': 'Name must be of type string',
            'string.empty': 'Name is required',
            'string.max': 'Name can maximum of 150 characters',
            'string.required': "Name must be required",
        }),
    description: Joi.string(),
    royalty: Joi.number()
        .precision(2)
        .message(`royalty can have a maximum of two decimals`)
        .disallow('NaN')
        .min(0)
        .max(50)
        .optional()
        .messages({
        'number.base': `royalty must be a type of number`,
        'number.empty': `royalty is required `,
        'number.min': `royalty must have minimum of {#limit} percent`,
        'number.max': `royalty can have maximum of {#limit} percent`,
        'number.integer': `royalty can have a maximum of two decimals`,
        'number.greater': `royalty must be greater than 1`,
        'any.required': `royalty is required `,
        'any.optional': `royalty is optional `,
    }),
        fee: Joi.number()
        .precision(2)
        .strict()
        .message(`fee can have a maximum of two decimals`)
        .disallow('NaN')
        .min(1)
        .max(50)
        .required()
        .messages({
            'number.base': `fee must be a type of number`,
            'number.empty': `fee is required `,
            'number.min': `fee must have minimum of {#limit} percent`,
            'number.max': `fee can have maximum of {#limit} percent`,
            'number.integer': `fee can have a maximum of two decimals`,
            'number.greater': `fee must be greater than 1`,
            'any.required': `fee is required `,
            'any.optional': `fee is optional `,
      }),
        quantity: Joi.number()
        .greater(0)
        .precision(0)
        .strict()
        .message(`quantity should not have decimals`)
        .disallow('NaN')
        .min(1)
        .required()
        .messages({
            'number.base': `quantity must be a type of number`,
            'number.empty': `quantity is required `,
            'number.min': `quantity must have minimum of {#limit}`,
            'number.max': `quantity can have maximum  of {#limit}`,
            'number.greater': `quantity must have minimum of 1`,
            'any.required': `quantity is required `,
            'any.optional': `quantity is optional `,
      }),
      
    })

const registerWithEmailPassword = (data) => {
    return emailPasswordSchemaa.validate(data, options);
}

const createItem = (data) => {
    return createItemSchema.validate(data, options);
}

module.exports = {
    registerWithEmailPassword,
    createItem
}