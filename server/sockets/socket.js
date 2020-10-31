const { io } = require('../server');


io.on('connection', (client) => {
    console.log('Usuario conectado');

    // Enviar información
    client.emit('enviarMensajeDesdeServer', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    }, function() {
        console.log('Se disparó el callback');
    });

    // Escuchar el cliente
    client.on('enviarMensajeDesdeCliente', (data, callback) =>  {
        console.log(data);

        client.broadcast.emit('enviarMensajeDesdeServer', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio mal'
        //     });
        // }
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});