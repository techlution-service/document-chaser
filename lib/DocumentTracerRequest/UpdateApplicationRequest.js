import DocumentTracerRequest, {
  TEMPLATE_TYPE_ENUM, Required, parseInteger, extractDefined, isNull,
} from './DocumentTracerRequest.js';
import { EnumViolation } from '../DocumentTracerError/index.js';

const FIELDS = [
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
export default class UpdateApplicationRequest extends DocumentTracerRequest {
  /**
   * @param {CreateApplicationRequestInput} input
   */
  constructor(input) {
    super('put', UpdateApplicationRequest.parse(input));
  }

  /**
   * @param {string} [input]
   * @returns {string}
   */
  static checkId(input) {
    if (!input) return Required('id');
    return input;
  }

  /**
   * @param {UpdateApplicationRequestInput} input
   * @returns {UpdateApplicationRequestInput}
   */
  static parse(input) {
    const { emailTemplateType } = input;

    const missingDocumentQuantity = parseInteger('missingDocumentQuantity', input.missingDocumentQuantity);
    const missingQuestionQuantity = parseInteger('missingQuestionQuantity', input.missingQuestionQuantity);

    if (
      emailTemplateType
      && !TEMPLATE_TYPE_ENUM.includes(emailTemplateType)
    ) {
      throw new EnumViolation('emailTemplateType', TEMPLATE_TYPE_ENUM, emailTemplateType);
    }

    const output = extractDefined(FIELDS, input);
    if (!isNull(missingDocumentQuantity)) Object.assign(output, { missingDocumentQuantity });
    if (!isNull(missingQuestionQuantity)) Object.assign(output, { missingQuestionQuantity });
    return output;
  }
}
