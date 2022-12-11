const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pinteSharp'
});

connection.connect( (err) => {
    if (err) {
        console.log('Connection to database failed');
        return;
    }   
    console.log('Connection to database successful');
});

module.exports = connection;