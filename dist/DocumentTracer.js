"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _DocumentTracer_instances, _a, _DocumentTracer_applicationId, _DocumentTracer_config, _DocumentTracer_domain, _DocumentTracer_error, _DocumentTracer_key, _DocumentTracer_secret, _DocumentTracer_resource, _DocumentTracer_requestObject, _DocumentTracer_response, _DocumentTracer_result, _DocumentTracer_shouldFail, _DocumentTracer_url, _DocumentTracer_parseConfig, _DocumentTracer_exec, _DocumentTracer_formatUrl, _DocumentTracer_parseRequest, _DocumentTracer_request_get, _DocumentTracer_request_set;
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");
var DocumentTracerConfig_js_1 = require("./DocumentTracerConfig.js");
var index_js_1 = require("./DocumentTracerError/index.js");
var index_js_2 = require("./DocumentTracerRequest/index.js");
var DocumentTracerResponse_js_1 = require("./DocumentTracerResponse.js");
var util_js_1 = require("./util.js");
/**
 * @typedef import('./DocumentTracerConfig.js')
 * .DocumentTracerConfigInput DocumentTracerConfigInput
 */
/**
 * @typedef import('./DocumentTracerError/index.js')
 * .DocumentTracerConfigError DocumentTracerConfigError
 */
/**
 * @typedef import('./DocumentTracerRequest/CreateApplicationRequest.js')
 * .CreateApplicationRequestInput CreateApplicationRequestInput
 */
/**
 * @typedef import('./DocumentTracerRequest/UpdateApplicationRequest.js')
 * .UpdateApplicationRequestInput UpdateApplicationRequestInput
 */
/**
 * @typedef import('./DocumentTracerRequest/DeleteApplicationRequest.js')
 * .DeleteApplicationRequestInput DeleteApplicationRequestInput
 */
var DocumentTracer = /** @class */ (function () {
    /**
     * @param {DocumentTracerConfig|DocumentTracerConfigInput} config
     */
    function DocumentTracer(config) {
        _DocumentTracer_instances.add(this);
        _DocumentTracer_applicationId.set(this, void 0);
        _DocumentTracer_config.set(this, void 0);
        _DocumentTracer_domain.set(this, void 0);
        _DocumentTracer_error.set(this, void 0);
        _DocumentTracer_key.set(this, void 0);
        _DocumentTracer_secret.set(this, void 0);
        _DocumentTracer_resource.set(this, void 0);
        _DocumentTracer_requestObject.set(this, void 0);
        _DocumentTracer_response.set(this, void 0);
        _DocumentTracer_result.set(this, void 0);
        _DocumentTracer_shouldFail.set(this, false);
        _DocumentTracer_url.set(this, void 0);
        __classPrivateFieldSet(this, _DocumentTracer_config, __classPrivateFieldGet(_a, _a, "m", _DocumentTracer_parseConfig).call(_a, config), "f");
        var _b = __classPrivateFieldGet(this, _DocumentTracer_config, "f"), domain = _b.domain, secret = _b.secret, key = _b.key;
        __classPrivateFieldSet(this, _DocumentTracer_domain, domain, "f");
        __classPrivateFieldSet(this, _DocumentTracer_key, key, "f");
        __classPrivateFieldSet(this, _DocumentTracer_secret, secret, "f");
    }
    /**
     * @function application
     * @param {string} [id]
     * @return {DocumentTracer}
     */
    DocumentTracer.prototype.application = function (id) {
        if (id)
            __classPrivateFieldSet(this, _DocumentTracer_applicationId, id, "f");
        __classPrivateFieldSet(this, _DocumentTracer_resource, 'application', "f");
        return this;
    };
    /** @return {DocumentTracer} */
    DocumentTracer.prototype.orFail = function () {
        __classPrivateFieldSet(this, _DocumentTracer_shouldFail, true, "f");
        return this;
    };
    /**
     * @param {Object} payload
     * @returns {boolean}
     */
    DocumentTracer.prototype.verify = function (payload) { return (0, util_js_1.HASH)(payload, __classPrivateFieldGet(this, _DocumentTracer_secret, "f")); };
    /**
     * @param {?CreateApplicationRequest|CreateApplicationRequestInput} input
     * @returns {DocumentTracer}
     */
    DocumentTracer.prototype.create = function (input) { return __classPrivateFieldGet(this, _DocumentTracer_instances, "m", _DocumentTracer_parseRequest).call(this, index_js_2.CAR, input); };
    /**
     * @param {?UpdateApplicationRequest|UpdateApplicationRequestInput} input]
     * @returns {DocumentTracer}
     */
    DocumentTracer.prototype.update = function (input) { return __classPrivateFieldGet(this, _DocumentTracer_instances, "m", _DocumentTracer_parseRequest).call(this, index_js_2.UAR, input); };
    /**
     * @param {?DeleteApplicationRequest|DeleteApplicationRequestInput} input
     * @returns {DocumentTracer}
     */
    DocumentTracer.prototype.delete = function (input) { return __classPrivateFieldGet(this, _DocumentTracer_instances, "m", _DocumentTracer_parseRequest).call(this, index_js_2.DAR, input); };
    Object.defineProperty(DocumentTracer.prototype, "applicationId", {
        /** @type {?string} */
        get: function () { return __classPrivateFieldGet(this, _DocumentTracer_applicationId, "f"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentTracer.prototype, "error", {
        /** @type {?DocumentTracerError[]|DocumentTracerError} */
        get: function () { return __classPrivateFieldGet(this, _DocumentTracer_error, "f"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentTracer.prototype, "result", {
        /** @type {?string} */
        get: function () { return __classPrivateFieldGet(this, _DocumentTracer_result, "f"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentTracer.prototype, "response", {
        /** @type {?string} */
        get: function () { return __classPrivateFieldGet(this, _DocumentTracer_response, "f"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentTracer.prototype, "config", {
        /** @type {?string} */
        get: function () { return __classPrivateFieldGet(this, _DocumentTracer_config, "f"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentTracer.prototype, "request", {
        /** @type {?string} */
        get: function () {
            var _b;
            return __assign({ domain: __classPrivateFieldGet(this, _DocumentTracer_domain, "f"), url: __classPrivateFieldGet(this, _DocumentTracer_url, "f") }, (((_b = __classPrivateFieldGet(this, _DocumentTracer_instances, "a", _DocumentTracer_request_get)) === null || _b === void 0 ? void 0 : _b.valueOf()) || {}));
        },
        enumerable: false,
        configurable: true
    });
    DocumentTracer.prototype[(_DocumentTracer_applicationId = new WeakMap(), _DocumentTracer_config = new WeakMap(), _DocumentTracer_domain = new WeakMap(), _DocumentTracer_error = new WeakMap(), _DocumentTracer_key = new WeakMap(), _DocumentTracer_secret = new WeakMap(), _DocumentTracer_resource = new WeakMap(), _DocumentTracer_requestObject = new WeakMap(), _DocumentTracer_response = new WeakMap(), _DocumentTracer_result = new WeakMap(), _DocumentTracer_shouldFail = new WeakMap(), _DocumentTracer_url = new WeakMap(), _DocumentTracer_instances = new WeakSet(), _DocumentTracer_parseConfig = function _DocumentTracer_parseConfig(input) {
        if (input instanceof DocumentTracerConfig_js_1.default)
            return input;
        return new DocumentTracerConfig_js_1.default(input);
    }, _DocumentTracer_exec = function _DocumentTracer_exec() {
        if (!__classPrivateFieldGet(this, _DocumentTracer_instances, "a", _DocumentTracer_request_get))
            throw new index_js_1.RequestMalformed('Request content is not set');
        var _b = __classPrivateFieldGet(this, _DocumentTracer_instances, "a", _DocumentTracer_request_get), method = _b.method, body = _b.body;
        __classPrivateFieldSet(this, _DocumentTracer_response, await DocumentTracerResponse_js_1.default.handleResponse(fetch(__classPrivateFieldGet(this, _DocumentTracer_url, "f"), { headers: (0, util_js_1.HEADER)(__classPrivateFieldGet(this, _DocumentTracer_key, "f")), method: method, body: body }), __classPrivateFieldGet(this, _DocumentTracer_instances, "a", _DocumentTracer_request_get) instanceof index_js_2.CAR), "f");
        var _c = __classPrivateFieldGet(this, _DocumentTracer_response, "f"), success = _c.success, responseId = _c.id, error = _c.error;
        __classPrivateFieldSet(this, _DocumentTracer_result, success ? util_js_1.RESULT.SUCCESS : util_js_1.RESULT.FAIL, "f");
        __classPrivateFieldSet(this, _DocumentTracer_applicationId, responseId, "f");
        __classPrivateFieldSet(this, _DocumentTracer_error, error, "f");
        if (__classPrivateFieldGet(this, _DocumentTracer_error, "f"))
            throw error;
    }, _DocumentTracer_formatUrl = function _DocumentTracer_formatUrl() {
        return [__classPrivateFieldGet(this, _DocumentTracer_domain, "f"), 'admin', __classPrivateFieldGet(this, _DocumentTracer_resource, "f"), __classPrivateFieldGet(this, _DocumentTracer_instances, "a", _DocumentTracer_request_get).constructor.checkId(__classPrivateFieldGet(this, _DocumentTracer_applicationId, "f"))]
            .filter(Boolean).join('/');
    }, _DocumentTracer_parseRequest = function _DocumentTracer_parseRequest(RequestClass, input) {
        if (!__classPrivateFieldGet(this, _DocumentTracer_resource, "f"))
            throw new index_js_1.RequestMalformed('Resource is not set');
        __classPrivateFieldSet(this, _DocumentTracer_instances, input instanceof RequestClass ? input : new RequestClass(input), "a", _DocumentTracer_request_set);
        return this;
    }, _DocumentTracer_request_get = function _DocumentTracer_request_get() { return __classPrivateFieldGet(this, _DocumentTracer_requestObject, "f"); }, _DocumentTracer_request_set = function _DocumentTracer_request_set(input) {
        __classPrivateFieldSet(this, _DocumentTracer_requestObject, input, "f");
        __classPrivateFieldSet(this, _DocumentTracer_url, __classPrivateFieldGet(this, _DocumentTracer_instances, "m", _DocumentTracer_formatUrl).call(this), "f");
    }, util_1.default.inspect.custom)] = function () {
        return {
            error: __classPrivateFieldGet(this, _DocumentTracer_error, "f"),
            result: __classPrivateFieldGet(this, _DocumentTracer_result, "f"),
            applicationId: __classPrivateFieldGet(this, _DocumentTracer_applicationId, "f"),
            resource: __classPrivateFieldGet(this, _DocumentTracer_resource, "f"),
            url: __classPrivateFieldGet(this, _DocumentTracer_url, "f"),
            request: this.request,
            response: __classPrivateFieldGet(this, _DocumentTracer_response, "f"),
            config: __classPrivateFieldGet(this, _DocumentTracer_config, "f"),
        };
    };
    /**
     * @callback DocumentTracerResolve
     * @param {DocumentTracerResponse} response
     */
    /**
     * @callback DocumentTracerReject
     * @param {DocumentTracerError} error
     */
    /**
     * @function then
     * @param {DocumentTracerResolve} resolve
     * @param {DocumentTracerReject} reject
     * @returns {DocumentTracerResolve|DocumentTracerRejcet}
     */
    DocumentTracer.prototype.then = function (resolve, reject) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, __classPrivateFieldGet(this, _DocumentTracer_instances, "m", _DocumentTracer_exec).call(this)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, resolve(__classPrivateFieldGet(this, _DocumentTracer_response, "f"))];
                    case 2:
                        e_1 = _b.sent();
                        if (__classPrivateFieldGet(this, _DocumentTracer_error, "f") !== e_1)
                            __classPrivateFieldSet(this, _DocumentTracer_error, e_1, "f");
                        return [2 /*return*/, __classPrivateFieldGet(this, _DocumentTracer_shouldFail, "f") ? reject(__classPrivateFieldGet(this, _DocumentTracer_error, "f")) : resolve(__classPrivateFieldGet(this, _DocumentTracer_response, "f"))];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return DocumentTracer;
}());
_a = DocumentTracer;
exports.default = DocumentTracer;
