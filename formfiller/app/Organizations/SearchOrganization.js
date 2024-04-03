import React, { useState } from 'react';
import OrganizationIndividual from './OrganizationIndividual';
import "./SearchOrganization.css"
import { useRouter } from 'next/router';
import { AiOutlineClose } from "react-icons/ai";



import { post } from "@/lib/http"

export default function SearchOrganization({closeSearch}) {
    const [organization, setOrganization] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        let res = await post("searchorg", {
            organization
        })

        console.log(res.data);
        setOrganization('');
        //does not work :(
        //router.push('/mainpage');
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

        <div className= 'create' onClick={navigateToCreateOrgnization}> <h3 className='create-text'> Create Organization</h3></div>
        </div>
    );
}