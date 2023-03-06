import React from 'react';
import Navbar from './Navbar';
import AsideBar from './AsideBar';

const Layout = (  { children }) => {

      
      
    return (
        <div >
            {/* header  */}
            <Navbar/>
            <AsideBar/>
            {children}
          

            {/* footer   */}
        </div>
    );
}

export default Layout;
