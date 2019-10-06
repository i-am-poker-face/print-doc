import mysql from "mysql";

export let db;

const configConnection = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Verification'
};

function startConnection() {
    db = mysql.createConnection(configConnection);
    db.connect(function(err) {
        if (err) {
            console.error('CONNECT FAILED', err.code);
            startConnection();
        }
        else
            console.error('CONNECTED');
    });

    db.on('error', function(err) {
        if (err.fatal)
            startConnection();
    });
}

startConnection();

