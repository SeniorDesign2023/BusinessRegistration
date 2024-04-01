// OrganizationList.js
import React, { useState, useEffect } from 'react';
import OrganizationIndividual from './OrganizationIndividual';

import { get } from "@/lib/http"

export default function OrganizationList({ selectedOrgTag, setSelectedOrg }) {
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {

        get('fetchorganizations').then(response => {
            setOrganizations(response.data);
        }).catch(error => console.error('Error fetching organizations:', error))

    }, [])

    function getOrgList() {
        try {
            return organizations.map(org => (
                <OrganizationIndividual
                    key={org.Org_Tag} 
                    name={org.Org_Name}
                    setSelectedOrg={() => setSelectedOrg(org.Org_Tag, org.Org_Name, org.Role)} 
                    isSelected={selectedOrgTag === org.Org_Tag}
                />
            ))
        } catch (e) {
            return (<></>)
        }
    }

    return (
        <div>
            {getOrgList()}
        </div>
    );
}
