export interface DocumentTracerConfigInput {
  key: string;
  secret: string;
  domain: string;
  env: string;
}

export default class DocumentTracerConfig {
  constructor(input: DocumentTracerConfigInput);

  static validate(input: {
    key: string;
    secret: string;
    env?: string;
    domain?: string;
  }): DocumentTracerConfigInput;
}
