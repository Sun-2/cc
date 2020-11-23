import { CharStreams, CommonTokenStream, TokenStreamRewriter } from "antlr4ts";
import { LuaLexer } from "./generated/LuaLexer";
import {ChunkContext, FuncnameContext, LuaParser, StringContext} from "./generated/LuaParser";
import {
  AbstractParseTreeVisitor,
  ParseTree,
  ParseTreeListener,
  ParseTreeWalker,
  TerminalNode
} from "antlr4ts/tree";
import { LuaVisitor } from "./generated/LuaVisitor";
import { Interval } from "antlr4ts/misc";

export * from "./generated/LuaLexer";
export * from "./generated/LuaListener";
export * from "./generated/LuaParser";
export * from "./generated/LuaVisitor";

const code = `function sayHello (a)
  local var = "%%var%%"
  print("Hello")
end`;

const stream = CharStreams.fromString(code);
const lexer = new LuaLexer(stream);
const commonTokenStream = new CommonTokenStream(lexer);
const rewriter = new TokenStreamRewriter(commonTokenStream);



const parser = new LuaParser(commonTokenStream);



const tree = parser.chunk();

class MyVisitor extends AbstractParseTreeVisitor<any>
  implements LuaVisitor<any> {
  constructor() {
    super();
  }

  visitFuncname(ctx: FuncnameContext) {
    rewriter.replace(ctx.start.tokenIndex, ctx.stop?.tokenIndex!, "");
  }

  protected defaultResult(): any {
    return 0;
  }
}

const vis = new MyVisitor();
vis.visit(tree);

console.log(rewriter.getText());
