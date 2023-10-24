import React from 'react';
import NavBar from '../../components/nav/NavBar';
import MobileNavBar from '../../components/nav/MobileNavBar';


const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <NavBar/>
      <MobileNavBar/>
      {children}
    </>
  )
}

export default Layout;
