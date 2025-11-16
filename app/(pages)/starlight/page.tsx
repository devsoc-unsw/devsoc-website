import React from "react";
import PageSection from "../../../components/PageSection";
import { Box, Grid, StepIndicator, stepIndicatorClasses } from "@mui/joy";
import type { Metadata } from "next";
import {AspectRatio, Link, Stack, Typography} from "@mui/material";
import { StarlightProjectsSection } from "../../../components/StarlightProjectsSection";
import Stepper from "@mui/joy/Stepper";
import Step, { stepClasses } from "@mui/joy/Step";
import HailRoundedIcon from "@mui/icons-material/HailRounded";
import KeyboardVoiceRoundedIcon from "@mui/icons-material/KeyboardVoiceRounded";
import WavingHandRoundedIcon from "@mui/icons-material/WavingHandRounded";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

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
             <WavingHandRoundedIcon />
          </StepIndicator>
        }
      >
        <StepperLabel text="Meet the projects" />
      </Step>
      <Step
        orientation="vertical"
        indicator={
          <StepIndicator variant="solid" color="primary">
            <KeyboardVoiceRoundedIcon />
          </StepIndicator>
        }
      >
        <StepperLabel text="QA Panel"></StepperLabel>
      </Step>
      <Step
        orientation="vertical"
        disabled
        indicator={
          <StepIndicator variant="solid" color="primary">
            <EmojiEventsIcon />
          </StepIndicator>
        }
      >
        <StepperLabel text="Prize Annoucement"></StepperLabel>
      </Step>
    </Stepper>
  );
}

export default function StarlightProjectsPage() {
  return (
    <>
      <PageSection title="Starlight Showcase">
        <Typography textAlign='justify' mb={2}>
          Starlight is a project showcase that celebrates all kinds of projects built by passionate and 
          aspiring engineers at UNSW. Submissions are open to anyone who has a project they want to share!
          Whether it’s Software, Mechatronics, Aerospace, or any other type of engineering project, you 
          are welcome to submit.
        </Typography>
        <Typography textAlign='justify'>
          The event is open-floor, free for anyone to attend, and fully catered. If you’re interested in 
          exploring what different areas of engineering can offer, this is your go-to event! More 
          information about the event is available{" "}
          <Link
            href="https://www.canva.com/design/DAGkribj1e8/E7BfubxdQQLadKB20Hxzww/view"
            target="_blank"
          >
            here.
          </Link>
        </Typography>
        <Typography level="h3" py={2} textAlign={"center"}>
          Schedule
        </Typography>
        <StarlightStepper />
        <Box sx={{ pb: 4}} />
      </PageSection>
      
      <StarlightProjectsSection />
    </>
  );
}