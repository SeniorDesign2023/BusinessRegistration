// OrganizationIndividual.js
import React from 'react';
import './OrganizationIndividual.css';


export default function OrganizationIndividual({ name, setSelectedOrg, isSelected }) {
    const handleClick = () => {
        setSelectedOrg(name);
    };

    const style = isSelected ? { backgroundColor: '#D9D9D9', color: 'black' } : {};


    return (
        <div className='org-ind' style={style} onClick={handleClick}>
            <h3 className='org-ind-name'>{name}</h3>
        </div>
    );
}

