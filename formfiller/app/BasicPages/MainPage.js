import React, { useState } from 'react';
import Circle from "../ExtraComponents/Circle"
import './MainPage.css'
import OrganizationList from '../Organizations/OrganizationList';
import AllPage from '../FormViews/AllPage'
import AssignedPage from '../FormViews/AssignedPage';
import Draft from '../FormViews/Draft';
import SubmittedPage from '../FormViews/SubmittedPage';


export default function MainPage() {
    const [selectedPage, setSelectedPage] = useState('All');

    const renderPage = () => {
        switch(selectedPage) {
            case 'All':
                return <AllPage />;
            case 'Assigned':
                return <AssignedPage />;
            case 'Drafts':
              return <Draft />;
            case 'Submitted':
              return <SubmittedPage />;
            default:
                return <AllPage />;
        }
    };
    return (
        <div className='mainpage'>
        <div className ='profile-line'>
            <div className='profile'>
                <Circle size="55px"/>
            </div>
        </div>


        <div className='organization'>
            <div className='organization-top'>
                <h3 className='organizations-name'> Organizations </h3>
                <h3 className='organization-plus'> + </h3>
             </div>
             <div>
                  <OrganizationList/>
             </div>
        </div>
        <div className='forms'>
             <h3 className='form-name'> Forms </h3>
              <div className='all-groups'>
              <h5 onClick={() => setSelectedPage('All')}>All </h5>
                    <h5 onClick={() => setSelectedPage('Assigned')}>Assigned </h5>
                    <h5 onClick={() => setSelectedPage('Drafts')}>Drafts </h5>
                    <h5 onClick={() => setSelectedPage('Submitted')}>Submitted </h5>
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