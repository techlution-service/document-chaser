import { inspect } from 'util';
import DocumentChaser, {
  DocumentChaserConfig,
  DocumentChaserRequests,
} from '@techlution/document-chaser';

const {
  CreateApplicationRequest,
  UpdateApplicationRequest,
  DeleteApplicationRequest,
  TEMPLATE_TYPE,
} = DocumentChaserRequests;

const config = new DocumentChaserConfig({
  key: '<insert your key here>',
});

console.debug({ config });

const chaser = new DocumentChaser(config);

console.debug({ chaser });

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

console.debug({ chaser });

const createResult = await chaser
  .application()
  .create(create);

console.debug({ chaser, createResult });

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

const updateResult = await chaser
  .update(update());

const updateChaser = new DocumentChaser(config);

const newUpdateResult = await updateChaser
  .application(chaser.applicationId)
  .update(update());

console.debug({
  updateResult, newUpdateResult, chaser, updateChaser,
});

const deleteRequest = new DeleteApplicationRequest();
console.debug({ chaser });

const deleteResult = await chaser
  .delete(deleteRequest);

console.debug({ deleteResult, chaser });
