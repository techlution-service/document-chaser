import DocumentTracerError from './DocumentTracerError.js';

/**
 * @extends DocumentTracerError
 */
export default class DocumentTracerErrorSet extends DocumentTracerError {
  /**
   * @param {DocumentTracerError[]} errors
   */
  constructor(errors) {
    super('000003', errors.reduce(
      (msg, error) => `${msg}\n  ${error.code} - ${error.message}`,
      'Docuemnt Tracer Multiple Error',
    ));
  }
}
