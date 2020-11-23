import { Server } from "ws";
import * as http from "http";
import { sayHello } from "@cc/lua";
import { makeDispatcher } from "@cc/server/dispatchRequest";

console.log(sayHello({ name: '"ASd"' }));

const ws = new Server(
  {
    port: 8080
  },
  () => console.log("Listening.")
);

ws.on("connection", conn => {
  console.log("connected");
  const dispatcher = makeDispatcher(conn);
  dispatcher.sayHello({ name: "asd" });
  dispatcher.move({ direction: "left" });

  conn.on("message", msg => {
    console.log("msg: %s", msg);
  });

  setTimeout(() => {
    conn.send(
      JSON.stringify({
        id: "asd",
        type: "execute",
        code: `function()
    print("Hello!")
    return "asd"
end`
      })
    );
  }, 500);
});
