import type { DocumentTracerRequest } from './DocumentTracerRequest.d.ts';

export interface DeleteApplicationRequestInput {}

export class DeleteApplicationRequest extends DocumentTracerRequest {
  constructor(input: DeleteApplicationRequestInput);

  static parse(input: DeleteApplicationRequestInput): DeleteApplicationRequestInput;
}
