"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = require("./DocumentTracerError/index.js");
var ENV_ENUM = ['prod'];
var DEFAULT_ENV = 'prod';
var DEFAULT_DOMAIN = function (env) { return "https://document-tracer-api-".concat(env, ".neuralsense.io"); };
/**
 * @typedef {Object} DocumentTracerConfigInput
 * @property {string} key
 * @property {string} secret
 * @property {?string} domain
 * @property {?string} env
 */
var DocumentTracerConfig = /** @class */ (function () {
    /**
     * @param {DocumentTracerConfigInput} input
     */
    function DocumentTracerConfig(input) {
        var _a = DocumentTracerConfig.validate(input), key = _a.key, secret = _a.secret, env = _a.env, domain = _a.domain;
        this.key = key;
        this.secret = secret;
        this.domain = domain;
        this.env = env;
    }
    /**
     * @param {DocumentTracerConfigInput} input
     */
    DocumentTracerConfig.validate = function (_a) {
        var key = _a.key, secret = _a.secret, _b = _a.env, env = _b === void 0 ? DEFAULT_ENV : _b, _c = _a.domain, domain = _c === void 0 ? DEFAULT_DOMAIN(env) : _c;
        if (!key)
            throw new index_js_1.ConfigMalformed('key');
        if (!secret)
            throw new index_js_1.ConfigMalformed('secret');
        if (!ENV_ENUM.includes(env))
            throw new index_js_1.ConfigMalformed('env');
        return {
            key: key,
            secret: secret,
            env: env,
            domain: domain,
        };
    };
    return DocumentTracerConfig;
}());
exports.default = DocumentTracerConfig;
