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
import { IoCreate } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

export default function MainPage({orgName, orgRole}) {
    
    if (orgName == null) {
        orgName = 'Organization 1'
    }
    if (orgRole == null) {
        orgRole = 'Normal'
    }
    const [selectedPage, setSelectedPage] = useState('All');
   // const [selectedOrg, setSelectedOrg] = useState('Organization 1');
    const [selectedOrgName, setSelectedOrgName] = useState(orgName);
    const [selectedOrgRole, setSelectedOrgRole] = useState(orgRole);
    const [isSearching, setIsSearching] = useState(false);

    const setSelectedOrg = (name, role) => {
        setSelectedOrgName(name);
        setSelectedOrgRole(role);
        setSelectedPage('All');
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
        router.push({
            pathname: '/createform',
            query: { org: selectedOrgName, role: selectedOrgRole },
        });
    };

    const navigateToAdminMainPage = () => {
        router.push({
            pathname: '/adminmainpage',
            query: { org: selectedOrgName}
        });
    };

    return (
        <div className='mainpage'>
        <div className ='profile-line'>
            <div className='profile' onClick={navigateToProfile} >
                 {/* <Circle size="45px" /> */}
                 {/* <h2></h2> */}
            </div>
        </div>


        <div className='organization'>
            <div className='organization-top'>
                <h3 className='organizations-name'> Organizations </h3>
                <h3 className='organization-plus' onClick={() => setIsSearching(true)}> + </h3>
             </div>
             <div>
             {isSearching ? <SearchOrganization /> : <OrganizationList setSelectedOrg={setSelectedOrg}  selectedOrgName={selectedOrgName}/>}
             </div>
        </div>
        <div className='forms'>
                <h3 className='form-name'> Forms </h3>
                <div className='all-groups'>
                    <h5 className={selectedPage === 'All' ? 'selected' : ''} onClick={() => setSelectedPage('All')}>All </h5>
                    <h5 className={selectedPage === 'Assigned' ? 'selected' : ''} onClick={() => setSelectedPage('Assigned')}>Assigned </h5>
                    <h5 className={selectedPage === 'Drafts' ? 'selected' : ''} onClick={() => setSelectedPage('Drafts')}>Drafts </h5>
                    <h5 className={selectedPage === 'Submitted' ? 'selected' : ''} onClick={() => setSelectedPage('Submitted')}>Submitted </h5>
                    {selectedOrgRole === 'Admin' &&
                        <>
                            <h5 className={selectedPage === 'Created' ? 'selected' : ''} onClick={() => setSelectedPage('Created')}>Created</h5>
                            <div onClick={navigateToCreateForm}> <IoCreate className='create-form' /></div>
                            <div onClick={navigateToAdminMainPage}> <IoMdSettings className='admin-page' /></div>
                        </>
                    }
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