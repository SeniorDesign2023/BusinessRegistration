import React, { useState } from 'react';
import OrganizationIndividual from './OrganizationIndividual';
import "./SearchOrganization.css"
import { useRouter } from 'next/router';

export default function SearchOrganization() {
    const [organization, setOrganization] = useState('');
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
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
            
            <input type="submit" value="enter" className='submit' />
        </form>

        <div className='create'  onClick={navigateToCreateOrgnization}> <h3 className='create-text'> Create Organization</h3></div>
        </div>
    );
}