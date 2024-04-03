import React from 'react';
import "./FormIndividual.css"
import { useRouter } from 'next/router';
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoDocumentOutline } from "react-icons/io5";


export default function FormIndividual({name, id}) {
    const router = useRouter();
    const navigateToJsonFormPage = () => {
        router.push({
            pathname: '/form',
            query: {
                id
            }
        });
    };
    return (
        <div className='form-ind' onClick={navigateToJsonFormPage}>
              <IoDocumentOutline className='doc-icon'/>
            <h3 className='form-ind-name'>{name}</h3>
        </div>
    );
}