const { bundleString } = require("luabundle");
const { promises: fsp } = require("fs");

const stringify = any =>
  JSON.stringify(any)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

const bundleOptions = {
  paths: ["./libs/?.lua"]
};

function generate(source) {
  const types: string[] = [];

  const re = /local\s+(.*?)(?:=|\s)[^\n\r]+?type:(.*)$/gm;
  let match;

  while ((match = re.exec(source)) !== null) {
    const [, varName, varType] = match;
    types.push(`${varName}: ${varType};\n`);
  }
  const wrappedTypes = `export type Args = {\n${types.join("")}} ${
    !types.length ? "| undefined" : ""
  };`;

  const bundled = bundleString(source, bundleOptions);

  const string = stringify(bundled)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

  /* Wrap it with a function that gets an arg object and replaces all "%%argName%%" with the revelant arg.*/
  return `
    ${wrappedTypes}
    
    const varRegex = /"%{(.*?)}%"/g;
    export default (args: Args) => ${string}.replace(varRegex, (str) => {
    const varName = str.match(/"%{(.*?)}%"/)![1];
    // @ts-ignore
    if (args && varName in args) return args[varName];
    else throw new Error(\`Lua function missing argument: \${str}\`);
  });`;
}

(async () => {
  try {
    await fsp.access("./scripts-ts");
  } catch (e) {
    await fsp.mkdir("./scripts-ts");
  }

  const scriptFiles = await fsp.readdir("./src");
  const scriptStrings = await Promise.all(
    scriptFiles.map(file => fsp.readFile(`./src/${file}`, { encoding: "utf8" }))
  );

  await Promise.all(
    scriptStrings.map((str, i) =>
      fsp.writeFile(
        `./scripts-ts/${scriptFiles[i].replace(/\.lua$/, ".ts")}`,
        generate(str)
      )
    )
  );
})();
