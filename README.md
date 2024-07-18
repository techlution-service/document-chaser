# Document Tracer
This library provides API integration aid for Document Tracer, an automated notification service.

## Set Up
1. Install this library [Reference](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)

Setup `.npmrc` in your repository
```bash
//npm.pkg.github.com/:_authToken=<GitHub auth token with package:read permission>
@techlution-service:registry=https://npm.pkg.github.com
```
then install with
```bash
npm i @techlution-service/document-tracer
```
2. Acquire your credentials from Techlution

## Package Structure
#### DocumentTracer.js
The main class and your entry point to all APIs.
DocumentTracer itself is a `thenable`, which means you can `await` the class to trigger the API execution
##### Properties
| Property | Type | Read Only | Details |
|---|---|---|---|
| resource | String | :white_check_mark: | Handling resource, only supporting 'application' now |
| applicationId | String | Setter | The current focused application id, can be updated with method `.application(id)` |
| request | DocumentTracerRequest | :white_check_mark: | Request (to be) sent to Service |
| response | DocumentTracerResponse | :white_check_mark: | Response received from Service |
| result | Object | :white_check_mark: | Response body received from Service |
| error | DocumentTracerError | :white_check_mark: | Error received from Service or thrown during execution |
##### Methods
All methods return `this`, i.e. they are chainable
| Method | signature |  Details |
|---|---|---|
| application | `application(id?: String)` | Set the resource to 'application', and 'id' if provided, must be set before executing other actions |
| create | `create(input: Object | DocumentTracerRequest)` | Set the action to create and parse the input with `CreateApplicationRequest` |
| update | `update(input: Object | DocumentTracerRequest)` | Set the action to update and parse the input with `UpdateApplicationRequest` |
| delete | `delete(input?: Object | DocumentTracerRequest)` | Set the action to delete and parse the input with `DeleteApplicationRequest` |
| orFail | `orFail()` | Activate Error throwing after Request, no Error will be thrown by default but stored in `error` |
| verify | `verify(payload: Object)` | Verifying payload from webhook API |

#### DocumentTracerConfig.js
The structure for configuring and validating config to be provided to `DocumentTracer.js`.
| Field | Type | Compulsory | Details
|---|---|---|---|
| key | String | :white_check_mark: | API Key, assigned by Techlution |
| secret | String | :white_check_mark: | Secret Key, assigned By Techlution |
| env | String |  | Service environment, only supporting 'prod' now |
| domain | String |  | API endpoint domain, default to https://document-tracer-api-{env}.neuralsense.io|

#### DocumentTracerErrors
The Errors captures configuration errors and API errors.
##### Package Error
| Error | Code | Description |
|---|---|---|
| DocumentTracerError | - | Base Error Class |
| DocumentTracerErrorSet | 000003 | Error Class to capture a list of Error returned from API |
| ConfigMalformed | 000000 | Initial configuration provided to Tracer is in correct |
| RequestMalformed |  |  |
| EnumViolation |  | Sub-error for RequestMalformed, thrown if provided input is not included in enum |
##### API Error
| Error | Code | Description |
|---|---|---|
| AuthenticationRequired | 100002 | API Authentication failed for create |
| UpdateAuthenticationRequired | 100004 |  API Authentication failed for update |
| MalformedApplicationIdentifier | 500001 | Missing or Invalid Application's identifier  |
| RecordNotFound | 500002 | Record Not found in Tracer |
| ValidationError | 500003 | Request put to Tracer cannot pass validation |

#### DocumentTracerRequests
Request Classes providing structure and validation for input.
##### Properties
| Property | Type | Read Only | Details |
|---|---|---|---|
| method | String | :white_check_mark: | API verb |
| data | Object | :white_check_mark: | the underlaying request body |
##### CreateApplicationRequest
| Field | Type | Compulsory | Details |
|---|---|---|---|
| externalId | String | :white_check_mark: | Application's ID, must be unique |
| merchantName | String | :white_check_mark: | Applicant's name |
| email | String | :white_check_mark: | Applicant's email address |
| emailTemplateType | String | :white_check_mark: | Type of Email Template will be sent out to the Applicant's email. can be either “submission” or “information_request” |
| missingDocumentQuantity | Integer | :white_check_mark: | Quantity of missing document |
| missingQuestionQuantity | Integer | :white_check_mark: | Quantity of missing question |
| actionRequiredUrl | String | :white_check_mark: | Represent the url of the CTA button |
| noResponseUrl | String | :white_check_mark: | The Webhook URL to receive no response event |
| amEmail | String |  | The email of the account manager |
##### UpdateApplicationRequest
| Field | Type | Compulsory | Details |
|---|---|---|---|
| merchantName | String |  | Applicant's name |
| email | String |  | Applicant's email address |
| emailTemplateType | String |  | Type of Email Template will be sent out to the Applicant's email. can be either “submission” or “information_request” |
| missingDocumentQuantity | Integer |  | Quantity of missing document |
| missingQuestionQuantity | Integer |  | Quantity of missing question |
| actionRequiredUrl | String |  | Represent the url of the CTA button |
| noResponseUrl | String |  | The Webhook URL to receive no response event |
| amEmail | String |  | The email of the account manager |
##### DeleteApplicationRequest
No Request fields needed.


#### DocumentTracerResponse
The sole response class that parse API result.
##### Properties
| Property | Type | Read Only | Details |
|---|---|---|---|
| applicationId | String | :white_check_mark: | the received applicationId |
| success | Boolean | :white_check_mark: | indicates if API request success or not |
| data | Object | :white_check_mark: | the received response body |
| error | DocumentTracerError | :white_check_mark: | the Error raised during execution |

## Usage
#### Package Import
```js
import DocumentTracer, {
  DocumentTracerConfig,
  DocumentTracerRequests,
} from '@techlution/document-tracer';

const {
  CreateApplicationRequest,
  UpdateApplicationRequest,
  DeleteApplicationRequest,
  TEMPLATE_TYPE,
} = DocumentTracerRequests;
```

#### Initiation
```js
// Initiate Tracer instance
const config = new DocumentTracerConfig({
  key: '<insert your key here>',
  secret: '<insert your secret key here>',
});

const tracer = new DocumentTracer(config);
```

#### Create Application
```js
const create = new CreateApplicationRequest({
  externalId: '0000-0000-0000-0000',
  merchantName: 'Test Merchant',
  email: 'test@example.com',
  emailTemplateType: TEMPLATE_TYPE.SUBMISSION,
  missingDocumentQuantity: 1,
  missingQuestionQuantity: 0,
  actionRequiredUrl: 'https://example.com/action',
  noResponseUrl: 'https://example.com/noResponse',
  amEmail: 'am@example.com',
});

const createResult = await tracer
  .application()
  .create(create);

// tracer is now set with newly created applicationId
```

#### Update Application
```js
const update = new UpdateApplicationRequest({
  merchantName: 'Update Merchant',
  email: 'test-update@example.com',
  emailTemplateType: TEMPLATE_TYPE.INFORMATION_REQUEST,
  missingDocumentQuantity: 10,
  missingQuestionQuantity: 20,
  actionRequiredUrl: 'https://example-update.com/action',
  noResponseUrl: 'https://example-update.com/noResponse',
  amEmail: 'am-update@example.com',
});

// reusing the same tracer instance
const updateResult = await tracer
  .update(update);

// with new tracer
const updateTracer = new DocumentTracer(config);
const updateResult = await updateTracer
  .application(applicationId)
  .update(update)
```

#### Delete Application
```js
const deleteRequest = new DeleteApplicationRequest();

// reusing the same tracer instance
const deleteResult = await tracer
  .delete(deleteRequest);

// with new tracer
const deleteTracer = new DocumentTracer(config);
const deleteResult = await deleteTracer
  .application(applicationId)
  .delete(deleteRequest);
```

#### Error Handling
```js
const tracer = new DocumentTracer(config);

// Handle with result
const result = await tracer
 .application()
 [action](input);
// result === tracer.response

if (result.error || !result.success) { console.error(result.error); }


// Handle with Error
try {
  const result = await tracer
    .application()
    [action](input)
    .orFail();
} catch (e) {
  // e === result.error === tracer.result.error
  console.error(e);
}
```
