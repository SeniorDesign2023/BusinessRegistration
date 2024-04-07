import React, { useState } from 'react';
import './LogInPage.css'
import { useRouter } from 'next/router';

import { post } from "@/lib/http"

export default function SignUpPage() {
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission logic here
        //console.log(`Email: ${email}, Password: ${password}`);
        //router.push('/mainpage');
        let res = await post("signup", {
            email,
            password
        })
        console.log(res.data.success)

        if(res.data.success) {
            router.push(res.data.redirect)
        } else {
            setErrorMessage(res.data.message);
            setEmail('');
            setPassword('');
        }
        console.log(res.data.message)

  
    };

    return (
        <div className='auth-page'>
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
            {errorMessage && <div className='error'>{errorMessage}</div>}
        </form>
        </div>
    );
}

