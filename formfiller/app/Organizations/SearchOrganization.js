import React, { useState } from 'react';
import OrganizationIndividual from './OrganizationIndividual';
import "./SearchOrganization.css"

export default function SearchOrganization() {
    const [organization, setOrganization] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
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

        <div className='create'> <h3 className='create-text'> Create Organization</h3></div>
        </div>
    );
}