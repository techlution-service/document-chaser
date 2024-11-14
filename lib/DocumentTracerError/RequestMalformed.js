import DocumentTracerError from './DocumentTracerError.js';

/**
 * @extends DocumentTracerError
 */
export default class RequestMalformed extends DocumentTracerError {
  /**
   * @param {string} reason
   */
  constructor(reason) {
    super('000001', `Request malformed - ${reason}`);
  }
}
