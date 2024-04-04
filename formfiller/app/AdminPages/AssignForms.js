import React, { useState } from 'react';
import "./AssignForms.css"
import { useRouter } from 'next/router';

export default function AssignForm({formName, orgName}) {
    const router = useRouter();
    const [member, setMember] = useState('');

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
             {/* <div className='member'> */}
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
                <h3> Assigned Member 1</h3>
                <h3> Assigned Member 2</h3>
         
            {/* </div> */}
            </div>
        </div>
    )
}