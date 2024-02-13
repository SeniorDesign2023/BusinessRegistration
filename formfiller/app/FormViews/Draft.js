import React from 'react';
import FormIndividual from './FormIndividual';


export default function Draft({organization}) {
    return (
        <div>
            <FormIndividual name ={organization + " form 1"}/>
            <FormIndividual name ={organization + " form 2"}/>
            <FormIndividual name ={organization + " form 3"}/>
            <FormIndividual name ={organization + " form 4"}/>
        </div>
    );
}