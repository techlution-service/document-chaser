import DocumentTracerRequest, {
  TEMPLATE_TYPE_ENUM, Required, parseRequiredInteger,
} from './DocumentTracerRequest.js';
import { EnumViolation } from '../DocumentTracerError/index.js';

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
export default class CreateApplicationRequest extends DocumentTracerRequest {
  /**
   * @param {CreateApplicationRequestInput} input
   */
  constructor(input) {
    super('post', CreateApplicationRequest.parse(input));
  }

  /**
   * @param {CreateApplicationRequestInput} input
   * @returns {CreateApplicationRequestInput}
   */
  static parse(input) {
    const {
      externalId = Required('externalId'),
      merchantName = Required('merchantName'),
      email = Required('email'),
      emailTemplateType = Required('emailTemplateType'),
      actionRequiredUrl = Required('actionRequiredUrl'),
      noResponseUrl = Required('noResponseUrl'),
      amEmail,
    } = input;

    const missingDocumentQuantity = parseRequiredInteger('missingDocumentQuantity', input.missingDocumentQuantity);
    const missingQuestionQuantity = parseRequiredInteger('missingQuestionQuantity', input.missingQuestionQuantity);

    if (!TEMPLATE_TYPE_ENUM.includes(emailTemplateType)) {
      throw new EnumViolation('emailTemplateType', TEMPLATE_TYPE_ENUM, emailTemplateType);
    }

    return {
      externalId,
      merchantName,
      email,
      emailTemplateType,
      missingDocumentQuantity,
      missingQuestionQuantity,
      actionRequiredUrl,
      noResponseUrl,
      amEmail,
    };
  }
}
