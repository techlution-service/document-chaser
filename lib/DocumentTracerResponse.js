import util from 'util';
import { ERROR_CODE_MAP, DocumentTracerErrorSet } from './DocumentTracerError/index.js';

/**
 * @typedef {Object} DocumentTracerResponseValueOf
 * @property {?string} _id
 * @property {?string} applicationId
 * @property {?DocumentTracerError[]} error
 * @property {boolean} success
 * @property {?Object} data
 */

export default class DocumentTracerResponse {
  #applicationId;
  #error;
  #success;
  #data;
  #errorMap;

  /**
   * @param {Object} input
   * @param {boolean} [isCreate=false]
   */
  constructor(input, isCreate = false) {
    const { _id, error } = input;
    this.#data = input;
    this.#applicationId = _id;
    this.#errorMap = ERROR_CODE_MAP(isCreate);
    if (error?.errors) {
      this.parseError(error.errors);
    }
    this.#success = !!_id && !error;
  }

  /**
   * @param {Error[]} errors
   */
  parseError(errors) {
    if (errors.length === 1) {
      const [{ errorCode, detail }] = errors;
      if (errorCode) this.#error = new (this.#errorMap.get(errorCode))(detail);
      return;
    }
    this.#error = new DocumentTracerErrorSet(
      errors.map(({ errorCode, detail }) => new (this.#errorMap.get(errorCode))(detail)),
    );
  }

  /**
   * @param {Object} input
   * @param {boolean} [isCreate=false]
   * @returns {DocumentTracerResponse}
   */
  static async handleResponse(input, isCreate = false) {
    if (input instanceof Promise) {
      return DocumentTracerResponse.handleResponse(await input, isCreate);
    }
    const response = input instanceof Response
      ? await input.json()
      : input;
    return new DocumentTracerResponse(response, isCreate);
  }

  /** @type {?string}  */
  get applicationId() { return this.#applicationId; }

  /** @type {?string}  */
  get id() { return this.#applicationId; }

  /** @type {?string}  */
  get _id() { return this.#applicationId; }

  /** @type {boolean}  */
  get success() { return this.#success; }

  /** @type {?DocumentTracerError[]}  */
  get error() { return this.#error; }

  /** @type {?Object}  */
  get data() { return this.#data; }

  /** @return {DocumentTracerResponseValueOf} */
  valueOf() {
    return {
      _id: this.#applicationId,
      applicationId: this.#applicationId,
      error: this.#error,
      success: this.#success,
      data: this.#data,
    };
  }

  [util.inspect.custom]() {
    return this.valueOf();
  }
}
