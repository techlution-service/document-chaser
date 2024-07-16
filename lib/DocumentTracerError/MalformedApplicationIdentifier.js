import DocumentTracerError from './DocumentTracerError.js';

export default class MalformedApplicationIdentifier extends DocumentTracerError {
  constructor() {
    super('500002', 'Missing or Invalid Application\'s identifier.');
  }
}
