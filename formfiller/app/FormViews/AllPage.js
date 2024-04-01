import React, { useEffect, useState } from 'react';
import FormIndividual from './FormIndividual';

import { get } from '@/lib/http';

export default function AllPage({organization}) {

    const [forms, setForms] = useState([])

    useEffect(() => {
        get("fetchorgforms", {
            org: organization
        }).then(response => {
            console.log(response.data)
            setForms(response.data)
        })
    }, [])

    function buildForms() {
        return forms.map(form => (<FormIndividual name={form.Blank_Form_Name} id={form.Blank_Form_ID} />))
    }

    return (
        <div>
            {buildForms()}
        </div>
    );
}

/*
<FormIndividual name ={organization + " form 1"}/>
            <FormIndividual name ={organization + " form 2"}/>
            <FormIndividual name ={organization + " form 3"}/>
            <FormIndividual name ={organization + " form 4"}/>
            <FormIndividual name ={organization + " form 5"}/>
            <FormIndividual name ={organization + " form 6"}/>
            <FormIndividual name ={organization + " form 7"}/>
            <FormIndividual name ={organization + " form 8"}/>
            <FormIndividual name ={organization + " form 9"}/>
            <FormIndividual name ={organization + " form 10"}/>
*/