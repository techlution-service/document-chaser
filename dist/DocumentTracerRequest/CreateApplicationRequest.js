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
/**
 * @typedef {import('./DocumentTracerRequest.js').TEMPLATE_TYPE_ENUM} TEMPLATE_TYPE_ENUM
 */
/*
 * @typedef {Object} CreateApplicationRequestInput
 * @property {string} externalId
 * @property {string} merchantName
 * @property {string} email
 * @property {TEMPLATE_TYPE_ENUM} emailTemplateType
 * @property {string} actionRequiredUrl
 * @property {string} noResponseUrl
 * @property {string} amEmail
 * @property {number} missingDocumentQuantity
 * @property {number} missingQuestionQuantity
 */
/**
 * Class for Creating Application Request.
 * @extends DocumentTracerRequest
 */
var CreateApplicationRequest = /** @class */ (function (_super) {
    __extends(CreateApplicationRequest, _super);
    /**
     * @param {CreateApplicationRequestInput} input
     */
    function CreateApplicationRequest(input) {
        return _super.call(this, 'post', CreateApplicationRequest.parse(input)) || this;
    }
    /**
     * @param {CreateApplicationRequestInput} input
     * @returns {CreateApplicationRequestInput}
     */
    CreateApplicationRequest.parse = function (input) {
        var _a = input.externalId, externalId = _a === void 0 ? (0, DocumentTracerRequest_js_1.Required)('externalId') : _a, _b = input.merchantName, merchantName = _b === void 0 ? (0, DocumentTracerRequest_js_1.Required)('merchantName') : _b, _c = input.email, email = _c === void 0 ? (0, DocumentTracerRequest_js_1.Required)('email') : _c, _d = input.emailTemplateType, emailTemplateType = _d === void 0 ? (0, DocumentTracerRequest_js_1.Required)('emailTemplateType') : _d, _e = input.actionRequiredUrl, actionRequiredUrl = _e === void 0 ? (0, DocumentTracerRequest_js_1.Required)('actionRequiredUrl') : _e, _f = input.noResponseUrl, noResponseUrl = _f === void 0 ? (0, DocumentTracerRequest_js_1.Required)('noResponseUrl') : _f, amEmail = input.amEmail;
        var missingDocumentQuantity = (0, DocumentTracerRequest_js_1.parseRequiredInteger)('missingDocumentQuantity', input.missingDocumentQuantity);
        var missingQuestionQuantity = (0, DocumentTracerRequest_js_1.parseRequiredInteger)('missingQuestionQuantity', input.missingQuestionQuantity);
        if (!DocumentTracerRequest_js_1.TEMPLATE_TYPE_ENUM.includes(emailTemplateType)) {
            throw new index_js_1.EnumViolation('emailTemplateType', DocumentTracerRequest_js_1.TEMPLATE_TYPE_ENUM, emailTemplateType);
        }
        return {
            externalId: externalId,
            merchantName: merchantName,
            email: email,
            emailTemplateType: emailTemplateType,
            missingDocumentQuantity: missingDocumentQuantity,
            missingQuestionQuantity: missingQuestionQuantity,
            actionRequiredUrl: actionRequiredUrl,
            noResponseUrl: noResponseUrl,
            amEmail: amEmail,
        };
    };
    return CreateApplicationRequest;
}(DocumentTracerRequest_js_1.default));
exports.default = CreateApplicationRequest;
