import React, { useState } from 'react';
import OrganizationIndividual from './OrganizationIndividual';
import "./SearchOrganization.css"
import { useRouter } from 'next/router';
import { AiOutlineClose } from "react-icons/ai";



import { post } from "@/lib/http"

export default function SearchOrganization({closeSearch}) {
    const [organization, setOrganization] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [joined, setJoined] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        let res = await post("searchorg", {
            organization
        })
   
        console.log(res.data);
        setOrganization('');
        //based on the res.data response when that is figured out
        // if (res.data.response) {
        //     setJoined(true);
        //     setErrorMessage('');
        // } else {
        //     setJoined(false);
        //     setErrorMessage('Could not join organization');
        //     setOrganization(''); // Reset organization to blank
        // }
    };

    const exit = () => {
        closeSearch();
    };
    const navigateToCreateOrgnization = () => {
        router.push('/createorganization');
    };

    return (
      
        <div>
            <form onSubmit={handleSubmit}>

            <label >
                <input className='form-input'
                    type="text"
                    value={organization}
                    onChange={e => setOrganization(e.target.value)}
                    required
                />
            </label>
            <div className='buttons'>
                <input type="submit" value="+" className='submit' />
                <AiOutlineClose onClick={exit} className="exit"/>
            </div>
        </form>

        <div>
           {errorMessage && <h1>{errorMessage}</h1>}
           {joined && <h1>Joined organization {organization}</h1>}
        </div>
        <div className= 'create' onClick={navigateToCreateOrgnization}> Create Organization</div>
        </div>
    );
}