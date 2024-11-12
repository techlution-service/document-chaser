import type { DocumentTracerRequest, TEMPLATE_TYPE_ENUM } from './DocumentTracerRequest.d.ts';

export interface CreateApplicationRequestInput {
  externalId: string;
  merchantName: string;
  email: string;
  emailTemplateType: TEMPLATE_TYPE_ENUM;
  actionRequiredUrl: string;
  noResponseUrl: string;
  amEmail?: string;
  missingDocumentQuantity: number;
  missingQuestionQuantity: number;
}

export class CreateApplicationRequest extends DocumentTracerRequest {
  constructor(input: CreateApplicationRequestInput);

  static parse(input: CreateApplicationRequestInput): CreateApplicationRequestInput;
}
