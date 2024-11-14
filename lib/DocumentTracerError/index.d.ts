export class DocumentTracerError extends Error {
  constructor(code: string, message: string, detail?: any);

  code: string;
  detail?: any;
}

export class ConfigMalformed extends DocumentTracerError {
  constructor(config: string);
}

export class RequestMalformed extends DocumentTracerError {
  constructor(config: string);
}

export class EnumViolation extends RequestMalformed {
  constructor(field: string, expected: string[], input: any);
}

export class DocumentTracerErrorSet extends DocumentTracerError {
  constructor(errors: DocumentTracerError[]);
}


export class AuthenticationRequired extends DocumentTracerError {}

export class UpdateAuthenticationRequired extends DocumentTracerError {}

export class MalformedApplicationIdentifier extends DocumentTracerError {}

export class RecordAlreadyExists extends DocumentTracerError {}

export class RecordNotFound extends DocumentTracerError {}

export class ValidationError extends DocumentTracerError {
  constructor(detail: any);
}
