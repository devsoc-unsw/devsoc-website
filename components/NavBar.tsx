import { AspectRatio, Link, Sheet, Stack, Typography } from '@mui/joy';
import Image from 'next/image';
import NextLink from 'next/link';
import { Facebook, GitHub, Instagram, LinkedIn } from '@mui/icons-material';

const NavBar = () => {
  return (
    <Sheet variant="soft" sx={{ boxShadow: 'xs', height: 75 }}>
      <Stack direction='row' height='100%' width='100%' p={2} justifyContent='space-between'>
        <Stack direction='row' height='100%' alignItems='center' spacing={2}>
          <Link component={NextLink} href="/">
            <AspectRatio variant="plain" ratio="15/4" objectFit="contain" sx={{ width: 180 }}>
              <Image fill src='/assets/logo/fullInvertTransparent.svg' alt='DevSoc logo'/>
            </AspectRatio>
          </Link>
          <Stack direction='row' spacing={3}>
            {[
              { text: 'About Us', href: '/about-us' },
              { text: 'Our Projects', href: '/our-projects' },
              { text: 'Get Involved', href: '/get-involved' },
            ].map(({ text, href }) => (
              <Typography key={href} level='title-lg'>
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
        <Stack direction='row' mr={2} spacing={2}>
          <Link href="https://github.com/devsoc-unsw" target="_blank" sx={{ color: 'var(--joy-palette-text-primary)' }}>
            <GitHub sx={{ fontSize: '1.8rem' }}/>
          </Link>
          <Link href="https://www.facebook.com/devsocUNSW/" target="_blank" sx={{ color: 'var(--joy-palette-text-primary)' }}>
            <Facebook sx={{ fontSize: '1.8rem' }}/>
          </Link>
          <Link href="https://www.instagram.com/devsoc_unsw/" target="_blank" sx={{ color: 'var(--joy-palette-text-primary)' }}>
            <Instagram sx={{ fontSize: '1.8rem' }}/>
          </Link>
          <Link href="https://www.linkedin.com/company/97436660/" target="_blank" sx={{ color: 'var(--joy-palette-text-primary)' }}>
            <LinkedIn sx={{ fontSize: '1.8rem' }}/>
          </Link>
        </Stack>
      </Stack>
    </Sheet>
  )
}

export default NavBar;