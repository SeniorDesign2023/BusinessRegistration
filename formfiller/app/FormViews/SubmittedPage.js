import React, { useState, useEffect } from 'react';
import FormIndividual from './FormIndividual';
import { get } from "@/lib/http"


export default function CreatedPage({organization}) {
    const [forms, setForms] = useState([])

    useEffect(() => {

        get("fetchorgforms", {
            org: organization,
            mode: "submitted"
        }).then(res => {
            console.log(res.data)
            setForms(res.data)
        }, [])

    }, [organization])

    return (
        <div>
            {forms.map(form => (
                <FormIndividual name={form.Blank_Form_Name} id={form.Blank_Form_ID} fid={form.fid} mode="submitted"/>
            ))}
        </div>
    );
}