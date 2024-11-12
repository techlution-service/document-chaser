export enum TEMPLATE_TYPE {
  SUBMISSION = 'submission',
  INFORMATION_REQUEST = 'information_request',
}

export type TEMPLATE_TYPE_ENUM = `${TEMPLATE_TYPE}`

export class DocumentTracerRequest {
  constructor(method: string, data: Record<string, any>);

  static checkId(): undefined;
  static checkId(input: string): string;

  get data(): Record<string, any>;
  get body(): string;
  get method(): string;
}
