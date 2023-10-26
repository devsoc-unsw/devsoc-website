import React from 'react';
import PageSection from '../../../components/PageSection';
import { List, ListItem } from '@mui/joy';

export default function GetInvolvedPage() {
  return (
    <>
      <PageSection title="Join DevSoc">
        JOIN NOW
      </PageSection>
      <PageSection title="Open Source Contribution">
        GUIDE SOON
      </PageSection>
      <PageSection title="Feedback and Suggestions">
        FORM SOON
      </PageSection>
      <PageSection title="Contact Us">
        Anything else? You can contact us through the following channels:
        <List marker="disc">
          <ListItem><b>Email:</b> </ListItem>
          <ListItem>Episode II – Attack of the Clones</ListItem>
          <ListItem>Episode III – Revenge of the Sith</ListItem>
        </List>
      </PageSection>
    </>
  )
}