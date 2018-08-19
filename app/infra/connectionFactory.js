var mysql = require('mysql');

function createDBConnection() {

    if (!process.env.NODE_ENV) {

        return mysql.createConnection({

            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'masterkey',
            database: 'casadocodigo_nodejs'

        });
    };

    if (process.env.NODE_ENV == 'test') {

        return mysql.createConnection({

            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'masterkey',
            database: 'casadocodigo_nodejs_test'
        });
    }
}

module.exports = function () {

    return createDBConnection;

}
