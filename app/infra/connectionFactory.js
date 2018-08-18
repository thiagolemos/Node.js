var mysql  = require('mysql');

function createDBConnection() {

    return mysql.createConnection({

        host: 'localhost',
        port:'3306',
        user: 'root',
        password: 'masterkey',
        database: 'casadocodigo_nodejs'
        
    });
}

module.exports = function() {

    return createDBConnection;
    
}
