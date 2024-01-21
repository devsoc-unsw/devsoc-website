"use client";
/**
 * This is the 'client layout' where layout stuff like MUI that must be client
 * rendered lives
 */

import { CssBaseline, CssVarsProvider, extendTheme } from '@mui/joy';
import localFont from 'next/font/local';
import { usePathname } from 'next/navigation';
import React from 'react';

const ttCommonsPro = localFont({ src: './TT_Commons_Pro_Variable.woff2'})



/**
 * Any global components like providers or configs should go here
 */
const ClientLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const path = usePathname();
  const theme = extendTheme({
    fontFamily: {
      display: ttCommonsPro.style.fontFamily,
      body: ttCommonsPro.style.fontFamily,
    },
    colorSchemes: {
      dark: {
        palette: {
          background: {
            body: path === "/" && "var(--joy-palette-neutral-800, #171A1C)"
          }
        }
      }
    }
  });

  return (
      <CssVarsProvider defaultMode='dark' theme={theme}>
        <CssBaseline/>
        <App>
          {children}
        </App>
      </CssVarsProvider>
  )
}

/**
 * Actual layout is here, so we can make use of the providers in ClientLayout
 */
const App: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

export default ClientLayout;
