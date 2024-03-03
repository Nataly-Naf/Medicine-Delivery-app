import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  FormWrapper,
  FormGroup,
  Label,
  Input,
  ErrorMsg,
  SubmitButton,
} from './Form.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  address: Yup.string().required('Address is required'),
});

export const FormComponent = ({ handleSubmit, hasItemsInCart }) => {
  return (
    <FormWrapper>
      <Formik
        initialValues={{ name: '', email: '', phone: '', address: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Field type="text" name="name" as={Input} />
              <ErrorMessage name="name" component={ErrorMsg} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Field type="email" name="email" as={Input} />
              <ErrorMessage name="email" component={ErrorMsg} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phone">Phone</Label>
              <Field type="text" name="phone" as={Input} />
              <ErrorMessage name="phone" component={ErrorMsg} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="address">Address</Label>
              <Field type="text" name="address" as={Input} />
              <ErrorMessage name="address" component={ErrorMsg} />
            </FormGroup>
            {hasItemsInCart && ( // Проверка наличия товаров в корзине
              <SubmitButton type="submit" disabled={isSubmitting}>
                Submit
              </SubmitButton>
            )}
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
