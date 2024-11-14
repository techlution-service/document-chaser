import DocumentTracerError from './DocumentTracerError.js';

/**
 * @extends DocumentTracerError
 */
export default class RecordNotFound extends DocumentTracerError {
  constructor() {
    super('500002', 'Record not found.');
  }
}
