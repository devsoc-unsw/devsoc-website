import React from 'react';
import {AspectRatio, Chip, Stack, Typography} from '@mui/joy';
import PageSection from '../../../components/PageSection';
import Image from 'next/image';
import type {Metadata} from 'next'
import {projectSupporterData, SponsorInfo, SupporterData} from "../../../data";
import {Link} from "@mui/material";

export const metadata: Metadata = {
  title: 'Supporters | DevSoc UNSW',
  description: 'Information on DevSoc\'s sponsors, supporters and collaborators',
}

export default function SupportersPage() {
  return (
    <>
      {
        projectSupporterData.map((section, idx) => {
          return (
            <PageSection title={section.title} key={idx}>
              <Typography textAlign="center" marginBottom="2rem">
                {section.subtitle}
              </Typography>
              <Stack spacing={4}>
                <DisplayLogo data={section.logos}/>
              </Stack>
              <br/>
            </PageSection>
          )
        })
      }
    </>
  )
}

interface DisplayLogoProps {
  data: SponsorInfo[];
}

const DisplayLogo = (props: DisplayLogoProps) => {
  const { data } = props
  return (
    <Stack
      display="grid"
      gridTemplateColumns={{xs: "repeat(auto-fit, 1fr)", md: "repeat(auto-fit, minmax(200px, 1fr))", xl: "repeat(auto-fit, 1fr)"}}
      marginBottom={5}
      sx={{gridGap: "20px"}}
    >
      {
        data.map((sponsor, idx) => {
          return (
            <AspectRatio
              key={idx}
              variant="plain"
              ratio="5/2"
              objectFit="contain"
              sx={{ display: "flex", margin:"auto", height: 50, width: "100%", maxWidth: 170, padding: 0.5}}
            >
              <Link target="_blank" href={sponsor.url}>
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name} fill priority
                />
              </Link>
            </AspectRatio>
          )
        })
      }
    </Stack>
  )
}