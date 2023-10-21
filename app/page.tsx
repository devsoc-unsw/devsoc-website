import Image from 'next/image';
import { AspectRatio, Card, CardContent, Link, Stack, Typography } from '@mui/joy';
import { Info, People, Terminal } from '@mui/icons-material';
import React, { ReactNode } from 'react';
import NextLink from 'next/link';

export default function Home() {
  const cardContent: LinkCardProps[] = [
    {
      icon: (<Info color="error" sx={{ fontSize: '6rem' }} />),
      title: "About Us",
      content: "Learn what the UNSW Software Development Society is all about!",
      href: "/about-us"
    },
    {
      icon: (<Terminal color="error" sx={{ fontSize: '6rem' }} />),
      title: "Our Projects",
      content: "Explore the variety of different projects developed by DevSoc for UNSW students!",
      href: "/our-projects"
    },
    {
      icon: (<People color="error" sx={{ fontSize: '6rem' }} />),
      title: "Get Involved",
      content: "Got big ideas? Tell us here, or find out how to join DevSoc and make your mark!",
      href: "/get-involved"
    }
  ];

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
  icon: ReactNode;
  content: string;
  title: string;
  href: string;
}

const LinkCard: React.FC<LinkCardProps> = ({
  icon,
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
          {icon}
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
