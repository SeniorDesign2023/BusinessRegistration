import React, {useState} from 'react';
import { useRouter } from 'next/router';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';
import "./JsonFormPage.css"

//import database from "@/lib/database";
import {post} from "@/lib/http" 

export default function JsonFormPage({form}) {
    const router = useRouter();
    const navigateToMainPage = () => {
        router.push('/mainpage');
    };

    const [data, setData] = useState()

    async function postData(isDraft) {
        
        await post("formresponse", {

            name: form.name,
            data,
            org: form.tag,
            isDraft,

        })

        router.push("/mainpage")

    };

    return(
        <div>
            <h3 onClick={navigateToMainPage}> exit </h3>
            {/*<h1> This page displays a sample form</h1>*/}
            <JsonForms 
                schema={form.schema}
                renderers={materialRenderers}
                cells={materialCells}
                onChange={
                    ({errors, data}) => setData(data)
                }
            />
            <div className='buttons'>
                <button type="button" onClick={() => postData(false)}>Submit</button>
                <button type="button" onClick={() => postData(true)}>Save Draft</button>
            </div>

        </div>
    )
}
