import React from 'react';
import PageSection from '../../../components/PageSection';
import { Grid } from '@mui/joy';
import { starlightProjectData } from '../../../data';
import { ProjectCard } from '../../../components/ProjectCard';
import type { Metadata } from 'next';
import { Typography } from '@mui/material';

export const metadata: Metadata = {
  title: 'Starlight 2024 | DevSoc UNSW',
  description: 'Explore the variety of different projects developed by UNSW students!',
}

export default function StarlightProjectsPage() {
  return (
    <>
      <PageSection title="What is Starlight?">
        <Typography textAlign='justify'>
          We are the Software Development Society, a place for imaginative and inventive students
          dedicated to crafting exceptional products for the benefit of the community! Within our
          society, you&apos;ll find over five teams of enthusiastic students diligently working on
          a wide array of web apps, ranging from academic degree planners to platforms that display
          available campus facilities.
        </Typography>
      </PageSection>
      <PageSection title="2024 Projects">
        <Grid container flexGrow={1} rowSpacing={3}>
          {starlightProjectData.map((props) =>
            <Grid xs={12} md={6} key={props.name}>
              <ProjectCard {...props} trainee={true}/>
            </Grid>
          )}
        </Grid>
      </PageSection>
    </>
  )
}

