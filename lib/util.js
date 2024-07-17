export const RESULT = {
  SUCCESS: 'success',
  FAIL: 'fail',
};

export const HEADER = (key) => ({
  Authorization: `Bearer ${key}`,
  'Content-Type': 'application/json',
});
