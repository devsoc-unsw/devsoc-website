"use client";

import React, { useState } from 'react';
import { Grid, Slider, Box } from '@mui/joy';
import { ProjectCard } from "./ProjectCard";
import PageSection from "./PageSection";
import { techspireSpeakerData, techspireHeaderData, SponsorInfo } from "../data";
import { AspectRatio, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";

const years = [2025, 2024, 2022];

function renderLogoRows(idx: number, sponsor: SponsorInfo, size: "small" | "large" = "large") {
  const isApple = sponsor.name && sponsor.name.toLowerCase().includes("apple");
  const isCSE = sponsor.name && sponsor.name.toLowerCase().includes("cse");
  const isPearler = sponsor.name && sponsor.name.toLowerCase().includes("pearler");
  const isJobsboard = sponsor.name && sponsor.name.toLowerCase().includes("jobsboard");
  const sizeProps = (isApple || isCSE || isPearler || isJobsboard )
    ? { height: 40, maxWidth: 100 }
    : size === "small"
      ? { height: 50, maxWidth: 130 }
      : { height: 50, maxWidth: 170 };
  return (
    <AspectRatio
      key={idx}
      variant="plain"
      ratio="6/3"
      objectFit="contain"
      sx={{
        display: "flex",
        margin: "auto",
        width: "100%",
        padding: 0.5,
        ...sizeProps,
      }}
    >
      <Link target="_blank" href={sponsor.url}>
        <Image src={sponsor.logo} alt={sponsor.name} fill priority />
      </Link>
    </AspectRatio>
  );
}

export function TechspireSpeakersSection() {
    const [selectedYear, setSelectedYear] = useState<number>(2024);

    const handleYearChange = (event: any, newValue: number | number[]) => {
        setSelectedYear(newValue as number);
    };

    const valueText = (value: number) => value.toString();

    return (
        <PageSection title={`${selectedYear}`}>
            <Box sx={{}}>
                <Slider
                    aria-label="Select Year"
                    value={selectedYear}
                    getAriaValueText={valueText}
                    step={null}
                    min={Math.min(...years)}
                    max={Math.max(...years)}
                    marks={years.map((year, i) => ({
                        value: year,
                        label: `${year}`
                    }))}
                    color="devsoc_red"
                    onChange={handleYearChange}
                    sx={{
                        px: 8,
                        '.MuiSlider-markLabel': {
                            '&:first-of-type': { left: '16% !important' },
                            '&:last-of-type': { left: '84% !important' },
                        },
                    }}
                />
            </Box>
            
            <Typography level="h3" py={2} textAlign={"center"}>
                Supporters
            </Typography>
            <Stack
                display="grid"
                gridTemplateColumns={{
                    sm: "repeat(2, 1fr)",
                    md: `repeat(${Math.min(techspireHeaderData[selectedYear].supporterLogos.length, 4)}, 1fr)`,
                }}
                marginBottom={5}
                sx={{ gridGap: "20px" }}
            >
                {techspireHeaderData[selectedYear].supporterLogos.map((sponsor, idx) => {
                    return renderLogoRows(idx, sponsor, "small");
                })}
            </Stack>

            {techspireHeaderData[selectedYear].speakerLogos && techspireHeaderData[selectedYear].speakerLogos.length > 0 && (
                <>
                    <Typography level="h3" py={2} textAlign={"center"}>
                        Speakers from
                    </Typography>
                    <Stack
                        display="grid"
                        gridTemplateColumns={{
                            xs: "repeat(auto-fit, minmax(200px, 1fr))",
                            md: "repeat(auto-fit, minmax(200px, 1fr))",
                            xl: "repeat(auto-fit, minmax(200px, 1fr))",
                        }}
                        marginBottom={8}
                        sx={{ gridGap: "32px" }}
                    >
                        {techspireHeaderData[selectedYear].speakerLogos.map((sponsor, idx) => renderLogoRows(idx, sponsor))}
                    </Stack>
                </>
            )}

            {techspireHeaderData[selectedYear].industryLogos && techspireHeaderData[selectedYear].industryLogos.length > 0 && (
                <>
                    <Typography level="h3" py={2} textAlign={"center"}>
                        Supported by
                    </Typography>
                    <Stack
                      display="grid"
                      gridTemplateColumns={{
                        xs: "repeat(auto-fit, minmax(200px, 1fr))",
                        md: "repeat(auto-fit, minmax(200px, 1fr))",
                        xl: "repeat(auto-fit, minmax(200px, 1fr))",
                      }}
                      marginBottom={8}
                      sx={{ gridGap: "32px" }}
                    >
                        {techspireHeaderData[selectedYear].industryLogos.map((sponsor, idx) => renderLogoRows(idx, sponsor))}
                    </Stack>
                </>
            )}
            <PageSection title={`Speakers`}>
                <Grid container flexGrow={1} rowSpacing={3}>
                {(techspireSpeakerData[selectedYear] || []).map((props) => (
                    <Grid xs={12} md={6} key={props.name}>
                        <ProjectCard {...props} techspire={true} trainee={true} />
                    </Grid>
                ))}
                    {
                        (techspireSpeakerData[selectedYear] || []).length === 0 ? <p style={{margin: "auto"}}>Details coming soon</p> : null
                    }
            </Grid>
            </PageSection>
   
        </PageSection>
    );
}