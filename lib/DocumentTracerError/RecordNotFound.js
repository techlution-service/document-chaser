import DocumentTracerError from './DocumentTracerError.js';

export default class RecordNotFound extends DocumentTracerError {
  constructor() {
    super('500002', 'Record not found.');
  }
}
