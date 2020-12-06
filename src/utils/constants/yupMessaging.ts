// Yup validation messaging model

export enum YupMessaging {
  required = 'Field is required',
  min = 'Min: ${min} characters',
  max = 'Max: ${max} characters',
  linkTitleRequired = 'Title is required',
  linkUrl = 'Must be a valid URL',
  linkUrlRequired = 'URL is required',
  symbolsNotAllowed = 'Symbols are not allowed',
  invalidUrl = 'Please enter a valid URL',
  descriptionRequired = 'Description is required',
  programmingLanguageRequired = 'Language is required',
  true = 'Field must be true',
}
