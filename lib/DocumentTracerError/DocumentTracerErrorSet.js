import DocumentTracerError from './DocumentTracerError.js';

export default class DocumentTracerErrorSet extends DocumentTracerError {
  constructor(errors) {
    super('000003', errors.reduce(
      (msg, error) => `${msg}\n  ${error.code} - ${error.message}`,
      'Docuemnt Tracer Multiple Error',
    ));
  }
}
