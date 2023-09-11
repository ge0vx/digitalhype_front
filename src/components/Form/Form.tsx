import React, { useContext, useEffect, useState } from 'react';
import { CypherContext } from '../../contexts/CypherContext';
import { CypherContextType } from '../../contexts/types';
import FormInput from '../FormInput/FormInput';
import {postCypherCodeAPI } from '../../config/constants'
import { UseFetch } from '../../hooks/useFetch';
import Modal from "../Modal/Modal";
import useModal from "../../hooks/useModal";
import './Form.css';

interface FormDataInterface {
    cipher: string;
}

export default function Form({ inputs }: { inputs: any }) {
    const { cypherContext, setCyphercontext } = useContext(CypherContext) as CypherContextType;
    const [values, setValues] = useState<FormDataInterface>({ cipher: "" })
    const [body, setBody] = useState({});
    const [data, loading, error, errorMessage, fetchResourse] = UseFetch(body);
    const { isOpen, toggle } = useModal();

    useEffect(()=>{
        setCyphercontext([...cypherContext, { cypherCode: data?.item?.cypher } ])
        if(cypherContext.length>0){
            toggle()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        setBody({cypher: e.target.value})
    };

    const hanldeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchResourse(postCypherCodeAPI, 'POST')
    };

    if(loading){
        return <p className='loading'>Loading ...</p>
    }

    return (
        <>
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
                {error && <p>{ errorMessage }</p>}
            </form>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ul>{cypherContext?.reverse().map((i: any)=>(<li>{i.cypherCode}</li>))}</ul>
            </Modal>
        </>
    );
}

