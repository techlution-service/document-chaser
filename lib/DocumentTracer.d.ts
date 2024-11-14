import type { DocumentTracerConfig } from './DocumentTracerConfig.d.ts';
import type { DocumentTracerResponse, DocumentTracerResult } from './DocumentTracerResponse.d.ts';
import type {
  CreateApplicationRequestInput,
  UpdateApplicationRequestInput,
  DeleteApplicationRequestInput,
} from './DocumentTracerRequest/index.d.ts';


export default class DocumentTracer {
  constructor(config: DocumentTracerConfig);
  application(id: string): this;
  orFail(): this;

  verify(payload: { checksum: string }): boolean;

  create(input: CreateApplicationRequestInput): this;
  update(input: UpdateApplicationRequestInput): this;
  delete(input: DeleteApplicationRequestInput): this;

  get applicationId(): string;
  get error(): Error;
  get result(): DocumentTracerResult;
  get response():DocumentTracerResponse;

  then(resolve: Function, reject: Function): Promise<DocumentTracerResponse>;
}
