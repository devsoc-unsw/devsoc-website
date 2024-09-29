'use client';

import { AspectRatio, Link, Sheet, Stack, Typography } from '@mui/joy';
import Image from 'next/image';
import NextLink from 'next/link';

import { navData, socialsData } from '../../data';

const NavBar = () => {
  return (
    <Sheet variant="soft" sx={{ height: 75, display: { xs: 'none', md: 'block' } }}>
      <Stack direction='row' height='100%' width='100%' p={2} justifyContent='space-between'>
        <Stack direction='row' height='100%' alignItems='center' spacing={2}>
          <Link component={NextLink} href="/">
            <AspectRatio variant="plain" ratio="15/4" objectFit="contain" sx={{ width: 180 }}>
              <Image fill src='/logo/fullInvertTransparent.svg' alt='DevSoc logo'/>
            </AspectRatio>
          </Link>
          <Stack component='nav' direction='row' spacing={3}>
            {navData.map(({ text, href }, idx) => (
              <Typography key={idx} level='title-lg'>
                <Link
                  component={NextLink}
                  sx={{
                    color: 'inherit',
                    textDecorationColor: '#D9807E'
                  }}
                  href={href}
                >
                  {text}
                </Link>
              </Typography>
            ))}
          </Stack>
        </Stack>
        <Stack direction='row' mr={2} spacing={2} alignItems='center'>
          {socialsData.map(({ Icon, href }, idx) => (
            <Link key={idx} href={href} target="_blank" sx={{ color: 'var(--joy-palette-text-primary)' }}>
              <Icon sx={{ fontSize: '1.8rem' }}/>
            </Link>
          ))}
        </Stack>
      </Stack>
    </Sheet>
  )
}

export default NavBar;