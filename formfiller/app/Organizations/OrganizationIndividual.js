// OrganizationIndividual.js
import React from 'react';
import "./OrganizationIndividual.css"
import Circle from '../ExtraComponents/Circle';

export default function OrganizationIndividual({ name, setSelectedOrg, isSelected }) {
    return (
        <div className={`org-ind ${isSelected ? 'org-selected' : ''}`} onClick={() => setSelectedOrg(name)}>
            <div className='org-ind-circle'>
                <Circle size="35px" />
            </div>
            <h3 className='org-ind-name'>{name}</h3>
        </div>
    );
}
