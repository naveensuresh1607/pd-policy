import React from 'react';
import './header.css';


const Header = ({ toggleSidebar }) => {
    return (
        <div className="header">
            <div className="button">
                <button className="settings-button" onClick={toggleSidebar}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
            </div>
            <div className="logo">
                {/* Replace the text below with your logo image */}
                <img src="./header/logo.png" alt="logo" className="logo-image" />
            </div>
            <div className="vertical-line"></div>
            <div className="heading">Home</div>
            <div className="right-section">
                <div className="right-logo">
                    <img src="./header/ticket.png" alt="tickets" Title="tickets" className="tickets-logo" />
                    
                </div>
                <div className="right-heading">Hello,User</div>
                <div className="right-logo">
                    <img src="header/profile.png" alt="profile" className="profile-logo" />
                </div>
            </div>
        </div>
    );
};

export default Header;
