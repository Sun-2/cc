export class CommandBuilder {
  private chunks: string[] = [];
  addToChunks = true;

  constructor(args: {} & Pick<CommandBuilder, "addToChunks">) {
    const defaults: typeof args = { addToChunks: true };
    const { addToChunks } = Object.assign({}, defaults, args);
    this.addToChunks = addToChunks;
  }



  getCommand(wrap = true) {
    const codeArray = wrap
      ? ["function()", ...this.chunks, "end"]
      : this.chunks;
    return codeArray.join("\n");
  }
}
