import React from 'react';
import "./OrganizationIndividual.css"
import Circle from '../ExtraComponents/Circle';

export default function OrganizationIndividual({name, setSelectedOrg}) {
    return (
        <div className='org-ind' onClick={() => setSelectedOrg(name)}>
            <div className='org-ind-circle'>
            <Circle size= "35px"/>
            </div>
            <h3 className='org-ind-name'>{name}</h3>
        </div>
    );
}