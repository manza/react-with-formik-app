import React from 'react';
import LoginForm from './components/LoginForm-Formik'
import './App.css';

const handleSubmit = values => console.log(JSON.stringify(values));
const initialValues = { userEmail: '', password: '', retypePassword: ''};

function App() {
  return (
    <div className="App">
        <LoginForm initialValues={initialValues} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
