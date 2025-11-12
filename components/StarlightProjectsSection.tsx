"use client";

import React, { useState } from "react";
import { Grid, Slider, Box } from "@mui/joy";
import { ProjectCard } from "./ProjectCard";
import PageSection from "./PageSection";
import { AspectRatio, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import {
  starlightProjectData,
  starlightSupporterData,
} from "../data/starlight";
import { SponsorInfo } from "../data/supporters";

const years = [2025, 2024];

function renderLogoRows(
  idx: number,
  sponsor: SponsorInfo,
  size: "small" | "large" = "large"
) {
  const isRamsoc =
    sponsor.name && sponsor.name.toLowerCase().includes("ramsoc");
  const sizeProps = isRamsoc
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

export function StarlightProjectsSection() {
  const [selectedYear, setSelectedYear] = useState<number>(2025);

  const handleYearChange = (event: any, newValue: number | number[]) => {
    setSelectedYear(newValue as number);
  };

  const valueText = (value: number) => value.toString();

  return (
    <PageSection title={`Starlight ${selectedYear}`}>
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
            label: `${year}`,
          }))}
          color="devsoc_red"
          onChange={handleYearChange}
          sx={{
            px: 8,
            ".MuiSlider-markLabel": {
              "&:first-of-type": { left: "16% !important" },
              "&:last-of-type": { left: "84% !important" },
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
          md: "repeat(4, 1fr)",
        }}
        marginBottom={5}
        sx={{ gridGap: "20px" }}
      >
        {starlightSupporterData[selectedYear].supporterLogos.map(
          (sponsor, idx) => {
            return renderLogoRows(idx, sponsor, "small");
          }
        )}
      </Stack>

      {starlightSupporterData[selectedYear].industryLogos &&
        starlightSupporterData[selectedYear].industryLogos.length > 0 && (
          <>
            <Typography level="h3" py={2} textAlign={"center"}>
              Industry Guests
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
              {starlightSupporterData[selectedYear].industryLogos.map(
                (sponsor, idx) => renderLogoRows(idx, sponsor)
              )}
            </Stack>
          </>
        )}

      {starlightSupporterData[selectedYear].societyLogos &&
        starlightSupporterData[selectedYear].societyLogos.length > 0 && (
          <>
            <Typography level="h3" py={2} textAlign={"center"}>
              Society Partners
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
              {starlightSupporterData[selectedYear].societyLogos.map(
                (sponsor, idx) => renderLogoRows(idx, sponsor)
              )}
            </Stack>
          </>
        )}
      <PageSection title={`${selectedYear} Submissions`}>
        <Grid container flexGrow={1} rowSpacing={3}>
          {(starlightProjectData[selectedYear] || []).map((props) => (
            <Grid xs={12} md={6} key={props.name}>
              <ProjectCard {...props} />
            </Grid>
          ))}
        </Grid>
      </PageSection>
    </PageSection>
  );
}
