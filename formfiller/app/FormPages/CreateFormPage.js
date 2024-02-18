

import React, { useState } from 'react';
import "./CreateFormPage.css"
import { useRouter } from 'next/router';

export default function CreateFormPage() {
    const [formName, setFormName] = useState('');
    const [assign, setAssign] = useState('');
    const [json, setJson] = useState('');
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
       
        router.push('/mainpage');
    };
    
    const navigateToMainPage = () => {
        router.push('/mainpage');
    };


    return (
        <div>
        <div className= 'create-form-top' >
        <h2 className = "exit" onClick={navigateToMainPage}> Exit </h2>
        <h1 className='create-form-top-create'> Create a Form</h1>
        </div>
       
        <form onSubmit={handleSubmit}>
            <label>
                Name of form
                <input className='form-name'
                    type="text"
                    value={formName}
                    onChange={e => setFormName(e.target.value)}
                    required
                />
            </label>
            <label>
                Input JSON for defining form
                <textarea className='json-input'
                    type="text"
                    value={json}
                    onChange={e => setJson(e.target.value)}
                    required
                />
            </label>

            <label>
                Assign Form
                <input className='form-name'
                    type="text"
                    value={assign}
                    onChange={e => setAssign(e.target.value)}
                    required
                />
            </label>

            <input type="submit" value="Generate form" className='submit' />
        </form>
        </div>
    );
}

