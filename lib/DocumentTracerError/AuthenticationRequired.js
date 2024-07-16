import DocumentTracerError from './DocumentTracerError.js';

export default class AuthenticationRequired extends DocumentTracerError {
  constructor() {
    super('100002', 'Authentication Required.');
  }
}
