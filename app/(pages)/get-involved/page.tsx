import React from 'react';
import PageSection from '../../../components/PageSection';
import { Button, Grid, Link, List, ListItem, Sheet, Stack, Typography } from '@mui/joy';
import { SvgIconComponent } from '@mui/icons-material';
import { feedbackFormUrl, recruitmentData } from '../../../data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Involved | DevSoc UNSW',
  description: 'Find out how you can get involved with DevSoc or our projects',
}

export default function GetInvolvedPage() {
  return (
    <>
      <PageSection title="Join DevSoc">
        <Typography textAlign="justify" mb={5}>
          Looking to join an active and welcoming student developer community? We&apos;re always on the hunt for
          enthusiastic and creative students to hop on board, learn, and help us make uni life a bit easier for
          everyone. Click the links below to get involved today!
        </Typography>
        <Grid container rowSpacing={6} columnSpacing={1}>
          {recruitmentData.map((props) =>
            <Grid key={props.position} xs={12} md={6}>
              <Recruitment {...props}/>
            </Grid>
          )}
        </Grid>
      </PageSection>
      <PageSection title="Open Source">
        <Typography textAlign='justify' mb={2}>
          Missed out on the chance to join DevSoc? As all our projects are open source, there are still plenty of
          opportunities to contribute. Keep an eye on each project&apos;s GitHub Issues board for any tasks that might
          interest you. Be sure to open your own issues if you have any ideas on how to improve the projects!
        </Typography>
        <Typography textAlign='justify' mb={2}>
          To contribute, look for issues on GitHub tagged as <b>help wanted</b> - these are the issues our project
          directors are seeking help with from outside contributors. In particular, those also tagged as <b>good first
          issue</b> are suited for anyone less familiar with the codebase or tech stack.
        </Typography>
        <Typography textAlign='justify' component='div'>
          If one of these issues catches your eye, you should:
          <List marker="disc">
            <ListItem>Make sure you have all the information you need, and if not, ask for clarification in a comment</ListItem>
            <ListItem>Add a comment to request the project directors to assign the issue to you</ListItem>
            <ListItem>If it is assigned to you, fork the repository, implement the change and open a pull request</ListItem>
          </List>
        </Typography>
      </PageSection>
      <PageSection title="Feedback">
        <Typography textAlign='justify'>
          At DevSoc, we place a strong emphasis on user feedback as it plays a pivotal role in our ongoing efforts to
          continually make our society the best it can be. If you have any feedback or suggestions on how we can improve,
          please let us know <Link href={feedbackFormUrl}>here</Link>.
        </Typography>
      </PageSection>
    </>
  )
}

export interface RecruitmentProps {
  position: string;
  Icon: SvgIconComponent;
  applicationUrl?: string;
}

const Recruitment: React.FC<RecruitmentProps> = ({ position, Icon, applicationUrl }) => {
  const open = applicationUrl !== undefined;

  return (
    <Stack direction="column" alignItems="center" width="100%" spacing={1}>
      <Typography level="h2">
        {position}
      </Typography>
      <Icon sx={{ fontSize: '6rem' }}/>
      <Sheet color="neutral" variant="solid" sx={{
        borderRadius: 'var(--joy-radius-sm)',
        width: "85%"
      }}>
        <Button
          size="lg"
          component={open ? "a" : "button"}
          disabled={!open}
          variant={open ? "solid" : "plain"}
          href={applicationUrl}
          target="_blank"
          fullWidth
        >
          <Stack alignItems="center">
            <Typography mb={-0.5} fontWeight="bold">
              Applications {open ? "Open" : "Closed"}
            </Typography>
            <Typography level="title-sm">
              {open ? "Click here to apply" : "Stay tuned"}
            </Typography>
          </Stack>
        </Button>
      </Sheet>
    </Stack>
  );
}