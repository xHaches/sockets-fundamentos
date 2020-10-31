const express = require('express');
// socket.io trabaja con http nativo
const socketIO = require('socket.io');

// nativos de node
const http = require('http');
const path = require('path');


const app = express();
// configurar el http para que use express y activar socket.io para express
let server = http.createServer(app);


const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = Esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket')



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});