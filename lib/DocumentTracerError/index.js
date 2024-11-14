import AuthenticationRequired from './AuthenticationRequired.js';
import ConfigMalformed from './ConfigMalformed.js';
import DocumentTracerError from './DocumentTracerError.js';
import EnumViolation from './EnumViolation.js';
import MalformedApplicationIdentifier from './MalformedApplicationIdentifier.js';
import RecordAlreadyExists from './RecordAlreadyExists.js';
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
  RecordAlreadyExists,
  RecordNotFound,
  RequestMalformed,
  UpdateAuthenticationRequired,
  ValidationError,
};

const COMMON_ERROR_CODE_MAP = new Map([
  ['100002', AuthenticationRequired],
  ['100004', UpdateAuthenticationRequired],
  ['500001', MalformedApplicationIdentifier],
  ['500002', RecordNotFound],
  ['500003', ValidationError],
]);

const CREATE_ERROR_CODE_MAP = new Map([
  ['100002', AuthenticationRequired],
  ['100004', UpdateAuthenticationRequired],
  ['500001', MalformedApplicationIdentifier],
  ['500002', RecordAlreadyExists],
  ['500003', ValidationError],
]);
export const ERROR_CODE_MAP = (isCreate = false) => (isCreate
  ? CREATE_ERROR_CODE_MAP
  : COMMON_ERROR_CODE_MAP);
