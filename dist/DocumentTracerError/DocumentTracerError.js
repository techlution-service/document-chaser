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
/**
 * @extends Error
 */
var DocumentTracerError = /** @class */ (function (_super) {
    __extends(DocumentTracerError, _super);
    /**
     * @param {string} code
     * @param {string} message
     * @param {Object|string} detail
     */
    function DocumentTracerError(code, message, detail) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.detail = detail;
        return _this;
    }
    return DocumentTracerError;
}(Error));
exports.default = DocumentTracerError;
