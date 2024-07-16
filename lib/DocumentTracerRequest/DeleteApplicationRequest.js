import DocumentTracerRequest, { Required } from './DocumentTracerRequest.js';

export default class DeleteApplicationRequest extends DocumentTracerRequest {
  constructor(input) {
    super('delete', DeleteApplicationRequest.parse(input));
  }

  static checkId(input) {
    if (!input) return Required('id');
    return input;
  }

  static parse() { return {}; }
}
