// https://github.com/okonet/lint-staged#example-run-tsc-on-changes-to-typescript-files-but-do-not-pass-any-filename-arguments
module.exports = {
  '**/*.(js|jsx|ts|tsx)+': [
    // () => 'yarn gql:gen',
    (filenames) => filenames.map((filename) => `prettier --write '${filename}'`),
    (filenames) => (filenames.length ? 'eslint --fix .' : `eslint --fix ${filenames.join(' ')}`),
    // () => 'eslint --fix .',
    () => 'yarn tsc:check',
    // () => 'git add -v',
  ],
};
