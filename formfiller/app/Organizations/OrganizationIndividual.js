// OrganizationIndividual.js
import React from 'react';
import './OrganizationIndividual.css';
import { VscOrganization } from "react-icons/vsc";

export default function OrganizationIndividual({ name, setSelectedOrg, isSelected }) {
    const handleClick = () => {
        setSelectedOrg(name);
    };

    const style = isSelected ? { backgroundColor: '#e7f0fe', color: '#3e87f5' } : {};


    return (
        <div className='org-ind' style={style} onClick={handleClick}>
            <VscOrganization className='org-icon'/>
            <h3 className='org-ind-name'>{name}</h3>
        </div>
    );
}

