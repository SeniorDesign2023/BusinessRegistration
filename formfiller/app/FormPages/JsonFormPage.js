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

    console.log(form);

    const [data, setData] = useState()

    async function postData(isDraft) {
        
        await post("formresponse", {

            name: form.name,
            data,
            org: form.tag,
            isDraft,
            id: form.id,
            fid: form.fid || null,
            mode: router.query.mode

        })

        router.push("/mainpage")

    };

    if (form)
        return(
            <div>
                <h3 onClick={navigateToMainPage}> exit </h3>
                {/*<h1> This page displays a sample form</h1>*/}
                <JsonForms 
                    schema={form.schema}
                    
                    renderers={materialRenderers}
                    cells={materialCells}
                    data={form.data}
                    onChange={
                        ({errors, data}) => setData(data)
                    }
                />
                {router.query.mode !== "submitted" && 
                <div className='buttons'>
                    <button type="button" onClick={() => postData(false)}>Submit</button>
                    <button type="button" onClick={() => postData(true)}>Save Draft</button>
                </div>
                }

            </div>
        )

    return (
        <div>
            <h3 onClick={navigateToMainPage}> exit </h3>
            <p> Please refresh page for form to load. </p>
        </div>
    )
}
//uischema={form.uischema || null}