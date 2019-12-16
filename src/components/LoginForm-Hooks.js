import React, { useState } from 'react';
import './LoginForm.css';

// 1. Function component - Don't extend Component
const LoginForm = () => {

    // 2. Hooks
    const [userEmail, setUserEmail] = useState('');
    const [userEmailErrorMessage, setUserEmailErrorMessage] = useState('');
    const [password, setPassword] = useState('');

    // 3. On change functions with Hooks
    const handleUserEmailChange = event => setUserEmail(event.target.value);
    const handlePasswordChange = event => setPassword(event.target.value);

    // 4. Still required validation function
    const handleUserEmailBlur = event => {
        if (!userEmail.trim().length) {
            setUserEmailErrorMessage('User Email must be filled');
        } else {
            setUserEmailErrorMessage('');
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(JSON.stringify({userEmail, password}));
    }

    return (
        <form className="Form" onSubmit={handleSubmit}>
            <h2 className="Form-Welcome">Formik & Yup</h2>
            <h2 className="Form-Info">Form managment and validations</h2>
            <div className="Form-Group">
                <input className="Form-Field" name="userEmail" placeholder="User" type="input" value={userEmail}
                       onChange={handleUserEmailChange} onBlur={handleUserEmailBlur}
                />
                {userEmailErrorMessage !== '' ? <span className="Form-Error">{userEmailErrorMessage}</span> : ''}
            </div>
            <div className="Form-Group">
                <input className="Form-Field" name="password" placeholder="Password" type="password" value={password}
                       onChange={handlePasswordChange} />
            </div>
            <button className="Form-Btn" type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
