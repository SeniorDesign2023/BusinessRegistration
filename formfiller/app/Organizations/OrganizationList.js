// OrganizationList.js
import React from 'react';
import OrganizationIndividual from './OrganizationIndividual';

export default function OrganizationList({ selectedOrg, setSelectedOrg, selectedOrgName }) {
 
    return (
        <div>
            <OrganizationIndividual name="Organization 1" setSelectedOrg={() => setSelectedOrg("Organization 1", "Admin")} isSelected={selectedOrgName === "Organization 1"} />
            <OrganizationIndividual name="University of Wyoming" setSelectedOrg={() => setSelectedOrg("University of Wyoming", "Admin")} isSelected={selectedOrgName === "University of Wyoming"} />
            <OrganizationIndividual name="Organization 3" setSelectedOrg={() => setSelectedOrg("Organization 3", "Normal")} isSelected={selectedOrgName === "Organization 3"} />
            <OrganizationIndividual name="Organization 4" setSelectedOrg={() => setSelectedOrg("Organization 4", "Admin")} isSelected={selectedOrgName === "Organization 4"} />
            <OrganizationIndividual name="Organization 5" setSelectedOrg={() => setSelectedOrg("Organization 5", "Normal")} isSelected={selectedOrgName === "Organization 5"} />
            <OrganizationIndividual name="Organization 6" setSelectedOrg={() => setSelectedOrg("Organization 6", "Normal")} isSelected={selectedOrgName === "Organization 6"} />
        </div>
    );
}
