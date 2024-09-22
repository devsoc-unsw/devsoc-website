'use client'
import { AspectRatio, Card, CardContent, Chip, Link, Stack, Typography } from '@mui/joy';
import {AutoAwesome, Handshake, Info, People, Star, SvgIconComponent, Terminal, TipsAndUpdates} from '@mui/icons-material';
import React, {useEffect, useRef, useState} from 'react';
import NextLink from 'next/link';
import { Box } from "@mui/material";
import { recruitmentData } from '../data';

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
    Icon: AutoAwesome,
    title: "Starlight",
    content: "Spotlighting the awesome software projects being developed at UNSW!",
    href: "/starlight"
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
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = (e: { deltaY: any; }) => {
      if (scrollRef.current) {
        // Adjust the scroll position of the div based on the window's scroll position
        scrollRef.current.scrollLeft += e.deltaY; // or adjust based on scroll direction
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '2rem',
        width: '100%',
        maxWidth: '1200px',
        margin: 'auto',
        overflow: 'hidden',
      }}
    >
      <Stack direction="column">
        <Box sx={{ width: "100%" }}>
          <Typography className={"heroText"} mt={3} fontSize={{ xs: "1.6rem", sm: "2.3rem", md: "3.2rem" }} fontWeight={400} component='div'>
            UNSW's student developer society
          </Typography>
          <Typography className={"heroText"} mt={0} fontSize={{ xs: "1rem", sm: "2rem", md: "2.5rem" }} fontWeight={200} component='div'>
            Run by devs, for devs
          </Typography>
        </Box>
      </Stack>
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          marginTop: '3rem',
          overflowX: 'auto',
          scrollbarWidth: 'none'
        }}
      >
        <Stack
          spacing={5}
          direction="row"
        >
          {cardContent.map((props, idx) => <NewLinkCard key={props.title} {...props} order={idx + 1} />)}
        </Stack>
      </Box>
    </Box>
  )
}

const NewLinkCard: React.FC<LinkCardProps> = ({
 Icon,
 content,
 title,
 href,
 chip,
 order
}) => {
  let color = "#9cbfe7";
  switch (order) {
    case 1:
      color = "#9cbfe7";
      break;
    case 2:
      color = "#d4ba95";
      break;
    case 3:
      color = "#ecafa2";
      break;
    case 4:
      color = "#c8bfb5";
      break;
    case 5:
      color = "#e09ee2";
      break;
    case 6:
      color = "#9dbdb6";
      break;
  }
  return (
    <Card
      sx={{
        width: { xs: "1.6rem", sm: "2.3rem", md: "400px" },
        height: { xs: "1.6rem", sm: "2.3rem", md: "350px" },
        backgroundColor: color,
        borderRadius: 0,
        boxShadow: 'lg',
        padding: '2rem'
      }}
    >
      <Icon
        sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, color: "#151515" }}
      />
      <Typography
        sx={{
          color: "#151515",
          fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: "#151515",
          fontSize: { xs: '0.75rem', sm: '1.rem', md: '1.25rem' },
        }}
      >
        {content}
      </Typography>
    </Card>
  )
}

interface LinkCardProps {
  Icon: SvgIconComponent;
  content: string;
  title: string;
  href: string;
  chip?: string;
  order?: number;
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
