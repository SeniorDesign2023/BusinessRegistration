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
        <div className='part-1'>
        <div className = "first-page-text">
            <h2 className='top-text'> Introducing Form Filler</h2>
            <div></div>
            <div></div>
            <h2 className='normal-text'> A centralized location to manage all your forms from different organizations. Manage, create and access all yours forms all in one place!</h2>
        </div>
        </div>
        <div className = "second-page-text">
            <h2 className='top-text-2'> Create Forms for Different Organizations </h2>
            <h2 className='normal-text-2'> Are you a member of multiple organizations and want to create forms for each of them? Create as much forms as you want for each organization</h2>

            <ul>
                <li className='normal-text'> <h2> Join Organizations and view forms </h2></li>
                <li className='normal-text'><h2>Send out forms as needed </h2> </li>
                <li className='normal-text'>Keep track of form responses </li>
                <li className='normal-text'>And do so much more </li>
            </ul>
        </div>

        <div className='part-3'>
        <div className = "third-page-text">
            <h2 className='top-text-3'> Assign and Keep track of all your forms </h2>
            <h2 className='normal-text-3'> Reduce the workload of finding where forms are stored, with formfiller now you can easily manage forms assigned, forms submitted, form responses and so much more. </h2>
       </div>
        </div>
        </div>

        <footer>
            <h3> Senior design project for University of Wyoming Computer science department 2024</h3>
        </footer>
    </div>

    )
    ;
}