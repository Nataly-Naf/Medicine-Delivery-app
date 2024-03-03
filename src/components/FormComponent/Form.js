import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const FormComponent = ({ handleSubmit }) => {
  return (
    <div>
      <h2>Checkout Form</h2>
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
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <Field type="text" name="phone" />
              <ErrorMessage name="phone" component="div" />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <Field type="text" name="address" />
              <ErrorMessage name="address" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
