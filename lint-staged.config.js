module.exports = {
  linters: {
    '**/*.(js|jsx|ts|tsx|md|css|sass|scss|graphql|yml|yaml|json)': [
      () => 'yarn tsc:check',
      () => 'eslint --fix',
      () => 'prettier --write',
      () => 'git add -v'
      // () => 'yarn gql:gen'
    ],
  }
};
// TODO: GET LINT STAGED WORKING WITH HUSKY HOOKS
