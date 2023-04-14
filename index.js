const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const fileUpload = require('express-fileupload')
const Response = require('./src/helpers/response')
const { httpLogger } = require('./src/middleware/logger');
const routes = require('./src/routes/index');
const constant = require('./src/helpers/constant');

require('./config/db');

const app = express();

app.use(
    express.json({
        limit: '1mb',
        type: [
            'application/json',
            'text/plain'
        ]
    })
);

app.use(
    express.urlencoded({
        limit: '1mb',
        extended: true
    })
);

app.use(cors());

app.use(httpLogger);

app.use(fileUpload());

app.get('/', (req, res) => {
    const obj= {
        res, 
        status: 200,
        msg: "Welcome to Fantom admin-api"
    }
    return Response.success(obj)
})

app.use('/v1', routes);

app.use((req, res) => {
    console.log("Requested API route is not available");
    const obj = {
        res,
        status: constant.STATUS_CODE.RESOURCE_NOT_FOUND,
        msg: constant.ERROR_MSGS.INVALID_ROUTE
    }
    return Response.error(obj)
})

module.exports = app;