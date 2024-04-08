import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import { IoMdArrowBack } from "react-icons/io";
import "./FormResponses.css"
import { get } from "@/lib/http"

export default function FormResponses({formName, formID, orgName, orgTag}) {
    const router = useRouter();

    const [data, setData] = useState([])

    const exit = () => {
        router.push({
            pathname: '/adminmanageform',
            query: {formName, formID, org: orgName, tag: orgTag},
        });
    };

    /*const text = `{
        "name": "John Doe",
        "vegetarian": false,
        "birthDate": "1985-06-02",
        "personalData": {
          "age": 34
        },
        "postalCode": "12345",
        "nationality": "JP"
}`*/

    useEffect(() => {
        get("fetchresponses", {formID}).then(response => {
            setData(response.data)
            console.log(response.data)
        });
    }, [formID])

 
    return (
        <div>
            <h4 onClick={exit}> <IoMdArrowBack/> </h4>
            <h1>{formName}</h1>
            <div className='group-container'>
                {data.map(entry => (
                    <div>
                        <h2>{entry.email}</h2>
                        <div className='json-text'>
                            <pre>{JSON.stringify(entry.data)}</pre>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/*
<div >
               
                <h2>email@adress.com</h2>
                <div className='json-text'>
                    <pre>{text}
                        </pre>
                </div>
            </div>
            <div>
                <h2>email2@adress.com</h2>
                <div className='json-text'>
                    <pre>{text}
                        </pre>
                </div>
            </div>
            <div>
                <h2>email3@adress.com</h2>
                <div className='json-text'>
                    <pre>{text}
                        </pre>
                </div>
            </div>
*/