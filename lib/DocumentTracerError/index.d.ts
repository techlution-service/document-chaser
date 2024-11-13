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


export class AuthenticationRequired extends DocumentTracerError {
  constructor();
}

export class UpdateAuthenticationRequired extends DocumentTracerError {
  constructor();
}

export class MalformedApplicationIdentifier extends DocumentTracerError {
  constructor();
}


export class RecordNotFound extends DocumentTracerError {
  constructor();
}

export class ValidationError extends DocumentTracerError {
  constructor(detail: any);
}
