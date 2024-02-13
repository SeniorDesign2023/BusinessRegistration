import React, { useState } from 'react';
import { useRouter } from 'next/router';
import './Profilepage.css'

export default function Profilepage() {

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [addres, setAddress] = useState('');
    const [zipCode, setZipCode] = useState(0);
    const [dob, setDob] = useState('');

    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
       
        router.push('/mainpage');
    };

    return (
        <div>
         <div className='top'>
            <h3> Back</h3>
            <h3> Profile Information</h3>
         </div>
         <form onSubmit={handleSubmit}>
            <div className = "first-line">
            <label>
                First name
                <input className='form-input'
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    required
                />
            </label>
            <label>
                Middle name
                <input className='form-input'
                    type="text"
                    value={middleName}
                    onChange={e => setMiddleName(e.target.value)}
                    required
                />
            </label>
            <label>
                Last name
                <input className='form-input'
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    required
                />
            </label>
            </div>
            <label>
                Email Address
                <input className='form-input'
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </label>
            <label>
                Zip Code
                <input className='form-input'
                    type="email"
                    value={zipCode}
                    onChange={e => setZipCode(e.target.value)}
                    required
                />
            </label>
            <label>
                Date of Birth
                <input className='form-input'
                    type="email"
                    value={dob}
                    onChange={e => setDob(e.target.value)}
                    required
                />
            </label>
          
            <input type="submit" value="Save" className='submit'/>
        </form>
        </div>
    );
}


