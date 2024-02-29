import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function AssignForm({orgName}) {
    const router = useRouter();
    const [member, setMember] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const exit = () => {
        router.push({
            pathname: '/adminmainpage',
            query: { org: orgName},
        });
    };

    return(
        <div>
             {/* <div className='member'> */}
                <h4 onClick={exit}> exit</h4>
                <h1> Assigned </h1>
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
                <h2> Assigned Member 1</h2>
                <h2> Assigned Member 2</h2>
                <h2> Assigned Member 3</h2>
                <h2> Assigned Member 4</h2>
            {/* </div> */}
        </div>
    )
}