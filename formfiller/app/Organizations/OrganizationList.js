// OrganizationList.js
import React from 'react';
import OrganizationIndividual from './OrganizationIndividual';

export default function OrganizationList({ selectedOrg, setSelectedOrg }) {
    return (
        <div>
            <OrganizationIndividual name="Organization 1" setSelectedOrg={() => setSelectedOrg("Organization 1", "Normal")} isSelected={selectedOrg === "Organization 1"} />
            <OrganizationIndividual name="Organization 2" setSelectedOrg={() => setSelectedOrg("Organization 2", "Admin")} isSelected={selectedOrg === "Organization 2"} />
            <OrganizationIndividual name="Organization 3" setSelectedOrg={() => setSelectedOrg("Organization 3", "Normal")} isSelected={selectedOrg === "Organization 3"} />
            <OrganizationIndividual name="Organization 4" setSelectedOrg={() => setSelectedOrg("Organization 4", "Admin")} isSelected={selectedOrg === "Organization 4"} />
            <OrganizationIndividual name="Organization 5" setSelectedOrg={() => setSelectedOrg("Organization 5", "Normal")} isSelected={selectedOrg === "Organization 5"} />
            <OrganizationIndividual name="Organization 6" setSelectedOrg={() => setSelectedOrg("Organization 6", "Normal")} isSelected={selectedOrg === "Organization 6"} />
        </div>
    );
}
