import DocumentTracerError from './DocumentTracerError.js';

/**
 * @extends DocumentTracerError
 */
export default class UpdateAuthenticationRequired extends DocumentTracerError {
  constructor() {
    super('100004', 'Authentication Required.');
  }
}
