import React, { useState, useEffect } from 'react';
import "./AdminMainPage.css"
import { useRouter } from 'next/router';

import { get } from "@/lib/http"

export default function AdminMainPage({name}) {

    const router = useRouter();
    const [newMember, setNewMember] = useState('');
    const [newAdmin, setNewAdmin] = useState('');
    const [tag, setTag] = useState('');
    const [members, setMembers] = useState([]);
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        const { tag } = router.query;
        if (tag) {
            setTag(tag);
        }                    
        fetchMembers();
        fetchAdmins();
    }, [router.query]);

    const fetchMembers = async () => {
        const { tag } = router.query;
        try {
            const response = await fetch(`/get?endpoint=/fetchmembers&orgName=${tag}`);
            if (!response.ok) {
                throw new Error('Failed to fetch members');
            }
            const membersData = await response.json();
            setMembers(membersData); // Update the state with fetched members
        } catch (error) {
            console.error('Error fetching members:', error);
            // Handle error
        }
    };

    const fetchAdmins = async () => {
        let { tag } = router.query;
        if(tag == undefined) return;
        try {
            const response = await fetch(`/get?endpoint=/fetchadmins&orgName=${tag}`);
            if (!response.ok) {
                throw new Error('Failed to fetch admins');
            }
            const adminsData = await response.json();
            setAdmins(adminsData); // Update the state with fetched admins
        } catch (error) {
            console.error('Error fetching admins:', error);
            // Handle error
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const navigateToAdminManageForm = () => {
        router.push({
            pathname: '/adminmanageform',
            query: { org: name},
        });
    };

    const exit = () => {
        router.push({
            pathname: '/mainpage',
            query: { org: name, role : 'Admin' },
        });
    };

    return (
      
    <div className='admin-mainpage'>
          <div className='admin-top'>
                <h4 className= "exit" onClick={exit}> exit</h4>
                <h4 className='admin-top-name'>{name} Admin Page</h4>
          </div>
          <h1 className = "manage-forms" onClick={navigateToAdminManageForm}> Manage forms</h1>
          <div className='member-admin'>
          <div className='member'>
                <h1> Members </h1>
                <form onSubmit={handleSubmit}>
                    <label >
                        <input className='form-input'
                            type="text"
                            value={newMember}
                            onChange={e => setNewMember(e.target.value)}
                        />
                    </label>
                  <input type="submit" value="+" className='submit' />
                </form>
                {/* Render the list of members */}
                {members.map((member, index) => (
                    <h2 key={index}>{member.Email}</h2>
                ))}
            </div>

            <div className='admin'>
             <div className='admin-in'>
                <h1> Admins </h1>
                <form onSubmit={handleSubmit}>
                <label >
                    <input className='form-input'
                        type="text"
                        value={newAdmin}
                        onChange={e => setNewAdmin(e.target.value)}
                    />
                </label>
            
                <input type="submit" value="+" className='submit' />
                 </form>
                 {/* Render the list of admins */}
                {admins.map((admin, index) => (
                    <h2 key={index}>{admin.Email}</h2>
                ))}
            </div>
            </div>
          </div>
    </div>
    )
}
