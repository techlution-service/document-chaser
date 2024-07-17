/* eslint-disable import/no-extraneous-dependencies */
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  ...compat.config({
    env: {
      es2022: true,
      node: true,
    },
    extends: [
      'airbnb-base',
    ],
    rules: {
      camelcase: 'error',
      complexity: ['warn', 5],
      'import/extensions': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off',
      'max-depth': ['warn', 3],
      'max-len': 'warn',
      'max-lines': ['error', {
        max: 100,
        skipBlankLines: true,
        skipComments: true,
      }],
      'max-lines-per-function': ['error', {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
      }],
      'no-underscore-dangle': 'off',
      'no-useless-escape': 'off',
    },
  }),
  {
    ignores: [
      'node_modules',
      '.idea',
      '.env',
      '.env.*',
      '!.env.example',
    ],
  },
];
