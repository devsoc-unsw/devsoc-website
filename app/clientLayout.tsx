"use client";

import { CssBaseline, CssVarsProvider } from '@mui/joy';

/**
 * Any global components like providers or configs should go here
 */
const ClientLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <CssVarsProvider>
      <CssBaseline />
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
  return (
    <>
      {children}
    </>
  )
}

export default ClientLayout;
