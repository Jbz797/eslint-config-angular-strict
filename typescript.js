module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:@angular-eslint/recommended',
    'plugin:@angular-eslint/template/process-inline-templates',
  ],
  rules: {
    '@angular-eslint/component-class-suffix': ['error', { suffixes: ['Component', 'Modal', 'Page'] }],
    '@angular-eslint/component-max-inline-declarations': 'error',
    '@angular-eslint/component-selector': ['error', { type: 'element', style: 'kebab-case' }],
    '@angular-eslint/contextual-decorator': 'error',
    '@angular-eslint/contextual-lifecycle': 'error',
    '@angular-eslint/directive-class-suffix': 'error',
    '@angular-eslint/directive-selector': ['error', { type: 'attribute', style: 'camelCase' }],
    '@angular-eslint/no-attribute-decorator': 'error',
    '@angular-eslint/no-conflicting-lifecycle': 'error',
    '@angular-eslint/no-empty-lifecycle-method': 'error',
    '@angular-eslint/no-forward-ref': 'error',
    '@angular-eslint/no-host-metadata-property': 'error',
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
    '@angular-eslint/prefer-output-readonly': 'error',
    '@angular-eslint/prefer-standalone-component': 'error',
    '@angular-eslint/relative-url-prefix': 'error',
    '@angular-eslint/sort-ngmodule-metadata-arrays': 'error',
    '@angular-eslint/use-component-view-encapsulation': 'error',
    '@angular-eslint/use-injectable-provided-in': 'error',
    '@angular-eslint/use-lifecycle-interface': 'error',
    '@angular-eslint/use-pipe-transform-interface': 'error',

    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extraneous-class': ['error', { allowEmpty: true, allowStaticOnly: true }],
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

    'import/extensions': ['error', 'ignorePackages', { ts: 'never' }],
    'import/no-anonymous-default-export': 'error',
    'import/no-commonjs': 'error',
    'import/no-cycle': ['error', { maxDepth: 2 }],
    'import/no-deprecated': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-import-module-exports': 'off',
    'import/no-named-as-default-member': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
        pathGroups: [
          { pattern: '@angular/**', group: 'external', position: 'before' },
          { pattern: 'firebase*/**', group: 'external', position: 'before', patternOptions: { partial: true } },
          { pattern: 'ng-zorro-antd/**', group: 'external', position: 'before' },
        ],
        pathGroupsExcludedImportTypes: ['@angular'],
        warnOnUnassignedImports: true,
      },
    ],
    'import/prefer-default-export': 'off',

    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'class-methods-use-this': ['error', { exceptMethods: ['beforeUnloadHander', 'trackBy', 'transform', 'windowRef'] }],
    'max-len': ['error', 180],
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': 'off',
    'no-restricted-globals': 'off',
    'no-return-assign': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': [
      'error',
      {
        ExportDeclaration: { multiline: true },
        ImportDeclaration: { multiline: true },
        ObjectExpression: { minProperties: 4, multiline: true },
        ObjectPattern: { minProperties: 4, multiline: true },
      },
    ],
    'padded-blocks': 'off',
    radix: ['error', 'as-needed'],
  },
};
