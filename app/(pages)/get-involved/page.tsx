import React from 'react';
import PageSection from '../../../components/PageSection';
import { Button, Link, Sheet, Stack, Typography } from '@mui/joy';
import { SvgIconComponent } from '@mui/icons-material';
import { Divider } from '@mui/material';
import { feedbackFormUrl, recruitmentData } from '../../../data';

export default function GetInvolvedPage() {
  return (
    <>
      <PageSection title="Join DevSoc">
        <Typography textAlign="justify" mb={5}>
          Looking to join an active and welcoming student developer community? We&apos;re always on the hunt for
          enthusiastic and creative students to hop on board, learn, and help us make uni life a bit easier for
          everyone. Click the links below to get involved today!
        </Typography>
        <Stack width="100%" direction={{ xs: "column", md: "row" }}>
          {recruitmentData.flatMap((props, idx) => {
            const elements = [<Recruitment key={2*idx} {...props}/>];
            if (idx != recruitmentData.length - 1) {
              elements.push(<Divider
                key={2*idx + 1}
                orientation="vertical"
                sx={{
                  display: { xs: 'none', md: 'block' },
              }}
              />);
            }
            return elements;
          })}
        </Stack>
      </PageSection>
      <PageSection title="Open Source">
        <Typography textAlign='justify' mb={2}>
          Missed out on the chance to join DevSoc? As all our projects are open source, there will still be plenty of
          opportunities to contribute. Keep an eye on each project&apos;s GitHub Issues board for any tasks that might
          interest you.
        </Typography>
        <Typography textAlign='justify'>
          Stay tuned for more in-depth guidelines and instructions for open source contribution!
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