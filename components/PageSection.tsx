import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const PageSection: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <Box mb={3}>
      <Divider sx={{ mb: 2 }}>
        <Typography level="h1">{title}</Typography>
      </Divider>
      <Box sx={{ p: 1 }}>
        {children}
      </Box>
    </Box>
  )
};

export default PageSection;