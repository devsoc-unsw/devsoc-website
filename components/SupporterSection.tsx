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
      {/* Slider Component */}
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
      <Typography level="h1" py={8} px={8} textAlign="center">
        {selectedYear} Supporters
      </Typography>

      {/* Display Logos and Subtitles */}
      {sectionsForYear?.map((section, idx) => (
        <PageSection title={section.title} key={idx}>
          <Typography textAlign="center" marginBottom="2rem">
            {section.subtitle}
          </Typography>
          <Stack spacing={4}>
            <DisplayLogo data={section.logos} />
          </Stack>
          <br />
        </PageSection>
      ))}
    </>
  );
};

// Separate DisplayLogo Component
interface DisplayLogoProps {
  data: SponsorInfo[];
}

const DisplayLogo: React.FC<DisplayLogoProps> = ({ data }) => {
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
        return (
          <AspectRatio
            key={idx}
            variant="plain"
            ratio="5/2"
            objectFit="contain"
            sx={{
              display: "flex",
              margin: "auto",
              height: 100,
              width: "100%",
              maxWidth: 200,
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
