import React from 'react';
import { useFormik } from 'formik';
import styles from './form.module.css';

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const Form = () => {
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: (values, {setStatus, resetForm}) => {
      // alert(JSON.stringify(values, null, 2));
      // TODO resetForm
      // values = {
      //   firstName: '',
      //   lastName: '',
      //   email: '',
      // }
      resetForm({})
      setStatus({success: true})
      console.log(values);
    },
    onChange: value => {
      console.log(value);
    }
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label htmlFor="firstName" className={styles.label}>First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        className={styles.input}
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName ? <div className={styles.error}>{formik.errors.firstName}</div> : null}
      <label htmlFor="lastName" className={styles.label}>Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        className={styles.input}
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName ? <div className={styles.error}>{formik.errors.lastName}</div> : null}
      <label htmlFor="email" className={styles.label}>Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        className={styles.input}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div className={styles.error}>{formik.errors.email}</div> : null}
      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
};

export default Form