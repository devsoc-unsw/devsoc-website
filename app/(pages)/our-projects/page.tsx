'use client';

import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import Image from 'next/image';
import PageSection from '../../../components/PageSection';
import { Button, CardActions, Sheet } from '@mui/joy';
import { OpenInNew } from '@mui/icons-material';

const projectData: ProjectCardProps[] = [
  {
    name: "Notangles",
    desc: "An interactive drag-and-drop timetable planner designed to help UNSW students plan their ideal weekly timetable.",
    logoUrl: "/projects/notangles/logo.png",
    thumbnailUrl: "/projects/notangles/thumbnail.png",
    projectUrl: "https://notangles.csesoc.app/"
  },
  {
    name: "Circles",
    desc: "A UNSW degree planner where you can explore and validate your degree structure.",
    logoUrl: "/projects/circles/logo.png",
    thumbnailUrl: "/projects/circles/thumbnail.png",
    projectUrl: "https://circles.csesoc.app/"
  },
  {
    name: "Unilectives",
    desc: "Your one-stop shop for UNSW course and elective reviews.",
    logoUrl: "/projects/unilectives/logo.png",
    thumbnailUrl: "/projects/unilectives/thumbnail.png",
    projectUrl: "https://unilectives.csesoc.app/"
  },
  {
    name: "Structs.sh",
    desc: "An interactive data structure and algorithm visualiser and educational platform for computer science students.",
    logoUrl: "/projects/structs/logo.png",
    thumbnailUrl: "/projects/structs/thumbnail.png",
    projectUrl: "https://structs.sh/"
  },
  {
    name: "Freerooms",
    desc: "A tool to view the timetable of any room on campus, and find an available room that suits all your needs.",
    logoUrl: "/projects/freerooms/logo.png",
    thumbnailUrl: "/projects/freerooms/thumbnail.png",
    projectUrl: "https://freerooms.csesoc.app/"
  },
  {
    name: "Jobsboard",
    desc: "The go-to place for CSE students to find student jobs and internships.",
    logoUrl: "/projects/jobsboard/logo.png",
    thumbnailUrl: "/projects/notangles/thumbnail.png",
    projectUrl: "https://jobsboard.csesoc.unsw.edu.au/"
  },
  {
    name: "Chaos",
    desc: "A platform for simplifying applying and recruiting for student society subcommittees at UNSW.",
    logoUrl: "/projects/chaos/logo.png",
    thumbnailUrl: "/projects/chaos/thumbnail.png",
  },
];

export default function OurProjectsPage() {
  return (
    <PageSection title="Our Projects">
      <Stack direction="row" flexWrap="wrap" rowGap={3} justifyContent="space-evenly">
        {projectData.map((props, idx) => <ProjectCard {...props} key={idx} />)}
      </Stack>
    </PageSection>
  )
}

interface ProjectCardProps {
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
    <Card variant="outlined" sx={{ width: { xs: "100%", md: "45%" } }}>
      <CardOverflow>
        <AspectRatio ratio="5/2" objectFit="fill">
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