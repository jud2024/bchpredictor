const { Server } = require('ws');
const { createServer } = require('http');

const server = createServer();
const wss = new Server({ server });

wss.on('connection', (client) => {
    console.log('Cliente conectado ao proxy');

    // Conectar ao WebSocket do BCH Games
    const targetWS = new WebSocket('wss://bch.games/api/graphql');

    client.on('message', (message) => {
        targetWS.send(message);
    });

    targetWS.on('message', (message) => {
        client.send(message);
    });

    targetWS.on('open', () => {
        console.log('Conectado ao WebSocket do BCH Games');
    });

    targetWS.on('error', (err) => {
        console.error('Erro no WebSocket:', err);
    });

    targetWS.on('close', () => {
        console.log('Conexão com BCH Games fechada');
        client.close();
    });

    client.on('close', () => {
        console.log('Cliente desconectado');
        targetWS.close();
    });
});

server.listen(8080, () => console.log('Proxy WebSocket rodando na porta 8080'));
