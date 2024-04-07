import React from 'react';
import { BiSolidReport } from "react-icons/bi";
import "./AdminFormIndividual.css"
import { MdOutlineAssignmentInd } from "react-icons/md";
import { useRouter } from 'next/router';
import { GoDot } from "react-icons/go";

export default function AdminFormIndivdual({name, orgName, orgTag}) {
    const router = useRouter();

    const navigateToFormResponses = () => {
        router.push({
            pathname: '/formresponse',
            query: { formName: name, org: orgName, tag: orgTag},
        });
   
    };

    const navigateToAssignForms = () => {
        router.push({
            pathname: '/assignform',
            query: { formName: name, org: orgName, tag: orgTag},
        });
    };

    return (
        <div className='individual'>
            <GoDot className ="dot"/>
            <h2> {name} </h2>
            <div onClick={navigateToAssignForms}> <MdOutlineAssignmentInd className='assigned'/></div>
            <div onClick={navigateToFormResponses}> <BiSolidReport className='responses'  /></div>
        </div>
    )

}