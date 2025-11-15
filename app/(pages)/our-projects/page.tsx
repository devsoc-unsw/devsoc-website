import PageSection from "../../../components/PageSection";
import { Grid, Typography } from "@mui/joy";
import { ProjectCard, TraineeCard } from "../../../components/ProjectCard";
import type { Metadata } from "next";
import {
  collabProjectsData,
  flagshipProjectData,
  traineeProjectData,
} from "../../../data/project";

export const metadata: Metadata = {
  title: "Our Projects | DevSoc UNSW",
  description:
    "Explore the variety of different projects developed by DevSoc for UNSW students!",
};

export default function OurProjectsPage() {
  return (
    <>
      <PageSection title="Our Projects">
        <Typography textAlign='justify' mb={2}>
          DevSoc is all about building projects that matter. Each year, our student developers 
          drive forward our <b>Flagship Projects</b>, delivering solutions that enhance and 
          simplify the student experience, making university life more engaging, efficient, 
          and accessible.
        </Typography>
        <Typography textAlign='justify' mb={2}>
          In addition, we collaborate with <b>UNSW Engineering</b> on real-world applications, 
          giving students the chance to contribute to impactful projects beyond the society.
        </Typography>
        <Typography textAlign='justify' mb={2}>
          Through our <b>Termly Training Program</b>, students gain hands-on experience, upskill 
          in modern development practices, and deliver their own projects— turning learning into 
          action.
        </Typography>
        <Typography textAlign='justify'>
          At DevSoc, learning goes hand-in-hand with creating. Members work on real projects, 
          develop practical skills, and contribute to tools that make life at UNSW better for everyone.
        </Typography>
      </PageSection>
      <PageSection title="Flagship Projects">
        <Grid container flexGrow={1} rowSpacing={3}>
          {flagshipProjectData.map((props) => (
            <Grid xs={12} md={6} key={props.name}>
              <ProjectCard {...props} />
            </Grid>
          ))}
        </Grid>
      </PageSection>
      {collabProjectsData.length > 0 && (
        <PageSection title="Collab Projects">
          <Grid container flexGrow={1} rowSpacing={3}>
            {collabProjectsData.map((props) => (
              <Grid xs={12} md={6} key={props.name}>
                <ProjectCard {...props} />
              </Grid>
            ))}
          </Grid>
        </PageSection>
      )}
      {traineeProjectData.length > 0 && (
        <PageSection title="Trainee Projects">
          <Grid container flexGrow={1} rowSpacing={3}>
            {traineeProjectData.map((props) => (
              <Grid xs={12} md={6} key={props.name}>
                <TraineeCard {...props} />
              </Grid>
            ))}
          </Grid>
        </PageSection>
      )}
    </>
  );
}
