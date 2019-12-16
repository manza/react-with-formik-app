import React from 'react';
import LoginForm from './components/LoginForm-Formik'

const handleSubmit = values => console.log(JSON.stringify(values));
const initialValues = { userEmail: '', password: ''};

function App() {
  return (
    <div className="App">
        <h1>Example App</h1>
        <LoginForm initialValues={initialValues} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
