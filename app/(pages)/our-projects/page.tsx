import React from 'react';
import PageSection from '../../../components/PageSection';
import { Grid } from '@mui/joy';
import { projectData, traineeProjectData } from '../../../data';
import { ProjectCard } from '../../../components/ProjectCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects | DevSoc UNSW',
  description: 'Explore the variety of different projects developed by DevSoc for UNSW students!',
}

export default function OurProjectsPage() {
  return (
    <>
      <PageSection title="Flagship Projects">
        <Grid container flexGrow={1} rowSpacing={3}>
          {projectData.map((props) =>
            <Grid xs={12} md={6} key={props.name}>
              <ProjectCard {...props} trainee={false}/>
            </Grid>
          )}
        </Grid>
      </PageSection>
      {traineeProjectData.length > 0 && <PageSection title="Trainee Projects">
        <Grid container flexGrow={1} rowSpacing={3}>
          {traineeProjectData.map((props) =>
            <Grid xs={12} md={6} key={props.name}>
              <ProjectCard {...props} trainee={true}/>
            </Grid>
          )}
        </Grid>
      </PageSection>}
    </>
  )
}

