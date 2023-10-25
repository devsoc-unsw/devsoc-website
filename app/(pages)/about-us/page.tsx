import React from 'react';
import { AspectRatio, Link, Skeleton, Stack } from '@mui/joy';
import PageSection from '../../../components/PageSection';
import Image from 'next/image';
import { Typography } from '@mui/material';

export default function AboutUsPage() {
  const teamData: PersonProps[] = [
    { name: "Bob Chen", title: "President" },
    { name: "Jeremy Le", title: "Admin Officer" },
    { name: "Michael Girikallo", title: "GEDI" },
    { name: "Alex Chen", title: "VP Internals" },
    { name: "Henry Guo", title: "VP Operations" },
    { name: "Manhua Lu", title: "VP Course Projects" },
    { name: "Franco Reyes", title: "VP Standalone Projects" },
  ];

  return (
    <>
      {/*TODO: About us, objectives, constitution, meet the team*/}
      <PageSection title="Who We Are">
        Dev is really cool, we have a lot of cool people and we do a lot of cool stuff.
        Dev is really cool, we have a lot of cool people and we do a lot of cool stuff.
        Dev is really cool, we have a lot of cool people and we do a lot of cool stuff.
        Dev is really cool, we have a lot of cool people and we do a lot of cool stuff.
      </PageSection>
      <PageSection title="Our Mission">
        Dev is really cool, we have a lot of cool people and we do a lot of cool stuff.
        Dev is really cool, we have a lot of cool people and we do a lot of cool stuff.
        Dev is really cool, we have a lot of cool people and we do a lot of cool stuff.
        Dev is really cool, we have a lot of cool people and we do a lot of cool stuff.
      </PageSection>
      <PageSection title="Our Constitution">
        You can find our constitution <Link>here</Link>.
      </PageSection>
      <PageSection title="Meet The Team">
        <Stack direction='row' spacing={2} rowGap={3} flexWrap="wrap" justifyContent="center">
          {teamData.map((props, idx) => <Person {...props} key={idx}/>)}
        </Stack>
      </PageSection>
    </>
  )
}

interface PersonProps {
  name: string;
  title: string;
  imgUrl?: string;
}

const Person: React.FC<PersonProps> = ({ name, title, imgUrl }) => {
  return (
    <Stack
      direction='column'
      alignItems='center'
      width={{ xs: "100%", sm: "30%", md: "23%" }}
      textAlign="center"
    >
      <AspectRatio ratio="1" sx={{ width: { xs: "50%", sm: "80%"}, borderRadius: "50%", mb: 1 }}>
        <Skeleton variant="overlay">
          <Image
            fill
            alt=""
            src={imgUrl ?? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="}
          />
        </Skeleton>
      </AspectRatio>
      <Typography level="title-lg">
        {name}
      </Typography>
      <Typography>
        {title}
      </Typography>
    </Stack>
  )
};

