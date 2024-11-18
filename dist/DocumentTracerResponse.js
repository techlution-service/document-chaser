"use strict";
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
var _DocumentTracerResponse_applicationId, _DocumentTracerResponse_error, _DocumentTracerResponse_success, _DocumentTracerResponse_data, _DocumentTracerResponse_errorMap;
Object.defineProperty(exports, "__esModule", { value: true });
// import util from 'util';
var index_js_1 = require("./DocumentTracerError/index.js");
/**
 * @typedef {Object} DocumentTracerResponseValueOf
 * @property {?string} _id
 * @property {?string} applicationId
 * @property {?DocumentTracerError[]} error
 * @property {boolean} success
 * @property {?Object} data
 */
var DocumentTracerResponse = /** @class */ (function () {
    /**
     * @param {Object} input
     * @param {boolean} [isCreate=false]
     */
    function DocumentTracerResponse(input, isCreate) {
        if (isCreate === void 0) { isCreate = false; }
        _DocumentTracerResponse_applicationId.set(this, void 0);
        _DocumentTracerResponse_error.set(this, void 0);
        _DocumentTracerResponse_success.set(this, void 0);
        _DocumentTracerResponse_data.set(this, void 0);
        _DocumentTracerResponse_errorMap.set(this, void 0);
        var _id = input._id, error = input.error;
        __classPrivateFieldSet(this, _DocumentTracerResponse_data, input, "f");
        __classPrivateFieldSet(this, _DocumentTracerResponse_applicationId, _id, "f");
        __classPrivateFieldSet(this, _DocumentTracerResponse_errorMap, (0, index_js_1.ERROR_CODE_MAP)(isCreate), "f");
        if (error === null || error === void 0 ? void 0 : error.errors) {
            this.parseError(error.errors);
        }
        __classPrivateFieldSet(this, _DocumentTracerResponse_success, !!_id && !error, "f");
    }
    /**
     * @param {Error[]} errors
     */
    DocumentTracerResponse.prototype.parseError = function (errors) {
        var _this = this;
        if (errors.length === 1) {
            var _a = errors[0], errorCode = _a.errorCode, detail = _a.detail;
            if (errorCode)
                __classPrivateFieldSet(this, _DocumentTracerResponse_error, new (__classPrivateFieldGet(this, _DocumentTracerResponse_errorMap, "f").get(errorCode))(detail), "f");
            return;
        }
        __classPrivateFieldSet(this, _DocumentTracerResponse_error, new index_js_1.DocumentTracerErrorSet(errors.map(function (_a) {
            var errorCode = _a.errorCode, detail = _a.detail;
            return new (__classPrivateFieldGet(_this, _DocumentTracerResponse_errorMap, "f").get(errorCode))(detail);
        })), "f");
    };
    /**
     * @param {Object} input
     * @param {boolean} [isCreate=false]
     * @returns {DocumentTracerResponse}
     */
    DocumentTracerResponse.handleResponse = function (input_1) {
        return __awaiter(this, arguments, void 0, function (input, isCreate) {
            var _a, _b, response, _c;
            if (isCreate === void 0) { isCreate = false; }
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(input instanceof Promise)) return [3 /*break*/, 2];
                        _b = (_a = DocumentTracerResponse).handleResponse;
                        return [4 /*yield*/, input];
                    case 1: return [2 /*return*/, _b.apply(_a, [_d.sent(), isCreate])];
                    case 2:
                        if (!(input instanceof Response)) return [3 /*break*/, 4];
                        return [4 /*yield*/, input.json()];
                    case 3:
                        _c = _d.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _c = input;
                        _d.label = 5;
                    case 5:
                        response = _c;
                        return [2 /*return*/, new DocumentTracerResponse(response, isCreate)];
                }
            });
        });
    };
    Object.defineProperty(DocumentTracerResponse.prototype, "applicationId", {
        /** @type {?string}  */
        get: function () { return __classPrivateFieldGet(this, _DocumentTracerResponse_applicationId, "f"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentTracerResponse.prototype, "id", {
        /** @type {?string}  */
        get: function () { return __classPrivateFieldGet(this, _DocumentTracerResponse_applicationId, "f"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentTracerResponse.prototype, "_id", {
        /** @type {?string}  */
        get: function () { return __classPrivateFieldGet(this, _DocumentTracerResponse_applicationId, "f"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentTracerResponse.prototype, "success", {
        /** @type {boolean}  */
        get: function () { return __classPrivateFieldGet(this, _DocumentTracerResponse_success, "f"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentTracerResponse.prototype, "error", {
        /** @type {?DocumentTracerError[]}  */
        get: function () { return __classPrivateFieldGet(this, _DocumentTracerResponse_error, "f"); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentTracerResponse.prototype, "data", {
        /** @type {?Object}  */
        get: function () { return __classPrivateFieldGet(this, _DocumentTracerResponse_data, "f"); },
        enumerable: false,
        configurable: true
    });
    /** @return {DocumentTracerResponseValueOf} */
    DocumentTracerResponse.prototype.valueOf = function () {
        return {
            _id: __classPrivateFieldGet(this, _DocumentTracerResponse_applicationId, "f"),
            applicationId: __classPrivateFieldGet(this, _DocumentTracerResponse_applicationId, "f"),
            error: __classPrivateFieldGet(this, _DocumentTracerResponse_error, "f"),
            success: __classPrivateFieldGet(this, _DocumentTracerResponse_success, "f"),
            data: __classPrivateFieldGet(this, _DocumentTracerResponse_data, "f"),
        };
    };
    return DocumentTracerResponse;
}());
_DocumentTracerResponse_applicationId = new WeakMap(), _DocumentTracerResponse_error = new WeakMap(), _DocumentTracerResponse_success = new WeakMap(), _DocumentTracerResponse_data = new WeakMap(), _DocumentTracerResponse_errorMap = new WeakMap();
exports.default = DocumentTracerResponse;
