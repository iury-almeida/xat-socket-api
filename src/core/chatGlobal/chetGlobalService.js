const request = require('request-promise'),
    uri = require('../../../config/apiTraducao').url;

module.exports = {
    traduzirMensagem
}

async function traduzirMensagem(message) {
    let options = {
        method: 'GET',
        uri: `${uri}&q=${message}`
    },
    retorno = await request(options);
    retorno = JSON.parse(retorno);

    return retorno[0][0][0];
}