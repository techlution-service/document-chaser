import RequestMalformed from './RequestMalformed.js';

/**
 * @extends RequestMalformed
 */
export default class EnumViolation extends RequestMalformed {
  /**
   * @param {string} field
   * @param {string[]} expected
   * @param {string} input
   */
  constructor(field, expected, input) {
    super(`${field} expected to be ${expected.join('|')}, received: ${input}`);
  }
}
