import DocumentTracerError from './DocumentTracerError.js';

/**
 * @extends DocumentTracerError
 */
export default class ConfigMalformed extends DocumentTracerError {
  /**
   * @param {string} config
   */
  constructor(config) {
    super('000000', `Docuemnt Tracer Config ${config} is missing or malformed`);
  }
}
