config = {
    database: {
        //Local DB
        name: 'mongodb://127.0.0.1:27017/gyanmitra19'
    },
    application: {
        secret: 'secret',
        env: 'development'
    },
    pagination: {
        perPage: 10
    },
    payment: {}

}

module.exports = config;