import * as React from 'react';
import { Container, Button, Paper, TextField } from '@material-ui/core';
import { Form, Formik, Field } from 'formik';


const AddLinkForm: React.FC = () => {
  return (
      <Formik initialValues={
        {
          linkTitle: 'Learn Kubernetes',
          programmingLanguage: 'python',
          linkUrl: 'www.python.org',
          description: 'A great programming language.',
        }
      } onSubmit={(data, {setSubmitting, resetForm}) => {
        setSubmitting(true);
        // make async call
        resetForm();

        console.log(data);
        setSubmitting(false);
      }}
      >
        {({values, isSubmitting, handleChange, handleBlur}) => (
          <Form autoComplete={'off'}>
            <TextField
              margin={'normal'}
              variant={'outlined'}
              name={"linkTitle"}
              placeholder={'e.g. One of my favorites'}
              onChange={handleChange}
              onBlur={handleBlur}
              label={'Link Title'}
            />
            <div>
              <TextField
                margin={'normal'}
                variant={'outlined'}
                name={"programmingLanguage"}
                placeholder={'e.g. Python'}
                onChange={handleChange}
                onBlur={handleBlur}
                label={'Programming Language'}
              />
            </div>
            <div>
              <TextField
                margin={'normal'}
                variant={'outlined'}
                name={"linkUrl"}
                placeholder={'e.g. www.python.org'}
                onChange={handleChange}
                onBlur={handleBlur}
                label={'Link URL'}
              />
            </div>
            <div>
              <TextField
                margin={'normal'}
                multiline
                rows={4}
                variant={'outlined'}
                name={"description"}
                placeholder={'e.g A wonderful programming lanugage.'}
                onChange={handleChange}
                onBlur={handleBlur}
                label={'Description'}
              />
            </div>
            <Button 
              variant={'contained'} 
              color={'primary'} 
              type={'submit'} 
              disabled={isSubmitting}
            >
              submit
            </Button>
            <pre>
              {JSON.stringify(values, null, 2)}
            </pre>
          </Form>
        )}
      </Formik>
  );
}

export default AddLinkForm;
