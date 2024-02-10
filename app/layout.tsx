/**
 * This is the 'server layout' which is server-rendered so that we can use the
 * Metadata API - actual layout stuff happens in ClientLayout
 */

import type {Metadata} from 'next';
import React from 'react';
import './globals.css';
import ThemeRegistry from '../components/ThemeRegistry';
import Box from '@mui/joy/Box';
import {ProjectCardProps} from "../components/ProjectCard";
import {projectData} from "../data";

export const metadata: Metadata = {
  title: 'DevSoc UNSW',
  description: 'Official website of the UNSW Software Development Society',
}

export default async function RootLayout({
                                           children,
                                         }: {
  children: React.ReactNode
}) {
  const projectIssues = checkForIssues(projectData)
  return (
    <html lang="en">
    <body>
    <ThemeRegistry>
      {
        projectIssues ?
          <Box p={1.5} sx={{backgroundColor: "#ed6c02", color: "white"}}>
            Our teams are currently working to resolve some issues with accessing the projects.
          </Box>
          : null
      }
      {children}
    </ThemeRegistry>
    </body>
    </html>
  )
}

function checkForIssues(data: Omit<ProjectCardProps, 'trainee'>[]): boolean {
  let issues = false
  data.forEach((i) => {
    if (i.status === "Unavailable") {
      issues = true
    }
  })
  return issues
}