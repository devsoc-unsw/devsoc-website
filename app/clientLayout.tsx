"use client";

import { CssBaseline, CssVarsProvider, extendTheme } from '@mui/joy';
import localFont from 'next/font/local';
import { usePathname } from 'next/navigation';
import MobileNavBar from '../components/nav/MobileNavBar';
import NavBar from '../components/nav/NavBar';

const ttCommonsPro = localFont({ src: './TT_Commons_Pro_Variable.woff2'})

const theme = extendTheme({
  fontFamily: {
    display: ttCommonsPro.style.fontFamily,
    body: ttCommonsPro.style.fontFamily,
  }
});

/**
 * Any global components like providers or configs should go here
 */
const ClientLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
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
 * App is a separate component so we can make use of the providers in ClientLayout
 */
const App: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const path = usePathname();

  return (
    <>
      {path != "/" && (
        <>
          <MobileNavBar/>
          <NavBar/>
        </>
      )}
      {children}
    </>
  )
}

export default ClientLayout;
