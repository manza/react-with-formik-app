import React from 'react';
import './LoginForm.css';

// https://www.youtube.com/watch?v=Je3RSqmEV-Y
// 1. npm install formik --save

// 2. import and use formik
import { Formik } from 'formik';

const LoginForm = () => {
    <Formik>
        <form className="Form" onSubmit={this.handleSubmit}>
            <h2 className="Form-Welcome">Formik & Yup</h2>
            <h2 className="Form-Info">Form managment and validations</h2>
            <div className="Form-Group">
                <input className="Form-Field"
                       name="userEmail"
                       placeholder="User"
                       type="input"
                       value={userEmail}
                       onChange={this.handleUserEmailChange}
                       onBlur={this.handleUserEmailBlur}
                />
                {errorUser !== '' ? <span className="Form-Error">{errorUser}</span> : ''}
            </div>
            <div className="Form-Group">
                <input className="Form-Field"
                       name="password"
                       placeholder="Password"
                       type="password"
                       value={password}
                       onChange={this.handlePasswordChange} />
            </div>
            <button className="Form-Btn" type="submit">Login</button>
        </form>
    </Formik>
}

export default LoginForm;
