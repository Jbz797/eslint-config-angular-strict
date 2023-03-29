module.exports = {
  extends: ['plugin:@angular-eslint/template/recommended'],
  rules: {
    '@angular-eslint/template/accessibility-elements-content': 'error',
    '@angular-eslint/template/accessibility-label-has-associated-control': 'error',
    '@angular-eslint/template/accessibility-role-has-required-aria': 'error',
    '@angular-eslint/template/accessibility-table-scope': 'error',
    '@angular-eslint/template/accessibility-valid-aria': 'error',
    '@angular-eslint/template/attributes-order': ['error', { alphabetical: true }],
    '@angular-eslint/template/banana-in-box': 'error',
    '@angular-eslint/template/conditional-complexity': 'error',
    '@angular-eslint/template/cyclomatic-complexity': ['error', { maxComplexity: 10 }],
    '@angular-eslint/template/eqeqeq': 'error',
    '@angular-eslint/template/mouse-events-have-key-events': 'error',
    '@angular-eslint/template/no-any': 'error',
    '@angular-eslint/template/no-autofocus': 'error',
    '@angular-eslint/template/no-call-expression': 'error',
  },
};
