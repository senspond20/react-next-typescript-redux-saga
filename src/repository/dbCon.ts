const mysql = require('mysql2');
const connection = mysql.createConnection({
    host     : 'g',
    port     : '',
    user     : '',
    password : '',
    database : 'grtest'
});

export default connection;