import DocumentTracerError from './DocumentTracerError.js';

/**
 * @extends DocumentTracerError
 */
export default class RecordAlreadyExists extends DocumentTracerError {
  constructor() {
    super('500002', 'Record already exist.');
  }
}
