import React, {useState} from 'react';
import FormInput from './components/FormInput'
import './App.css';

interface FormDataInterface {
  cipher: string;
}

const inputs = [
  {
    errorMessage: "Cipher should be 6-60 alphanumeric characteres and shouldn't include any special character",
    id:1,
    label: "Cipher",
    name: "cipher",
    pattern: "^[A-Za-z0-9]{6,60}$",
    placeholder: "Cipher",
    required: true,
    type:"text",
  }
]

function App() {

  const [values, setValues] =useState<FormDataInterface>({
    cipher: ""
  })

  const hanldeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <div className="App">
      <form onSubmit={hanldeSubmit}>
        {inputs.map((input)=>(
          <FormInput key={input.id} value={values[input.name as keyof FormDataInterface]} onChange={onChange} {...input}/>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
