import React from "react";
import PageSection from "../../../components/PageSection";
import { Grid } from "@mui/joy";
import { ProjectCard } from "../../../components/ProjectCard";
import type { Metadata } from "next";
import { flagshipProjectData, traineeProjectData } from "../../../data/project";

export const metadata: Metadata = {
  title: "Our Projects | DevSoc UNSW",
  description:
    "Explore the variety of different projects developed by DevSoc for UNSW students!",
};

export default function OurProjectsPage() {
  return (
    <>
      <PageSection title="Flagship Projects">
        <Grid container flexGrow={1} rowSpacing={3}>
          {flagshipProjectData.map((props) => (
            <Grid xs={12} md={6} key={props.name}>
              <ProjectCard {...props} />
            </Grid>
          ))}
        </Grid>
      </PageSection>
      {traineeProjectData.length > 0 && (
        <PageSection title="Trainee Projects">
          <Grid container flexGrow={1} rowSpacing={3}>
            {traineeProjectData.map((props) => (
              <Grid xs={12} md={6} key={props.name}>
                <ProjectCard {...props} />
              </Grid>
            ))}
          </Grid>
        </PageSection>
      )}
    </>
  );
}
