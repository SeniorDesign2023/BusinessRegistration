import React, { useState } from 'react';
import { useRouter } from 'next/router';
import './Profilepage.css'


export default function Profilepage() {

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState(0);
    const [dob, setDob] = useState('');

    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
       
        router.push('/mainpage');
    };

    const navigateToMainPage = () => {
        router.push('/mainpage');
    };

    const navigateToHomePage = () => {
        router.push('/home');
    };

    return (
        <div>
         <div className='top'>
            <h3 className='exit' onClick={navigateToMainPage}>  Exit </h3>
            <h3> Profile Information</h3>
         </div>
         <form onSubmit={handleSubmit}>
            <div className = "first-line">
            <label className='form-left'>
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
            <label className='email'>
                Email Address
                <input className='email-input'
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </label>

            <label className='address'>
                Address
                <textarea className='address-input'
                    type="text"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    required
                />
            </label>
            
            <div className = "end-line">
            <label className='form-left'>
                Zip Code
                <input className='form-input'
                    type="text"
                    value={zipCode}
                    onChange={e => setZipCode(e.target.value)}
                    required
                />
            </label>
            <label>
                Date of Birth
                <input className='form-input'
                    type="text"
                    value={dob}
                    onChange={e => setDob(e.target.value)}
                    required
                />
            </label>
            </div>
          
           <div className='bottom'>
            <input type="submit" value="Save" className='submit'/>
            {/* will design this better */}
            <div className='logout' onClick={navigateToHomePage}> <h3 className='logout-text'> Log out</h3> </div>
            </div>
        </form>
        </div>
    );
}


