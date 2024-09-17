'use client';

import React from 'react';
import NavBar from '../../components/nav/NavBar';
import MobileNavBar from '../../components/nav/MobileNavBar';
import { Sheet } from '@mui/joy';


const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <NavBar/>
      <MobileNavBar/>
      <Sheet
        variant='soft'
        sx={{
          mx: 'auto',
          maxWidth: 900,
          my: { md: 3 },
          borderRadius: { md: "xl" },
          p: 4
        }}
      >
        {children}
      </Sheet>
    </>
  )
}

export default Layout;
