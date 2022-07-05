import React from 'react';
import './index.css';
import { ReactComponent as Pic } from './images/pic.svg';
import { ReactComponent as Bell } from './images/bell.svg';
import { ReactComponent as Red  } from './images/red.svg';


export const DashboardHeader = () => (
    <div className="dashboard">   
        <div className="dashboard-text">
            <h1>Fintech.africa</h1>
        </div>
        <div className="dashboard-images">
            <div className="sideBell">
                <span className="atBell"><Bell /></span>
                
                 <span className='sideBadge'><Red /></span>
            </div>
            <Pic />
            <p>adetutu</p>
        </div>
    </div>
);