import React from 'react';
import { BiSolidReport } from "react-icons/bi";
import "./AdminFormIndividual.css"
import { MdOutlineAssignmentInd } from "react-icons/md";
import { useRouter } from 'next/router';

export default function AdminFormIndivdual({name, orgName}) {
    const router = useRouter();

    const navigateToFormResponses = () => {
        router.push({
            pathname: '/formresponse',
            query: { formName: name, org: orgName},
        });
   
    };

    const navigateToAssignForms = () => {
        router.push({
            pathname: '/assignform',
            query: { formName: name, org: orgName},
        });
    };

    return (
        <div className='individual'>
            <h2> {name} </h2>
            <div onClick={navigateToAssignForms}> <MdOutlineAssignmentInd className='assigned'/></div>
            <div onClick={navigateToFormResponses}> <BiSolidReport className='responses'  /></div>
        </div>
    )

}