import angularStrict from './index.js';

// The library lints its own sources with itself; `tests/` keeps its own config, next to the Angular dependencies the typed rules need
export default [
  { ignores: ['tests/**'] },
  ...angularStrict,
  {
    files: ['**/*.js'],
    languageOptions: { globals: { console: 'readonly', process: 'readonly', URL: 'readonly' } }, // what Node gives these files, named one by one
    rules: {
      '@stylistic/arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }], // as on the TypeScript side
      'perfectionist/sort-objects': ['error', { partitionByNewLine: true }], // the rules stay grouped by plugin, sorted inside each group
    },
  },
  { files: ['scripts/**/*.js'], rules: { 'no-console': 'off' } }, // command-line scripts report to their terminal
];
