import React, { useState } from 'react';
import OrganizationIndividual from './OrganizationIndividual';
import "./SearchOrganization.css"
import { useRouter } from 'next/router';

import { post } from "@/lib/http"

export default function SearchOrganization() {
    const [organization, setOrganization] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        let res = await post("searchorg", {
            organization
        })

        console.log(res.data);
        setOrganization('');
        //does not work :(
        //router.push('/mainpage');
    };

    const navigateToCreateOrgnization = () => {
        router.push('/createorganization');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>

            <label >
                <input className='form-input'
                    type="text"
                    value={organization}
                    onChange={e => setOrganization(e.target.value)}
                    required
                />
            </label>
            
            <input type="submit" value="+" className='submit' />
        </form>

        <div className='create'  onClick={navigateToCreateOrgnization}> <h3 className='create-text'> Create Organization</h3></div>
        </div>
    );
}