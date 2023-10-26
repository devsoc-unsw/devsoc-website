import Image from 'next/image';
import { AspectRatio, Card, CardContent, Link, Stack, Typography } from '@mui/joy';
import { Info, People, SvgIconComponent, Terminal } from '@mui/icons-material';
import React from 'react';
import NextLink from 'next/link';

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
    href: "/get-involved"
  }
];

export default function Home() {
  return (
    <Stack
      justifyContent={{ md: "space-evenly" }}
      pt={10}
      spacing={10}
      alignItems="center"
      width="100%"
      height="100%"
      bgcolor="neutral.softBg"
    >
      <Stack alignItems="center" width="70%">
        <AspectRatio
          variant="plain"
          ratio="15/4"
          objectFit="contain"
          sx={{ width: '100%', mb: { xs: -2, sm: -4, md: -7 } }}
        >
          <Image src='/logo/fullInvertTransparent.svg' alt='DevSoc logo' fill priority/>
        </AspectRatio>
        <Typography
          fontWeight="600"
          fontSize={{ xs: "small", sm: "x-large", md: "xx-large", lg: "xxx-large" }}
        >
          UNSW Software Development Society
        </Typography>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        width={{ xs: '80%', sm: '80%', md: '80%' }}
        alignItems='center'
        justifyContent='center'
      >
        {cardContent.map((props, idx) => <LinkCard key={idx} {...props} />)}
      </Stack>
    </Stack>
  )
}

interface LinkCardProps {
  Icon: SvgIconComponent;
  content: string;
  title: string;
  href: string;
}

const LinkCard: React.FC<LinkCardProps> = ({
  Icon,
  content,
  title,
  href
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
      <Stack
        direction={{ xs: 'row', md: 'column' }}
        alignItems='center'
        spacing={2}
        textAlign={{ md: 'center' }}
      >
        <AspectRatio variant="plain" ratio="1" sx={{ width: { xs: 50, sm: 100, md: 100 } }}>
          <div>
            <Icon
              sx={{ fontSize: { xs: '3rem', sm: '5rem', md: '6rem' }}}
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
