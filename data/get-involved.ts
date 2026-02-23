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
    applicationUrl: "https://forms.gle/jmK9JzB1YQpXyq2m6",
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
