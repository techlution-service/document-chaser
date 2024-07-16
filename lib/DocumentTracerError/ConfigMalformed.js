import DocumentTracerError from './DocumentTracerError.js';

export default class ConfigMalformed extends DocumentTracerError {
  constructor(config) {
    super('000000', `Docuemnt Tracer Config ${config} is missing or malformed`);
  }
}
