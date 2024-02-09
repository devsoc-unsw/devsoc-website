import React from 'react';
import {AspectRatio} from '@mui/joy';
import PageSection from '../../../components/PageSection';
import Image from 'next/image';
import {Box, Typography} from '@mui/material';
import type {Metadata} from 'next'
import {projectData} from "../../../data";

interface StatusBubbleProps {
  status: boolean;
}

export const metadata: Metadata = {
  title: 'Status | DevSoc UNSW',
  description: 'Real-time status information on DevSoc\'s apps',
}

export default function StatusPage() {
  return (
    <>
      <PageSection title="System Status">
        {
          projectData.map((item, idx) => {
            return (
              <Box key={idx} sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "2rem"
              }}>
                <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: "2rem"}}>
                  <AspectRatio
                    ratio="1" variant="plain" objectFit="contain" sx={{
                    width: "3rem"
                  }}>
                    <Image src={item.logoUrl} alt={item.name} fill/>
                  </AspectRatio>
                  <Typography sx={{fontWeight: 700}}>
                    {item.name}
                  </Typography>
                </Box>
                <StatusBubble status={item.status == "Operational"}/>
              </Box>
            )
          })
        }
      </PageSection>
    </>
  )
}

const StatusBubble = (props: StatusBubbleProps) => {
  const {status} = props
  if (status) {
    return (
      <Box sx={{
        backgroundColor: "#2e7d32",
        color: "white",
        padding: "0.3rem 0.7rem",
        borderRadius: "2rem"
      }}>
        Operational
      </Box>
    )
  } else {
    return (
      <Box sx={{
        backgroundColor: "rgb(253, 237, 237)",
        color: "black",
        padding: "0.3rem 0.7rem",
        borderRadius: "2rem"
      }}>
        Unavailable
      </Box>
    )
  }
}