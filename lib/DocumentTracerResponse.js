import util from 'util';
import { ERROR_CODE_MAP, DocumentTracerErrorSet } from './DocumentTracerError/index.js';

export default class DocumentTracerResponse {
  #applicationId;
  #error;
  #success;
  #data;
  #errorMap;

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

  static async handleResponse(input, isCreate = false) {
    if (input instanceof Promise) {
      return DocumentTracerResponse.handleResponse(await input, isCreate);
    }
    const response = input instanceof Response
      ? await input.json()
      : input;
    return new DocumentTracerResponse(response, isCreate);
  }

  get applicationId() { return this.#applicationId; }

  get id() { return this.#applicationId; }

  get _id() { return this.#applicationId; }

  get success() { return this.#success; }

  get error() { return this.#error; }

  get data() { return this.#data; }

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
