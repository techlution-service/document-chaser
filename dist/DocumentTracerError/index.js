"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_CODE_MAP = exports.ValidationError = exports.UpdateAuthenticationRequired = exports.RequestMalformed = exports.RecordNotFound = exports.RecordAlreadyExists = exports.MalformedApplicationIdentifier = exports.EnumViolation = exports.DocumentTracerErrorSet = exports.DocumentTracerError = exports.ConfigMalformed = exports.AuthenticationRequired = void 0;
var AuthenticationRequired_js_1 = require("./AuthenticationRequired.js");
exports.AuthenticationRequired = AuthenticationRequired_js_1.default;
var ConfigMalformed_js_1 = require("./ConfigMalformed.js");
exports.ConfigMalformed = ConfigMalformed_js_1.default;
var DocumentTracerError_js_1 = require("./DocumentTracerError.js");
exports.DocumentTracerError = DocumentTracerError_js_1.default;
var EnumViolation_js_1 = require("./EnumViolation.js");
exports.EnumViolation = EnumViolation_js_1.default;
var MalformedApplicationIdentifier_js_1 = require("./MalformedApplicationIdentifier.js");
exports.MalformedApplicationIdentifier = MalformedApplicationIdentifier_js_1.default;
var RecordAlreadyExists_js_1 = require("./RecordAlreadyExists.js");
exports.RecordAlreadyExists = RecordAlreadyExists_js_1.default;
var RecordNotFound_js_1 = require("./RecordNotFound.js");
exports.RecordNotFound = RecordNotFound_js_1.default;
var RequestMalformed_js_1 = require("./RequestMalformed.js");
exports.RequestMalformed = RequestMalformed_js_1.default;
var UpdateAuthenticationRequired_js_1 = require("./UpdateAuthenticationRequired.js");
exports.UpdateAuthenticationRequired = UpdateAuthenticationRequired_js_1.default;
var ValidationError_js_1 = require("./ValidationError.js");
exports.ValidationError = ValidationError_js_1.default;
var DocumentTracerErrorSet_js_1 = require("./DocumentTracerErrorSet.js");
exports.DocumentTracerErrorSet = DocumentTracerErrorSet_js_1.default;
exports.default = DocumentTracerError_js_1.default;
var COMMON_ERROR_CODE_MAP = new Map([
    ['100002', AuthenticationRequired_js_1.default],
    ['100004', UpdateAuthenticationRequired_js_1.default],
    ['500001', MalformedApplicationIdentifier_js_1.default],
    ['500002', RecordNotFound_js_1.default],
    ['500003', ValidationError_js_1.default],
]);
var CREATE_ERROR_CODE_MAP = new Map([
    ['100002', AuthenticationRequired_js_1.default],
    ['100004', UpdateAuthenticationRequired_js_1.default],
    ['500001', MalformedApplicationIdentifier_js_1.default],
    ['500002', RecordAlreadyExists_js_1.default],
    ['500003', ValidationError_js_1.default],
]);
var ERROR_CODE_MAP = function (isCreate) {
    if (isCreate === void 0) { isCreate = false; }
    return (isCreate
        ? CREATE_ERROR_CODE_MAP
        : COMMON_ERROR_CODE_MAP);
};
exports.ERROR_CODE_MAP = ERROR_CODE_MAP;
