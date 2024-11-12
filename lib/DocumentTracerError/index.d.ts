export class DocumentTracerError extends Error {
  constructor(code: string, message: string, detail?: any);

  code: string;
  detail?: any;
}

export class ConfigMalformed extends DocumentTracerError {
  constructor(config: string);

  code: '000000';
}

export class RequestMalformed extends DocumentTracerError {
  constructor(config: string);

  code: '000001';
}

export class EnumViolation extends RequestMalformed {
  constructor(field: string, expected: string[], input: any);
}

export class DocumentTracerErrorSet extends DocumentTracerError {
  constructor(errors: DocumentTracerError[]);

  code: '000003';
}


export class AuthenticationRequired extends DocumentTracerError {
  constructor();

  code: '100002';
}

export class UpdateAuthenticationRequired extends DocumentTracerError {
  constructor();

  code: '100004';
}

export class MalformedApplicationIdentifier extends DocumentTracerError {
  constructor();

  code: '500001';
}


export class RecordNotFound extends DocumentTracerError {
  constructor();

  code: '100002';
}

export class ValidationError extends DocumentTracerError {
  constructor(detail: any);

  code: '500003';
}
