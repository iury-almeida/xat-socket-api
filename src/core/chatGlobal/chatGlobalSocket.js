const service = require('./chetGlobalService');

module.exports = async (server) => {

var io = require('socket.io')(server);

    
    io.on('connection', async function (socket) {
        console.log('Novo usuario', socket.id);
        
        //emitir messangem
        socket.emit('message', { message: 'Novo usuario conextado' });
        
        //receber mensagem
        socket.on('sendMessage', async function (data) {
            //emitir mensagem e usuario
            data.message = await service.traduzirMensagem(data.message);
            io.emit('message', { message: data.message, user: socket.id });
        });

    });
    
    
}