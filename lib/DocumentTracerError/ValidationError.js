import DocumentTracerError from './DocumentTracerError.js';

/**
 * @extends DocumentTracerError
 */
export default class ValidationError extends DocumentTracerError {
  /**
   * @param {Object|string} detail
   */
  constructor(detail) {
    super('500003', 'Validation error.', detail);
  }
}
