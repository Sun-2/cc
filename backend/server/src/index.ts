import {Server} from "ws";
import * as http from "http";

const ws = new Server({
  port: 8080
}, () => console.log('Listening.'));

ws.on("connection", conn => {
  console.log('connected');
  conn.on("message", (msg) => {
    console.log('msg: %s', msg);
  })

  setTimeout(() => {
    conn.send(JSON.stringify({id: "asd", type:"execute", code:`function()
    print("Hello!")
    return "asd"
end`}))

  }, 500);

})


