// app/(pages)/supporters/page.tsx
import React from "react";
import { projectSupporterData } from "../../../data";
import SupportersPageContent from "../../../components/SupporterSection";

// Metadata for the page
export const metadata = {
  title: "Supporters | DevSoc UNSW",
  description: "Information on DevSoc's sponsors, supporters and collaborators",
};

export default function SupportersPage() {
  return <SupportersPageContent projectSupporterData={projectSupporterData} />;
}
