import angularEslintPlugin from '@angular-eslint/eslint-plugin';
import angularTemplateParser from '@angular-eslint/template-parser';
import angularTemplatePlugin from '@angular-eslint/eslint-plugin-template';
import importXPlugin from 'eslint-plugin-import-x';
import stylistic from '@stylistic/eslint-plugin';
import tsEslintParser from '@typescript-eslint/parser';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import unicornPlugin from 'eslint-plugin-unicorn';
import { configs, rules } from 'eslint-config-airbnb-extended';

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
    plugins: {
      '@angular-eslint/template': angularTemplatePlugin,
      '@stylistic': stylistic,
      '@typescript-eslint': tsEslintPlugin,
      'import-x': importXPlugin,
    },
  },

  ...configs.base.all,
  unicornPlugin.configs.all,
  rules.base.importsStrict,
  rules.typescript.typescriptEslintStrict,

  // TypeScript files configuration
  {
    files: ['**/*.ts'],
    languageOptions: { parser: tsEslintParser },
    plugins: { '@angular-eslint': angularEslintPlugin },
    rules: {
      // Angular ESLint rules
      '@angular-eslint/component-class-suffix': ['error', { suffixes: ['Component', 'Modal', 'Page'] }],
      '@angular-eslint/component-max-inline-declarations': 'error',
      '@angular-eslint/consistent-component-styles': 'error',
      '@angular-eslint/contextual-decorator': 'error',
      '@angular-eslint/contextual-lifecycle': 'error',
      '@angular-eslint/directive-class-suffix': 'error',
      '@angular-eslint/no-async-lifecycle-method': 'error',
      '@angular-eslint/no-attribute-decorator': 'error',
      '@angular-eslint/no-duplicates-in-metadata-arrays': 'error',
      '@angular-eslint/no-empty-lifecycle-method': 'error',
      '@angular-eslint/no-forward-ref': 'error',
      '@angular-eslint/no-implicit-take-until-destroyed': 'error',
      '@angular-eslint/no-input-prefix': ['error', { prefixes: ['on'] }],
      '@angular-eslint/no-input-rename': 'error',
      '@angular-eslint/no-inputs-metadata-property': 'error',
      '@angular-eslint/no-lifecycle-call': 'error',
      '@angular-eslint/no-output-native': 'error',
      '@angular-eslint/no-output-on-prefix': 'error',
      '@angular-eslint/no-output-rename': 'error',
      '@angular-eslint/no-outputs-metadata-property': 'error',
      '@angular-eslint/no-pipe-impure': 'error',
      '@angular-eslint/no-queries-metadata-property': 'error',
      '@angular-eslint/no-uncalled-signals': 'error',
      '@angular-eslint/prefer-host-metadata-property': 'error',
      '@angular-eslint/prefer-output-readonly': 'error',
      '@angular-eslint/prefer-signal-model': 'error',
      '@angular-eslint/prefer-standalone': 'error',
      '@angular-eslint/relative-url-prefix': 'error',
      '@angular-eslint/require-lifecycle-on-prototype': 'error',
      '@angular-eslint/sort-lifecycle-methods': 'error',
      '@angular-eslint/use-component-view-encapsulation': 'error',
      '@angular-eslint/use-injectable-provided-in': 'error',
      '@angular-eslint/use-lifecycle-interface': 'error',
      '@angular-eslint/use-pipe-transform-interface': 'error',

      // ESLint rules
      'class-methods-use-this': 'off',
      'complexity': ['error', { max: 25 }],
      'max-lines': ['error', { max: 400, skipBlankLines: true, skipComments: true }],
      'no-fallthrough': 'off',
      'no-param-reassign': ['error', { props: false }],
      'no-plusplus': 'off',
      'no-return-assign': 'off',
      'no-underscore-dangle': ['error', { allowAfterThis: true }],
      'radix': ['error', 'as-needed'],
      'sort-keys': ['error', 'asc', { allowLineSeparatedGroups: true, natural: true }],

      // Import rules
      'import-x/no-anonymous-default-export': 'error',
      'import-x/no-commonjs': 'error',
      'import-x/no-cycle': ['error', { maxDepth: 2 }],
      'import-x/no-deprecated': 'error',
      'import-x/no-import-module-exports': 'off',
      'import-x/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          named: true,
          'newlines-between': 'always',
          pathGroups: [
            { pattern: '@angular/**', group: 'external', position: 'before' },
            { pattern: '@nestjs/**', group: 'external', position: 'before' },
            { pattern: 'firebase*/**', group: 'external', position: 'before', patternOptions: { partial: true } },
            { pattern: 'ng-zorro-antd/**', group: 'external', position: 'before' },
          ],
          pathGroupsExcludedImportTypes: [],
          warnOnUnassignedImports: true,
        },
      ],
      'import-x/prefer-default-export': 'off',

      // Stylistic rules
      '@stylistic/arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
      '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      '@stylistic/max-len': ['error', { code: 165, tabWidth: 2 }],
      '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 5 }],
      '@stylistic/object-curly-newline': [
        'error',
        {
          ExportDeclaration: { consistent: true, minProperties: 10, multiline: true },
          ImportDeclaration: { consistent: true, minProperties: 10, multiline: true },
          ObjectExpression: { consistent: true, minProperties: 4, multiline: true },
          ObjectPattern: { consistent: true, minProperties: 4, multiline: true },
          TSEnumBody: { consistent: true, minProperties: 4, multiline: true },
          TSInterfaceBody: { consistent: true, minProperties: 4, multiline: true },
          TSTypeLiteral: { consistent: true, minProperties: 4, multiline: true },
        },
      ],
      '@stylistic/padded-blocks': ['error', { blocks: 'never', classes: 'always', switches: 'never' }],

      // TypeScript ESLint rules
      '@typescript-eslint/consistent-type-assertions': ['error', { arrayLiteralTypeAssertions: 'never', assertionStyle: 'as', objectLiteralTypeAssertions: 'never' }],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'no-type-imports' }],
      '@typescript-eslint/member-ordering': ['error', { default: { order: 'natural-case-insensitive' } }],
      '@typescript-eslint/no-base-to-string': 'error',
      '@typescript-eslint/no-dynamic-delete': 'error',
      '@typescript-eslint/no-extraneous-class': ['error', { allowEmpty: true, allowStaticOnly: true }],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unnecessary-type-conversion': 'error',
      '@typescript-eslint/no-useless-default-assignment': 'error',
      '@typescript-eslint/promise-function-async': ['error', { checkArrowFunctions: false }],
      '@typescript-eslint/sort-type-constituents': 'error',
      '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

      // Unicorn rules
      'unicorn/consistent-function-scoping': ['error', { checkArrowFunctions: false }],
      'unicorn/new-for-builtins': 'off',
      'unicorn/no-abusive-eslint-disable': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-useless-promise-resolve-reject': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/switch-case-braces': ['error', 'avoid'],
    },
  },

  // HTML Template files configuration
  {
    files: ['**/*.html'],
    languageOptions: { parser: angularTemplateParser },
    rules: {
      // Angular ESLint rules
      '@angular-eslint/template/attributes-order': ['error', { alphabetical: true }],
      '@angular-eslint/template/banana-in-box': 'error',
      '@angular-eslint/template/conditional-complexity': 'error',
      '@angular-eslint/template/cyclomatic-complexity': ['error', { maxComplexity: 10 }],
      '@angular-eslint/template/elements-content': 'error',
      '@angular-eslint/template/eqeqeq': 'error',
      '@angular-eslint/template/label-has-associated-control': 'error',
      '@angular-eslint/template/mouse-events-have-key-events': 'error',
      '@angular-eslint/template/no-any': 'error',
      '@angular-eslint/template/no-autofocus': 'error',
      '@angular-eslint/template/no-call-expression': 'error',
      '@angular-eslint/template/no-distracting-elements': 'error',
      '@angular-eslint/template/no-duplicate-attributes': 'error',
      '@angular-eslint/template/no-empty-control-flow': 'error',
      '@angular-eslint/template/no-interpolation-in-attributes': 'error',
      '@angular-eslint/template/no-negated-async': 'error',
      '@angular-eslint/template/no-nested-tags': 'error',
      '@angular-eslint/template/no-positive-tabindex': 'error',
      '@angular-eslint/template/prefer-at-else': 'error',
      '@angular-eslint/template/prefer-at-empty': 'error',
      '@angular-eslint/template/prefer-built-in-pipes': 'error',
      '@angular-eslint/template/prefer-contextual-for-variables': 'error',
      '@angular-eslint/template/prefer-control-flow': 'error',
      '@angular-eslint/template/prefer-self-closing-tags': 'error',
      '@angular-eslint/template/prefer-static-string-properties': 'error',
      '@angular-eslint/template/prefer-template-literal': 'error',
      '@angular-eslint/template/role-has-required-aria': 'error',
      '@angular-eslint/template/table-scope': 'error',
      '@angular-eslint/template/use-track-by-function': ['error', { alias: ['ngForTrackByIndex', 'ngForTrackByProperty'] }],
      '@angular-eslint/template/valid-aria': 'error',
      '@angular-eslint/template/prefer-class-binding': 'error',

      // Unicorn rules
      'unicorn/prefer-string-raw': 'off',
      'unicorn/template-indent': 'off',
    },
  },
];
