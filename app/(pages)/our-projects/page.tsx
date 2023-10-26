'use client';

import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Image from 'next/image';
import PageSection from '../../../components/PageSection';
import { Button, CardActions, Grid, Sheet } from '@mui/joy';
import { OpenInNew } from '@mui/icons-material';
import { projectData } from '../../../data';

export default function OurProjectsPage() {
  return (
    <PageSection title="Our Projects">
      <Grid container flexGrow={1} rowSpacing={3}>
        {projectData.map((props, idx) =>
          <Grid xs={12} md={6} key={idx}>
            <ProjectCard {...props}/>
          </Grid>
        )}
      </Grid>
    </PageSection>
  )
}

export interface ProjectCardProps {
  name: string;
  desc: string;
  logoUrl: string;
  thumbnailUrl: string;
  projectUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name, desc, logoUrl, thumbnailUrl, projectUrl
}) => {
  return (
    <Card variant="outlined" sx={{ width: { xs: "100%", md: "95%" }, height: "100%", mx: 'auto' }}>
      <CardOverflow>
        <AspectRatio ratio="5/2" objectFit="cover">
          <Image
            fill
            src={thumbnailUrl}
            alt=""
          />
        </AspectRatio>
        <Sheet
          variant="soft"
          sx={{
            boxShadow: "sm",
            width: 50,
            height: 50,
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '0.8rem',
            bottom: '-1.5rem',
          }}
        >
          <AspectRatio ratio="1" variant="plain" objectFit="contain" sx={{
            position: 'relative',
            transform: 'translateY(30%)',
            margin: 'auto',
            width: "60%"
          }}>
            <Image fill src={logoUrl} alt=""/>
          </AspectRatio>
        </Sheet>
      </CardOverflow>
      <CardContent>
        <Typography level="title-lg">
          {name}
        </Typography>
        <Typography level="body-sm">
          {desc}
        </Typography>
      </CardContent>
      <CardActions buttonFlex="1">
        {/*<Button variant="outlined" color="neutral">*/}
        {/*  See more*/}
        {/*</Button>*/}
        <Button
          component="a"
          disabled={!projectUrl}
          href={projectUrl}
          target="_blank"
          startDecorator={projectUrl && <OpenInNew/>}
        >
          {projectUrl ? "Visit now" : "Coming soon!"}
        </Button>
      </CardActions>
    </Card>
  )
}