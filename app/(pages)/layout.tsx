'use client';

import React from 'react';
import { Sheet } from '@mui/joy';


const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
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
