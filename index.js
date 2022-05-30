module.exports = {
  extends: ['./rules/templates', './rules/typescript'].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
