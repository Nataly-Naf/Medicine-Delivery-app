import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  FormWrapper,
  FormGroup,
  Label,
  Input,
  ErrorMsg,
  SubmitButton,
} from './Form.styled.js';

export const FormComponent = ({ handleSubmit }) => {
  return (
    <FormWrapper>
      <Formik
        initialValues={{ name: '', email: '', phone: '', address: '' }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Field as={Input} type="text" name="name" />
              <ErrorMessage name="name" component={ErrorMsg} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Field as={Input} type="email" name="email" />
              <ErrorMessage name="email" component={ErrorMsg} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phone">Phone</Label>
              <Field as={Input} type="text" name="phone" />
              <ErrorMessage name="phone" component={ErrorMsg} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="address">Address</Label>
              <Field as={Input} type="text" name="address" />
              <ErrorMessage name="address" component={ErrorMsg} />
            </FormGroup>
            <SubmitButton type="submit" disabled={isSubmitting}>
              Submit
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
