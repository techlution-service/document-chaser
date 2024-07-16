import { ConfigMalformed } from './DocumentTracerError/index.js';

const ENV_ENUM = ['prod'];

const DEFAULT_ENV = 'prod';
const DEFAULT_DOMAIN = (env) => `https://document-tracer-api-${env}.neuralsense.io`;

export default class DocumentTracerConfig {
  constructor(input) {
    const { key, env, domain } = DocumentTracerConfig.validate(input);
    this.key = key;
    this.domain = domain;
    this.env = env;
  }

  static validate({
    key,
    env = DEFAULT_ENV,
    domain = DEFAULT_DOMAIN(env),
  }) {
    if (!key) throw new ConfigMalformed('key');
    if (!ENV_ENUM.includes(env)) throw new ConfigMalformed('env');
    return { key, env, domain };
  }
}
