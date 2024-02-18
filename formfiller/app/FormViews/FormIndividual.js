import React from 'react';
import "./FormIndividual.css"
import { useRouter } from 'next/router';

export default function FormIndividual({name}) {
    const router = useRouter();
    const navigateToJsonFormPage = () => {
        router.push('/form');
    };
    return (
        <div className='form-ind' onClick={navigateToJsonFormPage}>
            <h3 className='form-ind-name'>{name}</h3>
        </div>
    );
}