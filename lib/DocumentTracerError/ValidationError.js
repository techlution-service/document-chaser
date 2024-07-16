import DocumentTracerError from './DocumentTracerError.js';

export default class ValidationError extends DocumentTracerError {
  constructor(detail) {
    super('500003', 'Validation error.', detail);
  }
}
