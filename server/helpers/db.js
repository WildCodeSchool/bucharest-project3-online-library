const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '22Fox-left',
    database: 'ajungemMari'
})

module.exports = connection;