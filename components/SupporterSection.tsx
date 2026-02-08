"use client";

import React, { useState } from "react";
import { Slider, Typography, Box, Stack, AspectRatio, Alert } from "@mui/joy";
import { Link } from "@mui/material";
import Image from "next/image";
import PageSection from "./PageSection";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import { SponsorInfo, SupporterData } from "../data/supporters";

interface SupportersPageContentProps {
  projectSupporterData: { [year: number]: SupporterData[] };
}

const years = [2026, 2025, 2024];

const SupportersPageContent: React.FC<SupportersPageContentProps> = ({
  projectSupporterData,
}) => {
  const [selectedYear, setSelectedYear] = useState<number>(2026);

  const sectionsForYear = projectSupporterData[selectedYear];
  const handleYearChange = (event: any, newValue: number | number[]) => {
    setSelectedYear(newValue as number);
  };

  const valueText = (value: number) => value.toString();
  return (
    <>
      <Box sx={{ paddingBottom: "4rem" }}>
        <Slider
          aria-label="Select Year"
          value={selectedYear}
          getAriaValueText={valueText}
          step={1}
          min={Math.min(...years)}
          max={Math.max(...years)}
          marks={years.map((year) => ({ value: year, label: `${year}` }))}
          color="devsoc_red"
          onChange={handleYearChange}
        />
      </Box>
      {/* <Typography level="h1" py={6} px={6} textAlign="center">
        {selectedYear} Supporters
      </Typography> */}

      {sectionsForYear?.map((section, idx) => (
        <InfoBar key={idx} message={section.infoBar ?? ""} />
      ))}

      {sectionsForYear?.map((section, idx) => (
        <PageSection title={section.title} key={idx}>
          <Typography textAlign="center" marginBottom="2rem">
            {section.subtitle}
          </Typography>
          <Stack spacing={4}>
            <DisplayLogo
              data={section.logos}
              logoSize={{ height: 100, maxWidth: 200 }}
            />
          </Stack>
          <br />
        </PageSection>
      ))}
    </>
  );
};

interface DisplayLogoProps {
  data: SponsorInfo[];
  logoSize: { height: number; maxWidth: number };
}

const customLogoSizes: Record<string, { height: number; maxWidth: number }> = {
  "Registered Charity": { height: 100, maxWidth: 250 },
  "The Trade Desk": { height: 100, maxWidth: 250 },
  "Jane Street": { height: 100, maxWidth: 250 },
  "ZIP Logo": { height: 90, maxWidth: 140 },
  "Safety Culture": { height: 100, maxWidth: 250 },
  "Record Point": { height: 100, maxWidth: 220 },
  "Airwallex": { height: 100, maxWidth: 250 },
  "HRT": { height: 80, maxWidth: 180 },
};

export const DisplayLogo: React.FC<DisplayLogoProps> = ({ data, logoSize }) => {
  return (
    <Stack
      display="grid"
      gridTemplateColumns={{
        xs: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        xl: "repeat(2, 1fr)",
      }}
      marginBottom={5}
      sx={{ gridGap: "20px" }}
    >
      {data.map((sponsor, idx) => {
        // Logos that are wide need their height and width increased to "match" the others.
        const customSize = customLogoSizes[sponsor.name];
        const dynamicHeight = customSize ? customSize.height : logoSize.height;
        const dynamicMaxWidth = customSize
          ? customSize.maxWidth
          : logoSize.maxWidth;
        return (
          <AspectRatio
            key={idx}
            variant="plain"
            ratio="5/2"
            objectFit="contain"
            sx={{
              display: "flex",
              margin: "auto",
              height: dynamicHeight,
              width: "100%",
              maxWidth: dynamicMaxWidth,
              padding: 0.3,
            }}
          >
            <Link target="_blank" href={sponsor.url}>
              <Image src={sponsor.logo} alt={sponsor.name} fill priority />
            </Link>
          </AspectRatio>
        );
      })}
    </Stack>
  );
};

export const InfoBar = ({ message }: { message: string }) =>
  message ? (
    <Alert
      color="primary"
      sx={{ mt: 0, mb: 7, ml: -2, mr: -2 }}
      startDecorator={<InfoOutlined />}
      size="lg"
    >
      {message}
    </Alert>
  ) : null;

export default SupportersPageContent;
