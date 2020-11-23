import * as ws from "ws";
import * as http from "http";
import { connection, server as WebSocketServer } from "websocket";
import { sayHello } from "@cc/lua";
import { makeDispatcher } from "./dispatchRequest";
import { ConnectionManager } from "@cc/server/ConnectionManager";

const server = http.createServer();

server.listen(8080);

const wsServer = new WebSocketServer({
  httpServer: server,
  autoAcceptConnections: true
});

const connectionManager = new ConnectionManager();

wsServer.on("request", function(request) {
  const connection = request.accept();

  connection.on("message", function(message) {
    const data = JSON.parse(message.utf8Data!);

    if ((data.type = "greeting")) {
      connectionManager.addConnection(data.id, connection);
    }
  });

  connection.on("close", function(reasonCode, description) {
    connectionManager.removeConnection(connection);
  });
});
