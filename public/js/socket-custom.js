var socket = io();

// .on() => escuchar info
// Saber cuando un usuario se conecta al servidor
socket.on('connect', function()  {
    console.log('Conectado al servidor');
});

// Saber cuando un usuario se desconecta al servidor
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});
// .emit() => enviar infomracion
socket.emit('enviarMensajeDesdeCliente', {
    usuario: 'Luisin',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensajeDesdeServer', function(mensaje) {
    console.log('Servidor:', mensaje);
    // callback();
});