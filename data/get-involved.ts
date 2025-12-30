import {
  AutoAwesome,
  CoPresent,
  Group,
  Groups,
  School,
} from "@mui/icons-material";
import { RecruitmentProps } from "../app/(pages)/get-involved/page";

// Data displayed on the cards of the "Our Projects" page
// If "projectUrl" is not set, then the card will say 'Coming soon!'

// Data for the "Join DevSoc" section
// Should set/unset applicationUrl to mark recruitment as open/closed
export const recruitmentData: RecruitmentProps[] = [
  // {
  //   position: "Starlight",
  //   Icon: AutoAwesome,
  // },
  {
    position: "Directors",
    Icon: Group,
  },
  {
    position: "Subcommittee",
    Icon: Groups,
    applicationUrl: "https://eminent-chopper-b83.notion.site/2cf49c3a06f6816793ede48af0d3d25a",
  },
  {
    position: "Training Leads",
    Icon: CoPresent,
  },
  {
    position: "Trainees",
    Icon: School,
  },
];

export const feedbackFormUrl = "https://forms.gle/TjHcB9MHf6AwojiE8";
