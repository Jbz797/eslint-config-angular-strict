import angularEslintPlugin from '@angular-eslint/eslint-plugin';
import angularTemplateParser from '@angular-eslint/template-parser';
import angularTemplatePlugin from '@angular-eslint/eslint-plugin-template';
import importXPlugin from 'eslint-plugin-import-x';
import ngModuleSortPlugin from 'eslint-plugin-ng-module-sort';
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
      'ng-module-sort': ngModuleSortPlugin,
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
      // Angular ESLint rules (all preset + overrides)
      ...angularEslintPlugin.configs.all.rules,
      '@angular-eslint/component-class-suffix': ['error', { suffixes: ['Component', 'Drawer', 'Modal', 'Page'] }],
      '@angular-eslint/component-selector': 'off',
      '@angular-eslint/directive-selector': 'off',
      '@angular-eslint/prefer-on-push-component-change-detection': 'off',
      '@angular-eslint/prefer-output-emitter-ref': 'off',
      '@angular-eslint/prefer-signals': 'off',
      '@angular-eslint/require-localize-metadata': 'off',
      '@angular-eslint/runtime-localize': 'off',
      '@angular-eslint/sort-keys-in-type-decorator': 'off',
      '@angular-eslint/sort-lifecycle-methods': 'off',
      '@angular-eslint/use-component-selector': 'off',

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

      // NgModule sort rules
      'ng-module-sort/decorator-array-items': 'error',

      // Stylistic rules
      '@stylistic/array-element-newline': ['error', { consistent: true, multiline: true }],
      '@stylistic/arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
      '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      '@stylistic/max-len': ['error', { code: 165, tabWidth: 2 }],
      '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 5 }],
      '@stylistic/no-confusing-arrow': 'off',
      '@stylistic/no-extra-parens': ['error', 'all', { ignoredNodes: ['ConditionalExpression'], nestedBinaryExpressions: false, returnAssign: false }],
      '@stylistic/object-curly-newline': ['error', { consistent: true, multiline: true }],
      '@stylistic/padded-blocks': ['error', { blocks: 'never', classes: 'always', switches: 'never' }],
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: { selector: '*', lineMode: 'multiline' }, next: { selector: '*', lineMode: 'multiline' } },
        { blankLine: 'any', prev: 'import', next: 'import' },
        { blankLine: 'never', prev: '*', next: 'case' },
        { blankLine: 'never', prev: '*', next: 'default' },
      ],

      // TypeScript ESLint rules
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        { arrayLiteralTypeAssertions: 'never', assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
      ],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'no-type-imports' }],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: { accessors: 'explicit', constructors: 'no-public', methods: 'explicit', properties: 'explicit', parameterProperties: 'explicit' },
        },
      ],
      '@typescript-eslint/member-ordering': ['error', { default: { order: 'natural-case-insensitive' } }],
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'function', format: ['camelCase'] },
        { selector: 'import', format: ['camelCase', 'PascalCase'] },
        { selector: 'memberLike', format: ['camelCase'], leadingUnderscore: 'forbid', modifiers: ['protected'] },
        { selector: 'memberLike', format: ['camelCase'], leadingUnderscore: 'forbid', modifiers: ['public'] },
        { selector: 'memberLike', format: ['camelCase'], leadingUnderscore: 'require', modifiers: ['private'] },
        { selector: 'objectLiteralProperty', format: null },
        { selector: 'parameter', format: ['camelCase'], trailingUnderscore: 'allowSingleOrDouble' },
        { selector: 'typeLike', format: ['PascalCase'] },
        { selector: 'typeProperty', format: ['camelCase', 'snake_case'] },
        { selector: 'variable', format: ['UPPER_CASE'], modifiers: ['const', 'exported'] },
        { selector: 'variable', format: ['PascalCase'], filter: { regex: '[Tt]oken', match: true } },
        { selector: 'variable', format: ['camelCase'] },
      ],
      '@typescript-eslint/no-base-to-string': 'error',
      '@typescript-eslint/no-dynamic-delete': 'error',
      '@typescript-eslint/no-extraneous-class': ['error', { allowEmpty: true, allowStaticOnly: true }],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-unnecessary-type-conversion': 'error',
      '@typescript-eslint/no-useless-default-assignment': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
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
      // Angular ESLint template rules (all preset + overrides)
      ...angularTemplatePlugin.configs.all.rules,
      '@angular-eslint/template/alt-text': 'off',
      '@angular-eslint/template/attributes-order': ['error', { alphabetical: true }],
      '@angular-eslint/template/button-has-type': 'off',
      '@angular-eslint/template/click-events-have-key-events': 'off',
      '@angular-eslint/template/cyclomatic-complexity': ['error', { maxComplexity: 10 }],
      '@angular-eslint/template/i18n': 'off',
      '@angular-eslint/template/interactive-supports-focus': 'off',
      '@angular-eslint/template/label-has-associated-control': 'off',
      '@angular-eslint/template/no-inline-styles': 'off',
      '@angular-eslint/template/prefer-ngsrc': 'off',
      '@angular-eslint/template/use-track-by-function': ['error', { alias: ['ngForTrackByIndex', 'ngForTrackByProperty'] }],

      // Unicorn rules
      'unicorn/prefer-string-raw': 'off',
      'unicorn/template-indent': 'off',
    },
  },
];
