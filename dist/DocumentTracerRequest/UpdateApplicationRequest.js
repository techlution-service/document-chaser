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
var index_js_1 = require("../DocumentTracerError/index.js");
var FIELDS = [
    'merchantName',
    'email',
    'emailTemplateType',
    'actionRequiredUrl',
    'noResponseUrl',
    'amEmail',
];
/**
 * @typedef {import('./DocumentTracerRequest.js').TEMPLATE_TYPE_ENUM} TEMPLATE_TYPE_ENUM
 */
/*
 * @typedef {Object} UpdateApplicationRequestInput
 * @property {string} [externalId]
 * @property {string} [merchantName]
 * @property {string} [email]
 * @property {TEMPLATE_TYPE_ENUM} [emailTemplateType]
 * @property {string} [actionRequiredUrl]
 * @property {string} [noResponseUrl]
 * @property {string} [amEmail]
 * @property {number} [missingDocumentQuantity]
 * @property {number} [missingQuestionQuantity]
 */
/**
 * Class for Updating Application Request.
 * @extends DocumentTracerRequest
 */
var UpdateApplicationRequest = /** @class */ (function (_super) {
    __extends(UpdateApplicationRequest, _super);
    /**
     * @param {CreateApplicationRequestInput} input
     */
    function UpdateApplicationRequest(input) {
        return _super.call(this, 'put', UpdateApplicationRequest.parse(input)) || this;
    }
    /**
     * @param {string} [input]
     * @returns {string}
     */
    UpdateApplicationRequest.checkId = function (input) {
        if (!input)
            return (0, DocumentTracerRequest_js_1.Required)('id');
        return input;
    };
    /**
     * @param {UpdateApplicationRequestInput} input
     * @returns {UpdateApplicationRequestInput}
     */
    UpdateApplicationRequest.parse = function (input) {
        var emailTemplateType = input.emailTemplateType;
        var missingDocumentQuantity = (0, DocumentTracerRequest_js_1.parseInteger)('missingDocumentQuantity', input.missingDocumentQuantity);
        var missingQuestionQuantity = (0, DocumentTracerRequest_js_1.parseInteger)('missingQuestionQuantity', input.missingQuestionQuantity);
        if (emailTemplateType
            && !DocumentTracerRequest_js_1.TEMPLATE_TYPE_ENUM.includes(emailTemplateType)) {
            throw new index_js_1.EnumViolation('emailTemplateType', DocumentTracerRequest_js_1.TEMPLATE_TYPE_ENUM, emailTemplateType);
        }
        var output = (0, DocumentTracerRequest_js_1.extractDefined)(FIELDS, input);
        if (!(0, DocumentTracerRequest_js_1.isNull)(missingDocumentQuantity))
            Object.assign(output, { missingDocumentQuantity: missingDocumentQuantity });
        if (!(0, DocumentTracerRequest_js_1.isNull)(missingQuestionQuantity))
            Object.assign(output, { missingQuestionQuantity: missingQuestionQuantity });
        return output;
    };
    return UpdateApplicationRequest;
}(DocumentTracerRequest_js_1.default));
exports.default = UpdateApplicationRequest;
