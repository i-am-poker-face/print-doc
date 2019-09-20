import mysql from "mysql";

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Verification'
});

db.connect(() =>console.log('Connected!'));
