import React from 'react';
import FormIndividual from './FormIndividual';


export default function CreatedPage({organization}) {
    return (
        <div>
            <FormIndividual name ={organization + " form 1"}/>
           
           
        </div>
    );
}