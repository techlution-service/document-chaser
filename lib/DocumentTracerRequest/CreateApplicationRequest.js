import DocumentTracerRequest, {
  TEMPLATE_TYPE_ENUM, Required, parseRequiredInteger,
} from './DocumentTracerRequest.js';
import { EnumViolation } from '../DocumentTracerError/index.js';

export default class CreateApplicationRequest extends DocumentTracerRequest {
  constructor(input) {
    super('post', CreateApplicationRequest.parse(input));
  }

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
