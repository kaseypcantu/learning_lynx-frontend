module.exports = {
  '**/*.ts?(x)': [
    () => 'yarn tsc:check',
    // () => 'yarn gql:gen'
  ],
};
