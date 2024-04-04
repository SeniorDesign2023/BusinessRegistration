import React, { useState, useEffect } from 'react';
import "./AdminManageForms.css"
import AdminFormIndivdual from './AdminFormIndividual'
import { useRouter } from 'next/router';

import { get } from "@/lib/http"

import {inspect} from "util"

export default function AdminManageForms({orgName}) {
    const router = useRouter();

    const [tag, setTag] = useState()
    const [name, setName] = useState()
    const [forms, setForms] = useState([])

    const exit = () => {
        router.push({
            pathname: '/adminmainpage',
            query: { org: name, tag },
        });
    };

    useEffect(() => {

        setName(router.query.org)
        setTag(router.query.tag)

        get("fetchorgforms", {
            org: router.query.tag
        }).then(response => {
            setForms(response.data)
        })

    }, [router.query])

    return (
        <div>
            <h4 onClick={exit}> exit </h4>
            <div className='forms'>
            {forms.map(form => (<AdminFormIndivdual name={form.Blank_Form_Name} orgName={name} orgTag={tag} />))}
            </div>
        </div>
    )

}

/*
<AdminFormIndivdual name = "Basic Info Form" orgName={orgName}/>
<AdminFormIndivdual name = "Another form" orgName={orgName}/>
<AdminFormIndivdual name = "Some other form made" orgName={orgName}/>
*/