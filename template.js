module.exports = {
  extends: ['plugin:@angular-eslint/template/recommended'],
  rules: {
    '@angular-eslint/template/accessibility-elements-content': 'error',
    '@angular-eslint/template/accessibility-interactive-supports-focus': 'error',
    '@angular-eslint/template/accessibility-label-has-associated-control': 'error',
    '@angular-eslint/template/accessibility-role-has-required-aria': 'error',
    '@angular-eslint/template/accessibility-table-scope': 'error',
    '@angular-eslint/template/accessibility-valid-aria': 'error',
  },
};
