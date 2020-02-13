const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');
    client.emit('enviarMensaje', { usuario: 'Administrador', mensaje: 'Bienvenido a la app' })

    client.on('disconnect', () => {
            console.log('Usuario desconectado');
        })
        //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data)
            //console.log(mensaje);
            // if (mensaje.usuario) {
            //     callback({ resp: 'todo ok' })
            // } else {
            //     callback({ resp: 'Todo Mall..' })
            // }
    })
})