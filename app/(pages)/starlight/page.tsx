import React from 'react';
import PageSection from '../../../components/PageSection';
import { Grid } from '@mui/joy';
import { starlightProjectData } from '../../../data';
import { ProjectCard } from '../../../components/ProjectCard';
import type { Metadata } from 'next';
import { Typography } from '@mui/material';

export const metadata: Metadata = {
  title: 'Starlight | DevSoc UNSW',
  description: 'Explore the variety of different projects developed by UNSW students!',
}

export default function StarlightProjectsPage() {
  return (
    <>
      <PageSection title="Starlight Showcase">
        <Typography textAlign='justify'>
          Starlight is a project showcase that celebrates all kinds of software projects being built by passionate developers at UNSW.
          Submissions are open to everyone that has a project they want to share!
          Join us on <b>July 19th</b> to find out more about the projects listed below!
        </Typography>
      </PageSection>
      <PageSection title="2024 Submissions">
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

