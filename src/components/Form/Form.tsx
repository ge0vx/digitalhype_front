import React, { useContext, useState } from 'react';
import { CypherContext } from '../../contexts/CypherContext';
import { CypherContextType } from '../../contexts/types';
import FormInput from '../FormInput/FormInput';
import {postCypherCodeAPI } from '../../config/constants'
import { UseApiPost } from '../../hooks/useApiPost';
import './Form.css';

interface FormDataInterface {
    cipher: string;
}

export default function Form({ inputs }: { inputs: any }) {

    const { cypherContext, setCyphercontext } = useContext(CypherContext) as CypherContextType;
    const [values, setValues] = useState<FormDataInterface>({ cipher: "" })
    

    const [body, setBody] = useState({});
    const [data, loading, error, fetchResourse] = UseApiPost(body);
    console.log(data, loading, error);

    if(error){
        console.log(error)
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        setBody({cypher: e.target.value})
    };

    const hanldeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchResourse(postCypherCodeAPI, 'POST')
        setCyphercontext([...cypherContext, { cypherCode: values.cipher } ])
    };

    if(loading){
        return <p className='loading'>Loading ...</p>
    }

    return (
        <form onSubmit={hanldeSubmit}>
            {inputs.map((input: any) => (
                <FormInput
                    name={input.name}
                    key={input.id}
                    value={values[input.name as keyof FormDataInterface]}
                    onChange={onChange}
                    {...input}
                />
            ))}
            <button>Submit</button>
        </form>
    );
}

