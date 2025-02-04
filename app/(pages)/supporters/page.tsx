import React from "react";
import { projectSupporterData, affilateData } from "../../../data";
import type { Metadata } from "next";
import SupportersPageContent, {
  DisplayLogo,
} from "../../../components/SupporterSection";
import { Typography, Stack } from "@mui/joy";
import PageSection from "../../../components/PageSection";

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
