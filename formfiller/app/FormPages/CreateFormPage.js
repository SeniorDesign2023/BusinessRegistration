

import React, { useState } from 'react';
import "./CreateFormPage.css"
import { useRouter } from 'next/router';
import { IoIosInformationCircleOutline } from "react-icons/io";

import { post } from "@/lib/http"

export default function CreateFormPage({orgName, orgRole, orgTag}) {
    // if (orgName == null) {
    //     orgName = 'Organization 1'
    // }
    // if (orgRole == null) {
    //     orgRole = 'Normal'
    // }

    const router = useRouter();
    
    const [formName, setFormName] = useState('');
    const [json, setJson] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const obj = JSON.parse(json)
            
            if (!obj) {
                console.log("Entry not a JSON object")
                return
            }

            if (!obj.schema) {
                console.log("Entry does not contain a schema object")
                return
            }

        } catch (_) {
            console.log("Entry not valid JSON")
            return
        }

        let res = await post("createform", {
            formName,
            json,
            org: router.query.org
        })

        router.push({
            pathname: '/mainpage',
            query: { org: orgName, role: orgRole, tag: orgTag},
           
        });
     
    };
    
    const navigateToMainPage = () => {
        router.push({
            pathname: '/mainpage',
            query: { org: orgName, role: orgRole, tag: orgTag },
        });
    };
    
    const navigateToFormSchema = () => {
        router.push({
            pathname: '/formschemapage',
            query: { org: orgName, role: orgRole, tag: orgTag },
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
                <div className='input-json-top'>
                  Input JSON for defining form
                  <IoIosInformationCircleOutline onClick={navigateToFormSchema} className ="info-button" />
                </div>
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

