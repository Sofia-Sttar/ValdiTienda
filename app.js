const express = require('express');
const path = require('path');
const app = express();
const conexion = require('./Back/conexion');

app.use(express.json());

// Servir archivos estáticos (como index.html) desde la raíz
app.use(express.static(__dirname));

// Ruta de prueba
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Aquí puedes agregar más rutas

app.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000');
});