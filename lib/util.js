import { createHash } from 'crypto';

export const RESULT = {
  SUCCESS: 'success',
  FAIL: 'fail',
};

export const HEADER = (key) => ({
  Authorization: `Bearer ${key}`,
  'Content-Type': 'application/json',
});

const HASH_ALGORITHM = 'md5';

const HASH_FIELDS = ['externalId', 'message', 'timestamp'];

export const HASH = (input, secret) => {
  const { checksum } = input;
  const extracted = HASH_FIELDS.reduce(
    (o, f) => Object.assign(o, { [f]: input[f] }),
    {},
  );
  const hash = createHash(HASH_ALGORITHM);
  hash.update(`${JSON.stringify(extracted)}${secret}`);
  if (hash.digest('hex') !== checksum) throw new Error();
  return true;
};
