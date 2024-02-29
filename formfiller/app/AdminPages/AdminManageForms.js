import React, { useState } from 'react';
import "./AdminMainPage.css"
import AdminFormIndivdual from './AdminFormIndividual'
import { useRouter } from 'next/router';

export default function AdminManageForms() {
    const router = useRouter();

    const exit = () => {
        router.push('/adminmainpage');
    };

    return (
        <div>
            <h4 onClick={exit}> exit </h4>
            <AdminFormIndivdual name = "Basic Info Form"/>
            <AdminFormIndivdual name = "Another form"/>
            <AdminFormIndivdual name = "Some other form made"/>
        </div>
    )

}