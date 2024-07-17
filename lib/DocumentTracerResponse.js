import util from 'util';
import { ERROR_CODE_MAP, DocumentTracerErrorSet } from './DocumentTracerError/index.js';

export default class DocumentTracerResponse {
  #applicationId;
  #error;
  #success;
  #data;

  constructor(input) {
    const { _id, error } = input;
    this.#data = input;
    this.#applicationId = _id;
    if (error?.errors) {
      this.parseError(error.errors);
    }
    this.#success = !!_id && !error;
  }

  parseError(errors) {
    if (errors.length === 1) {
      const [{ errorCode, detail }] = errors;
      if (errorCode) this.#error = new (ERROR_CODE_MAP.get(errorCode))(detail);
      return;
    }
    this.#error = new DocumentTracerErrorSet(
      errors.map(({ errorCode, detail }) => new (ERROR_CODE_MAP.get(errorCode))(detail)),
    );
  }

  static async handleResponse(input) {
    if (input instanceof Promise) {
      return DocumentTracerResponse.handleResponse(await input);
    }
    const response = input instanceof Response
      ? await input.json()
      : input;
    return new DocumentTracerResponse(response);
  }

  get applicationId() { return this.#applicationId; }

  get id() { return this.#applicationId; }

  get success() { return this.#success; }

  get error() { return this.#error; }

  get data() { return this.#data; }

  valueOf() {
    return {
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
