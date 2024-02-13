import React from 'react';
import FormIndividual from './FormIndividual';


export default function AllPage({organization}) {
    return (
        <div>
            <FormIndividual name ={organization + "form 1"}/>
            <FormIndividual name ={organization + "form 2"}/>
            <FormIndividual name ={organization + "form 3"}/>
            <FormIndividual name ={organization + "form 4"}/>
            <FormIndividual name ={organization + "form 5"}/>
            <FormIndividual name ={organization + "form 6"}/>
            <FormIndividual name ={organization + "form 7"}/>
            <FormIndividual name ={organization + "form 8"}/>
            <FormIndividual name ={organization + "form 9"}/>
            <FormIndividual name ={organization + "form 10"}/>
     
            
           
        </div>
    );
}