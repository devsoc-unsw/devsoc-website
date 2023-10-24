import React from 'react';
import { Link } from '@mui/joy';
import PageSection from '../../../components/PageSection';

export default function AboutUsPage() {
  return (
    <div>
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
        Dev is really cool, we have a lot of cool people and we do a lot of cool stuff.
        Dev is really cool, we have a lot of cool people and we do a lot of cool stuff.
        Dev is really cool, we have a lot of cool people and we do a lot of cool stuff.
        Dev is really cool, we have a lot of cool people and we do a lot of cool stuff.
      </PageSection>
    </div>
  )
}

