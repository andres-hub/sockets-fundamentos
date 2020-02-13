var socket = io();
socket.on('connect', function() {
    console.log('conectado al sevidor');
});
//Escuchar
socket.on('disconnect', () => {
    console.log('Coneccion a sevidor perdida');
});
//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Andres',
    mensaje: 'Hola mundo'
}, (res) => {
    console.log('Respuesta server', res);
});


//Eschuchar informacion
socket.on('enviarMensaje', (res) => {
    console.log('Servidor', res);
});