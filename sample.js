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

const config = new DocumentTracerConfig({
  key: '<insert your key here>',
});

console.debug({ config });

const tracer = new DocumentTracer(config);

console.debug({ tracer });

const create = new CreateApplicationRequest({
  externalId: `${(new Date()).getTime()}`,
  merchantName: 'Test Merchant',
  email: 'test@example.com',
  emailTemplateType: TEMPLATE_TYPE.SUBMISSION,
  missingDocumentQuantity: 1,
  missingQuestionQuantity: 0,
  actionRequiredUrl: 'https://google.com',
  noResponseUrl: 'https://google.com',
  amEmail: 'am@example.com',
});

console.debug({ tracer });

const createResult = await tracer
  .application()
  .create(create);

console.debug({ tracer, createResult });

const update = () => new UpdateApplicationRequest({
  merchantName: 'Update Merchant',
  email: 'test-update@example.com',
  emailTemplateType: TEMPLATE_TYPE.INFORMATION_REQUEST,
  missingDocumentQuantity: Math.floor(Math.random() * 10),
  missingQuestionQuantity: Math.floor(Math.random() * 10),
  actionRequiredUrl: 'https://yahoo.com',
  noResponseUrl: 'https://yahoo.com',
  amEmail: 'am-update@example.com',
});

const updateResult = await tracer
  .update(update());

const updateTracer = new DocumentTracer(config);

const newUpdateResult = await updateTracer
  .application(tracer.applicationId)
  .update(update());

console.debug({
  updateResult, newUpdateResult, tracer, updateTracer,
});

const deleteRequest = new DeleteApplicationRequest();
console.debug({ tracer });

const deleteResult = await tracer
  .delete(deleteRequest);

console.debug({ deleteResult, tracer });
