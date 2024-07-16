import util from 'util';
import DocumentTracerConfig from './DocumentTracerConfig.js';
import { RequestMalformed } from './DocumentTracerError/index.js';
import {
  CreateApplicationRequest,
  DeleteApplicationRequest,
  UpdateApplicationRequest,
} from './DocumentTracerRequest/index.js';
import DocumentTracerResponse from './DocumentTracerResponse.js';

export const RESULT = {
  SUCCESS: 'success',
  FAIL: 'fail',
};

export default class DocumentTracer {
  #applicationId;

  #domain;

  #error;

  #key;

  #resource;

  #request;

  #response;

  #result;

  #shouldFail;

  #url;

  constructor(config) {
    const { domain, key } = DocumentTracer.#parseConfig(config);
    this.#domain = domain;
    this.#key = key;
    this.#shouldFail = false;
  }

  static #parseConfig(input) {
    if (input instanceof DocumentTracerConfig) return input;
    return new DocumentTracerConfig(input);
  }

  async #exec() {
    if (!this.#request) {
      throw new RequestMalformed('Request content is not set');
    }
    const { method, body } = this.#request;
    this.#url = this.#formatUrl();

    this.#response = await DocumentTracerResponse.handleResponse(fetch(
      this.#url,
      {
        headers: {
          Authorization: `Bearer ${this.#key}`,
          'Content-Type': 'application/json',
        },
        method,
        body,
      },
    ));
    const { success, id: responseId, error } = this.#response;
    this.#result = success ? RESULT.SUCCESS : RESULT.FAIL;
    this.#applicationId = responseId;
    this.#error = error;
    if (this.#error) throw error;
  }

  #formatUrl() {
    const id = this.#request.constructor.checkId(this.#applicationId);
    const urlPath = [this.#domain, 'admin', this.#resource];
    if (id) urlPath.push(id);
    return urlPath.join('/');
  }

  #parseRequest(RequestClass, input) {
    this.#request = input instanceof RequestClass ? input : new RequestClass(input);
  }

  application(id) {
    if (id) this.#applicationId = id;
    this.#resource = 'application';
    return this;
  }

  create(input) {
    if (!this.#resource) throw new RequestMalformed('Resource is not set');
    this.#parseRequest(CreateApplicationRequest, input);
    return this;
  }

  update(input) {
    if (!this.#resource) throw new RequestMalformed('Resource is not set');
    this.#parseRequest(UpdateApplicationRequest, input);
    return this;
  }

  delete(input) {
    if (!this.#resource) throw new RequestMalformed('Resource is not set');
    this.#parseRequest(DeleteApplicationRequest, input);
    return this;
  }

  orFail() {
    this.#shouldFail = true;
    return this;
  }

  get applicationId() { return this.#applicationId; }

  get error() { return this.#error; }

  get result() { return this.#result; }

  get response() { return this.#response; }

  valueOf() {
    return {
      error: this.#error,
      result: this.#result,
      applicationId: this.#applicationId,
      resource: this.#resource,
      url: this.#url,
      request: this.#request,
      response: this.#response,
    };
  }

  toString() {
    return JSON.stringify(this.valueOf());
  }

  [util.inspect.custom]() {
    return this.valueOf();
  }

  async then(resolve, reject) {
    const shouldFail = this.#shouldFail;
    try {
      await this.#exec();
      return resolve(this.#response);
    } catch (e) {
      if (this.#error !== e) this.#error = e;
      return shouldFail ? reject(this.#error) : resolve(this.#response);
    }
  }
}
