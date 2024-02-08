// "use client"
import React from 'react';
import Link from 'next/link';

import './HomePage.css'

export default function HomePage() {
    return (
      
    <div>
        <header>
            <h2>FORM FILLER</h2>
            <nav>
            <ul>
            <li><Link href="/signup">Sign Up</Link></li>
            <li><Link href="/login">Log in</Link></li>
            </ul>
             </nav>
        </header>
       <div className = "body">
        <div className = "first-page-text">
            <h2 className='top-text'> Introducing Form Filler</h2>
            <h2 className='normal-text'> A centralized location to access and fill out all your forms from all your organizations. Manage the cluster of all your forms, and manage them all.</h2>
        </div>
        <div className = "second-page-text">
            <h2 className='top-text'> Create forms for different organizations </h2>
            <h2 className='normal-text-2'> Are you a member of multiple organizations and want to create forms for each of them? Create as much forms as you want for each organization</h2>

            <ul>
                <li className='normal-text'> <h2> Join Organizations and view forms </h2></li>
                <li className='normal-text'><h2>Send out forms as needed </h2> </li>
                <li className='normal-text'>Keep track of form responses </li>
                <li className='normal-text'>And do so much more </li>
            </ul>
        </div>
        </div>

        <footer>
            <h3> Senoir design project for University of Wyoming Computer science department 2024</h3>
        </footer>
    </div>

    )
    ;
}