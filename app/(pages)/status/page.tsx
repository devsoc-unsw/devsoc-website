import React from 'react';
import {AspectRatio, Chip, Stack, Typography} from '@mui/joy';
import PageSection from '../../../components/PageSection';
import Image from 'next/image';
import type {Metadata} from 'next'
import {projectData} from "../../../data";

export const metadata: Metadata = {
  title: 'Status | DevSoc UNSW',
  description: 'Real-time status information on DevSoc\'s apps',
}

export default function StatusPage() {
  return (
    <PageSection title="System Status">
      <Stack spacing="2rem">
        {
          projectData.map((item, idx) => {
            return (
              <Stack key={idx} direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="row" alignItems="center" gap="2rem">
                  <AspectRatio
                    ratio="1" variant="plain" objectFit="contain" sx={{
                    width: "3rem"
                  }}>
                    <Image src={item.logoUrl ?? ""} alt={item.name} fill/>
                  </AspectRatio>
                  <Typography fontWeight={700}>
                    {item.name}
                  </Typography>
                </Stack>
                <StatusBubble status={item.status == "Operational"}/>
              </Stack>
            )
          })
        }
      </Stack>
    </PageSection>
  )
}

interface StatusBubbleProps {
  status: boolean;
}

const StatusBubble = (props: StatusBubbleProps) => {
  const {status} = props
  return (
    <Chip color={status ? "success" : "danger"}>
      {status ? "Operational" : "Unavailable"}
    </Chip>
  )
}