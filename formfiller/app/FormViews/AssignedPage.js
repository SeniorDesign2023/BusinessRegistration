import React from 'react';
import FormIndividual from './FormIndividual';


export default function AssignedPage({organization}) {
    return (
        <div>
            <FormIndividual name ={organization + " form 1"}/>
            <FormIndividual name ={organization + " form 2"}/>
            <FormIndividual name ={organization + " form 3"}/>
            <FormIndividual name ={organization + " form 4"}/>
            <FormIndividual name ={organization + " form 5"}/>
            <FormIndividual name ={organization + " form 6"}/>

           
        </div>
    );
}