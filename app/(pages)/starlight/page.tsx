import React from "react";
import PageSection from "../../../components/PageSection";
import { Box, Grid, StepIndicator, stepIndicatorClasses } from "@mui/joy";
import {
  SponsorInfo,
  starlightProjectData,
  starlightSupporterData,
} from "../../../data";
import { ProjectCard } from "../../../components/ProjectCard";
import type { Metadata } from "next";
import { AspectRatio, Link, Stack, Typography } from "@mui/material";
import Stepper from "@mui/joy/Stepper";
import Step, { stepClasses } from "@mui/joy/Step";
import HailRoundedIcon from "@mui/icons-material/HailRounded";
import KeyboardVoiceRoundedIcon from "@mui/icons-material/KeyboardVoiceRounded";
import WavingHandRoundedIcon from "@mui/icons-material/WavingHandRounded";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Starlight | DevSoc UNSW",
  description:
    "Explore the variety of different projects developed by UNSW students!",
};

function StepperLabel(props: { text: string }) {
  return (
    <Typography
      textAlign={"center"}
      sx={{
        textTransform: "uppercase",
        fontWeight: "lg",
        fontSize: "0.75rem",
        letterSpacing: "0.5px",
      }}
    >
      {props.text}
    </Typography>
  );
}

function StarlightStepper() {
  return (
    <Stepper
      sx={{
        "--StepIndicator-size": "2.5rem",
      }}
    >
      <Step
        orientation="vertical"
        indicator={
          <StepIndicator variant="solid" color="primary">
            <HailRoundedIcon />
          </StepIndicator>
        }
      >
        <StepperLabel text="4pm - Project Introduction" />
      </Step>
      <Step
        orientation="vertical"
        indicator={
          <StepIndicator variant="solid" color="primary">
            <WavingHandRoundedIcon />
          </StepIndicator>
        }
      >
        <StepperLabel text="4:30pm - Meet the projects"></StepperLabel>
      </Step>
      <Step
        orientation="vertical"
        disabled
        indicator={
          <StepIndicator variant="solid" color="primary">
            <KeyboardVoiceRoundedIcon />
          </StepIndicator>
        }
      >
        <StepperLabel text="5:30pm - QA Panel & Prizes"></StepperLabel>
      </Step>
    </Stepper>
  );
}

export default function StarlightProjectsPage() {
  return (
    <>
      <PageSection title="Starlight Showcase">
        <Typography textAlign="justify">
          Starlight is a project showcase that celebrates all kinds of software
          projects being built by passionate developers at UNSW. The showcase
          will be held on the 25th of July 2025. Submissions are open to
          everyone that has a project they want to share! More information about
          the event is avaliable{" "}
          <Link
            href="https://www.canva.com/design/DAGkribj1e8/E7BfubxdQQLadKB20Hxzww/view"
            target="_blank"
          >
            here.
          </Link>
        </Typography>
        <Typography textAlign="justify" pt={2}>
          Submissions are open now! Submissions will be processed through{" "}
          <Link href="https://devsoc-starlight.devpost.com" target="_blank">
            Devpost
          </Link>
          . Check out last years submissions below!
        </Typography>
        <Typography level="h3" py={2} textAlign={"center"}>
          Schedule
        </Typography>
        <StarlightStepper />
        <Typography level="h3" py={2} textAlign={"center"}>
          Supporters
        </Typography>
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
          {starlightSupporterData["2024"].supporterLogos.map((sponsor, idx) => {
            return renderLogoRows(idx, sponsor);
          })}
        </Stack>
        <Typography level="h3" py={2} textAlign={"center"}>
          2024 Industry Guests
        </Typography>
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
          {starlightSupporterData["2024"].industryLogos.map((sponsor, idx) => {
            return renderLogoRows(idx, sponsor);
          })}
        </Stack>
      </PageSection>
      <PageSection title="2024 Submissions">
        <Grid container flexGrow={1} rowSpacing={3}>
          {starlightProjectData.map((props) => (
            <Grid xs={12} md={6} key={props.name}>
              <ProjectCard {...props} trainee={true} />
            </Grid>
          ))}
        </Grid>
      </PageSection>
    </>
  );
}

function renderLogoRows(idx: number, sponsor: SponsorInfo) {
  return (
    <AspectRatio
      key={idx}
      variant="plain"
      ratio="6/3"
      objectFit="contain"
      sx={{
        display: "flex",
        margin: "auto",
        height: 50,
        width: "100%",
        maxWidth: 170,
        padding: 0.5,
      }}
    >
      <Link target="_blank" href={sponsor.url}>
        <Image src={sponsor.logo} alt={sponsor.name} fill priority />
      </Link>
    </AspectRatio>
  );
}
