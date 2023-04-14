module.exports = {
    STATUS_CODE: {
        OK: 200,
        CREATED: 201,
        ACCEPTED: 202,
        NO_CONTENT: 204,
        INFO: 250,
        BAD_REQUEST: 400,
        UN_AUTHORIZED: 401,
        FORBIDDEN: 403,
        RESOURCE_NOT_FOUND: 404,
        TOO_MANY_REQUESTS: 429,
        VALIDATION_FAILURE: 450,
        INTERNAL_SERVER_ERROR: 500,
        SERVICE_UNAVAILABLE: 503,
        SERVER_TIMEOUT: 504,
    },
    ERROR_MSGS: {
        INTERNAL_SERVER_ERROR: 'Internal Server Error!',
        ACCOUNT_EXIST: 'Account already exist for this email',
        INVALID_ROUTE: 'Route not available',
    },
    INFO_MSGS: {
        SUCCESS: 'Success'
    }
}