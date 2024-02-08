import React from 'react';
import "./FormIndividual.css"

export default function FormIndividual({name}) {
    return (
        <div className='form-ind'>
            <h3 className='form-ind-name'>{name}</h3>
        </div>
    );
}