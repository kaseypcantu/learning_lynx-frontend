import * as React from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import { Form, Formik, FieldAttributes, useField } from 'formik';
import * as yup from 'yup';
import { YupMessaging } from '../utils/constants/yupMessaging';

// TODO: Write tests.
type FormikInputProps = FieldAttributes<React.ComponentProps<typeof TextField>> & {
  label: string;
  placeholder: string;
};

export type newLink = {
  linkTitle: string;
  linkUrl: string;
  programmingLanguage: string;
  description: string;
};

const newLinkFormValidationSchema: yup.ObjectSchema<newLink> = yup
  .object()
  .shape({
    linkTitle: yup
      .string()
      .matches(/[^><!&?@$#%^*\\+-=)(:'"}{\/]+/, YupMessaging.symbolsNotAllowed)
      .required(YupMessaging.linkTitleRequired)
      .max(55, YupMessaging.max),
    linkUrl: yup
      .string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        YupMessaging.invalidUrl
      )
      .required(YupMessaging.linkUrlRequired)
      .max(512, YupMessaging.max),
    programmingLanguage: yup
      .string()
      .matches(/[^><!&?@$#%^*\\+=)(:'"}{]+/, YupMessaging.symbolsNotAllowed)
      .required(YupMessaging.programmingLanguageRequired)
      .max(55),
    description: yup
      .string()
      .matches(/[^><!&?@$#%^*\\+=)(:'"}{]+/, YupMessaging.symbolsNotAllowed)
      .required(YupMessaging.descriptionRequired),
  })
  .required();

// Custom input TextField
export const InputTextField: React.FC<FieldAttributes<FormikInputProps>> = ({
  label,
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorMessage = meta.error && meta.touched ? meta.error : undefined;
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      helperText={errorMessage}
      error={!!errorMessage}
      {...field}
      {...props}
    />
  );
};

const AddLinkForm: React.FC = () => {
  return (
    <Formik
      validateOnChange={true}
      validationSchema={newLinkFormValidationSchema}
      initialValues={
        {
          linkTitle: '',
          programmingLanguage: '',
          linkUrl: '',
          description: '',
        }
        // {
        //   linkTitle: "Learn Kubernetes",
        //   programmingLanguage: "TypeScript",
        //   linkUrl: "https://www.kubernetes.io/docs/home/",
        //   description: "Docker container orchestration tooling."
        // }
      }
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        // make async call

        console.log(JSON.stringify(data, null, 2));
        setSubmitting(false);
      }}
    >
      {({ values, errors, isSubmitting }) => (
        <div className={'mt-40'}>
          <Form autoComplete={'off'} style={{ margin: 20 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <InputTextField
                  fullWidth
                  variant={'outlined'}
                  label={'Link Title'}
                  name={'linkTitle'}
                  placeholder={'e.g. One of my favorites'}
                />
              </Grid>
              <Grid item xs={6}>
                <InputTextField
                  fullWidth
                  variant={'outlined'}
                  label={'Programming Language'}
                  name={'programmingLanguage'}
                  placeholder={'e.g. Python'}
                />
              </Grid>
              <Grid item xs={12}>
                <InputTextField
                  fullWidth
                  variant={'outlined'}
                  label={'Link URL'}
                  name={'linkUrl'}
                  placeholder={'e.g. www.python.org'}
                />
              </Grid>
              <Grid item xs={12}>
                <InputTextField
                  fullWidth
                  multiline
                  rows={6}
                  variant={'outlined'}
                  label={'Description'}
                  name={'description'}
                  placeholder={'e.g. A wonderful programming language.'}
                />
              </Grid>
              <Grid item>
                <Button
                  variant={'contained'}
                  color={'primary'}
                  type={'submit'}
                  disabled={isSubmitting}
                >
                  submit
                </Button>
              </Grid>
            </Grid>
            <pre className={'my-8'}>{JSON.stringify(values, null, 2)}</pre>
            <pre className={'my-8'}>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default AddLinkForm;
