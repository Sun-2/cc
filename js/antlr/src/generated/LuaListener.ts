/* eslint-disable */
// @ts-nocheck
// Generated from Lua.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `LuaParser`.
 */
export interface LuaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LuaParser.chunk`.
	 * @param ctx the parse tree
	 */
	enterChunk?: (ctx: ChunkContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.chunk`.
	 * @param ctx the parse tree
	 */
	exitChunk?: (ctx: ChunkContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat?: (ctx: StatContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat?: (ctx: StatContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.attnamelist`.
	 * @param ctx the parse tree
	 */
	enterAttnamelist?: (ctx: AttnamelistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.attnamelist`.
	 * @param ctx the parse tree
	 */
	exitAttnamelist?: (ctx: AttnamelistContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.attrib`.
	 * @param ctx the parse tree
	 */
	enterAttrib?: (ctx: AttribContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.attrib`.
	 * @param ctx the parse tree
	 */
	exitAttrib?: (ctx: AttribContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.retstat`.
	 * @param ctx the parse tree
	 */
	enterRetstat?: (ctx: RetstatContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.retstat`.
	 * @param ctx the parse tree
	 */
	exitRetstat?: (ctx: RetstatContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.funcname`.
	 * @param ctx the parse tree
	 */
	enterFuncname?: (ctx: FuncnameContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.funcname`.
	 * @param ctx the parse tree
	 */
	exitFuncname?: (ctx: FuncnameContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.varlist`.
	 * @param ctx the parse tree
	 */
	enterVarlist?: (ctx: VarlistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.varlist`.
	 * @param ctx the parse tree
	 */
	exitVarlist?: (ctx: VarlistContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.namelist`.
	 * @param ctx the parse tree
	 */
	enterNamelist?: (ctx: NamelistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.namelist`.
	 * @param ctx the parse tree
	 */
	exitNamelist?: (ctx: NamelistContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.explist`.
	 * @param ctx the parse tree
	 */
	enterExplist?: (ctx: ExplistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.explist`.
	 * @param ctx the parse tree
	 */
	exitExplist?: (ctx: ExplistContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp?: (ctx: ExpContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp?: (ctx: ExpContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.prefixexp`.
	 * @param ctx the parse tree
	 */
	enterPrefixexp?: (ctx: PrefixexpContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.prefixexp`.
	 * @param ctx the parse tree
	 */
	exitPrefixexp?: (ctx: PrefixexpContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 */
	enterFunctioncall?: (ctx: FunctioncallContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 */
	exitFunctioncall?: (ctx: FunctioncallContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.varOrExp`.
	 * @param ctx the parse tree
	 */
	enterVarOrExp?: (ctx: VarOrExpContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.varOrExp`.
	 * @param ctx the parse tree
	 */
	exitVarOrExp?: (ctx: VarOrExpContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.var`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.var`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.varSuffix`.
	 * @param ctx the parse tree
	 */
	enterVarSuffix?: (ctx: VarSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.varSuffix`.
	 * @param ctx the parse tree
	 */
	exitVarSuffix?: (ctx: VarSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.nameAndArgs`.
	 * @param ctx the parse tree
	 */
	enterNameAndArgs?: (ctx: NameAndArgsContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.nameAndArgs`.
	 * @param ctx the parse tree
	 */
	exitNameAndArgs?: (ctx: NameAndArgsContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgs?: (ctx: ArgsContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgs?: (ctx: ArgsContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.functiondef`.
	 * @param ctx the parse tree
	 */
	enterFunctiondef?: (ctx: FunctiondefContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.functiondef`.
	 * @param ctx the parse tree
	 */
	exitFunctiondef?: (ctx: FunctiondefContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.funcbody`.
	 * @param ctx the parse tree
	 */
	enterFuncbody?: (ctx: FuncbodyContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.funcbody`.
	 * @param ctx the parse tree
	 */
	exitFuncbody?: (ctx: FuncbodyContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.parlist`.
	 * @param ctx the parse tree
	 */
	enterParlist?: (ctx: ParlistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.parlist`.
	 * @param ctx the parse tree
	 */
	exitParlist?: (ctx: ParlistContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.tableconstructor`.
	 * @param ctx the parse tree
	 */
	enterTableconstructor?: (ctx: TableconstructorContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.tableconstructor`.
	 * @param ctx the parse tree
	 */
	exitTableconstructor?: (ctx: TableconstructorContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.fieldlist`.
	 * @param ctx the parse tree
	 */
	enterFieldlist?: (ctx: FieldlistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.fieldlist`.
	 * @param ctx the parse tree
	 */
	exitFieldlist?: (ctx: FieldlistContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.fieldsep`.
	 * @param ctx the parse tree
	 */
	enterFieldsep?: (ctx: FieldsepContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.fieldsep`.
	 * @param ctx the parse tree
	 */
	exitFieldsep?: (ctx: FieldsepContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.operatorOr`.
	 * @param ctx the parse tree
	 */
	enterOperatorOr?: (ctx: OperatorOrContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.operatorOr`.
	 * @param ctx the parse tree
	 */
	exitOperatorOr?: (ctx: OperatorOrContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.operatorAnd`.
	 * @param ctx the parse tree
	 */
	enterOperatorAnd?: (ctx: OperatorAndContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.operatorAnd`.
	 * @param ctx the parse tree
	 */
	exitOperatorAnd?: (ctx: OperatorAndContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.operatorComparison`.
	 * @param ctx the parse tree
	 */
	enterOperatorComparison?: (ctx: OperatorComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.operatorComparison`.
	 * @param ctx the parse tree
	 */
	exitOperatorComparison?: (ctx: OperatorComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.operatorStrcat`.
	 * @param ctx the parse tree
	 */
	enterOperatorStrcat?: (ctx: OperatorStrcatContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.operatorStrcat`.
	 * @param ctx the parse tree
	 */
	exitOperatorStrcat?: (ctx: OperatorStrcatContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.operatorAddSub`.
	 * @param ctx the parse tree
	 */
	enterOperatorAddSub?: (ctx: OperatorAddSubContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.operatorAddSub`.
	 * @param ctx the parse tree
	 */
	exitOperatorAddSub?: (ctx: OperatorAddSubContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.operatorMulDivMod`.
	 * @param ctx the parse tree
	 */
	enterOperatorMulDivMod?: (ctx: OperatorMulDivModContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.operatorMulDivMod`.
	 * @param ctx the parse tree
	 */
	exitOperatorMulDivMod?: (ctx: OperatorMulDivModContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.operatorBitwise`.
	 * @param ctx the parse tree
	 */
	enterOperatorBitwise?: (ctx: OperatorBitwiseContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.operatorBitwise`.
	 * @param ctx the parse tree
	 */
	exitOperatorBitwise?: (ctx: OperatorBitwiseContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.operatorUnary`.
	 * @param ctx the parse tree
	 */
	enterOperatorUnary?: (ctx: OperatorUnaryContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.operatorUnary`.
	 * @param ctx the parse tree
	 */
	exitOperatorUnary?: (ctx: OperatorUnaryContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.operatorPower`.
	 * @param ctx the parse tree
	 */
	enterOperatorPower?: (ctx: OperatorPowerContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.operatorPower`.
	 * @param ctx the parse tree
	 */
	exitOperatorPower?: (ctx: OperatorPowerContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;
}

