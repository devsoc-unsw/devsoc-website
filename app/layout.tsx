/**
 * This is the 'server layout' which is server-rendered so that we can use the
 * Metadata API - actual layout stuff happens in ClientLayout
 */

import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import ThemeRegistry from '../components/ThemeRegistry';
import Box from '@mui/joy/Box';
import { projectData } from '../data';
import NavBar from "../components/nav/NavBar";
import MobileNavBar from "../components/nav/MobileNavBar";

export const metadata: Metadata = {
  title: 'DevSoc UNSW',
  description: 'Official website of the UNSW Software Development Society',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        <MobileNavBar/>
        <ThemeRegistry>
          {projectData.some((project) => project.status === 'Unavailable') && (
            <Box p={1.5} bgcolor="#ed6c02" color="white">
              Our teams are currently working to resolve some issues with
              accessing the projects.
            </Box>
          )}
            {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
