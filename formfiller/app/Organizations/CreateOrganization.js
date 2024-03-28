

import React, { useState } from 'react';
import "./CreateOrganization.css"
import { useRouter } from 'next/router';

import { post } from "@/lib/http"


export default function CreateOrganization() {
    const [organizationName, setOrganizationName] = useState('');
    const [tag, setUsername] = useState('');
    const [organizationMembers, setOrganizationMembers] = useState('');
    const [aboutOrg, setAboutOrg] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        //console.log(aboutOrg)
        let res = await post("createorg", {
            organizationName,
            tag,
            aboutOrg,
            organizationMembers
        })
        router.push(res.data.redirect)
    };

    const navigateToMainPage = () => {
        router.push('/mainpage');
    };


    return (
        <div>
       <div className= 'create-form-top' >
        <h2 className = "exit" onClick={navigateToMainPage}> Exit </h2>
        <h1 className='create-form-top-create'> Create an Organization</h1>
        </div>
       
        <form onSubmit={handleSubmit}>
            <label>
                Name of Organization
                <input className='org-name'
                    type="text"
                    value={organizationName}
                    onChange={e => setOrganizationName(e.target.value)}
                    required
                />
            </label>
            <label>
                Organization Tag
                <input className='org-name'
                    type="text"
                    value={tag}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
            </label>
            <label>
                About Organization
                <textarea className='org-about'
                    type="text"
                    value={aboutOrg}
                    onChange={e => setAboutOrg(e.target.value)}
                    //required
                />
            </label>

            <label>
                Organization Members
                <input className='org-name'
                    type="text"
                    value={organizationMembers}
                    onChange={e => setOrganizationMembers(e.target.value)}
                    //required
                />
            </label>

            <input type="submit" value="Generate form" className='submit' />
        </form>
        </div>
    );
}

