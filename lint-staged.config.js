module.exports = {
  '**/*.ts?(x)': [
    // () => 'yarn gql:gen',
    () => 'eslint --fix',
    () => 'yarn tsc:check',
    // () => 'git add -v',
  ],
};
