import React from 'react';
import { useRouter } from 'next/router';

export default function JsonFormPage() {
    const router = useRouter();
    const navigateToMainPage = () => {
        router.push('/mainpage');
    };
    return(
        <div>
            <h3 onClick={navigateToMainPage}> exit </h3>
            <h1> This page displays a sample form</h1>

        </div>
    )
}
