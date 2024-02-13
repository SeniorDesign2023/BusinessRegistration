import React from 'react';
import OrganizationIndividual from './OrganizationIndividual';


export default function OrganizationList({setSelectedOrg}) {
    return (
        <div>
            <OrganizationIndividual name = "Organization 1" setSelectedOrg={setSelectedOrg}/>
            <OrganizationIndividual name = "Organization 2" setSelectedOrg={setSelectedOrg}/>
            <OrganizationIndividual name = "Organization 3" setSelectedOrg={setSelectedOrg}/>
            <OrganizationIndividual name = "Organization 4" setSelectedOrg={setSelectedOrg}/>
            <OrganizationIndividual name = "Organization 5" setSelectedOrg={setSelectedOrg}/>
            <OrganizationIndividual name = "Organization 6" setSelectedOrg={setSelectedOrg}/>
        </div>
    );
}