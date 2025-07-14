/* eslint-disable no-undef */
const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "MDaemon@9L",
    database: "habit_tracker_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

// connection.connect((error) => {
//     if (error) throw error;
//     console.log("Connected to MySql...")
// })

module.exports = pool;