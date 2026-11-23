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
      'import-x/extensions': ['error', 'ignorePackages'], // Node only resolves a relative ESM import with its extension
      'import-x/no-useless-path-segments': ['error', { noUselessIndex: false }], // ESM has no directory import: `./index.js` cannot become `.`
      'no-restricted-syntax': 'off', // the airbnb base bans `for…of`, which unicorn/no-for-each asks for
      'perfectionist/sort-objects': ['error', { partitionByNewLine: true }], // the rules stay grouped by plugin, sorted inside each group
    },
  },
  { files: ['scripts/**/*.js'], rules: { 'no-console': 'off' } }, // command-line scripts report to their terminal
];
