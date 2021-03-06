"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsconfig_parser_1 = require("./tsconfig-parser");
const semver_1 = __importDefault(require("semver"));
const typescript_1 = __importDefault(require("typescript"));
const ast_converter_1 = __importDefault(require("./ast-converter"));
const convert_1 = require("./convert");
const node_utils_1 = require("./node-utils");
const semantic_errors_1 = require("./semantic-errors");
/**
 * This needs to be kept in sync with the top-level README.md in the
 * typescript-eslint monorepo
 */
const SUPPORTED_TYPESCRIPT_VERSIONS = '>=3.2.1 <3.5.0';
const ACTIVE_TYPESCRIPT_VERSION = typescript_1.default.version;
const isRunningSupportedTypeScriptVersion = semver_1.default.satisfies(ACTIVE_TYPESCRIPT_VERSION, SUPPORTED_TYPESCRIPT_VERSIONS);
let extra;
let warnedAboutTSVersion = false;
/**
 * Compute the filename based on the parser options.
 *
 * Even if jsx option is set in typescript compiler, filename still has to
 * contain .tsx file extension.
 *
 * @param options Parser options
 */
function getFileName({ jsx }) {
    return jsx ? 'estree.tsx' : 'estree.ts';
}
/**
 * Resets the extra config object
 */
function resetExtra() {
    extra = {
        tokens: null,
        range: false,
        loc: false,
        comment: false,
        comments: [],
        strict: false,
        jsx: false,
        useJSXTextNode: false,
        log: console.log,
        projects: [],
        errorOnUnknownASTType: false,
        errorOnTypeScriptSyntacticAndSemanticIssues: false,
        code: '',
        tsconfigRootDir: process.cwd(),
        extraFileExtensions: [],
    };
}
/**
 * @param code The code of the file being linted
 * @param options The config object
 * @returns If found, returns the source file corresponding to the code and the containing program
 */
function getASTFromProject(code, options) {
    return node_utils_1.firstDefined(tsconfig_parser_1.calculateProjectParserOptions(code, options.filePath || getFileName(options), extra), currentProgram => {
        const ast = currentProgram.getSourceFile(options.filePath || getFileName(options));
        return ast && { ast, program: currentProgram };
    });
}
/**
 * @param code The code of the file being linted
 * @param options The config object
 * @returns If found, returns the source file corresponding to the code and the containing program
 */
function getASTAndDefaultProject(code, options) {
    const fileName = options.filePath || getFileName(options);
    const program = tsconfig_parser_1.createProgram(code, fileName, extra);
    const ast = program && program.getSourceFile(fileName);
    return ast && { ast, program };
}
/**
 * @param code The code of the file being linted
 * @returns Returns a new source file and program corresponding to the linted code
 */
function createNewProgram(code) {
    const FILENAME = getFileName(extra);
    const compilerHost = {
        fileExists() {
            return true;
        },
        getCanonicalFileName() {
            return FILENAME;
        },
        getCurrentDirectory() {
            return '';
        },
        getDirectories() {
            return [];
        },
        getDefaultLibFileName() {
            return 'lib.d.ts';
        },
        // TODO: Support Windows CRLF
        getNewLine() {
            return '\n';
        },
        getSourceFile(filename) {
            return typescript_1.default.createSourceFile(filename, code, typescript_1.default.ScriptTarget.Latest, true);
        },
        readFile() {
            return undefined;
        },
        useCaseSensitiveFileNames() {
            return true;
        },
        writeFile() {
            return null;
        },
    };
    const program = typescript_1.default.createProgram([FILENAME], {
        noResolve: true,
        target: typescript_1.default.ScriptTarget.Latest,
        jsx: extra.jsx ? typescript_1.default.JsxEmit.Preserve : undefined,
    }, compilerHost);
    const ast = program.getSourceFile(FILENAME);
    return { ast, program };
}
/**
 * @param code The code of the file being linted
 * @param options The config object
 * @param shouldProvideParserServices True iff the program should be attempted to be calculated from provided tsconfig files
 * @returns Returns a source file and program corresponding to the linted code
 */
function getProgramAndAST(code, options, shouldProvideParserServices) {
    return ((shouldProvideParserServices && getASTFromProject(code, options)) ||
        (shouldProvideParserServices && getASTAndDefaultProject(code, options)) ||
        createNewProgram(code));
}
function applyParserOptionsToExtra(options) {
    /**
     * Track range information in the AST
     */
    extra.range = typeof options.range === 'boolean' && options.range;
    extra.loc = typeof options.loc === 'boolean' && options.loc;
    /**
     * Track tokens in the AST
     */
    if (typeof options.tokens === 'boolean' && options.tokens) {
        extra.tokens = [];
    }
    /**
     * Track comments in the AST
     */
    if (typeof options.comment === 'boolean' && options.comment) {
        extra.comment = true;
        extra.comments = [];
    }
    /**
     * Enable JSX - note the applicable file extension is still required
     */
    if (typeof options.jsx === 'boolean' && options.jsx) {
        extra.jsx = true;
    }
    /**
     * The JSX AST changed the node type for string literals
     * inside a JSX Element from `Literal` to `JSXText`.
     *
     * When value is `true`, these nodes will be parsed as type `JSXText`.
     * When value is `false`, these nodes will be parsed as type `Literal`.
     */
    if (typeof options.useJSXTextNode === 'boolean' && options.useJSXTextNode) {
        extra.useJSXTextNode = true;
    }
    /**
     * Allow the user to cause the parser to error if it encounters an unknown AST Node Type
     * (used in testing)
     */
    if (typeof options.errorOnUnknownASTType === 'boolean' &&
        options.errorOnUnknownASTType) {
        extra.errorOnUnknownASTType = true;
    }
    /**
     * Allow the user to override the function used for logging
     */
    if (typeof options.loggerFn === 'function') {
        extra.log = options.loggerFn;
    }
    else if (options.loggerFn === false) {
        extra.log = Function.prototype;
    }
    if (typeof options.project === 'string') {
        extra.projects = [options.project];
    }
    else if (Array.isArray(options.project) &&
        options.project.every(projectPath => typeof projectPath === 'string')) {
        extra.projects = options.project;
    }
    if (typeof options.tsconfigRootDir === 'string') {
        extra.tsconfigRootDir = options.tsconfigRootDir;
    }
    if (Array.isArray(options.extraFileExtensions) &&
        options.extraFileExtensions.every(ext => typeof ext === 'string')) {
        extra.extraFileExtensions = options.extraFileExtensions;
    }
}
function warnAboutTSVersion() {
    if (!isRunningSupportedTypeScriptVersion && !warnedAboutTSVersion) {
        const border = '=============';
        const versionWarning = [
            border,
            'WARNING: You are currently running a version of TypeScript which is not officially supported by typescript-estree.',
            'You may find that it works just fine, or you may not.',
            `SUPPORTED TYPESCRIPT VERSIONS: ${SUPPORTED_TYPESCRIPT_VERSIONS}`,
            `YOUR TYPESCRIPT VERSION: ${ACTIVE_TYPESCRIPT_VERSION}`,
            'Please only submit bug reports when using the officially supported version.',
            border,
        ];
        extra.log(versionWarning.join('\n\n'));
        warnedAboutTSVersion = true;
    }
}
//------------------------------------------------------------------------------
// Public
//------------------------------------------------------------------------------
exports.version = require('../package.json').version;
function parse(code, options) {
    /**
     * Reset the parse configuration
     */
    resetExtra();
    /**
     * Ensure users do not attempt to use parse() when they need parseAndGenerateServices()
     */
    if (options && options.errorOnTypeScriptSyntacticAndSemanticIssues) {
        throw new Error(`"errorOnTypeScriptSyntacticAndSemanticIssues" is only supported for parseAndGenerateServices()`);
    }
    /**
     * Ensure the source code is a string, and store a reference to it
     */
    if (typeof code !== 'string' && !(code instanceof String)) {
        code = String(code);
    }
    extra.code = code;
    /**
     * Apply the given parser options
     */
    if (typeof options !== 'undefined') {
        applyParserOptionsToExtra(options);
    }
    /**
     * Warn if the user is using an unsupported version of TypeScript
     */
    warnAboutTSVersion();
    /**
     * Create a ts.SourceFile directly, no ts.Program is needed for a simple
     * parse
     */
    const ast = typescript_1.default.createSourceFile(getFileName(extra), code, typescript_1.default.ScriptTarget.Latest, 
    /* setParentNodes */ true);
    /**
     * Convert the TypeScript AST to an ESTree-compatible one
     */
    const { estree } = ast_converter_1.default(ast, extra, false);
    return estree;
}
exports.parse = parse;
function parseAndGenerateServices(code, options) {
    /**
     * Reset the parse configuration
     */
    resetExtra();
    /**
     * Ensure the source code is a string, and store a reference to it
     */
    if (typeof code !== 'string' && !(code instanceof String)) {
        code = String(code);
    }
    extra.code = code;
    /**
     * Apply the given parser options
     */
    if (typeof options !== 'undefined') {
        applyParserOptionsToExtra(options);
        if (typeof options.errorOnTypeScriptSyntacticAndSemanticIssues ===
            'boolean' &&
            options.errorOnTypeScriptSyntacticAndSemanticIssues) {
            extra.errorOnTypeScriptSyntacticAndSemanticIssues = true;
        }
    }
    /**
     * Warn if the user is using an unsupported version of TypeScript
     */
    warnAboutTSVersion();
    /**
     * Generate a full ts.Program in order to be able to provide parser
     * services, such as type-checking
     */
    const shouldProvideParserServices = extra.projects && extra.projects.length > 0;
    const { ast, program } = getProgramAndAST(code, options, shouldProvideParserServices);
    /**
     * Convert the TypeScript AST to an ESTree-compatible one, and optionally preserve
     * mappings between converted and original AST nodes
     */
    const { estree, astMaps } = ast_converter_1.default(ast, extra, shouldProvideParserServices);
    /**
     * Even if TypeScript parsed the source code ok, and we had no problems converting the AST,
     * there may be other syntactic or semantic issues in the code that we can optionally report on.
     */
    if (program && extra.errorOnTypeScriptSyntacticAndSemanticIssues) {
        const error = semantic_errors_1.getFirstSemanticOrSyntacticError(program, ast);
        if (error) {
            throw convert_1.convertError(error);
        }
    }
    /**
     * Return the converted AST and additional parser services
     */
    return {
        ast: estree,
        services: {
            program: shouldProvideParserServices ? program : undefined,
            esTreeNodeToTSNodeMap: shouldProvideParserServices && astMaps
                ? astMaps.esTreeNodeToTSNodeMap
                : undefined,
            tsNodeToESTreeNodeMap: shouldProvideParserServices && astMaps
                ? astMaps.tsNodeToESTreeNodeMap
                : undefined,
        },
    };
}
exports.parseAndGenerateServices = parseAndGenerateServices;
var ts_estree_1 = require("./ts-estree");
exports.AST_NODE_TYPES = ts_estree_1.AST_NODE_TYPES;
exports.AST_TOKEN_TYPES = ts_estree_1.AST_TOKEN_TYPES;
exports.TSESTree = ts_estree_1.TSESTree;
//# sourceMappingURL=parser.js.map