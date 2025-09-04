let mysql = require('mysql2');

let conexion = mysql.createConnection({
    host: 'localhost',
    database: 'tiendapc',
    user: 'root',
    password: 'jjmd'
});

conexion.connect(function(error){
    if(error){
        throw error;
    } else {
        console.log("Conexión exitosa");
    }       
});
module.exports = conexion;

