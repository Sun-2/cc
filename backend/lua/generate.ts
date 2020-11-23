import { bundleString } from "luabundle";
import { promises as fsp } from "fs";
import * as luamin from "luamin";

const stringify = any =>
  JSON.stringify(any)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

const bundleOptions = {
  paths: ["./libs/?.lua"]
};

function generate(source: string, funcName: string) {
  const types: string[] = [];

  const re = /local\s+(.*?)(?:=|\s)[^\n\r]+?type:(.*)$/gm;
  let match;

  while ((match = re.exec(source)) !== null) {
    const [, varName, varType] = match;
    types.push(`${varName}: ${varType};\n`);
  }
  const wrappedTypes = `export type ${funcName}Args = {\n${types.join("")}} ${
    !types.length ? "| undefined" : ""
  };`;

  const bundled = luamin.minify(bundleString(source, bundleOptions));

  const string = stringify(bundled)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

  /* Wrap it with a function that gets an arg object and replaces all "%%argName%%" with the revelant arg.*/
  return `
    ${wrappedTypes}
    
    const varRegex = /"%{(.*?)}%"/g;
    export const ${funcName} = (args: ${funcName}Args) => ${string}.replace(varRegex, (str) => {
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
        generate(str, scriptFiles[i].replace(/\..*/, ""))
      )
    )
  );

  const exportPaths = scriptFiles.map(file => `${file.replace(/\.lua$/, "")}`);
  await fsp.writeFile(
    "./scripts-ts/index.ts",
    exportPaths.map(file => `export * from "./${file}"`).join("\n")
  );
})();
