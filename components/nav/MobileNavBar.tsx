'use client';

import {
  AspectRatio,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  Sheet,
  Stack,
} from "@mui/joy";
import Image from 'next/image';
import NextLink from 'next/link';

import { navData, socialsData } from '../../data';
import React from 'react';
import { Menu as MenuIcon } from '@mui/icons-material';

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Sheet variant="soft" sx={{ boxShadow: 'xs', height: 54, display: { md: 'none' }, borderBottom: '2px solid var(--joy-palette-neutral-outlinedBorder)' }}>
        <Stack direction='row' height='100%' width='100%' p={2} justifyContent='space-between' alignItems='center'>
          <Link component={NextLink} href="/">
            <AspectRatio variant="plain" ratio="15/4" objectFit="contain" sx={{ width: 150 }}>
              <Image fill src='/logo/fullInvertTransparent.svg' alt='DevSoc logo'/>
            </AspectRatio>
          </Link>
          <IconButton variant="plain" sx={{ color: '#fff' }} onClick={() => setOpen(true)}>
            <MenuIcon sx={{ fontSize: '2.2rem' }} />
          </IconButton>
        </Stack>
      </Sheet>
      <MenuDrawer open={open} setOpen={setOpen}/>
    </>
  )
}

interface MenuDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ open, setOpen }) => {
  return (
    <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
      <Link component={NextLink} href="/" mx='auto' my={2}>
        <AspectRatio variant="plain" ratio="15/4" objectFit="contain" sx={{ width: 200 }}>
          <Image fill src='/logo/fullInvertTransparent.svg' alt='DevSoc logo'/>
        </AspectRatio>
      </Link>
      <Divider/>
      <List
        size="lg"
        component="nav"
        sx={{
          flex: 'none',
          fontSize: 'xl',
          '& > div': { justifyContent: 'center' },
        }}
      >
        {navData.map(({ text, href }, idx) => (
          <ListItemButton
            key={idx}
            component={NextLink}
            href={href}
            onClick={() => setOpen(false)}
            sx={{
              justifyContent: "center"
            }}
          >
            {text}
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <Stack direction='row' mt={2} spacing={2} alignItems='center' justifyContent='center'>
        {socialsData.map(({ Icon, href }, idx) => (
          <Link key={idx} href={href} target="_blank" sx={{ color: 'var(--joy-palette-text-primary)' }}>
            <Icon sx={{ fontSize: '1.8rem' }}/>
          </Link>
        ))}
      </Stack>
    </Drawer>
  )
}

export default NavBar;