import './MainPage.css'
import AllPage from '../FormViews/AllPage'
import AssignedPage from '../FormViews/AssignedPage';
import Circle from "../ExtraComponents/Circle"
import CreatedPage from '../FormViews/Created';
import Draft from '../FormViews/Draft';
import OrganizationList from '../Organizations/OrganizationList';
import React, { useState } from 'react';
import SearchOrganization from '../Organizations/SearchOrganization';
import SubmittedPage from '../FormViews/SubmittedPage';
import { useRouter } from 'next/router';


export default function MainPage() {
    const [selectedPage, setSelectedPage] = useState('All');
   // const [selectedOrg, setSelectedOrg] = useState('Organization 1');
    const [selectedOrgName, setSelectedOrgName] = useState('Organization 1');
    const [selectedOrgRole, setSelectedOrgRole] = useState('Normal');
    const [isSearching, setIsSearching] = useState(false);

    const setSelectedOrg = (name, role) => {
        setSelectedOrgName(name);
        setSelectedOrgRole(role);
    }; 

    const router = useRouter();

    const renderPage = () => {
        switch(selectedPage) {
            case 'All':
                return <AllPage organization={selectedOrgName}/>;
            case 'Assigned':
                return <AssignedPage organization={selectedOrgName}/>;
            case 'Drafts':
                return <Draft organization={selectedOrgName}/>;
            case 'Submitted':
                return <SubmittedPage organization={selectedOrgName}/>;
            case 'Created':
                return selectedOrgRole === 'Admin' ? <CreatedPage organization={selectedOrgName}/> : null;
            default:
                return <AllPage organization={selectedOrgName}/>;
        }
    };
    

    const navigateToProfile = () => {
        router.push('/profile');
    };

    const navigateToCreateForm = () => {
        router.push('/createform');
    };

    const navigateToAdminMainPage = () => {
        router.push('/adminmainpage');
    };

    return (
        <div className='mainpage'>
        <div className ='profile-line'>
            <div className='profile' onClick={navigateToProfile} >
                 <Circle size="45px" />
            </div>
        </div>


        <div className='organization'>
            <div className='organization-top'>
                <h3 className='organizations-name'> Organizations </h3>
                <h3 className='organization-plus' onClick={() => setIsSearching(true)}> + </h3>
             </div>
             <div>
             {isSearching ? <SearchOrganization /> : <OrganizationList setSelectedOrg={setSelectedOrg}/>}
             </div>
        </div>
        <div className='forms'>
             <h3 className='form-name'> Forms </h3>
              <div className='all-groups'>
              <h5 onClick={() => setSelectedPage('All')}>All </h5>
                    <h5 onClick={() => setSelectedPage('Assigned')}>Assigned </h5>
                    <h5 onClick={() => setSelectedPage('Drafts')}>Drafts </h5>
                    <h5 onClick={() => setSelectedPage('Submitted')}>Submitted </h5>
                    {selectedOrgRole === 'Admin' && <h5 onClick={() => setSelectedPage('Created')}>Created</h5>}
                    {selectedOrgRole === 'Admin' && <div className='create-form' onClick={navigateToCreateForm}></div>}
                    {selectedOrgRole === 'Admin' && <div className='admin-page' onClick={navigateToAdminMainPage}></div>}
             </div>
    
             <div className = "line"></div>
             <div>
                    {renderPage()}
                </div>
        </div>
        </div>
    )
    ;
}