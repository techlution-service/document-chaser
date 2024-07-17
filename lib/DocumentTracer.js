import util from 'util';
import DocumentTracerConfig from './DocumentTracerConfig.js';
import { RequestMalformed } from './DocumentTracerError/index.js';
import {
  CreateApplicationRequest,
  DeleteApplicationRequest,
  UpdateApplicationRequest,
} from './DocumentTracerRequest/index.js';
import DocumentTracerResponse from './DocumentTracerResponse.js';
import { RESULT, HEADERS, HASH } from './util.js';

export default class DocumentTracer {
  #applicationId;
  #domain;
  #error;
  #key;
  #secret;
  #resource;
  #request;
  #response;
  #result;
  #shouldFail = false;
  #url;

  constructor(config) {
    const { domain, secret, key } = DocumentTracer.#parseConfig(config);
    this.#domain = domain;
    this.#key = key;
    this.#secret = secret;
  }

  static #parseConfig(input) {
    if (input instanceof DocumentTracerConfig) return input;
    return new DocumentTracerConfig(input);
  }

  async #exec() {
    if (!this.#request) throw new RequestMalformed('Request content is not set');
    const { method, body } = this.#request;
    this.#url = this.#formatUrl();

    this.#response = await DocumentTracerResponse.handleResponse(fetch(
      this.#url,
      { headers: HEADERS(this.#key), method, body },
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
    if (!this.#resource) throw new RequestMalformed('Resource is not set');
    this.#request = input instanceof RequestClass ? input : new RequestClass(input);
    return this;
  }

  application(id) {
    if (id) this.#applicationId = id;
    this.#resource = 'application';
    return this;
  }

  orFail() {
    this.#shouldFail = true;
    return this;
  }

  verify(payload) { return HASH(payload, this.#secret); }
  create(input) { return this.#parseRequest(CreateApplicationRequest, input); }
  update(input) { return this.#parseRequest(UpdateApplicationRequest, input); }
  delete(input) { return this.#parseRequest(DeleteApplicationRequest, input); }
  get applicationId() { return this.#applicationId; }
  get error() { return this.#error; }
  get result() { return this.#result; }
  get response() { return this.#response; }

  [util.inspect.custom]() {
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

  async then(resolve, reject) {
    try {
      await this.#exec();
      return resolve(this.#response);
    } catch (e) {
      if (this.#error !== e) this.#error = e;
      return this.#shouldFail ? reject(this.#error) : resolve(this.#response);
    }
  }
}
