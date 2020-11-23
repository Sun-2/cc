/* eslint-disable */
// @ts-nocheck
// Generated from Lua.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ChunkContext } from "./LuaParser";
import { BlockContext } from "./LuaParser";
import { StatContext } from "./LuaParser";
import { AttnamelistContext } from "./LuaParser";
import { AttribContext } from "./LuaParser";
import { RetstatContext } from "./LuaParser";
import { LabelContext } from "./LuaParser";
import { FuncnameContext } from "./LuaParser";
import { VarlistContext } from "./LuaParser";
import { NamelistContext } from "./LuaParser";
import { ExplistContext } from "./LuaParser";
import { ExpContext } from "./LuaParser";
import { PrefixexpContext } from "./LuaParser";
import { FunctioncallContext } from "./LuaParser";
import { VarOrExpContext } from "./LuaParser";
import { VarContext } from "./LuaParser";
import { VarSuffixContext } from "./LuaParser";
import { NameAndArgsContext } from "./LuaParser";
import { ArgsContext } from "./LuaParser";
import { FunctiondefContext } from "./LuaParser";
import { FuncbodyContext } from "./LuaParser";
import { ParlistContext } from "./LuaParser";
import { TableconstructorContext } from "./LuaParser";
import { FieldlistContext } from "./LuaParser";
import { FieldContext } from "./LuaParser";
import { FieldsepContext } from "./LuaParser";
import { OperatorOrContext } from "./LuaParser";
import { OperatorAndContext } from "./LuaParser";
import { OperatorComparisonContext } from "./LuaParser";
import { OperatorStrcatContext } from "./LuaParser";
import { OperatorAddSubContext } from "./LuaParser";
import { OperatorMulDivModContext } from "./LuaParser";
import { OperatorBitwiseContext } from "./LuaParser";
import { OperatorUnaryContext } from "./LuaParser";
import { OperatorPowerContext } from "./LuaParser";
import { NumberContext } from "./LuaParser";
import { StringContext } from "./LuaParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LuaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface LuaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `LuaParser.chunk`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChunk?: (ctx: ChunkContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat?: (ctx: StatContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.attnamelist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttnamelist?: (ctx: AttnamelistContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.attrib`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrib?: (ctx: AttribContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.retstat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRetstat?: (ctx: RetstatContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.funcname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncname?: (ctx: FuncnameContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.varlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarlist?: (ctx: VarlistContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.namelist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamelist?: (ctx: NamelistContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.explist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplist?: (ctx: ExplistContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp?: (ctx: ExpContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.prefixexp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixexp?: (ctx: PrefixexpContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctioncall?: (ctx: FunctioncallContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.varOrExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarOrExp?: (ctx: VarOrExpContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.varSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarSuffix?: (ctx: VarSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.nameAndArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameAndArgs?: (ctx: NameAndArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgs?: (ctx: ArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.functiondef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctiondef?: (ctx: FunctiondefContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.funcbody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncbody?: (ctx: FuncbodyContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.parlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParlist?: (ctx: ParlistContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.tableconstructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableconstructor?: (ctx: TableconstructorContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.fieldlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldlist?: (ctx: FieldlistContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.fieldsep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldsep?: (ctx: FieldsepContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.operatorOr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorOr?: (ctx: OperatorOrContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.operatorAnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorAnd?: (ctx: OperatorAndContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.operatorComparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorComparison?: (ctx: OperatorComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.operatorStrcat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorStrcat?: (ctx: OperatorStrcatContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.operatorAddSub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorAddSub?: (ctx: OperatorAddSubContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.operatorMulDivMod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorMulDivMod?: (ctx: OperatorMulDivModContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.operatorBitwise`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorBitwise?: (ctx: OperatorBitwiseContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.operatorUnary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorUnary?: (ctx: OperatorUnaryContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.operatorPower`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorPower?: (ctx: OperatorPowerContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;
}

