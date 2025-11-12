import React from "react";
import type { Metadata } from "next";
import SupportersPageContent, {
  DisplayLogo,
  InfoBar,
} from "../../../components/SupporterSection";
import { Typography, Stack } from "@mui/joy";
import PageSection from "../../../components/PageSection";
import { affilateData, projectSupporterData } from "../../../data/supporters";

export const metadata: Metadata = {
  title: "Supporters | DevSoc UNSW",
  description: "Information on DevSoc's sponsors, supporters and collaborators",
};

export default function SupportersPage() {
  return (
    <>
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
