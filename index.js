module.exports = {
  extends: ['./rules/templates', './rules/typescript'].map(require.resolve),
  rules: {},
};
