import type { DocumentTracerError } from './DocumentTracerError/index.d.ts';

export interface DocumentTracerResult {
  _id: string;
  error?: {
    errors: DocumentTracerError[]
  }
}

export default class DocumentTracerResponse {
  constructor(input: DocumentTracerResult, isCreate: boolean);

  parseError(errors: DocumentTracerError[]): void;

  static handleResponse(input: DocumentTracerResult | Promise<DocumentTracerResult>, isCreate: boolean): Promise<DocumentTracerResponse>;

  get applicationId(): string;
  get id(): string;
  get _id(): string;
  get success(): boolean;
  get error(): DocumentTracerError[] | DocumentTracerError;
  get data(): DocumentTracerResult;

}
