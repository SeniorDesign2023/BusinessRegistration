import React, { useEffect, useState } from 'react';
import "./AdminMainPage.css"
import AdminFormIndivdual from './AdminFormIndividual'
import { useRouter } from 'next/router';

import { get } from "@/lib/http"

export default function AdminManageForms() {
    const router = useRouter();

    const [name, setName] = useState()
    const [tag, setTag] = useState()
    const [forms, setForms] = useState([])

    const exit = () => {
        router.push({
            pathname: '/adminmainpage',
            query: { org: name, tag: tag },
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

    }, [])

    return (
        <div>
            <h4 onClick={exit}> exit </h4>
            {forms.map(form => (<AdminFormIndivdual formName={form.Blank_Form_Name} orgName={name} orgTag={tag}/>))}
        </div>
    )

}