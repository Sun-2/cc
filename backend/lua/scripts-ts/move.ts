
    export type moveArgs = {
direction: "left" | "right" | "forward" | "backward" | "up" | "down";
} ;
    
    const varRegex = /"%{(.*?)}%"/g;
    export const move = (args: moveArgs) => "local a=\"%%dir%%\"robot.moveLeft(a)".replace(varRegex, (str) => {
    const varName = str.match(/"%{(.*?)}%"/)![1];
    // @ts-ignore
    if (args && varName in args) return args[varName];
    else throw new Error(`Lua function missing argument: ${str}`);
  });