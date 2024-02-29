import React from 'react';
import "./AdminFormIndividual.css"
import { useRouter } from 'next/router';

export default function AdminFormIndivdual({name}) {
    const router = useRouter();

    const navigateToFormResponses = () => {
        router.push('/formresponse');
    };

    const navigateToAssignForms = () => {
        router.push('/assignform');
    };

    return (
        <div className='individual'>
            <h2> {name} </h2>
            <div className='assigned' onClick={navigateToAssignForms}></div>
            <div className='responses' onClick={navigateToFormResponses}></div>
        </div>
    )

}