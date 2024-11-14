import DocumentTracerRequest, { Required } from './DocumentTracerRequest.js';

/*
 * @typedef {Object} DeleteApplicationRequestInput
 */

/**
 * Class for Deleting Application Request.
 * @extends DocumentTracerRequest
 */
export default class DeleteApplicationRequest extends DocumentTracerRequest {
  /**
   * @param {DeleteApplicationRequestInput} [input]
   */
  constructor(input) {
    super('delete', DeleteApplicationRequest.parse(input));
  }

  /**
   * @param {string} [id]
   * @returns {string}
   */
  static checkId(input) {
    if (!input) return Required('id');
    return input;
  }

  /**
   * @returns {Object}
   */
  static parse() { return {}; }
}
