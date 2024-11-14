import DocumentTracerError from './DocumentTracerError.js';

/**
 * @extends DocumentTracerError
 */
export default class AuthenticationRequired extends DocumentTracerError {
  constructor() {
    super('100002', 'Authentication Required.');
  }
}
