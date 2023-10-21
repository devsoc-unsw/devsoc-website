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
    <Stack justifyContent="space-evenly" alignItems="center" width="100%" height="100%" margin="auto">
      <Stack alignItems="center" width="70%">
        <AspectRatio variant="plain" ratio="15/4" objectFit="contain" sx={{ width: '100%' }}>
          <Image src='/assets/logo/fullInvertTransparent.svg' alt='DevSoc logo' fill priority/>
        </AspectRatio>
        <Typography fontWeight="600" fontSize="xxx-large" mt={-7} >
          Some kind of tagline goes here
        </Typography>
      </Stack>
      <Stack direction="row" spacing={3}>
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
        textAlign: 'center',
        alignItems: 'center',
        bgcolor: 'neutral.softBg',
        width: 340,
        '--icon-size': '100px',
        transition: 'all .2s ease-in-out',
        '&:hover': { transform: 'scale(1.05)' }
      }}
    >
      <AspectRatio
        ratio="1"
        sx={{
          borderRadius: '50%',
          width: 'var(--icon-size)',
          bgcolor: 'neutral.softBg',
        }}
      >
        <div>
          <Icon color="error" sx={{ fontSize: '6rem' }} />
        </div>
      </AspectRatio>
      <Typography level="h2">
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
      <CardContent sx={{ maxWidth: '40ch' }}>
        {content}
      </CardContent>
  </Card>
  )
}
