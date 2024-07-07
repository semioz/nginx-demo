const http = require('http');
const WsServer = require('websocket').server;
const httpServer = http.createServer();
const wsServer = new WsServer(
    {"httpServer": httpServer}
);

let port = 8000;
let conn = null;
httpServer.listen(port, ()=> console.log(`listening on ${port}`));

wsServer.on("request", req => {
    conn = req.accept(null, req.origin);
    conn.on("message", data => {
        console.log(`received a message ${data.utf8Data}`);
        conn.send(`client!!! received ur message: ${data.utf8Data} on port ${port}`);
    });
});