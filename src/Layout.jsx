import { useState } from 'react';
import React from 'react'
import Header from './components/header/Header';
import Sidebar from './components/sidebar/SideBar';

const Layout = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };
  return (
    <div>
<Header toggleSidebar={toggleSidebar} />
<Sidebar isVisible={isSidebarVisible} />
<div className={`content ${isSidebarVisible ? 'content-expanded' : 'content-collapsed'}`}>
                {/* Your main content here */}
            </div>
    </div>
  )
}

export default Layout
