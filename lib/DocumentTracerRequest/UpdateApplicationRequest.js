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

export default class UpdateApplicationRequest extends DocumentTracerRequest {
  constructor(input) {
    super('put', UpdateApplicationRequest.parse(input));
  }

  static checkId(input) {
    if (!input) return Required('id');
    return input;
  }

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
