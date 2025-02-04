"use client";

import React, { useState } from "react";
import { Slider, Typography, Box, Stack, AspectRatio } from "@mui/joy";
import { SponsorInfo, SupporterData } from "../data";
import { Link } from "@mui/material";
import Image from "next/image";
import PageSection from "./PageSection";

interface SupportersPageContentProps {
  projectSupporterData: { [year: number]: SupporterData[] };
}

const years = [2025, 2024];

const SupportersPageContent: React.FC<SupportersPageContentProps> = ({
  projectSupporterData,
}) => {
  const [selectedYear, setSelectedYear] = useState<number>(2025);

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
};

export const DisplayLogo: React.FC<DisplayLogoProps> = ({ data, logoSize }) => {
  return (
    <Stack
      display="grid"
      gridTemplateColumns={{
        xs: "repeat(auto-fit, 1fr)",
        md: "repeat(auto-fit, minmax(200px, 1fr))",
        xl: "repeat(auto-fit, 1fr)",
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

export default SupportersPageContent;
