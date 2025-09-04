require('dotenv').config();
let mysql = require('mysql2');

let conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
});

conexion.connect(function(error){
    if(error){
        throw error;
    } else {
        console.log("Conexión exitosa");
    }       
});
module.exports = conexion;
