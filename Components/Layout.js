import React from 'react';
import Navbar from './Navbar';

const Layout = (  { children }) => {

      
      
    return (
        <div>
            {/* header  */}
            <Navbar/>
            {children}
          

            {/* footer   */}
        </div>
    );
}

export default Layout;
