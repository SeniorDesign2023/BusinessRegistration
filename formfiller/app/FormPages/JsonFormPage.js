import React, {useState} from 'react';
import { useRouter } from 'next/router';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';

//import database from "@/lib/database";
import {post} from "@/lib/http" 

export default function JsonFormPage({form}) {
    const router = useRouter();
    const navigateToMainPage = () => {
        router.push({
            pathname: "/mainpage",
            query: { org: form.tag }
        })
    };

    const [data, setData] = useState()

    async function postData(isDraft) {
        
        await post("formresponse", {

            name: form.name,
            data,
            isDraft,

        })

        navigateToMainPage()

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
            <button type="button" onClick={() => postData(false)}>Save</button>

        </div>
    )
}
