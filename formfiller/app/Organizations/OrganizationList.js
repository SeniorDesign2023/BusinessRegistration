import React from 'react';
import OrganizationIndividual from './OrganizationIndividual';


export default function OrganizationList({setSelectedOrg}) {
    return (
        <div>
           <OrganizationIndividual name="Organization 1" setSelectedOrg={() => setSelectedOrg("Organization 1", "Normal")} />
           <OrganizationIndividual name="Organization 2" setSelectedOrg={() => setSelectedOrg("Organization 2", "Admin")} />
           <OrganizationIndividual name="Organization 3" setSelectedOrg={() => setSelectedOrg("Organization 3", "Normal")} />
           <OrganizationIndividual name="Organization 4" setSelectedOrg={() => setSelectedOrg("Organization 4", "Normal")} />
           <OrganizationIndividual name="Organization 5" setSelectedOrg={() => setSelectedOrg("Organization 5", "Normal")} />
           <OrganizationIndividual name="Organization 6" setSelectedOrg={() => setSelectedOrg("Organization 6", "Normal")} />
          
        </div>
    );
}