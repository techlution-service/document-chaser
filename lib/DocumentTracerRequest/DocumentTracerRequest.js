import util from 'util';
import { RequestMalformed } from '../DocumentTracerError/index.js';

export const isNull = (input) => typeof input === 'undefined' || input === null;

export const TEMPLATE_TYPE = {
  SUBMISSION: 'submission',
  INFORMATION_REQUEST: 'information_request',
};
export const TEMPLATE_TYPE_ENUM = Object.values(TEMPLATE_TYPE);
export const Required = (field) => { throw new RequestMalformed(`${field} is required`); };
export const parseInteger = (field, input) => {
  if (isNull(input)) return undefined;
  const output = parseInt(input, 10);
  if (Number.isNaN(output)) throw new RequestMalformed(`${field} should be number, received ${typeof input} instead`);
  return output;
};

export const parseRequiredInteger = (field, input) => (isNull(input)
  ? Required(field)
  : parseInteger(field, input));
export const extractDefined = (fields, obj) => fields.reduce(
  (output, field) => (isNull(obj[field])
    ? output
    : Object.assign(output, { [field]: obj[field] })),
  {},
);

export default class DocumentTracerRequest {
  #data;

  #method;

  constructor(method, data) {
    if (this.constructor.name === 'DocumentTracerRequest') {
      throw new TypeError('DocumentTracerRequest cannot be initiated directly');
    }

    this.#data = data;
    this.#method = method;
  }

  static checkId() { return undefined; }

  get data() { return this.#data; }

  get body() { return JSON.stringify(this.#data); }

  get method() { return this.#method; }

  valueOf() {
    return {
      method: this.#method,
      data: this.#data,
    };
  }

  [util.inspect.custom]() {
    return this.valueOf();
  }
}
