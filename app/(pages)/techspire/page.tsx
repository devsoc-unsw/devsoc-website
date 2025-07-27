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
  title: "Techspire | DevSoc UNSW",
  description:
    "DevSoc’s flagship annual technology conference event.",
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

function TechspireStepper() {
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
        <StepperLabel text="4pm - Meet the projects" />
      </Step>
      <Step
        orientation="vertical"
        indicator={
          <StepIndicator variant="solid" color="primary">
            <KeyboardVoiceRoundedIcon />
          </StepIndicator>
        }
      >
        <StepperLabel text="6pm - QA Panel"></StepperLabel>
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
        <StepperLabel text="7pm - Prize Annoucement"></StepperLabel>
      </Step>
    </Stepper>
  );
}

export default function TechspireProjectsPage() {
    return (
        <>
            <PageSection title="Techspire">
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
                <TechspireStepper />
                <Box sx={{ pb: 4}} />
            </PageSection>
            
            <StarlightProjectsSection />
        </>
    );
}