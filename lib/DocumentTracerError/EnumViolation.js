import RequestMalformed from './RequestMalformed.js';

export default class EnumViolation extends RequestMalformed {
  constructor(field, expected, input) {
    super(`${field} expected to be ${expected.join('|')}, received: ${input}`);
  }
}
