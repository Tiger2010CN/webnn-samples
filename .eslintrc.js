module.exports = {
  root: true,
  env: { 'es6': true, 'browser': true, 'jquery': true},
  ignorePatterns: ['node_modules/'],
  parserOptions: { ecmaVersion: 2017, sourceType: 'module'},
  rules: {
    'semi': 'error',
    'indent': 'error',
    'max-len': ['error', {'code': 80}],
    'require-jsdoc': 'off',
  },
  extends: [
    'eslint:recommended',
    'google',
  ],
}
