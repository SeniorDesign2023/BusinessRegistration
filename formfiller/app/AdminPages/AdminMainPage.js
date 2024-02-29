import React, { useState } from 'react';
import "./AdminMainPage.css"
import { useRouter } from 'next/router';

export default function AdminMainPage() {
    const router = useRouter();
    const [newMember, setNewMember] = useState('');
    const [newAdmin, setNewAdmin] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const navigateToAdminManageForm = () => {
        router.push('/adminmanageform');
    };

    const exit = () => {
        router.push('/mainpage');
    };

    return (
      
    <div>
          <h4 onClick={exit}> exit</h4>
          <h1 onClick={navigateToAdminManageForm}> Manage forms</h1>
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
                <h2> Member 1</h2>
                <h2> Member 2</h2>
                <h2> Member 3</h2>
                <h2> Member 4</h2>
            </div>

            <div className='admin'>
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

                <h2> Admin 1</h2>
                <h2> Admin 2</h2>
                <h2> Admin 3</h2>
                <h2> Admin 4</h2>
            </div>
          </div>
    </div>
    )
}