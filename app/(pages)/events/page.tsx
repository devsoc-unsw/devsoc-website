import React from 'react';
import type { Metadata } from 'next';
import PageSection from '../../../components/PageSection';
import PastEventsSection from '../../../components/events/PastEventsSection';
import CurEventsSection from '../../../components/events/CurEventsSection';

export const metadata: Metadata = {
  title: 'Events | DevSoc UNSW',
  description: 'Learn about the events we hold at UNSW Software Development Society!',
}

export default function EventsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <PageSection title="Upcoming Events">
        <CurEventsSection />
      </PageSection>
      <PageSection title="Past Events">
        <PastEventsSection />
      </PageSection>
    </div>
  )
}

