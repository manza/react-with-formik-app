import React from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const myValidationSchema = Yup.object().shape({
    userEmail: Yup.string().required('User email is a mandatory field'),
    password: Yup.string().required().min(8),
    retypePassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const LoginForm = ({ initialValues, handleSubmit }) => (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={myValidationSchema} >
        <Form className="Form">
            <h2 className="Form-Welcome">Formik & Yup</h2>
            <h2 className="Form-Info">Form managment and validations</h2>
            <div className="Form-Group">
                <Field className="Form-Field" name="userEmail" placeholder="User" type="input" />
                <ErrorMessage className="Form-Error" component="span" name="userEmail" />
            </div>
            <div className="Form-Group">
                <Field className="Form-Field" name="password" placeholder="Password" type="password" />
                <ErrorMessage className="Form-Error" component="span" name="password" />
            </div>
            <div className="Form-Group">
                <Field className="Form-Field" name="retypePassword" placeholder="Retype your Password" type="password" />
                <ErrorMessage className="Form-Error" component="span" name="retypePassword" />
            </div>
            <button className="Form-Btn" type="submit">Login</button>
        </Form>
    </Formik>
)

LoginForm.propTypes = {
    initialValues: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default LoginForm;
