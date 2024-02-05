"use client";
/**
 * This is the 'client layout' where layout stuff like MUI that must be client
 * rendered lives
 */

import * as React from 'react';
import {CssBaseline, CssVarsProvider, extendTheme} from '@mui/joy';
import localFont from 'next/font/local';
import {usePathname} from 'next/navigation';
import {Box} from "@mui/material";
import Link from "next/link";

const ttCommonsPro = localFont({src: './TT_Commons_Pro_Variable.woff2'})


/**
 * Any global components like providers or configs should go here
 */
const ClientLayout: React.FC<{
    children: React.ReactNode;
}> = ({children}) => {
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
                        body: path === "/" ? "var(--joy-palette-neutral-800, #171A1C)" : undefined
                    }
                }
            }
        }
    });

    return (
        <CssVarsProvider defaultMode='dark' theme={theme}>
            <CssBaseline/>
            <App>
                <Box sx={{backgroundColor: "#ed6c02", color: "white", padding: "1rem", font: "Roboto"}}>
                    Our teams are currently working to resolve some issues with accessing the projects. View system status <Link style={{color:"black"}} href={"/status"}>here</Link>.
                </Box>
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
}> = ({children}) => {
    return (
        <>
            {children}
        </>
    )
}

export default ClientLayout;
