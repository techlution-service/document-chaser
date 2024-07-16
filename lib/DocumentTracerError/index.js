import AuthenticationRequired from './AuthenticationRequired.js';
import ConfigMalformed from './ConfigMalformed.js';
import DocumentTracerError from './DocumentTracerError.js';
import EnumViolation from './EnumViolation.js';
import MalformedApplicationIdentifier from './MalformedApplicationIdentifier.js';
import RecordNotFound from './RecordNotFound.js';
import RequestMalformed from './RequestMalformed.js';
import UpdateAuthenticationRequired from './UpdateAuthenticationRequired.js';
import ValidationError from './ValidationError.js';
import DocumentTracerErrorSet from './DocumentTracerErrorSet.js';

export default DocumentTracerError;
export {
  AuthenticationRequired,
  ConfigMalformed,
  DocumentTracerError,
  DocumentTracerErrorSet,
  EnumViolation,
  MalformedApplicationIdentifier,
  RecordNotFound,
  RequestMalformed,
  UpdateAuthenticationRequired,
  ValidationError,
};

export const ERROR_CODE_MAP = new Map([
  ['100002', AuthenticationRequired],
  ['100004', UpdateAuthenticationRequired],
  ['500001', MalformedApplicationIdentifier],
  ['500002', RecordNotFound],
  ['500003', ValidationError],
]);
