import React from 'react';
import "./OrganizationIndividual.css"
import Circle from '../ExtraComponents/Circle';

export default function OrganizationIndividual({name}) {
    return (
        <div className='org-ind'>
            <div className='org-ind-circle'>
            <Circle size= "35px"/>
            </div>
            <h3 className='org-ind-name'>{name}</h3>
        </div>
    );
}