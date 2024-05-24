import React from 'react';
import { AspectRatio, Link, Skeleton, Stack } from '@mui/joy';
import PageSection from '../../../components/PageSection';
import Image from 'next/image';
import { Typography } from '@mui/material';
import type { Metadata } from 'next';
import {PeopleSection} from "../../../components/PeopleSection";

export const metadata: Metadata = {
  title: 'About Us | DevSoc UNSW',
  description: 'Learn all about the UNSW Software Development Society!',
}

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
      <PageSection title="Governance">
        Computer Science Building (K17)<br/>Engineering Road, UNSW Sydney,<br/>Kensington NSW 2052 <br/><br/>
        DevSoc became an independent university society affiliated with UNSW Arc beginning in October 2023, separating from CSESoc. You can find our latest constitution <Link target="_blank" href="https://drive.google.com/file/d/1vz-NuOY6ympFkq80s4GPnV5HrvKuaA1K/view?usp=sharing">here</Link>.
        <br/>
        <br/>
        DevSoc became an ACNC registered not-for-profit organisation in 2024. You can find our not-for-profit status <Link target="_blank" href="https://www.acnc.gov.au/charity/charities/7fa763bf-0876-ee11-8179-00224893b0ed/profile">here</Link>.
      </PageSection>
      <PageSection title="People">
        <PeopleSection/>
      </PageSection>
    </>
  )
}

