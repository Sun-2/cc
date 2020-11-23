const {bundleString} = require('luabundle');
const {getOptions} = require('loader-utils');
const {validate} = require('schema-utils');

const schema = {
  type: 'object',
  properties: {
    paths: {
      type: 'array',
    }
  }
};

const stringify = (any) => JSON.stringify(any).replace(/\u2028/g, '\\u2028')
  .replace(/\u2029/g, '\\u2029')

module.exports = function (source) {

  const options = getOptions(this);
  const defaults = {
    paths: ['./a']
  };

  //todo
  //Validation doesn't throw
  validate(schema, options, {
    name: 'lua-loader',
    baseDataPath: 'options'
  });

  // local name = "%%name%%" -- type:string
  //todo extract types
  const types = [];

  const re = /local\s+(.*?)(?:=|\s)[^\n\r]+?type:(.*)$/gm;
  re.multiline = false;
  let match;


  while ((match = re.exec(source)) !== null) {
    const [, varName, varType] = match;
    types.push(`${varName}: ${varType};\n`);
  }
  const wrappedTypes = `export type Args = {\n${types.join("")}}`;

  const bundleOpts = {...defaults, ...options};
  const bundled = bundleString(source, bundleOpts);

  const string = stringify(bundled).replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  /* Wrap it with a function that gets an arg object and replaces all "%%argName%%" with the revelant arg.*/
  return `
    ${wrappedTypes}
    
    const varRegex = /"%{(.*?)}%"/g;
    export default (args: Args) => ${string}.replace(varRegex, (str) => {
    const varName = str.match(/"%{(.*?)}%"/)[1];
    if (args && varName in args) return args[varName];
    else throw new Error(\`Lua function missing argument: \${str}\`);
  });`;
};