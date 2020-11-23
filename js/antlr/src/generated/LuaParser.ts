/* eslint-disable */
// @ts-nocheck
// Generated from Lua.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { LuaListener } from "./LuaListener";
import { LuaVisitor } from "./LuaVisitor";


export class LuaParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly NAME = 56;
	public static readonly NORMALSTRING = 57;
	public static readonly CHARSTRING = 58;
	public static readonly LONGSTRING = 59;
	public static readonly INT = 60;
	public static readonly HEX = 61;
	public static readonly FLOAT = 62;
	public static readonly HEX_FLOAT = 63;
	public static readonly COMMENT = 64;
	public static readonly LINE_COMMENT = 65;
	public static readonly WS = 66;
	public static readonly SHEBANG = 67;
	public static readonly RULE_chunk = 0;
	public static readonly RULE_block = 1;
	public static readonly RULE_stat = 2;
	public static readonly RULE_attnamelist = 3;
	public static readonly RULE_attrib = 4;
	public static readonly RULE_retstat = 5;
	public static readonly RULE_label = 6;
	public static readonly RULE_funcname = 7;
	public static readonly RULE_varlist = 8;
	public static readonly RULE_namelist = 9;
	public static readonly RULE_explist = 10;
	public static readonly RULE_exp = 11;
	public static readonly RULE_prefixexp = 12;
	public static readonly RULE_functioncall = 13;
	public static readonly RULE_varOrExp = 14;
	public static readonly RULE_var = 15;
	public static readonly RULE_varSuffix = 16;
	public static readonly RULE_nameAndArgs = 17;
	public static readonly RULE_args = 18;
	public static readonly RULE_functiondef = 19;
	public static readonly RULE_funcbody = 20;
	public static readonly RULE_parlist = 21;
	public static readonly RULE_tableconstructor = 22;
	public static readonly RULE_fieldlist = 23;
	public static readonly RULE_field = 24;
	public static readonly RULE_fieldsep = 25;
	public static readonly RULE_operatorOr = 26;
	public static readonly RULE_operatorAnd = 27;
	public static readonly RULE_operatorComparison = 28;
	public static readonly RULE_operatorStrcat = 29;
	public static readonly RULE_operatorAddSub = 30;
	public static readonly RULE_operatorMulDivMod = 31;
	public static readonly RULE_operatorBitwise = 32;
	public static readonly RULE_operatorUnary = 33;
	public static readonly RULE_operatorPower = 34;
	public static readonly RULE_number = 35;
	public static readonly RULE_string = 36;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"chunk", "block", "stat", "attnamelist", "attrib", "retstat", "label", 
		"funcname", "varlist", "namelist", "explist", "exp", "prefixexp", "functioncall", 
		"varOrExp", "var", "varSuffix", "nameAndArgs", "args", "functiondef", 
		"funcbody", "parlist", "tableconstructor", "fieldlist", "field", "fieldsep", 
		"operatorOr", "operatorAnd", "operatorComparison", "operatorStrcat", "operatorAddSub", 
		"operatorMulDivMod", "operatorBitwise", "operatorUnary", "operatorPower", 
		"number", "string",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'='", "'break'", "'goto'", "'do'", "'end'", "'while'", 
		"'repeat'", "'until'", "'if'", "'then'", "'elseif'", "'else'", "'for'", 
		"','", "'in'", "'function'", "'local'", "'<'", "'>'", "'return'", "'::'", 
		"'.'", "':'", "'nil'", "'false'", "'true'", "'...'", "'('", "')'", "'['", 
		"']'", "'{'", "'}'", "'or'", "'and'", "'<='", "'>='", "'~='", "'=='", 
		"'..'", "'+'", "'-'", "'*'", "'/'", "'%'", "'//'", "'&'", "'|'", "'~'", 
		"'<<'", "'>>'", "'not'", "'#'", "'^'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"NAME", "NORMALSTRING", "CHARSTRING", "LONGSTRING", "INT", "HEX", "FLOAT", 
		"HEX_FLOAT", "COMMENT", "LINE_COMMENT", "WS", "SHEBANG",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LuaParser._LITERAL_NAMES, LuaParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LuaParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Lua.g4"; }

	// @Override
	public get ruleNames(): string[] { return LuaParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return LuaParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(LuaParser._ATN, this);
	}
	// @RuleVersion(0)
	public chunk(): ChunkContext {
		let _localctx: ChunkContext = new ChunkContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, LuaParser.RULE_chunk);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.block();
			this.state = 75;
			this.match(LuaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, LuaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuaParser.T__0) | (1 << LuaParser.T__2) | (1 << LuaParser.T__3) | (1 << LuaParser.T__4) | (1 << LuaParser.T__6) | (1 << LuaParser.T__7) | (1 << LuaParser.T__9) | (1 << LuaParser.T__13) | (1 << LuaParser.T__16) | (1 << LuaParser.T__17) | (1 << LuaParser.T__21) | (1 << LuaParser.T__28))) !== 0) || _la === LuaParser.NAME) {
				{
				{
				this.state = 77;
				this.stat();
				}
				}
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuaParser.T__20) {
				{
				this.state = 83;
				this.retstat();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stat(): StatContext {
		let _localctx: StatContext = new StatContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, LuaParser.RULE_stat);
		let _la: number;
		try {
			this.state = 167;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 86;
				this.match(LuaParser.T__0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 87;
				this.varlist();
				this.state = 88;
				this.match(LuaParser.T__1);
				this.state = 89;
				this.explist();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 91;
				this.functioncall();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 92;
				this.label();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 93;
				this.match(LuaParser.T__2);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 94;
				this.match(LuaParser.T__3);
				this.state = 95;
				this.match(LuaParser.NAME);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 96;
				this.match(LuaParser.T__4);
				this.state = 97;
				this.block();
				this.state = 98;
				this.match(LuaParser.T__5);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 100;
				this.match(LuaParser.T__6);
				this.state = 101;
				this.exp(0);
				this.state = 102;
				this.match(LuaParser.T__4);
				this.state = 103;
				this.block();
				this.state = 104;
				this.match(LuaParser.T__5);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 106;
				this.match(LuaParser.T__7);
				this.state = 107;
				this.block();
				this.state = 108;
				this.match(LuaParser.T__8);
				this.state = 109;
				this.exp(0);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 111;
				this.match(LuaParser.T__9);
				this.state = 112;
				this.exp(0);
				this.state = 113;
				this.match(LuaParser.T__10);
				this.state = 114;
				this.block();
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuaParser.T__11) {
					{
					{
					this.state = 115;
					this.match(LuaParser.T__11);
					this.state = 116;
					this.exp(0);
					this.state = 117;
					this.match(LuaParser.T__10);
					this.state = 118;
					this.block();
					}
					}
					this.state = 124;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuaParser.T__12) {
					{
					this.state = 125;
					this.match(LuaParser.T__12);
					this.state = 126;
					this.block();
					}
				}

				this.state = 129;
				this.match(LuaParser.T__5);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 131;
				this.match(LuaParser.T__13);
				this.state = 132;
				this.match(LuaParser.NAME);
				this.state = 133;
				this.match(LuaParser.T__1);
				this.state = 134;
				this.exp(0);
				this.state = 135;
				this.match(LuaParser.T__14);
				this.state = 136;
				this.exp(0);
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuaParser.T__14) {
					{
					this.state = 137;
					this.match(LuaParser.T__14);
					this.state = 138;
					this.exp(0);
					}
				}

				this.state = 141;
				this.match(LuaParser.T__4);
				this.state = 142;
				this.block();
				this.state = 143;
				this.match(LuaParser.T__5);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 145;
				this.match(LuaParser.T__13);
				this.state = 146;
				this.namelist();
				this.state = 147;
				this.match(LuaParser.T__15);
				this.state = 148;
				this.explist();
				this.state = 149;
				this.match(LuaParser.T__4);
				this.state = 150;
				this.block();
				this.state = 151;
				this.match(LuaParser.T__5);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 153;
				this.match(LuaParser.T__16);
				this.state = 154;
				this.funcname();
				this.state = 155;
				this.funcbody();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 157;
				this.match(LuaParser.T__17);
				this.state = 158;
				this.match(LuaParser.T__16);
				this.state = 159;
				this.match(LuaParser.NAME);
				this.state = 160;
				this.funcbody();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 161;
				this.match(LuaParser.T__17);
				this.state = 162;
				this.attnamelist();
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuaParser.T__1) {
					{
					this.state = 163;
					this.match(LuaParser.T__1);
					this.state = 164;
					this.explist();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attnamelist(): AttnamelistContext {
		let _localctx: AttnamelistContext = new AttnamelistContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, LuaParser.RULE_attnamelist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this.match(LuaParser.NAME);
			this.state = 170;
			this.attrib();
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuaParser.T__14) {
				{
				{
				this.state = 171;
				this.match(LuaParser.T__14);
				this.state = 172;
				this.match(LuaParser.NAME);
				this.state = 173;
				this.attrib();
				}
				}
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attrib(): AttribContext {
		let _localctx: AttribContext = new AttribContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, LuaParser.RULE_attrib);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuaParser.T__18) {
				{
				this.state = 179;
				this.match(LuaParser.T__18);
				this.state = 180;
				this.match(LuaParser.NAME);
				this.state = 181;
				this.match(LuaParser.T__19);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public retstat(): RetstatContext {
		let _localctx: RetstatContext = new RetstatContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, LuaParser.RULE_retstat);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(LuaParser.T__20);
			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuaParser.T__16) | (1 << LuaParser.T__24) | (1 << LuaParser.T__25) | (1 << LuaParser.T__26) | (1 << LuaParser.T__27) | (1 << LuaParser.T__28))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LuaParser.T__32 - 33)) | (1 << (LuaParser.T__42 - 33)) | (1 << (LuaParser.T__49 - 33)) | (1 << (LuaParser.T__52 - 33)) | (1 << (LuaParser.T__53 - 33)) | (1 << (LuaParser.NAME - 33)) | (1 << (LuaParser.NORMALSTRING - 33)) | (1 << (LuaParser.CHARSTRING - 33)) | (1 << (LuaParser.LONGSTRING - 33)) | (1 << (LuaParser.INT - 33)) | (1 << (LuaParser.HEX - 33)) | (1 << (LuaParser.FLOAT - 33)) | (1 << (LuaParser.HEX_FLOAT - 33)))) !== 0)) {
				{
				this.state = 185;
				this.explist();
				}
			}

			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuaParser.T__0) {
				{
				this.state = 188;
				this.match(LuaParser.T__0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, LuaParser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.match(LuaParser.T__21);
			this.state = 192;
			this.match(LuaParser.NAME);
			this.state = 193;
			this.match(LuaParser.T__21);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcname(): FuncnameContext {
		let _localctx: FuncnameContext = new FuncnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, LuaParser.RULE_funcname);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.match(LuaParser.NAME);
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuaParser.T__22) {
				{
				{
				this.state = 196;
				this.match(LuaParser.T__22);
				this.state = 197;
				this.match(LuaParser.NAME);
				}
				}
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuaParser.T__23) {
				{
				this.state = 203;
				this.match(LuaParser.T__23);
				this.state = 204;
				this.match(LuaParser.NAME);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varlist(): VarlistContext {
		let _localctx: VarlistContext = new VarlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, LuaParser.RULE_varlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this.var();
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuaParser.T__14) {
				{
				{
				this.state = 208;
				this.match(LuaParser.T__14);
				this.state = 209;
				this.var();
				}
				}
				this.state = 214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namelist(): NamelistContext {
		let _localctx: NamelistContext = new NamelistContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, LuaParser.RULE_namelist);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			this.match(LuaParser.NAME);
			this.state = 220;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 216;
					this.match(LuaParser.T__14);
					this.state = 217;
					this.match(LuaParser.NAME);
					}
					}
				}
				this.state = 222;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explist(): ExplistContext {
		let _localctx: ExplistContext = new ExplistContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, LuaParser.RULE_explist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.exp(0);
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuaParser.T__14) {
				{
				{
				this.state = 224;
				this.match(LuaParser.T__14);
				this.state = 225;
				this.exp(0);
				}
				}
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public exp(): ExpContext;
	public exp(_p: number): ExpContext;
	// @RuleVersion(0)
	public exp(_p?: number): ExpContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpContext = new ExpContext(this._ctx, _parentState);
		let _prevctx: ExpContext = _localctx;
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, LuaParser.RULE_exp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuaParser.T__24:
				{
				this.state = 232;
				this.match(LuaParser.T__24);
				}
				break;
			case LuaParser.T__25:
				{
				this.state = 233;
				this.match(LuaParser.T__25);
				}
				break;
			case LuaParser.T__26:
				{
				this.state = 234;
				this.match(LuaParser.T__26);
				}
				break;
			case LuaParser.INT:
			case LuaParser.HEX:
			case LuaParser.FLOAT:
			case LuaParser.HEX_FLOAT:
				{
				this.state = 235;
				this.number();
				}
				break;
			case LuaParser.NORMALSTRING:
			case LuaParser.CHARSTRING:
			case LuaParser.LONGSTRING:
				{
				this.state = 236;
				this.string();
				}
				break;
			case LuaParser.T__27:
				{
				this.state = 237;
				this.match(LuaParser.T__27);
				}
				break;
			case LuaParser.T__16:
				{
				this.state = 238;
				this.functiondef();
				}
				break;
			case LuaParser.T__28:
			case LuaParser.NAME:
				{
				this.state = 239;
				this.prefixexp();
				}
				break;
			case LuaParser.T__32:
				{
				this.state = 240;
				this.tableconstructor();
				}
				break;
			case LuaParser.T__42:
			case LuaParser.T__49:
			case LuaParser.T__52:
			case LuaParser.T__53:
				{
				this.state = 241;
				this.operatorUnary();
				this.state = 242;
				this.exp(8);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 280;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 278;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
						this.state = 246;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 247;
						this.operatorPower();
						this.state = 248;
						this.exp(9);
						}
						break;

					case 2:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
						this.state = 250;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 251;
						this.operatorMulDivMod();
						this.state = 252;
						this.exp(8);
						}
						break;

					case 3:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
						this.state = 254;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 255;
						this.operatorAddSub();
						this.state = 256;
						this.exp(7);
						}
						break;

					case 4:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
						this.state = 258;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 259;
						this.operatorStrcat();
						this.state = 260;
						this.exp(5);
						}
						break;

					case 5:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
						this.state = 262;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 263;
						this.operatorComparison();
						this.state = 264;
						this.exp(5);
						}
						break;

					case 6:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
						this.state = 266;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 267;
						this.operatorAnd();
						this.state = 268;
						this.exp(4);
						}
						break;

					case 7:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
						this.state = 270;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 271;
						this.operatorOr();
						this.state = 272;
						this.exp(3);
						}
						break;

					case 8:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
						this.state = 274;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 275;
						this.operatorBitwise();
						this.state = 276;
						this.exp(2);
						}
						break;
					}
					}
				}
				this.state = 282;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prefixexp(): PrefixexpContext {
		let _localctx: PrefixexpContext = new PrefixexpContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, LuaParser.RULE_prefixexp);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.varOrExp();
			this.state = 287;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 284;
					this.nameAndArgs();
					}
					}
				}
				this.state = 289;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functioncall(): FunctioncallContext {
		let _localctx: FunctioncallContext = new FunctioncallContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, LuaParser.RULE_functioncall);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			this.varOrExp();
			this.state = 292;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 291;
					this.nameAndArgs();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 294;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varOrExp(): VarOrExpContext {
		let _localctx: VarOrExpContext = new VarOrExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, LuaParser.RULE_varOrExp);
		try {
			this.state = 301;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 296;
				this.var();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 297;
				this.match(LuaParser.T__28);
				this.state = 298;
				this.exp(0);
				this.state = 299;
				this.match(LuaParser.T__29);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var(): VarContext {
		let _localctx: VarContext = new VarContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, LuaParser.RULE_var);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuaParser.NAME:
				{
				this.state = 303;
				this.match(LuaParser.NAME);
				}
				break;
			case LuaParser.T__28:
				{
				this.state = 304;
				this.match(LuaParser.T__28);
				this.state = 305;
				this.exp(0);
				this.state = 306;
				this.match(LuaParser.T__29);
				this.state = 307;
				this.varSuffix();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 314;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 311;
					this.varSuffix();
					}
					}
				}
				this.state = 316;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varSuffix(): VarSuffixContext {
		let _localctx: VarSuffixContext = new VarSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, LuaParser.RULE_varSuffix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuaParser.T__23 || _la === LuaParser.T__28 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LuaParser.T__32 - 33)) | (1 << (LuaParser.NORMALSTRING - 33)) | (1 << (LuaParser.CHARSTRING - 33)) | (1 << (LuaParser.LONGSTRING - 33)))) !== 0)) {
				{
				{
				this.state = 317;
				this.nameAndArgs();
				}
				}
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 329;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuaParser.T__30:
				{
				this.state = 323;
				this.match(LuaParser.T__30);
				this.state = 324;
				this.exp(0);
				this.state = 325;
				this.match(LuaParser.T__31);
				}
				break;
			case LuaParser.T__22:
				{
				this.state = 327;
				this.match(LuaParser.T__22);
				this.state = 328;
				this.match(LuaParser.NAME);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameAndArgs(): NameAndArgsContext {
		let _localctx: NameAndArgsContext = new NameAndArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, LuaParser.RULE_nameAndArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuaParser.T__23) {
				{
				this.state = 331;
				this.match(LuaParser.T__23);
				this.state = 332;
				this.match(LuaParser.NAME);
				}
			}

			this.state = 335;
			this.args();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public args(): ArgsContext {
		let _localctx: ArgsContext = new ArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, LuaParser.RULE_args);
		let _la: number;
		try {
			this.state = 344;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuaParser.T__28:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 337;
				this.match(LuaParser.T__28);
				this.state = 339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuaParser.T__16) | (1 << LuaParser.T__24) | (1 << LuaParser.T__25) | (1 << LuaParser.T__26) | (1 << LuaParser.T__27) | (1 << LuaParser.T__28))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LuaParser.T__32 - 33)) | (1 << (LuaParser.T__42 - 33)) | (1 << (LuaParser.T__49 - 33)) | (1 << (LuaParser.T__52 - 33)) | (1 << (LuaParser.T__53 - 33)) | (1 << (LuaParser.NAME - 33)) | (1 << (LuaParser.NORMALSTRING - 33)) | (1 << (LuaParser.CHARSTRING - 33)) | (1 << (LuaParser.LONGSTRING - 33)) | (1 << (LuaParser.INT - 33)) | (1 << (LuaParser.HEX - 33)) | (1 << (LuaParser.FLOAT - 33)) | (1 << (LuaParser.HEX_FLOAT - 33)))) !== 0)) {
					{
					this.state = 338;
					this.explist();
					}
				}

				this.state = 341;
				this.match(LuaParser.T__29);
				}
				break;
			case LuaParser.T__32:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 342;
				this.tableconstructor();
				}
				break;
			case LuaParser.NORMALSTRING:
			case LuaParser.CHARSTRING:
			case LuaParser.LONGSTRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 343;
				this.string();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functiondef(): FunctiondefContext {
		let _localctx: FunctiondefContext = new FunctiondefContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, LuaParser.RULE_functiondef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.match(LuaParser.T__16);
			this.state = 347;
			this.funcbody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcbody(): FuncbodyContext {
		let _localctx: FuncbodyContext = new FuncbodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, LuaParser.RULE_funcbody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			this.match(LuaParser.T__28);
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuaParser.T__27 || _la === LuaParser.NAME) {
				{
				this.state = 350;
				this.parlist();
				}
			}

			this.state = 353;
			this.match(LuaParser.T__29);
			this.state = 354;
			this.block();
			this.state = 355;
			this.match(LuaParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parlist(): ParlistContext {
		let _localctx: ParlistContext = new ParlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, LuaParser.RULE_parlist);
		let _la: number;
		try {
			this.state = 363;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuaParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 357;
				this.namelist();
				this.state = 360;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuaParser.T__14) {
					{
					this.state = 358;
					this.match(LuaParser.T__14);
					this.state = 359;
					this.match(LuaParser.T__27);
					}
				}

				}
				break;
			case LuaParser.T__27:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 362;
				this.match(LuaParser.T__27);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableconstructor(): TableconstructorContext {
		let _localctx: TableconstructorContext = new TableconstructorContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, LuaParser.RULE_tableconstructor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			this.match(LuaParser.T__32);
			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuaParser.T__16) | (1 << LuaParser.T__24) | (1 << LuaParser.T__25) | (1 << LuaParser.T__26) | (1 << LuaParser.T__27) | (1 << LuaParser.T__28) | (1 << LuaParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LuaParser.T__32 - 33)) | (1 << (LuaParser.T__42 - 33)) | (1 << (LuaParser.T__49 - 33)) | (1 << (LuaParser.T__52 - 33)) | (1 << (LuaParser.T__53 - 33)) | (1 << (LuaParser.NAME - 33)) | (1 << (LuaParser.NORMALSTRING - 33)) | (1 << (LuaParser.CHARSTRING - 33)) | (1 << (LuaParser.LONGSTRING - 33)) | (1 << (LuaParser.INT - 33)) | (1 << (LuaParser.HEX - 33)) | (1 << (LuaParser.FLOAT - 33)) | (1 << (LuaParser.HEX_FLOAT - 33)))) !== 0)) {
				{
				this.state = 366;
				this.fieldlist();
				}
			}

			this.state = 369;
			this.match(LuaParser.T__33);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldlist(): FieldlistContext {
		let _localctx: FieldlistContext = new FieldlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, LuaParser.RULE_fieldlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.field();
			this.state = 377;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 372;
					this.fieldsep();
					this.state = 373;
					this.field();
					}
					}
				}
				this.state = 379;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			}
			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuaParser.T__0 || _la === LuaParser.T__14) {
				{
				this.state = 380;
				this.fieldsep();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, LuaParser.RULE_field);
		try {
			this.state = 393;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 383;
				this.match(LuaParser.T__30);
				this.state = 384;
				this.exp(0);
				this.state = 385;
				this.match(LuaParser.T__31);
				this.state = 386;
				this.match(LuaParser.T__1);
				this.state = 387;
				this.exp(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 389;
				this.match(LuaParser.NAME);
				this.state = 390;
				this.match(LuaParser.T__1);
				this.state = 391;
				this.exp(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 392;
				this.exp(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldsep(): FieldsepContext {
		let _localctx: FieldsepContext = new FieldsepContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, LuaParser.RULE_fieldsep);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			_la = this._input.LA(1);
			if (!(_la === LuaParser.T__0 || _la === LuaParser.T__14)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorOr(): OperatorOrContext {
		let _localctx: OperatorOrContext = new OperatorOrContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, LuaParser.RULE_operatorOr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			this.match(LuaParser.T__34);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorAnd(): OperatorAndContext {
		let _localctx: OperatorAndContext = new OperatorAndContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, LuaParser.RULE_operatorAnd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
			this.match(LuaParser.T__35);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorComparison(): OperatorComparisonContext {
		let _localctx: OperatorComparisonContext = new OperatorComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, LuaParser.RULE_operatorComparison);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			_la = this._input.LA(1);
			if (!(((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & ((1 << (LuaParser.T__18 - 19)) | (1 << (LuaParser.T__19 - 19)) | (1 << (LuaParser.T__36 - 19)) | (1 << (LuaParser.T__37 - 19)) | (1 << (LuaParser.T__38 - 19)) | (1 << (LuaParser.T__39 - 19)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorStrcat(): OperatorStrcatContext {
		let _localctx: OperatorStrcatContext = new OperatorStrcatContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, LuaParser.RULE_operatorStrcat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			this.match(LuaParser.T__40);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorAddSub(): OperatorAddSubContext {
		let _localctx: OperatorAddSubContext = new OperatorAddSubContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, LuaParser.RULE_operatorAddSub);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			_la = this._input.LA(1);
			if (!(_la === LuaParser.T__41 || _la === LuaParser.T__42)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorMulDivMod(): OperatorMulDivModContext {
		let _localctx: OperatorMulDivModContext = new OperatorMulDivModContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, LuaParser.RULE_operatorMulDivMod);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			_la = this._input.LA(1);
			if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (LuaParser.T__43 - 44)) | (1 << (LuaParser.T__44 - 44)) | (1 << (LuaParser.T__45 - 44)) | (1 << (LuaParser.T__46 - 44)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorBitwise(): OperatorBitwiseContext {
		let _localctx: OperatorBitwiseContext = new OperatorBitwiseContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, LuaParser.RULE_operatorBitwise);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			_la = this._input.LA(1);
			if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (LuaParser.T__47 - 48)) | (1 << (LuaParser.T__48 - 48)) | (1 << (LuaParser.T__49 - 48)) | (1 << (LuaParser.T__50 - 48)) | (1 << (LuaParser.T__51 - 48)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorUnary(): OperatorUnaryContext {
		let _localctx: OperatorUnaryContext = new OperatorUnaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, LuaParser.RULE_operatorUnary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			_la = this._input.LA(1);
			if (!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (LuaParser.T__42 - 43)) | (1 << (LuaParser.T__49 - 43)) | (1 << (LuaParser.T__52 - 43)) | (1 << (LuaParser.T__53 - 43)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorPower(): OperatorPowerContext {
		let _localctx: OperatorPowerContext = new OperatorPowerContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, LuaParser.RULE_operatorPower);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this.match(LuaParser.T__54);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, LuaParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			_la = this._input.LA(1);
			if (!(((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (LuaParser.INT - 60)) | (1 << (LuaParser.HEX - 60)) | (1 << (LuaParser.FLOAT - 60)) | (1 << (LuaParser.HEX_FLOAT - 60)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, LuaParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			_la = this._input.LA(1);
			if (!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (LuaParser.NORMALSTRING - 57)) | (1 << (LuaParser.CHARSTRING - 57)) | (1 << (LuaParser.LONGSTRING - 57)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 11:
			return this.exp_sempred(_localctx as ExpContext, predIndex);
		}
		return true;
	}
	private exp_sempred(_localctx: ExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);

		case 1:
			return this.precpred(this._ctx, 7);

		case 2:
			return this.precpred(this._ctx, 6);

		case 3:
			return this.precpred(this._ctx, 5);

		case 4:
			return this.precpred(this._ctx, 4);

		case 5:
			return this.precpred(this._ctx, 3);

		case 6:
			return this.precpred(this._ctx, 2);

		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03E\u01A6\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x03\x02\x03\x02\x03\x02\x03\x03\x07\x03Q\n" +
		"\x03\f\x03\x0E\x03T\v\x03\x03\x03\x05\x03W\n\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04{\n\x04\f\x04\x0E\x04~\v\x04\x03" +
		"\x04\x03\x04\x05\x04\x82\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\x8E\n\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xA8\n\x04\x05\x04\xAA\n\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xB1\n\x05\f\x05\x0E\x05" +
		"\xB4\v\x05\x03\x06\x03\x06\x03\x06\x05\x06\xB9\n\x06\x03\x07\x03\x07\x05" +
		"\x07\xBD\n\x07\x03\x07\x05\x07\xC0\n\x07\x03\b\x03\b\x03\b\x03\b\x03\t" +
		"\x03\t\x03\t\x07\t\xC9\n\t\f\t\x0E\t\xCC\v\t\x03\t\x03\t\x05\t\xD0\n\t" +
		"\x03\n\x03\n\x03\n\x07\n\xD5\n\n\f\n\x0E\n\xD8\v\n\x03\v\x03\v\x03\v\x07" +
		"\v\xDD\n\v\f\v\x0E\v\xE0\v\v\x03\f\x03\f\x03\f\x07\f\xE5\n\f\f\f\x0E\f" +
		"\xE8\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x05\r\xF7\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x07\r\u0119\n\r\f\r\x0E\r\u011C\v\r\x03\x0E\x03\x0E\x07\x0E\u0120" +
		"\n\x0E\f\x0E\x0E\x0E\u0123\v\x0E\x03\x0F\x03\x0F\x06\x0F\u0127\n\x0F\r" +
		"\x0F\x0E\x0F\u0128\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0130" +
		"\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0138\n" +
		"\x11\x03\x11\x07\x11\u013B\n\x11\f\x11\x0E\x11\u013E\v\x11\x03\x12\x07" +
		"\x12\u0141\n\x12\f\x12\x0E\x12\u0144\v\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x05\x12\u014C\n\x12\x03\x13\x03\x13\x05\x13\u0150" +
		"\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\u0156\n\x14\x03\x14\x03" +
		"\x14\x03\x14\x05\x14\u015B\n\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16" +
		"\x05\x16\u0162\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03" +
		"\x17\x05\x17\u016B\n\x17\x03\x17\x05\x17\u016E\n\x17\x03\x18\x03\x18\x05" +
		"\x18\u0172\n\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19" +
		"\u017A\n\x19\f\x19\x0E\x19\u017D\v\x19\x03\x19\x05\x19\u0180\n\x19\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x05\x1A\u018C\n\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#" +
		"\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03&\x02\x02\x03\x18\'\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02\x02\n\x04\x02\x03\x03\x11\x11\x04\x02\x15\x16\'*\x03\x02,-\x03\x02" +
		".1\x03\x0226\x05\x02--4478\x03\x02>A\x03\x02;=\x02\u01C1\x02L\x03\x02" +
		"\x02\x02\x04R\x03\x02\x02\x02\x06\xA9\x03\x02\x02\x02\b\xAB\x03\x02\x02" +
		"\x02\n\xB8\x03\x02\x02\x02\f\xBA\x03\x02\x02\x02\x0E\xC1\x03\x02\x02\x02" +
		"\x10\xC5\x03\x02\x02\x02\x12\xD1\x03\x02\x02\x02\x14\xD9\x03\x02\x02\x02" +
		"\x16\xE1\x03\x02\x02\x02\x18\xF6\x03\x02\x02\x02\x1A\u011D\x03\x02\x02" +
		"\x02\x1C\u0124\x03\x02\x02\x02\x1E\u012F\x03\x02\x02\x02 \u0137\x03\x02" +
		"\x02\x02\"\u0142\x03\x02\x02\x02$\u014F\x03\x02\x02\x02&\u015A\x03\x02" +
		"\x02\x02(\u015C\x03\x02\x02\x02*\u015F\x03\x02\x02\x02,\u016D\x03\x02" +
		"\x02\x02.\u016F\x03\x02\x02\x020\u0175\x03\x02\x02\x022\u018B\x03\x02" +
		"\x02\x024\u018D\x03\x02\x02\x026\u018F\x03\x02\x02\x028\u0191\x03\x02" +
		"\x02\x02:\u0193\x03\x02\x02\x02<\u0195\x03\x02\x02\x02>\u0197\x03\x02" +
		"\x02\x02@\u0199\x03\x02\x02\x02B\u019B\x03\x02\x02\x02D\u019D\x03\x02" +
		"\x02\x02F\u019F\x03\x02\x02\x02H\u01A1\x03\x02\x02\x02J\u01A3\x03\x02" +
		"\x02\x02LM\x05\x04\x03\x02MN\x07\x02\x02\x03N\x03\x03\x02\x02\x02OQ\x05" +
		"\x06\x04\x02PO\x03\x02\x02\x02QT\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03" +
		"\x02\x02\x02SV\x03\x02\x02\x02TR\x03\x02\x02\x02UW\x05\f\x07\x02VU\x03" +
		"\x02\x02\x02VW\x03\x02\x02\x02W\x05\x03\x02\x02\x02X\xAA\x07\x03\x02\x02" +
		"YZ\x05\x12\n\x02Z[\x07\x04\x02\x02[\\\x05\x16\f\x02\\\xAA\x03\x02\x02" +
		"\x02]\xAA\x05\x1C\x0F\x02^\xAA\x05\x0E\b\x02_\xAA\x07\x05\x02\x02`a\x07" +
		"\x06\x02\x02a\xAA\x07:\x02\x02bc\x07\x07\x02\x02cd\x05\x04\x03\x02de\x07" +
		"\b\x02\x02e\xAA\x03\x02\x02\x02fg\x07\t\x02\x02gh\x05\x18\r\x02hi\x07" +
		"\x07\x02\x02ij\x05\x04\x03\x02jk\x07\b\x02\x02k\xAA\x03\x02\x02\x02lm" +
		"\x07\n\x02\x02mn\x05\x04\x03\x02no\x07\v\x02\x02op\x05\x18\r\x02p\xAA" +
		"\x03\x02\x02\x02qr\x07\f\x02\x02rs\x05\x18\r\x02st\x07\r\x02\x02t|\x05" +
		"\x04\x03\x02uv\x07\x0E\x02\x02vw\x05\x18\r\x02wx\x07\r\x02\x02xy\x05\x04" +
		"\x03\x02y{\x03\x02\x02\x02zu\x03\x02\x02\x02{~\x03\x02\x02\x02|z\x03\x02" +
		"\x02\x02|}\x03\x02\x02\x02}\x81\x03\x02\x02\x02~|\x03\x02\x02\x02\x7F" +
		"\x80\x07\x0F\x02\x02\x80\x82\x05\x04\x03\x02\x81\x7F\x03\x02\x02\x02\x81" +
		"\x82\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x84\x07\b\x02\x02\x84" +
		"\xAA\x03\x02\x02\x02\x85\x86\x07\x10\x02\x02\x86\x87\x07:\x02\x02\x87" +
		"\x88\x07\x04\x02\x02\x88\x89\x05\x18\r\x02\x89\x8A\x07\x11\x02\x02\x8A" +
		"\x8D\x05\x18\r\x02\x8B\x8C\x07\x11\x02\x02\x8C\x8E\x05\x18\r\x02\x8D\x8B" +
		"\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x90" +
		"\x07\x07\x02\x02\x90\x91\x05\x04\x03\x02\x91\x92\x07\b\x02\x02\x92\xAA" +
		"\x03\x02\x02\x02\x93\x94\x07\x10\x02\x02\x94\x95\x05\x14\v\x02\x95\x96" +
		"\x07\x12\x02\x02\x96\x97\x05\x16\f\x02\x97\x98\x07\x07\x02\x02\x98\x99" +
		"\x05\x04\x03\x02\x99\x9A\x07\b\x02\x02\x9A\xAA\x03\x02\x02\x02\x9B\x9C" +
		"\x07\x13\x02\x02\x9C\x9D\x05\x10\t\x02\x9D\x9E\x05*\x16\x02\x9E\xAA\x03" +
		"\x02\x02\x02\x9F\xA0\x07\x14\x02\x02\xA0\xA1\x07\x13\x02\x02\xA1\xA2\x07" +
		":\x02\x02\xA2\xAA\x05*\x16\x02\xA3\xA4\x07\x14\x02\x02\xA4\xA7\x05\b\x05" +
		"\x02\xA5\xA6\x07\x04\x02\x02\xA6\xA8\x05\x16\f\x02\xA7\xA5\x03\x02\x02" +
		"\x02\xA7\xA8\x03\x02\x02\x02\xA8\xAA\x03\x02\x02\x02\xA9X\x03\x02\x02" +
		"\x02\xA9Y\x03\x02\x02\x02\xA9]\x03\x02\x02\x02\xA9^\x03\x02\x02\x02\xA9" +
		"_\x03\x02\x02\x02\xA9`\x03\x02\x02\x02\xA9b\x03\x02\x02\x02\xA9f\x03\x02" +
		"\x02\x02\xA9l\x03\x02\x02\x02\xA9q\x03\x02\x02\x02\xA9\x85\x03\x02\x02" +
		"\x02\xA9\x93\x03\x02\x02\x02\xA9\x9B\x03\x02\x02\x02\xA9\x9F\x03\x02\x02" +
		"\x02\xA9\xA3\x03\x02\x02\x02\xAA\x07\x03\x02\x02\x02\xAB\xAC\x07:\x02" +
		"\x02\xAC\xB2\x05\n\x06\x02\xAD\xAE\x07\x11\x02\x02\xAE\xAF\x07:\x02\x02" +
		"\xAF\xB1\x05\n\x06\x02\xB0\xAD\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02" +
		"\xB2\xB0\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\t\x03\x02\x02\x02" +
		"\xB4\xB2\x03\x02\x02\x02\xB5\xB6\x07\x15\x02\x02\xB6\xB7\x07:\x02\x02" +
		"\xB7\xB9\x07\x16\x02\x02\xB8\xB5\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02" +
		"\xB9\v\x03\x02\x02\x02\xBA\xBC\x07\x17\x02\x02\xBB\xBD\x05\x16\f\x02\xBC" +
		"\xBB\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBF\x03\x02\x02\x02\xBE" +
		"\xC0\x07\x03\x02\x02\xBF\xBE\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0" +
		"\r\x03\x02\x02\x02\xC1\xC2\x07\x18\x02\x02\xC2\xC3\x07:\x02\x02\xC3\xC4" +
		"\x07\x18\x02\x02\xC4\x0F\x03\x02\x02\x02\xC5\xCA\x07:\x02\x02\xC6\xC7" +
		"\x07\x19\x02\x02\xC7\xC9\x07:\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCC" +
		"\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCF" +
		"\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCD\xCE\x07\x1A\x02\x02\xCE\xD0" +
		"\x07:\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\x11" +
		"\x03\x02\x02\x02\xD1\xD6\x05 \x11\x02\xD2\xD3\x07\x11\x02\x02\xD3\xD5" +
		"\x05 \x11\x02\xD4\xD2\x03\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4" +
		"\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\x13\x03\x02\x02\x02\xD8\xD6" +
		"\x03\x02\x02\x02\xD9\xDE\x07:\x02\x02\xDA\xDB\x07\x11\x02\x02\xDB\xDD" +
		"\x07:\x02\x02\xDC\xDA\x03\x02\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE\xDC" +
		"\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\x15\x03\x02\x02\x02\xE0\xDE" +
		"\x03\x02\x02\x02\xE1\xE6\x05\x18\r\x02\xE2\xE3\x07\x11\x02\x02\xE3\xE5" +
		"\x05\x18\r\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE4" +
		"\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\x17\x03\x02\x02\x02\xE8\xE6" +
		"\x03\x02\x02\x02\xE9\xEA\b\r\x01\x02\xEA\xF7\x07\x1B\x02\x02\xEB\xF7\x07" +
		"\x1C\x02\x02\xEC\xF7\x07\x1D\x02\x02\xED\xF7\x05H%\x02\xEE\xF7\x05J&\x02" +
		"\xEF\xF7\x07\x1E\x02\x02\xF0\xF7\x05(\x15\x02\xF1\xF7\x05\x1A\x0E\x02" +
		"\xF2\xF7\x05.\x18\x02\xF3\xF4\x05D#\x02\xF4\xF5\x05\x18\r\n\xF5\xF7\x03" +
		"\x02\x02\x02\xF6\xE9\x03\x02\x02\x02\xF6\xEB\x03\x02\x02\x02\xF6\xEC\x03" +
		"\x02\x02\x02\xF6\xED\x03\x02\x02\x02\xF6\xEE\x03\x02\x02\x02\xF6\xEF\x03" +
		"\x02\x02\x02\xF6\xF0\x03\x02\x02\x02\xF6\xF1\x03\x02\x02\x02\xF6\xF2\x03" +
		"\x02\x02\x02\xF6\xF3\x03\x02\x02\x02\xF7\u011A\x03\x02\x02\x02\xF8\xF9" +
		"\f\v\x02\x02\xF9\xFA\x05F$\x02\xFA\xFB\x05\x18\r\v\xFB\u0119\x03\x02\x02" +
		"\x02\xFC\xFD\f\t\x02\x02\xFD\xFE\x05@!\x02\xFE\xFF\x05\x18\r\n\xFF\u0119" +
		"\x03\x02\x02\x02\u0100\u0101\f\b\x02\x02\u0101\u0102\x05> \x02\u0102\u0103" +
		"\x05\x18\r\t\u0103\u0119\x03\x02\x02\x02\u0104\u0105\f\x07\x02\x02\u0105" +
		"\u0106\x05<\x1F\x02\u0106\u0107\x05\x18\r\x07\u0107\u0119\x03\x02\x02" +
		"\x02\u0108\u0109\f\x06\x02\x02\u0109\u010A\x05:\x1E\x02\u010A\u010B\x05" +
		"\x18\r\x07\u010B\u0119\x03\x02\x02\x02\u010C\u010D\f\x05\x02\x02\u010D" +
		"\u010E\x058\x1D\x02\u010E\u010F\x05\x18\r\x06\u010F\u0119\x03\x02\x02" +
		"\x02\u0110\u0111\f\x04\x02\x02\u0111\u0112\x056\x1C\x02\u0112\u0113\x05" +
		"\x18\r\x05\u0113\u0119\x03\x02\x02\x02\u0114\u0115\f\x03\x02\x02\u0115" +
		"\u0116\x05B\"\x02\u0116\u0117\x05\x18\r\x04\u0117\u0119\x03\x02\x02\x02" +
		"\u0118\xF8\x03\x02\x02\x02\u0118\xFC\x03\x02\x02\x02\u0118\u0100\x03\x02" +
		"\x02\x02\u0118\u0104\x03\x02\x02\x02\u0118\u0108\x03\x02\x02\x02\u0118" +
		"\u010C\x03\x02\x02\x02\u0118\u0110\x03\x02\x02\x02\u0118\u0114\x03\x02" +
		"\x02\x02\u0119\u011C\x03\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011A" +
		"\u011B\x03\x02\x02\x02\u011B\x19\x03\x02\x02\x02\u011C\u011A\x03\x02\x02" +
		"\x02\u011D\u0121\x05\x1E\x10\x02\u011E\u0120\x05$\x13\x02\u011F\u011E" +
		"\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02" +
		"\u0121\u0122\x03\x02\x02\x02\u0122\x1B\x03\x02\x02\x02\u0123\u0121\x03" +
		"\x02\x02\x02\u0124\u0126\x05\x1E\x10\x02\u0125\u0127\x05$\x13\x02\u0126" +
		"\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u0126\x03\x02" +
		"\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\x1D\x03\x02\x02\x02\u012A\u0130" +
		"\x05 \x11\x02\u012B\u012C\x07\x1F\x02\x02\u012C\u012D\x05\x18\r\x02\u012D" +
		"\u012E\x07 \x02\x02\u012E\u0130\x03\x02\x02\x02\u012F\u012A\x03\x02\x02" +
		"\x02\u012F\u012B\x03\x02\x02\x02\u0130\x1F\x03\x02\x02\x02\u0131\u0138" +
		"\x07:\x02\x02\u0132\u0133\x07\x1F\x02\x02\u0133\u0134\x05\x18\r\x02\u0134" +
		"\u0135\x07 \x02\x02\u0135\u0136\x05\"\x12\x02\u0136\u0138\x03\x02\x02" +
		"\x02\u0137\u0131\x03\x02\x02\x02\u0137\u0132\x03\x02\x02\x02\u0138\u013C" +
		"\x03\x02\x02\x02\u0139\u013B\x05\"\x12\x02\u013A\u0139\x03\x02\x02\x02" +
		"\u013B\u013E\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013C\u013D\x03" +
		"\x02\x02\x02\u013D!\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013F" +
		"\u0141\x05$\x13\x02\u0140\u013F\x03\x02\x02\x02\u0141\u0144\x03\x02\x02" +
		"\x02\u0142\u0140\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u014B" +
		"\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0145\u0146\x07!\x02\x02" +
		"\u0146\u0147\x05\x18\r\x02\u0147\u0148\x07\"\x02\x02\u0148\u014C\x03\x02" +
		"\x02\x02\u0149\u014A\x07\x19\x02\x02\u014A\u014C\x07:\x02\x02\u014B\u0145" +
		"\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014C#\x03\x02\x02\x02\u014D" +
		"\u014E\x07\x1A\x02\x02\u014E\u0150\x07:\x02\x02\u014F\u014D\x03\x02\x02" +
		"\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0152" +
		"\x05&\x14\x02\u0152%\x03\x02\x02\x02\u0153\u0155\x07\x1F\x02\x02\u0154" +
		"\u0156\x05\x16\f\x02\u0155\u0154\x03\x02\x02\x02\u0155\u0156\x03\x02\x02" +
		"\x02\u0156\u0157\x03\x02\x02\x02\u0157\u015B\x07 \x02\x02\u0158\u015B" +
		"\x05.\x18\x02\u0159\u015B\x05J&\x02\u015A\u0153\x03\x02\x02\x02\u015A" +
		"\u0158\x03\x02\x02\x02\u015A\u0159\x03\x02\x02\x02\u015B\'\x03\x02\x02" +
		"\x02\u015C\u015D\x07\x13\x02\x02\u015D\u015E\x05*\x16\x02\u015E)\x03\x02" +
		"\x02\x02\u015F\u0161\x07\x1F\x02\x02\u0160\u0162\x05,\x17\x02\u0161\u0160" +
		"\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02" +
		"\u0163\u0164\x07 \x02\x02\u0164\u0165\x05\x04\x03\x02\u0165\u0166\x07" +
		"\b\x02\x02\u0166+\x03\x02\x02\x02\u0167\u016A\x05\x14\v\x02\u0168\u0169" +
		"\x07\x11\x02\x02\u0169\u016B\x07\x1E\x02\x02\u016A\u0168\x03\x02\x02\x02" +
		"\u016A\u016B\x03\x02\x02\x02\u016B\u016E\x03\x02\x02\x02\u016C\u016E\x07" +
		"\x1E\x02\x02\u016D\u0167\x03\x02\x02\x02\u016D\u016C\x03\x02\x02\x02\u016E" +
		"-\x03\x02\x02\x02\u016F\u0171\x07#\x02\x02\u0170\u0172\x050\x19\x02\u0171" +
		"\u0170\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172\u0173\x03\x02" +
		"\x02\x02\u0173\u0174\x07$\x02\x02\u0174/\x03\x02\x02\x02\u0175\u017B\x05" +
		"2\x1A\x02\u0176\u0177\x054\x1B\x02\u0177\u0178\x052\x1A\x02\u0178\u017A" +
		"\x03\x02\x02\x02\u0179\u0176\x03\x02\x02\x02\u017A\u017D\x03\x02\x02\x02" +
		"\u017B\u0179\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017F\x03" +
		"\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017E\u0180\x054\x1B\x02\u017F" +
		"\u017E\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u01801\x03\x02\x02" +
		"\x02\u0181\u0182\x07!\x02\x02\u0182\u0183\x05\x18\r\x02\u0183\u0184\x07" +
		"\"\x02\x02\u0184\u0185\x07\x04\x02\x02\u0185\u0186\x05\x18\r\x02\u0186" +
		"\u018C\x03\x02\x02\x02\u0187\u0188\x07:\x02\x02\u0188\u0189\x07\x04\x02" +
		"\x02\u0189\u018C\x05\x18\r\x02\u018A\u018C\x05\x18\r\x02\u018B\u0181\x03" +
		"\x02\x02\x02\u018B\u0187\x03\x02\x02\x02\u018B\u018A\x03\x02\x02\x02\u018C" +
		"3\x03\x02\x02\x02\u018D\u018E\t\x02\x02\x02\u018E5\x03\x02\x02\x02\u018F" +
		"\u0190\x07%\x02\x02\u01907\x03\x02\x02\x02\u0191\u0192\x07&\x02\x02\u0192" +
		"9\x03\x02\x02\x02\u0193\u0194\t\x03\x02\x02\u0194;\x03\x02\x02\x02\u0195" +
		"\u0196\x07+\x02\x02\u0196=\x03\x02\x02\x02\u0197\u0198\t\x04\x02\x02\u0198" +
		"?\x03\x02\x02\x02\u0199\u019A\t\x05\x02\x02\u019AA\x03\x02\x02\x02\u019B" +
		"\u019C\t\x06\x02\x02\u019CC\x03\x02\x02\x02\u019D\u019E\t\x07\x02\x02" +
		"\u019EE\x03\x02\x02\x02\u019F\u01A0\x079\x02\x02\u01A0G\x03\x02\x02\x02" +
		"\u01A1\u01A2\t\b\x02\x02\u01A2I\x03\x02\x02\x02\u01A3\u01A4\t\t\x02\x02" +
		"\u01A4K\x03\x02\x02\x02&RV|\x81\x8D\xA7\xA9\xB2\xB8\xBC\xBF\xCA\xCF\xD6" +
		"\xDE\xE6\xF6\u0118\u011A\u0121\u0128\u012F\u0137\u013C\u0142\u014B\u014F" +
		"\u0155\u015A\u0161\u016A\u016D\u0171\u017B\u017F\u018B";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LuaParser.__ATN) {
			LuaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LuaParser._serializedATN));
		}

		return LuaParser.__ATN;
	}

}

export class ChunkContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public EOF(): TerminalNode { return this.getToken(LuaParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_chunk; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterChunk) {
			listener.enterChunk(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitChunk) {
			listener.exitChunk(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitChunk) {
			return visitor.visitChunk(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public stat(): StatContext[];
	public stat(i: number): StatContext;
	public stat(i?: number): StatContext | StatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatContext);
		} else {
			return this.getRuleContext(i, StatContext);
		}
	}
	public retstat(): RetstatContext | undefined {
		return this.tryGetRuleContext(0, RetstatContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_block; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatContext extends ParserRuleContext {
	public varlist(): VarlistContext | undefined {
		return this.tryGetRuleContext(0, VarlistContext);
	}
	public explist(): ExplistContext | undefined {
		return this.tryGetRuleContext(0, ExplistContext);
	}
	public functioncall(): FunctioncallContext | undefined {
		return this.tryGetRuleContext(0, FunctioncallContext);
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(LuaParser.NAME, 0); }
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public namelist(): NamelistContext | undefined {
		return this.tryGetRuleContext(0, NamelistContext);
	}
	public funcname(): FuncnameContext | undefined {
		return this.tryGetRuleContext(0, FuncnameContext);
	}
	public funcbody(): FuncbodyContext | undefined {
		return this.tryGetRuleContext(0, FuncbodyContext);
	}
	public attnamelist(): AttnamelistContext | undefined {
		return this.tryGetRuleContext(0, AttnamelistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_stat; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterStat) {
			listener.enterStat(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitStat) {
			listener.exitStat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitStat) {
			return visitor.visitStat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttnamelistContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuaParser.NAME);
		} else {
			return this.getToken(LuaParser.NAME, i);
		}
	}
	public attrib(): AttribContext[];
	public attrib(i: number): AttribContext;
	public attrib(i?: number): AttribContext | AttribContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttribContext);
		} else {
			return this.getRuleContext(i, AttribContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_attnamelist; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterAttnamelist) {
			listener.enterAttnamelist(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitAttnamelist) {
			listener.exitAttnamelist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitAttnamelist) {
			return visitor.visitAttnamelist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttribContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(LuaParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_attrib; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterAttrib) {
			listener.enterAttrib(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitAttrib) {
			listener.exitAttrib(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitAttrib) {
			return visitor.visitAttrib(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RetstatContext extends ParserRuleContext {
	public explist(): ExplistContext | undefined {
		return this.tryGetRuleContext(0, ExplistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_retstat; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterRetstat) {
			listener.enterRetstat(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitRetstat) {
			listener.exitRetstat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitRetstat) {
			return visitor.visitRetstat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(LuaParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_label; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitLabel) {
			return visitor.visitLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncnameContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuaParser.NAME);
		} else {
			return this.getToken(LuaParser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_funcname; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterFuncname) {
			listener.enterFuncname(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitFuncname) {
			listener.exitFuncname(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitFuncname) {
			return visitor.visitFuncname(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarlistContext extends ParserRuleContext {
	public var(): VarContext[];
	public var(i: number): VarContext;
	public var(i?: number): VarContext | VarContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarContext);
		} else {
			return this.getRuleContext(i, VarContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_varlist; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterVarlist) {
			listener.enterVarlist(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitVarlist) {
			listener.exitVarlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitVarlist) {
			return visitor.visitVarlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamelistContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuaParser.NAME);
		} else {
			return this.getToken(LuaParser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_namelist; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterNamelist) {
			listener.enterNamelist(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitNamelist) {
			listener.exitNamelist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitNamelist) {
			return visitor.visitNamelist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplistContext extends ParserRuleContext {
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_explist; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterExplist) {
			listener.enterExplist(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitExplist) {
			listener.exitExplist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitExplist) {
			return visitor.visitExplist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public functiondef(): FunctiondefContext | undefined {
		return this.tryGetRuleContext(0, FunctiondefContext);
	}
	public prefixexp(): PrefixexpContext | undefined {
		return this.tryGetRuleContext(0, PrefixexpContext);
	}
	public tableconstructor(): TableconstructorContext | undefined {
		return this.tryGetRuleContext(0, TableconstructorContext);
	}
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public operatorPower(): OperatorPowerContext | undefined {
		return this.tryGetRuleContext(0, OperatorPowerContext);
	}
	public operatorUnary(): OperatorUnaryContext | undefined {
		return this.tryGetRuleContext(0, OperatorUnaryContext);
	}
	public operatorMulDivMod(): OperatorMulDivModContext | undefined {
		return this.tryGetRuleContext(0, OperatorMulDivModContext);
	}
	public operatorAddSub(): OperatorAddSubContext | undefined {
		return this.tryGetRuleContext(0, OperatorAddSubContext);
	}
	public operatorStrcat(): OperatorStrcatContext | undefined {
		return this.tryGetRuleContext(0, OperatorStrcatContext);
	}
	public operatorComparison(): OperatorComparisonContext | undefined {
		return this.tryGetRuleContext(0, OperatorComparisonContext);
	}
	public operatorAnd(): OperatorAndContext | undefined {
		return this.tryGetRuleContext(0, OperatorAndContext);
	}
	public operatorOr(): OperatorOrContext | undefined {
		return this.tryGetRuleContext(0, OperatorOrContext);
	}
	public operatorBitwise(): OperatorBitwiseContext | undefined {
		return this.tryGetRuleContext(0, OperatorBitwiseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_exp; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterExp) {
			listener.enterExp(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitExp) {
			listener.exitExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitExp) {
			return visitor.visitExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrefixexpContext extends ParserRuleContext {
	public varOrExp(): VarOrExpContext {
		return this.getRuleContext(0, VarOrExpContext);
	}
	public nameAndArgs(): NameAndArgsContext[];
	public nameAndArgs(i: number): NameAndArgsContext;
	public nameAndArgs(i?: number): NameAndArgsContext | NameAndArgsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameAndArgsContext);
		} else {
			return this.getRuleContext(i, NameAndArgsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_prefixexp; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterPrefixexp) {
			listener.enterPrefixexp(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitPrefixexp) {
			listener.exitPrefixexp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitPrefixexp) {
			return visitor.visitPrefixexp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctioncallContext extends ParserRuleContext {
	public varOrExp(): VarOrExpContext {
		return this.getRuleContext(0, VarOrExpContext);
	}
	public nameAndArgs(): NameAndArgsContext[];
	public nameAndArgs(i: number): NameAndArgsContext;
	public nameAndArgs(i?: number): NameAndArgsContext | NameAndArgsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameAndArgsContext);
		} else {
			return this.getRuleContext(i, NameAndArgsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_functioncall; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterFunctioncall) {
			listener.enterFunctioncall(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitFunctioncall) {
			listener.exitFunctioncall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitFunctioncall) {
			return visitor.visitFunctioncall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarOrExpContext extends ParserRuleContext {
	public var(): VarContext | undefined {
		return this.tryGetRuleContext(0, VarContext);
	}
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_varOrExp; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterVarOrExp) {
			listener.enterVarOrExp(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitVarOrExp) {
			listener.exitVarOrExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitVarOrExp) {
			return visitor.visitVarOrExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(LuaParser.NAME, 0); }
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	public varSuffix(): VarSuffixContext[];
	public varSuffix(i: number): VarSuffixContext;
	public varSuffix(i?: number): VarSuffixContext | VarSuffixContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarSuffixContext);
		} else {
			return this.getRuleContext(i, VarSuffixContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_var; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterVar) {
			listener.enterVar(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitVar) {
			listener.exitVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitVar) {
			return visitor.visitVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarSuffixContext extends ParserRuleContext {
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(LuaParser.NAME, 0); }
	public nameAndArgs(): NameAndArgsContext[];
	public nameAndArgs(i: number): NameAndArgsContext;
	public nameAndArgs(i?: number): NameAndArgsContext | NameAndArgsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameAndArgsContext);
		} else {
			return this.getRuleContext(i, NameAndArgsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_varSuffix; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterVarSuffix) {
			listener.enterVarSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitVarSuffix) {
			listener.exitVarSuffix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitVarSuffix) {
			return visitor.visitVarSuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameAndArgsContext extends ParserRuleContext {
	public args(): ArgsContext {
		return this.getRuleContext(0, ArgsContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(LuaParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_nameAndArgs; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterNameAndArgs) {
			listener.enterNameAndArgs(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitNameAndArgs) {
			listener.exitNameAndArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitNameAndArgs) {
			return visitor.visitNameAndArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgsContext extends ParserRuleContext {
	public explist(): ExplistContext | undefined {
		return this.tryGetRuleContext(0, ExplistContext);
	}
	public tableconstructor(): TableconstructorContext | undefined {
		return this.tryGetRuleContext(0, TableconstructorContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_args; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterArgs) {
			listener.enterArgs(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitArgs) {
			listener.exitArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitArgs) {
			return visitor.visitArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctiondefContext extends ParserRuleContext {
	public funcbody(): FuncbodyContext {
		return this.getRuleContext(0, FuncbodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_functiondef; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterFunctiondef) {
			listener.enterFunctiondef(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitFunctiondef) {
			listener.exitFunctiondef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitFunctiondef) {
			return visitor.visitFunctiondef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncbodyContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public parlist(): ParlistContext | undefined {
		return this.tryGetRuleContext(0, ParlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_funcbody; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterFuncbody) {
			listener.enterFuncbody(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitFuncbody) {
			listener.exitFuncbody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitFuncbody) {
			return visitor.visitFuncbody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParlistContext extends ParserRuleContext {
	public namelist(): NamelistContext | undefined {
		return this.tryGetRuleContext(0, NamelistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_parlist; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterParlist) {
			listener.enterParlist(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitParlist) {
			listener.exitParlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitParlist) {
			return visitor.visitParlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableconstructorContext extends ParserRuleContext {
	public fieldlist(): FieldlistContext | undefined {
		return this.tryGetRuleContext(0, FieldlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_tableconstructor; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterTableconstructor) {
			listener.enterTableconstructor(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitTableconstructor) {
			listener.exitTableconstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitTableconstructor) {
			return visitor.visitTableconstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldlistContext extends ParserRuleContext {
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public fieldsep(): FieldsepContext[];
	public fieldsep(i: number): FieldsepContext;
	public fieldsep(i?: number): FieldsepContext | FieldsepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldsepContext);
		} else {
			return this.getRuleContext(i, FieldsepContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_fieldlist; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterFieldlist) {
			listener.enterFieldlist(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitFieldlist) {
			listener.exitFieldlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitFieldlist) {
			return visitor.visitFieldlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(LuaParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_field; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldsepContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_fieldsep; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterFieldsep) {
			listener.enterFieldsep(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitFieldsep) {
			listener.exitFieldsep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitFieldsep) {
			return visitor.visitFieldsep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorOrContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_operatorOr; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterOperatorOr) {
			listener.enterOperatorOr(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitOperatorOr) {
			listener.exitOperatorOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitOperatorOr) {
			return visitor.visitOperatorOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorAndContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_operatorAnd; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterOperatorAnd) {
			listener.enterOperatorAnd(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitOperatorAnd) {
			listener.exitOperatorAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitOperatorAnd) {
			return visitor.visitOperatorAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorComparisonContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_operatorComparison; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterOperatorComparison) {
			listener.enterOperatorComparison(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitOperatorComparison) {
			listener.exitOperatorComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitOperatorComparison) {
			return visitor.visitOperatorComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorStrcatContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_operatorStrcat; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterOperatorStrcat) {
			listener.enterOperatorStrcat(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitOperatorStrcat) {
			listener.exitOperatorStrcat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitOperatorStrcat) {
			return visitor.visitOperatorStrcat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorAddSubContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_operatorAddSub; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterOperatorAddSub) {
			listener.enterOperatorAddSub(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitOperatorAddSub) {
			listener.exitOperatorAddSub(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitOperatorAddSub) {
			return visitor.visitOperatorAddSub(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorMulDivModContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_operatorMulDivMod; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterOperatorMulDivMod) {
			listener.enterOperatorMulDivMod(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitOperatorMulDivMod) {
			listener.exitOperatorMulDivMod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitOperatorMulDivMod) {
			return visitor.visitOperatorMulDivMod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorBitwiseContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_operatorBitwise; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterOperatorBitwise) {
			listener.enterOperatorBitwise(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitOperatorBitwise) {
			listener.exitOperatorBitwise(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitOperatorBitwise) {
			return visitor.visitOperatorBitwise(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorUnaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_operatorUnary; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterOperatorUnary) {
			listener.enterOperatorUnary(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitOperatorUnary) {
			listener.exitOperatorUnary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitOperatorUnary) {
			return visitor.visitOperatorUnary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorPowerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_operatorPower; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterOperatorPower) {
			listener.enterOperatorPower(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitOperatorPower) {
			listener.exitOperatorPower(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitOperatorPower) {
			return visitor.visitOperatorPower(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(LuaParser.INT, 0); }
	public HEX(): TerminalNode | undefined { return this.tryGetToken(LuaParser.HEX, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(LuaParser.FLOAT, 0); }
	public HEX_FLOAT(): TerminalNode | undefined { return this.tryGetToken(LuaParser.HEX_FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_number; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public NORMALSTRING(): TerminalNode | undefined { return this.tryGetToken(LuaParser.NORMALSTRING, 0); }
	public CHARSTRING(): TerminalNode | undefined { return this.tryGetToken(LuaParser.CHARSTRING, 0); }
	public LONGSTRING(): TerminalNode | undefined { return this.tryGetToken(LuaParser.LONGSTRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_string; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuaVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


