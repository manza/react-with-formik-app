import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {

    // 1 setup state in order to deal with form data
    state = { errorUser: '', userEmail: '', password: '' };

    // 2 setup function to deal with Form submission
    handleSubmit = event => {
        const { userEmail, password } = this.state;
        event.preventDefault();
        console.log(JSON.stringify({userEmail, password}));
    }

    // 3.1 setup function to deal with input field userEmail
    handleUserEmailChange = event => this.setState( {userEmail: event.target.value} );

    // 3.2 setup function to deal with input field userEmail validations & handle span for showing errors
    handleUserEmailBlur = event => {
        const { userEmail } = this.state;
        if (!userEmail.trim().length) {
            this.setState({errorUser: 'User email must be filled'});
        } else {
            this.setState({errorUser: ''});
        }
    }

    // 4 setup function to deal with input field password
    handlePasswordChange = event => this.setState( {password: event.target.value} );

    render() {
      const { errorUser, userEmail, password } = this.state;
      return (
        <form className="Form" onSubmit={this.handleSubmit}>
            <h2 className="Form-Welcome">Formik & Yup</h2>
            <h2 className="Form-Info">Form managment and validations</h2>
            <div className="Form-Group">
                <input className="Form-Field" name="userEmail" placeholder="User" type="input" value={userEmail}
                       onChange={this.handleUserEmailChange} onBlur={this.handleUserEmailBlur}
                />
                {errorUser !== '' ? <span className="Form-Error">{errorUser}</span> : ''}
            </div>
            <div className="Form-Group">
                <input className="Form-Field" name="password" placeholder="Password"  type="password" value={password} 
                       onChange={this.handlePasswordChange} />
            </div>
            <button className="Form-Btn" type="submit">Login</button>
        </form>
      );
    }
}

export default LoginForm;
