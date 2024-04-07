import React, { useState, useEffect } from 'react';
import "./AssignForms.css"
import { useRouter } from 'next/router';

import { post, get } from "@/lib/http"


export default function AssignForm({formName, orgName, id}) {
    const router = useRouter();
    const [member, setMember] = useState('');
    const [assignedMembers, setAssignedMembers] = useState([]);

    useEffect(() => {
        console.log("id is " + id);
        if(id === undefined) {
            return;
        }

        get("fetchassign", {
            formID: id
        }).then(response => {
            console.log(response);
            setAssignedMembers(response.data);
        });
        
    }, [router.query]);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const exit = () => {
        router.push({
            pathname: '/adminmanageform',
            query: { org: orgName},
        });
    };

    return(
        <div>
            <div className='top'>
                <h4 onClick={exit} className= "exit"> exit</h4>
                <h4 className='form-name'>{formName}</h4>
            </div>
            <div className='assign-form'>
                <h2> Assigned </h2>
                <form onSubmit={handleSubmit}>
                    <label >
                        <input className='form-input'
                            type="text"
                            value={member}
                            onChange={e => setMember(e.target.value)}
                        />
                    </label>
                    <input type="submit" value="+" className='submit' />
                </form>
                {assignedMembers.map((assignedMember, index) => (
                <h3 key={index}> {assignedMember.Email} </h3>
                ))}
            </div>
        </div>
    )
}
