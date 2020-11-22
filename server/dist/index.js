"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = require("ws");
var ws = new ws_1.Server({
    port: 8080
}, function () { return console.log('Listening.'); });
ws.on("connection", function (conn) {
    console.log('connected');
    conn.on("message", function (msg) {
        console.log('msg: %s', msg);
    });
    setTimeout(function () {
        conn.send(JSON.stringify({ id: "asd", type: "execute", code: "function()\n    print(\"Hello!\")\n    return \"asd\"\nend" }));
    }, 500);
});
//# sourceMappingURL=index.js.map