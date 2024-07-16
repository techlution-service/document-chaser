import DocumentTracerError from './DocumentTracerError.js';

export default class RequestMalformed extends DocumentTracerError {
  constructor(reason) {
    super('000001', `Request malformed - ${reason}`);
  }
}
