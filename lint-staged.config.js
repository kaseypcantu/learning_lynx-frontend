module.exports = {
  '**/*.(js|jsx|ts|tsx)+': [
    // () => 'yarn gql:gen',
    (filenames) => filenames.map((filename) => `prettier --write '${filename}'`),
    () => 'eslint --fix',
    () => 'yarn tsc:check',
    // () => 'git add -v',
  ],
};
