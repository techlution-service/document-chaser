import DocumentTracerError from './DocumentTracerError.js';

export default class UpdateAuthenticationRequired extends DocumentTracerError {
  constructor() {
    super('100004', 'Authentication Required.');
  }
}
