import React, { useState, useEffect } from 'react';
import "./AssignForms.css"
import { useRouter } from 'next/router';

import { post, get } from "@/lib/http"
import { GoDot } from "react-icons/go";


export default function AssignForm({formName, orgName, id}) {
    const router = useRouter();
    const [member, setMember] = useState('');
    const [assignedMembers, setAssignedMembers] = useState([]);

    useEffect(() => {
        console.log("id is " + id);
        if(id === undefined) {
            return;
        }

        setlist()
        
    }, [router.query]);

    const setlist = async () => {
        get("fetchassign", {
            formID: id
        }).then(response => {
            console.log(response);
            setAssignedMembers(response.data);
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        let res = await post("assign2form", {
            member,
            id
        })

        if(res.data.success == true) {
            setlist();
            setMember('');
        }
        else {
            console.log(res.data.message);
        }


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
                <h4 className='form-name'>{formName} - Assign form</h4>
            </div>
            <div className='assign-form'>
                <h2> Assigned Members </h2>
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
                 <div className='assign-text'> 
                 <GoDot className ="dot"/>
                 <h2 key={index}>{assignedMember.Email}</h2>
                 </div>
                ))}
            </div>
        </div>
    )
}
