import React, { useState } from 'react';
import './LogInPage.css'
import { useRouter } from 'next/router';

import post from "../post"

export default function LogInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        //console.log(`Email: ${email}, Password: ${password}`);
        //router.push('/mainpage');
        post("login", {
            email,
            password
        })
    };


    return (
        <div>
        <h1 className='form-filler-name'> Form Filler</h1>
        <h3 className='account-question'> Don't have an account? <a href='/signup'>sign up</a></h3>
        <form onSubmit={handleSubmit}>
            <label >
                Email Address
                <input className='form-input'
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </label>
            <label>
                Password
                <input className='form-input'
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    
                />
            </label>
            <input type="submit" value="Log In" className='submit' />
        </form>
        </div>
    );
}

