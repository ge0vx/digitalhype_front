import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import CypherContextProvider from './contexts/CypherContext';

const inputs = [
  {
    errorMessage: "Cipher should be 5-50 alphanumeric characteres and shouldn't include any special character",
    id:1,
    label: "Cipher",
    name: "cipher",
    pattern: "^[A-Za-z0-9]{5,50}$",
    placeholder: "Cipher",
    required: true,
    type:"text",
  }
]

function App() {
  return (
    <CypherContextProvider>
      <div className="app">
        <Form inputs={inputs} />
        
      </div>
      <div className='sign'> Giovany Peb </div>
    </CypherContextProvider>
  );
}

export default App;
