import React from "react";
import type { Metadata } from "next";
import SupportersPageContent, {
  DisplayLogo,
} from "../../../components/SupporterSection";
import { Typography, Stack, Link } from "@mui/joy";
import PageSection from "../../../components/PageSection";
import { affilateData, projectSupporterData } from "../../../data/supporters";

export const metadata: Metadata = {
  title: "Supporters | DevSoc UNSW",
  description: "Information on DevSoc's sponsors, supporters and collaborators",
};

export default function SupportersPage() {
  return (
    <>
      <PageSection title="Sponsor Us">
        <Typography mb={2}>
          Founded in late 2023, DevSoc has rapidly grown into one of the university’s most dynamic and 
          technically driven communities. In just a short time, our society has earned multiple Arc and 
          Engineering awards, reflecting both our impact and the quality of the initiatives we deliver.
        </Typography>
        <Typography mb={2}>
          DevSoc’s mission is to help students become industry-ready through practical technical experience, 
          project-based learning, and real exposure to software development. Sponsoring DevSoc gives partners 
          direct access to a highly engaged pipeline of emerging developers. Through our events, training program, 
          and flagship projects, sponsors can build brand presence, support skill development, and connect 
          meaningfully with the next generation of tech talent at UNSW.
        </Typography>
        <Typography>
          For enquiries, please contact us at {" "}
          <Link
            href="mailto:sponsorships@devsoc.app"
            target="_blank"
          >
            sponsorships@devsoc.app
          </Link>
        </Typography>
      </PageSection>
      <PageSection title={affilateData.title}>
        <Typography textAlign="center" marginBottom="2rem"></Typography>
        <Stack spacing={4}>
          <DisplayLogo
            data={affilateData.logos}
            logoSize={{ height: 80, maxWidth: 100 }}
          />
        </Stack>
      </PageSection>
      <br />

      <SupportersPageContent projectSupporterData={projectSupporterData} />
    </>
  );
}
