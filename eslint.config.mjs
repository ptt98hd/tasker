import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    plugins: {
      prettier: (await import('eslint-plugin-prettier')).default,
      'simple-import-sort': (await import('eslint-plugin-simple-import-sort')).default,
    },
    rules: {
      'prettier/prettier': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Side effect imports (e.g. CSS)
            ['^\u0000'],
            // Packages. "^" matches any package (node_modules)
            ['^node:', '^[a-zA-Z]'],
            // Internal modules (user code)
            ['^'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
];

export default eslintConfig;
