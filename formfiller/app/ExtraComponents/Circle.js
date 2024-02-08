import React from 'react';
import "./Components.css"

export default function Circle({ size }) {
    return (
        <div className='circle' style={{ width: size, height: size }}></div>
    );
}