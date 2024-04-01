import React, { useState } from 'react';
import "./AdminMainPage.css"
import AdminFormIndivdual from './AdminFormIndividual'
import { useRouter } from 'next/router';

export default function AdminManageForms({orgName}) {
    const router = useRouter();

    const exit = () => {
        router.push({
            pathname: '/adminmainpage',
            query: { org: orgName },
        });
    };

    return (
        <div>
            <h4 onClick={exit}> exit </h4>
            <AdminFormIndivdual name = "Basic Info Form" orgName={orgName}/>
            <AdminFormIndivdual name = "Another form" orgName={orgName}/>
            <AdminFormIndivdual name = "Some other form made" orgName={orgName}/>
        </div>
    )

}