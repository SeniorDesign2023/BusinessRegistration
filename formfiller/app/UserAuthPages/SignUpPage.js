

import React, { useState } from 'react';
import './LogInPage.css'
import { useRouter } from 'next/router';

export default function SignUpPage() {
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log(`Email: ${email}, Password: ${password}`);
        router.push('/mainpage');
    };

    return (
        <div>
        <h1 className='form-filler-name'> Form Filler</h1>
        <h3 className='account-question'> have an account? <a href='/login'>Log in</a></h3>
        <form onSubmit={handleSubmit}>
            <label>
                Full name
                <input className='form-input'
                    type="text"
                    value={fullname}
                    onChange={e => setFullName(e.target.value)}
                    required
                />
            </label>
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
                Password
                <input className='form-input'
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </label>
            <input type="submit" value="Sign Up" className='submit'/>
        </form>
        </div>
    );
}

