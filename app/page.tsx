'use client'
import Image from 'next/image';
import { AspectRatio, Card, CardContent, Chip, Link, Stack, Typography } from '@mui/joy';
import {Handshake, Info, People, SvgIconComponent, Terminal} from '@mui/icons-material';
import React, { useState } from 'react';
import NextLink from 'next/link';
import TextTransition, { presets } from 'react-text-transition'
import styles from './styles.module.css'
import { Box } from "@mui/material";
import { projectSupporterData, recruitmentData } from '../data';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const cardContent: LinkCardProps[] = [
  {
    Icon: Info,
    title: "About Us",
    content: "Learn what the UNSW Software Development Society is all about!",
    href: "/about-us"
  },
  {
    Icon: Terminal,
    title: "Our Projects",
    content: "Explore the variety of different projects developed by DevSoc for UNSW students!",
    href: "/our-projects"
  },
  {
    Icon: People,
    title: "Get Involved",
    content: "Got big ideas? Tell us here, or find out how to join DevSoc and make your mark!",
    href: "/get-involved",
    chip: recruitmentData.some(data => !!data.applicationUrl) ? "Applications open now!" : undefined
  },
  {
    Icon: Handshake,
    title: "Supporters",
    content: "Learn more about the sponsors of our events, opportunities and services.",
    href: "/supporters"
  }
];

export default function Home() {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000,
    );
    return () => clearTimeout(intervalId);
  }, [])
  const texts = ['Developers', 'Enthusiasts', 'Change makers', 'Engineers', 'Creators', 'Mathematicians']
  return (
    <Stack
      pt={10}
      spacing={{ xs: 4, sm: 10 }}
      alignItems="center"
      width="100%"
      height="100%"
    >
      <Stack width="75%" direction="column-reverse">
        <Box sx={{ width: "100%" }}>
          <Typography mt={3} fontSize={{ xs: "1.6rem", sm: "2.6rem", md: "3.4rem" }} fontWeight={600} component='div'>
            A dedicated student community of
            <TextTransition
              className={styles.rainbow}
              springConfig={presets.gentle}
            >{texts[index % texts.length]}</TextTransition>
          </Typography>
        </Box>
        <Typography fontSize={{ xs: "1.1rem", sm: "2rem" }}>Software Development Society</Typography>
        <AspectRatio
          variant="plain"
          ratio="15/4"
          objectFit="contain"
          sx={{ width: { xs: 250, sm: 360 } }}
        >
          <Image src='/logo/fullInvertTransparent.svg' alt='DevSoc logo' fill priority/>
        </AspectRatio>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        width="80%"
        alignItems='center'
        justifyContent='center'
        paddingBottom='5rem'
      >
        {cardContent.map((props) => <LinkCard key={props.title} {...props} />)}
      </Stack>
      {/*<Stack alignItems='center'>*/}
      {/*  <Typography padding={3} fontSize={{ xs: "1rem", sm: "1.75rem" }}>*/}
      {/*    Our flagship projects are proudly supported by*/}
      {/*  </Typography>*/}
      {/*  <SponsorLogo data={projectSponsorData}/>*/}
      {/*</Stack>*/}
    </Stack>
  )
}

interface LinkCardProps {
  Icon: SvgIconComponent;
  content: string;
  title: string;
  href: string;
  chip?: string;
}

const LinkCard: React.FC<LinkCardProps> = ({
  Icon,
  content,
  title,
  href,
  chip
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", md: "30%" },
        height: { xs: "30%", md: "100%" },
        transition: 'all .2s ease-in-out',
        '&:hover': { transform: 'scale(1.05)' }
      }}
    >
      {chip && <Chip
        size="md"
        sx={{ position: "absolute", top: -12, right: -10 }}
        color="primary"
        variant="solid"
      >
        {chip}
      </Chip>}
      <Stack
        direction={{ xs: 'row', md: 'column' }}
        alignItems='center'
        spacing={2}
        textAlign={{ md: 'center' }}
      >
        <AspectRatio variant="plain" ratio="1" sx={{ width: { xs: 50, sm: 100, md: 100 } }}>
          <div>
            <Icon
              sx={{ fontSize: { xs: '3rem', sm: '5rem', md: '6rem' } }}
            />
          </div>
        </AspectRatio>
        <CardContent>
          <Typography fontWeight="bold" fontSize={{ sm: "large", md: "x-large", lg: "xx-large" }}>
            <Link
              overlay
              component={NextLink}
              href={href}
              underline="none"
              sx={{ color: "inherit" }}
            >
              {title}
            </Link>
          </Typography>
          <Typography fontSize={{ xs: "small", sm: "medium" }}>
            {content}
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  )
}
