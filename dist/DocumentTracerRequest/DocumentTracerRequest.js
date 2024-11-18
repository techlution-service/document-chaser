"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DocumentTracerRequest_data, _DocumentTracerRequest_method;
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractDefined = exports.parseRequiredInteger = exports.parseInteger = exports.Required = exports.TEMPLATE_TYPE_ENUM = exports.TEMPLATE_TYPE = exports.isNull = void 0;
// import util from 'util';
var index_js_1 = require("../DocumentTracerError/index.js");
var isNull = function (input) { return typeof input === 'undefined' || input === null; };
exports.isNull = isNull;
/*
 * @typedef {'submission'|'information_request'} TEMPLATE_TYPE_ENUM
 */
exports.TEMPLATE_TYPE = {
    SUBMISSION: 'submission',
    INFORMATION_REQUEST: 'information_request',
};
exports.TEMPLATE_TYPE_ENUM = Object.values(exports.TEMPLATE_TYPE);
var Required = function (field) { throw new index_js_1.RequestMalformed("".concat(field, " is required")); };
exports.Required = Required;
var parseInteger = function (field, input) {
    if ((0, exports.isNull)(input))
        return undefined;
    var output = parseInt(input, 10);
    if (Number.isNaN(output))
        throw new index_js_1.RequestMalformed("".concat(field, " should be number, received ").concat(typeof input, " instead"));
    return output;
};
exports.parseInteger = parseInteger;
var parseRequiredInteger = function (field, input) { return ((0, exports.isNull)(input)
    ? (0, exports.Required)(field)
    : (0, exports.parseInteger)(field, input)); };
exports.parseRequiredInteger = parseRequiredInteger;
var extractDefined = function (fields, obj) { return fields.reduce(function (output, field) {
    var _a;
    return ((0, exports.isNull)(obj[field])
        ? output
        : Object.assign(output, (_a = {}, _a[field] = obj[field], _a)));
}, {}); };
exports.extractDefined = extractDefined;
/**
 * @typedef {Object} DocumentTracerRequestValueOf
 * @property {string} method
 * @property {Object} data
 */
/** Base Class for Document Tracer Requests. */
var DocumentTracerRequest = /** @class */ (function () {
    /**
     * @param {string} method
     * @param {Object} data
     */
    function DocumentTracerRequest(method, data) {
        _DocumentTracerRequest_data.set(this, void 0);
        _DocumentTracerRequest_method.set(this, void 0);
        if (this.constructor.name === 'DocumentTracerRequest') {
            throw new TypeError('DocumentTracerRequest cannot be initiated directly');
        }
        __classPrivateFieldSet(this, _DocumentTracerRequest_data, data, "f");
        __classPrivateFieldSet(this, _DocumentTracerRequest_method, method, "f");
    }
    /**
     * @returns {undefined}
     */
    DocumentTracerRequest.checkId = function () { return undefined; };
    Object.defineProperty(DocumentTracerRequest.prototype, "data", {
        /** @type {Object} */
        get: function () { return __classPrivateFieldGet(this, _DocumentTracerRequest_data, "f"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentTracerRequest.prototype, "body", {
        /** @type {string} */
        get: function () { return JSON.stringify(__classPrivateFieldGet(this, _DocumentTracerRequest_data, "f")); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentTracerRequest.prototype, "method", {
        /** @type {string} */
        get: function () { return __classPrivateFieldGet(this, _DocumentTracerRequest_method, "f"); },
        enumerable: false,
        configurable: true
    });
    /**
     * @returns {Object}
     */
    DocumentTracerRequest.prototype.valueOf = function () {
        return {
            method: __classPrivateFieldGet(this, _DocumentTracerRequest_method, "f"),
            data: __classPrivateFieldGet(this, _DocumentTracerRequest_data, "f"),
        };
    };
    return DocumentTracerRequest;
}());
_DocumentTracerRequest_data = new WeakMap(), _DocumentTracerRequest_method = new WeakMap();
exports.default = DocumentTracerRequest;
