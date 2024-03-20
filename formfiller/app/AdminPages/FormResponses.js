import React from 'react';

import { useRouter } from 'next/router';
import "./FormResponses.css"
export default function FormResponses({formName, orgName}) {
    const router = useRouter();
    const exit = () => {
        router.push({
            pathname: '/adminmanageform',
            query: { org: orgName},
        });
    };
    const text = `{
        "name": "John Doe",
        "vegetarian": false,
        "birthDate": "1985-06-02",
        "personalData": {
          "age": 34
        },
        "postalCode": "12345",
        "nationality": "JP"
}`
 
    return (
        <div>
            <h4 onClick={exit}> exit </h4>
            <h1>{formName}</h1>
            <div className='group-container'>
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
        </div>
        </div>
    );
}


