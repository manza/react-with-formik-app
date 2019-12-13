import React from 'react';
import LoginForm from './components/LoginForm-Hooks'

const handleSubmit = values => console.log(JSON.stringify(values));
const initialValues = {};

function App() {
  return (
    <div className="App">
        <h1>Example App</h1>
        <LoginForm handleSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  );
}

export default App;
