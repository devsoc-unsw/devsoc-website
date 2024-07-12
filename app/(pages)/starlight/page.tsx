import React from "react";
import PageSection from "../../../components/PageSection";
import { Box, Grid, StepIndicator, stepIndicatorClasses } from "@mui/joy";
import { starlightProjectData } from "../../../data";
import { ProjectCard } from "../../../components/ProjectCard";
import type { Metadata } from "next";
import { Typography } from "@mui/material";
import Stepper from "@mui/joy/Stepper";
import Step, { stepClasses } from "@mui/joy/Step";
import HailRoundedIcon from "@mui/icons-material/HailRounded";
import KeyboardVoiceRoundedIcon from "@mui/icons-material/KeyboardVoiceRounded";
import WavingHandRoundedIcon from "@mui/icons-material/WavingHandRounded";

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
          projects being built by passionate developers at UNSW. Submissions are
          open to everyone that has a project they want to share! Join us on{" "}
          <b>July 19th 4-6:30pm</b> at the <b>Roundhouse</b> to find out more
          about the projects listed below!
        </Typography>
        <Typography level="h3" py={2} textAlign={"center"}>
          Schedule
        </Typography>
        <StarlightStepper />
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
