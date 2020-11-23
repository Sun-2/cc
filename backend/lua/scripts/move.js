"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.move = void 0;
const varRegex = /"%{(.*?)}%"/g;
const move = (args) => "local a=\"%%dir%%\"robot.moveLeft(a)".replace(varRegex, (str) => {
    const varName = str.match(/"%{(.*?)}%"/)[1];
    // @ts-ignore
    if (args && varName in args)
        return args[varName];
    else
        throw new Error(`Lua function missing argument: ${str}`);
});
exports.move = move;
//# sourceMappingURL=move.js.map