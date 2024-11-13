import util from 'util';
import DocumentTracerConfig from './DocumentTracerConfig.js';
import { RequestMalformed } from './DocumentTracerError/index.js';
import { CAR, DAR, UAR } from './DocumentTracerRequest/index.js';
import DocumentTracerResponse from './DocumentTracerResponse.js';
import { RESULT, HEADER, HASH } from './util.js';

export default class DocumentTracer {
  #applicationId;
  #config;
  #domain;
  #error;
  #key;
  #secret;
  #resource;
  #requestObject;
  #response;
  #result;
  #shouldFail = false;
  #url;

  constructor(config) {
    this.#config = DocumentTracer.#parseConfig(config);
    const { domain, secret, key } = this.#config;
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

    this.#response = await DocumentTracerResponse.handleResponse(
      fetch(this.#url, { headers: HEADER(this.#key), method, body }),
    );
    const { success, id: responseId, error } = this.#response;
    this.#result = success ? RESULT.SUCCESS : RESULT.FAIL;
    this.#applicationId = responseId;
    this.#error = error;
    if (this.#error) throw error;
  }

  #formatUrl() {
    return [this.#domain, 'admin', this.#resource, this.#request.constructor.checkId(this.#applicationId)]
      .filter(Boolean).join('/');
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
  create(input) { return this.#parseRequest(CAR, input); }
  update(input) { return this.#parseRequest(UAR, input); }
  delete(input) { return this.#parseRequest(DAR, input); }

  get applicationId() { return this.#applicationId; }
  get error() { return this.#error; }
  get result() { return this.#result; }
  get response() { return this.#response; }
  get config() { return this.#config; }
  get request() {
    return { domain: this.#domain, url: this.#url, ...(this.#request?.valueOf() || {}) };
  }

  get #request() { return this.#requestObject; }
  set #request(input) {
    this.#requestObject = input;
    this.#url = this.#formatUrl();
  }

  [util.inspect.custom]() {
    return {
      error: this.#error,
      result: this.#result,
      applicationId: this.#applicationId,
      resource: this.#resource,
      url: this.#url,
      request: this.request,
      response: this.#response,
      config: this.#config,
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
