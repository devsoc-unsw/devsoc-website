import React from "react";
import PageSection from "../../../components/PageSection";
import { Box, StepIndicator } from "@mui/joy";
import type { Metadata } from "next";
import { Typography } from "@mui/material";
import { TechspireSpeakersSection } from "../../../components/TechspireSpeakersSection";
import Stepper from "@mui/joy/Stepper";
import Step from "@mui/joy/Step";
import KeyboardVoiceRoundedIcon from "@mui/icons-material/KeyboardVoiceRounded";
import WavingHandRoundedIcon from "@mui/icons-material/WavingHandRounded";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";

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
        <StepperLabel text="Introduction" />
      </Step>
      <Step
        orientation="vertical"
        indicator={
          <StepIndicator variant="solid" color="primary">
            <KeyboardVoiceRoundedIcon />
          </StepIndicator>
        }
      >
        <StepperLabel text="Talks"></StepperLabel>
      </Step>
      <Step
        orientation="vertical"
        disabled
        indicator={
          <StepIndicator variant="solid" color="primary">
              <BakeryDiningIcon />
          </StepIndicator>
        }
      >
        <StepperLabel text="Food + Intermission"></StepperLabel>
      </Step>
      <Step
          orientation="vertical"
          indicator={
              <StepIndicator variant="solid" color="primary">
                  <KeyboardVoiceRoundedIcon />
              </StepIndicator>
          }
      >
          <StepperLabel text="Talks"></StepperLabel>
      </Step>
    </Stepper>
  );
}

export default function TechspireProjectsPage() {
    return (
        <>
            <PageSection title="Techspire">
                <Typography textAlign="justify">
                    Techspire is DevSoc’s flagship technology conference event. It is run in a TED Talk format with industry,
                    university, and student speakers presenting on their experiences and learnings. Each year revolves around
                    a different theme and speakers are encouraged to ground their discussions around it. The event runs for 3 hours and is catered.
                </Typography>
                <Typography level="h3" py={2} textAlign={"center"}>
                    Schedule
                </Typography>
                <TechspireStepper />
                <Box sx={{ pb: 4}} />
            </PageSection>
            
            <TechspireSpeakersSection />
        </>
    );
}