import './MainPage.css'
import AllPage from '../FormViews/AllPage'
import AssignedPage from '../FormViews/AssignedPage';
import CreatedPage from '../FormViews/Created';
import Draft from '../FormViews/Draft';
import LogInPage from '../UserAuthPages/LogInPage';
import OrganizationList from '../Organizations/OrganizationList';
import React, { useState, useEffect, use } from 'react';
import SearchOrganization from '../Organizations/SearchOrganization';
import SubmittedPage from '../FormViews/SubmittedPage';
import { useRouter } from 'next/router';
import { IoCreate } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";

import { get, validateUser } from "@/lib/http";

export default function MainPage({orgTag, orgRole}) {
    
    const router = useRouter();

    // if (orgTag == null) {
    //     orgTag = 'None'
    // }

    var orgName = orgTag

    // if (orgRole == null) {
    //     orgRole = 'Normal'
    // }

    const [selectedPage, setSelectedPage] = useState('All');
    const [selectedOrgTag, setSelectedOrgTag] = useState(orgTag)
    const [selectedOrgName, setSelectedOrgName] = useState(orgName);
    const [selectedOrgRole, setSelectedOrgRole] = useState(orgRole);
    const [isSearching, setIsSearching] = useState(false);

    const setSelectedOrg = (tag, name, role) => {
        setSelectedOrgTag(tag)
        setSelectedOrgName(name)
        setSelectedOrgRole(role)
        setSelectedPage('All')
    }; 

    const renderPage = () => {

        if (!selectedOrgTag) {
            return <p>Please select an organization</p>
        }

        switch(selectedPage) {
            case 'All':
                return <AllPage organization={selectedOrgTag}/>;
            case 'Assigned':
                return <AssignedPage organization={selectedOrgTag}/>;
            case 'Drafts':
                return <Draft organization={selectedOrgTag}/>;
            case 'Submitted':
                return <SubmittedPage organization={selectedOrgTag}/>;
            case 'Created':
                return selectedOrgRole === 'Admin' ? <CreatedPage organization={selectedOrgTag}/> : null;
            default:
                return <AllPage organization={selectedOrgTag}/>;
        }
    };
    

    const navigateToProfile = () => {
        router.push('/profile');
    };

    const navigateToCreateForm = () => {
        router.push({
            pathname: '/createform',
            query: { org: selectedOrgTag, role: selectedOrgRole },
        });
    };

    const navigateToAdminMainPage = () => {
        console.log("Current Tagon navigate to admin: " + currentTag);
        router.push({
            pathname: '/adminmainpage',
            query: { org: selectedOrgName, tag: currentTag}
        });
    };

    useEffect(() => {
        validateUser().then(valid => {
            if (!valid) {
                console.log("push login from mainpage")
                router.push("/login")
            } 
        })
    })

    // useEffect(() => {
    //     get("dbquery", {
    //         query: "SELECT Org_Name FROM Organizations WHERE Org_Tag = ?",
    //         data: selectedOrgTag
    //     }).then(response => {
    //         setSelectedOrgName(data[0].Org_Name)
    //     })
    // })
        
    // selectedOrgName={selectedOrgName}
    return (
        <div className='mainpage'>
            <div className ='profile-line'>
                <div className='profile' onClick={navigateToProfile} >
                <BsPersonCircle className='profile-icon'/>
                </div>
            </div>


            <div className='organization'>
                <div className='organization-top'>
                    <h3 className='organizations-name'> Organizations </h3>
                    <h3 className='organization-plus' onClick={() => setIsSearching(true)}> + </h3>
                </div>
                <div>
                {isSearching ? <SearchOrganization /> : <OrganizationList selectedOrgTag={selectedOrgTag} setSelectedOrg={setSelectedOrg} />}
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