import type { DocumentTracerRequest, TEMPLATE_TYPE_ENUM } from './DocumentTracerRequest.d.ts';

export interface UpdateApplicationRequestInput {
  merchantName?: string;
  email?: string;
  emailTemplateType?: TEMPLATE_TYPE_ENUM;
  actionRequiredUrl?: string;
  noResponseUrl?: string;
  amEmail?: string;
  missingDocumentQuantity?: number;
  missingQuestionQuantity?: number;
}

export class UpdateApplicationRequest extends DocumentTracerRequest {
  constructor(input: UpdateApplicationRequestInput);

  static parse(input: UpdateApplicationRequestInput): UpdateApplicationRequestInput;
}
