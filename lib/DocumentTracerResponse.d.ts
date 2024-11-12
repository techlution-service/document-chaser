import { DocumentTracerError } from './DocumentTracerError/index.d.ts';

export interface DocumentTracerResult {
  _id: string;
  error?: {
    errors: DocumentTracerError[]
  }
}

export class DocumentTracerResponse {
  constructor(input: DocumentTracerResult);

  parseError(errors: DocumentTracerError[]): void;

  static handleResponse(input: DocumentTracerResult | Promise<DocumentTracerResult>): Promise<DocumentTracerResponse>;

  get applicationId(): string;
  get id(): string;
  get success(): boolean;
  get error(): DocumentTracerError[] | DocumentTracerError;
  get data(): DocumentTracerResult;

}
