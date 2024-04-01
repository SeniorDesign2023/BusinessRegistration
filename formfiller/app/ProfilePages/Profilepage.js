import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import './Profilepage.css'

import { post, get } from "@/lib/http"

export default function Profilepage() {

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState(0);
    const [dob, setDob] = useState('');

    const router = useRouter();

    useEffect(() => {
        // Fetch user profile data when component mounts
        const fetchUserProfile = async () => {
            try {
                const response = await get('fetchprofile');             
                const userData = response.data; 
                console.log(userData);

                // Set user profile data to state
                setFirstName(userData.First_Name);
                setMiddleName(userData.Middle_Name);
                setLastName(userData.Last_Name);
                setPhone(userData.Phone);
                setAddress(userData.Address);
                setZipCode(userData.Zip);
                //setDob(userData.Dob);
                setDob(userData.DoB || '')
            } catch (error) {
                console.error('Error fetching user profile:', error);
                // Handle error
            }
        };

        fetchUserProfile();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission logic here

        let res = await post("submitprofile", {
            firstName,
            middleName,
            lastName,
            phone,
            address,
            zipCode,
            dob
        })
        router.push(res.data.redirect)
       
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
                Phone Number
                <input className='form-input'
                    type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
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
            <input type="submit" value="Save Changes" className='submit'/>
            {/* will design this better */}
            <div className='logout' onClick={navigateToHomePage}> Log out </div>
            </div>
        </form>
        </div>
    );
}