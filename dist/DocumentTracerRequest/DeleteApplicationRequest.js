"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DocumentTracerRequest_js_1 = require("./DocumentTracerRequest.js");
/*
 * @typedef {Object} DeleteApplicationRequestInput
 */
/**
 * Class for Deleting Application Request.
 * @extends DocumentTracerRequest
 */
var DeleteApplicationRequest = /** @class */ (function (_super) {
    __extends(DeleteApplicationRequest, _super);
    /**
     * @param {DeleteApplicationRequestInput} [input]
     */
    function DeleteApplicationRequest(input) {
        return _super.call(this, 'delete', DeleteApplicationRequest.parse(input)) || this;
    }
    /**
     * @param {string} [id]
     * @returns {string}
     */
    DeleteApplicationRequest.checkId = function (input) {
        if (!input)
            return (0, DocumentTracerRequest_js_1.Required)('id');
        return input;
    };
    /**
     * @returns {Object}
     */
    DeleteApplicationRequest.parse = function () { return {}; };
    return DeleteApplicationRequest;
}(DocumentTracerRequest_js_1.default));
exports.default = DeleteApplicationRequest;
