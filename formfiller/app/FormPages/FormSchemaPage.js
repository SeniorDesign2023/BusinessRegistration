import React, { useState } from 'react';
import "./FormSchemaPage.css"
import { useRouter } from 'next/router';

import { post } from "@/lib/http"

export default function FormSchemaPage({orgName, orgRole, orgTag}) {
    const router = useRouter();
    const navigateToCreateForm = () => {
        router.push({
            pathname: '/createform',
            query: { org: orgName, role: orgRole, tag: orgTag },
        });
    };

    const topText = `{
       "schema": {your schema here}
}`
    const exampleSchema = `{
        "schema": {	
            "type": "object",
            "properties": {
                "field name": {
                    "type": "string",
                    "description": "this is a description"
                }
            }
        }
    }`

    return (
        <div>
            <div className='top'>
             <h2 className = "exit" onClick={navigateToCreateForm}> exit </h2>
             <h2> JSON Schema Info Page</h2>
             </div>
             <div className='page-content'>
             <p> In creating a form follow this syntax: </p>
             <div className='syntax'> {topText}</div>

             <p> An example schema is </p>
             <div className='syntax'> {exampleSchema}</div>

             <p> Ui schema's can also be included. To find more information on how to create forms visit: <a href='https://jsonforms.io/examples'>JSON FORMS SYNTAX</a></p>
              <p>The examples listed in this page are example schema's make sure to include the </p>
              <div className='syntax'> {topText}</div>
             <h2></h2>
             </div>
            </div>
    )
}