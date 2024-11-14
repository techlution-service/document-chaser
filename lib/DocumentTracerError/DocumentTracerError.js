/**
 * @extends Error
 */
export default class DocumentTracerError extends Error {
  /**
   * @param {string} code
   * @param {string} message
   * @param {Object|string} detail
   */
  constructor(code, message, detail) {
    super(message);
    this.code = code;
    this.detail = detail;
  }
}
