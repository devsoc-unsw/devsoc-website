"use client";

import React from 'react';
import localFont from 'next/font/local';
import { usePathname } from 'next/navigation';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

const ttCommonsPro = localFont({ src: '../TT_Commons_Pro_Variable.woff2' });

type ThemeRegistryProps = {
  children: React.ReactNode;
};

// This implementation is suggested by JoyUI for working with App router
// https://mui.com/joy-ui/integrations/next-js-app-router/
export default function ThemeRegistry({
  children
}: ThemeRegistryProps) {
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
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
