const mysql = require('mysql');
const dbConfig = require('../config/db_config');

const mysqlConnection = {
    init: () => {
        return mysql.createConnection(dbConfig);
    },
    open: (conn) => {
        conn.connect(err => {
            if(err) {
                console.log('connect falise');
            } else {
                console.log('connect success');
            }
        })
    },
    close: (conn) => {
        conn.end(err => {
            if(err) {
                console.log('disconnect false');
            } else {
                console.log('disconnect success');
            }
        })
    }
};

module.exports = mysqlConnection;