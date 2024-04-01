

import React, { useState } from 'react';
import "./CreateFormPage.css"
import { useRouter } from 'next/router';

import { post } from "@/lib/http"

export default function CreateFormPage({orgName, orgRole}) {
    if (orgName == null) {
        orgName = 'Organization 1'
    }
    if (orgRole == null) {
        orgRole = 'Normal'
    }
    const [formName, setFormName] = useState('');
    const [assign, setAssign] = useState('');
    const [json, setJson] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission logic here
        let res = await post("createform", {
            formName,
            json
        })
        router.push({
            pathname: '/mainpage',
            query: { org: orgName, role: orgRole },
           
        });
     
    };
    
    const navigateToMainPage = () => {
        router.push({
            pathname: '/mainpage',
            query: { org: orgName, role: orgRole },
        });
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

    

            <input type="submit" value="Generate form" className='submit' />
        </form>
        </div>
    );
}

