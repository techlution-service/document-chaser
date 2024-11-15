import { ConfigMalformed } from './DocumentTracerError/index.js';

const ENV_ENUM = ['prod'];

const DEFAULT_ENV = 'prod';
const DEFAULT_DOMAIN = (env) => `https://document-tracer-api-${env}.neuralsense.io`;

/**
 * @typedef {Object} DocumentTracerConfigInput
 * @property {string} key
 * @property {string} secret
 * @property {?string} domain
 * @property {?string} env
 */

export default class DocumentTracerConfig {
  /**
   * @param {DocumentTracerConfigInput} input
   */
  constructor(input) {
    const {
      key, secret, env, domain,
    } = DocumentTracerConfig.validate(input);
    this.key = key;
    this.secret = secret;
    this.domain = domain;
    this.env = env;
  }

  /**
   * @param {DocumentTracerConfigInput} input
   */
  static validate({
    key,
    secret,
    env = DEFAULT_ENV,
    domain = DEFAULT_DOMAIN(env),
  }) {
    if (!key) throw new ConfigMalformed('key');
    if (!secret) throw new ConfigMalformed('secret');
    if (!ENV_ENUM.includes(env)) throw new ConfigMalformed('env');
    return {
      key, secret, env, domain,
    };
  }
}
