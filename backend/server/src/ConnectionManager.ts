import {connection} from "websocket";

export class ConnectionManager {
  private connections: { [connId: string]: connection } = {};

  addConnection(connId: string, connection: connection) {
    connection[connId] = connection;
  }

  getConnection(connId: string) {
    return this.connections[connId];
  }

  removeConnection(conn: connection);
  removeConnection(connId: string);
  removeConnection(conn: connection | string) {
    if (typeof conn === "string") {
      delete this.connections[conn];
    } else {
      const soughtConnection = Object.entries(this.connections).find(
        ([id, innerConn]) => innerConn === conn
      );
      if (!soughtConnection) throw new Error("No such connection.");
      this.removeConnection(soughtConnection[0]);
    }
  }
}

