// OrganizationList.js
import React, { useState, useEffect } from 'react';
import OrganizationIndividual from './OrganizationIndividual';

import { get } from "@/lib/http"

export default function OrganizationList({ selectedOrg, setSelectedOrg, selectedOrgName }) {
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {

        /*const fetchOrganizations = async () => {
            try {
                const response = await get('fetchorganizations');
                
                setOrganizations(response.data);
            } catch (error) {
                console.error('Error fetching organizations:', error);
                // Handle error
            }
        };

        fetchOrganizations();*/

        get("fetchorganizations").then(res => {
            setOrganizations(res.data)
        }).catch(err => console.error('Error fetching organizations:', error))

    }, []);

    return (
        <div>
            {organizations.map(org => (
                <OrganizationIndividual
                    key={org.Org_Name} 
                    name={org.Org_Name}
                    setSelectedOrg={() => setSelectedOrg(org.Org_Name, org.Role, org.Org_Tag)} 
                    isSelected={selectedOrgName === org.Org_Name}
                />
            ))}
        </div>
    );
}
