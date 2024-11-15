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
var RequestMalformed_js_1 = require("./RequestMalformed.js");
/**
 * @extends RequestMalformed
 */
var EnumViolation = /** @class */ (function (_super) {
    __extends(EnumViolation, _super);
    /**
     * @param {string} field
     * @param {string[]} expected
     * @param {string} input
     */
    function EnumViolation(field, expected, input) {
        return _super.call(this, "".concat(field, " expected to be ").concat(expected.join('|'), ", received: ").concat(input)) || this;
    }
    return EnumViolation;
}(RequestMalformed_js_1.default));
exports.default = EnumViolation;
