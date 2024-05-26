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

declare module '@mui/joy/Slider' {
  interface SliderPropsColorOverrides {
    devsoc_red: true;
  }
}

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
    },
    components: {
      JoySlider: {
        styleOverrides: {
          track: ({ ownerState, theme }) => ({
            ...(ownerState.color === 'devsoc_red' && {
              backgroundColor: "#D9807E",
            }),
          }),
          thumb: ({ ownerState, theme }) => ({
            ...(ownerState.color === 'devsoc_red' && {
              backgroundColor: "#FFF",
              border: "solid #D9807E",
              boxShadow: "#FFF"
            }),
          }),
        },
      },
    },
  });

  return (
    <CssVarsProvider defaultMode='dark' theme={theme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
