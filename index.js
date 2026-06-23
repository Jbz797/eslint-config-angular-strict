import { configs, rules } from 'eslint-config-airbnb-extended';
import angularEslintPlugin from '@angular-eslint/eslint-plugin';
import angularTemplateParser from '@angular-eslint/template-parser';
import angularTemplatePlugin from '@angular-eslint/eslint-plugin-template';
import importXPlugin from 'eslint-plugin-import-x';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import stylistic from '@stylistic/eslint-plugin';
import tsEslintParser from '@typescript-eslint/parser';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import unicornPlugin from 'eslint-plugin-unicorn';

import { namingConventionOverrides, noRestrictedSyntaxRule } from './naming-conventions.js';

// @angular-eslint v22 dropped the `configs` export — manually enable all rules instead
const enableAllRules = (plugin, prefix) => Object.fromEntries(Object.keys(plugin.rules).map(k => [`${prefix}/${k}`, 'error']));

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
    plugins: {
      '@angular-eslint/template': angularTemplatePlugin,
      '@stylistic': stylistic,
      '@typescript-eslint': tsEslintPlugin,
      'import-x': importXPlugin,
    },
    settings: { perfectionist: { type: 'natural' } },
  },

  ...configs.base.all,
  perfectionistPlugin.configs['recommended-natural'],
  rules.base.importsStrict,
  rules.typescript.typescriptEslintStrict,
  unicornPlugin.configs.all,

  // TypeScript files configuration
  {
    files: ['**/*.ts'],
    languageOptions: { parser: tsEslintParser },
    plugins: { '@angular-eslint': angularEslintPlugin },
    rules: {
      // Angular ESLint rules (all preset + overrides)
      ...enableAllRules(angularEslintPlugin, '@angular-eslint'),
      '@angular-eslint/component-class-suffix': ['error', { suffixes: ['App', 'Component', 'Drawer', 'Modal', 'Page'] }],
      '@angular-eslint/component-selector': 'off',
      '@angular-eslint/prefer-on-push-component-change-detection': 'off',
      '@angular-eslint/use-component-selector': 'off',

      // ESLint rules
      'class-methods-use-this': 'off',
      'complexity': ['error', { max: 25 }],
      'max-depth': 'error',
      'max-lines': ['error', { max: 425, skipBlankLines: true, skipComments: true }],
      'no-fallthrough': 'off',
      'no-param-reassign': ['error', { props: false }],
      'no-plusplus': 'off',
      'no-restricted-syntax': noRestrictedSyntaxRule,
      'no-return-assign': 'off',
      'no-underscore-dangle': ['error', { allowAfterThis: true }],
      'radix': ['error', 'as-needed'],

      // Import rules
      'import-x/no-anonymous-default-export': 'error',
      'import-x/no-commonjs': 'error',
      'import-x/no-cycle': ['error', { maxDepth: 2 }],
      'import-x/no-deprecated': 'error',
      'import-x/no-import-module-exports': 'off',
      'import-x/order': 'off',
      'import-x/prefer-default-export': 'off',

      // Stylistic rules
      '@stylistic/array-element-newline': ['error', { consistent: true, multiline: true }],
      '@stylistic/arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
      '@stylistic/lines-between-class-members': 'off',
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
      '@typescript-eslint/consistent-type-exports': 'off',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'no-type-imports' }],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          ignoredMethodNames: [
            'ngAfterContentChecked',
            'ngAfterContentInit',
            'ngAfterViewChecked',
            'ngAfterViewInit',
            'ngDoCheck',
            'ngOnChanges',
            'ngOnDestroy',
            'ngOnInit',
          ],
          overrides: { accessors: 'explicit', constructors: 'no-public', methods: 'explicit', properties: 'explicit', parameterProperties: 'explicit' },
        },
      ],
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
      '@typescript-eslint/no-deprecated': 'error',
      '@typescript-eslint/no-dynamic-delete': 'error',
      '@typescript-eslint/no-extraneous-class': ['error', { allowEmpty: true, allowStaticOnly: true }],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-unnecessary-type-conversion': 'error',
      '@typescript-eslint/no-useless-default-assignment': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/promise-function-async': ['error', { checkArrowFunctions: false }],
      '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

      // Perfectionist rules
      'perfectionist/sort-classes': [
        'error',
        {
          customGroups: [
            { groupName: 'decorated-public', modifiers: ['decorated', 'public'] },
            { groupName: 'decorated-private', modifiers: ['decorated', 'private'] },
            { groupName: 'ctor', selector: 'constructor' },
            {
              elementNamePattern: '^(init|ng(OnChanges|OnInit|DoCheck|AfterContentInit|AfterContentChecked|AfterViewInit|AfterViewChecked|OnDestroy))$',
              groupName: 'lifecycle',
            },
            {
              anyOf: [
                { modifiers: ['private'], selector: 'get-method' },
                { modifiers: ['private'], selector: 'set-method' },
              ],
              groupName: 'private-accessors',
            },
            {
              anyOf: [
                { modifiers: ['private'], selector: 'method' },
                { modifiers: ['private'], selector: 'function-property' },
              ],
              groupName: 'private-methods',
            },
            {
              anyOf: [
                { modifiers: ['protected'], selector: 'get-method' },
                { modifiers: ['protected'], selector: 'set-method' },
              ],
              groupName: 'protected-accessors',
            },
            {
              anyOf: [
                { modifiers: ['protected'], selector: 'method' },
                { modifiers: ['protected'], selector: 'function-property' },
              ],
              groupName: 'protected-methods',
            },
            { anyOf: [{ selector: 'get-method' }, { selector: 'set-method' }], groupName: 'public-accessors' },
            { anyOf: [{ selector: 'method' }, { selector: 'function-property' }], groupName: 'public-methods' },
            { elementValuePattern: '^[A-Z][A-Z0-9_]*$', groupName: 'public-constant-aliases', modifiers: ['public', 'readonly'] },
            { elementValuePattern: '^[A-Z][A-Z0-9_]*$', groupName: 'protected-constant-aliases', modifiers: ['protected', 'readonly'] },
            { elementValuePattern: '^[A-Z][A-Z0-9_]*$', groupName: 'private-constant-aliases', modifiers: ['private', 'readonly'] },
            {
              anyOf: [
                { modifiers: ['public', 'readonly'], selector: 'property' },
                { modifiers: ['public', 'readonly'], selector: 'accessor-property' },
              ],
              groupName: 'public-readonly-fields',
            },
            {
              anyOf: [
                { modifiers: ['protected', 'readonly'], selector: 'property' },
                { modifiers: ['protected', 'readonly'], selector: 'accessor-property' },
              ],
              groupName: 'protected-readonly-fields',
            },
            {
              anyOf: [
                { modifiers: ['private', 'readonly'], selector: 'property' },
                { modifiers: ['private', 'readonly'], selector: 'accessor-property' },
              ],
              groupName: 'private-readonly-fields',
            },
          ],
          groups: [
            'public-constant-aliases',
            'protected-constant-aliases',
            'private-constant-aliases',
            'decorated-public',
            'decorated-private',
            ['property', 'accessor-property', 'static-property', 'static-accessor-property'],
            'public-readonly-fields',
            ['protected-property', 'protected-accessor-property', 'protected-static-property', 'protected-static-accessor-property'],
            'protected-readonly-fields',
            ['private-property', 'private-accessor-property', 'private-static-property', 'private-static-accessor-property'],
            'private-readonly-fields',
            'ctor',
            'static-block',
            { group: 'lifecycle', newlinesInside: 1, type: 'unsorted' },
            { group: 'public-accessors', newlinesInside: 1 },
            { group: 'public-methods', newlinesInside: 1 },
            { group: 'protected-accessors', newlinesInside: 1 },
            { group: 'protected-methods', newlinesInside: 1 },
            { group: 'private-accessors', newlinesInside: 1 },
            { group: 'private-methods', newlinesInside: 1 },
            'unknown',
          ],
          newlinesBetween: 1,
          newlinesInside: 0,
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: [
            { elementNamePattern: '^@angular/', groupName: 'angular' },
            { elementNamePattern: '^@nestjs/', groupName: 'nestjs' },
            { elementNamePattern: '^firebase', groupName: 'firebase' },
            { elementNamePattern: '^ng-zorro-antd/', groupName: 'ng-zorro' },
          ],
          groups: [
            'value-builtin',
            'angular',
            'nestjs',
            'firebase',
            'ng-zorro',
            'value-external',
            'value-internal',
            'value-parent',
            'value-sibling',
            'value-index',
            'unknown',
          ],
        },
      ],
      'perfectionist/sort-arrays': [
        'error',
        {
          useConfigurationIf: {
            matchesAstSelector: 'Property[key.name=/^(hostDirectives|imports|providers)$/] > ArrayExpression',
          },
        },
      ],
      'perfectionist/sort-intersection-types': ['error', { groups: ['unknown', 'nullish'] }],
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'unsorted',
          useConfigurationIf: { callingFunctionNamePattern: '^(Component|Directive|NgModule|Pipe)$' },
        },
        {},
      ],
      'perfectionist/sort-union-types': ['error', { groups: ['unknown', 'nullish'] }],

      // Unicorn rules
      'unicorn/consistent-class-member-order': 'off',
      'unicorn/consistent-function-scoping': ['error', { checkArrowFunctions: false }],
      'unicorn/new-for-builtins': 'off',
      'unicorn/no-abusive-eslint-disable': 'off',
      'unicorn/no-array-front-mutation': 'off',
      'unicorn/no-for-each': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-this-outside-of-class': 'off',
      'unicorn/prefer-await': 'off',
      'unicorn/prefer-includes-over-repeated-comparisons': ['error', { minimumComparisons: 6 }],
      'unicorn/prefer-split-limit': 'off',
      'unicorn/prefer-temporal': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/switch-case-braces': ['error', 'avoid'],
      'unicorn/try-complexity': ['error', { max: 5 }],
    },
  },

  // HTML Template files configuration
  {
    files: ['**/*.html'],
    languageOptions: { parser: angularTemplateParser },
    rules: {
      // Angular ESLint template rules (all preset + overrides)
      ...enableAllRules(angularTemplatePlugin, '@angular-eslint/template'),
      '@angular-eslint/template/alt-text': 'off',
      '@angular-eslint/template/attributes-order': ['error', { alphabetical: true }],
      '@angular-eslint/template/button-has-type': 'off',
      '@angular-eslint/template/click-events-have-key-events': 'off',
      '@angular-eslint/template/cyclomatic-complexity': ['error', { maxComplexity: 8, variant: 'modified' }],
      '@angular-eslint/template/i18n': 'off',
      '@angular-eslint/template/interactive-supports-focus': 'off',
      '@angular-eslint/template/label-has-associated-control': 'off',
      '@angular-eslint/template/no-call-expression': 'off',
      '@angular-eslint/template/no-inline-styles': 'off',
      '@angular-eslint/template/prefer-ngsrc': 'off',

      // Unicorn rules
      'unicorn/no-empty-file': 'off',
      'unicorn/no-useless-template-literals': 'off',
      'unicorn/prefer-string-raw': 'off',
      'unicorn/template-indent': 'off',
    },
  },

  ...namingConventionOverrides,
];
