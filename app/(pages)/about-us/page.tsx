import React from 'react';
import { AspectRatio, Link, Skeleton, Stack } from '@mui/joy';
import PageSection from '../../../components/PageSection';
import Image from 'next/image';
import { Typography } from '@mui/material';

const teamData: PersonProps[] = [
  { name: "Bob Chen", title: "President", imgUrl: '/people/pres.jpeg' },
  { name: "Jeremy Le", title: "Administrative Officer", imgUrl: '/people/admin.jpg' },
  { name: "Michael Girikallo", title: "GEDI Officer", imgUrl: '/people/gedi.jpeg' },
  { name: "Alex Chen", title: "VP Internals", imgUrl: '/people/vpi.jpeg' },
  { name: "Henry Guo", title: "VP Operations", imgUrl: '/people/vpo.jpeg' },
  { name: "Manhua Lu", title: "VP Course Projects", imgUrl: '/people/vpc.jpeg' },
  { name: "Franco Reyes", title: "VP Standalone Projects", imgUrl: '/people/vps.jpeg' },
];

export default function AboutUsPage() {
  return (
    <>
      <PageSection title="Who We Are">
        <Typography textAlign='justify'>
          We are the Software Development Society, a place for imaginative and inventive students
          dedicated to crafting exceptional products for the benefit of the community! Within our
          society, you&apos;ll find over five teams of enthusiastic students diligently working on
          a wide array of web apps, ranging from academic degree planners to platforms that display
          available campus facilities.
        </Typography>
      </PageSection>
      <PageSection title="Our Mission">
        <Typography textAlign='justify' mb={2}>
          Our primary goal is to develop solutions that enhance the lives of university students in their
          daily routines. Whether it&apos;s simplifying class scheduling with tools like Notangles and Unilectives
          or aiding student organizations in recruiting new members through Chaos, our mission is to contribute to
          the betterment of people&apos;s lives while enjoying the process.
        </Typography>
        <Typography textAlign='justify'>
          We&apos;re also committed to fostering the next generation of skilled software developers and engineers
          through a comprehensive training program, preparing them for the professional world and empowering them
          to unleash their innovative ideas.
        </Typography>
      </PageSection>
      <PageSection title="Our Constitution">
        You can find our constitution <Link target="_blank" href="https://drive.google.com/file/d/1vz-NuOY6ympFkq80s4GPnV5HrvKuaA1K/view?usp=sharing">here</Link>.
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
        {imgUrl
          ? (
            <Image
              fill
              alt={`Photo of ${name}`}
              src={imgUrl}
            />
          ) : (
            <Skeleton variant="overlay">
              <Image
                fill
                alt={`Placeholder for photo of ${name}`}
                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              />
            </Skeleton>
          )
        }
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

