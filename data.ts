import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import DiscordIcon from "./components/nav/DiscordIcon";

// General stuff:
// - All images need to go somewhere in /public, and the links are rooted at the /public folder
// - Available icons can be found here: https://mui.com/material-ui/material-icons/

// Pages and links displayed on nav
// Probably shouldn't be touched
export const navData = [
  { text: "About", href: "/about-us" },
  { text: "Projects", href: "/our-projects" },
  { text: "Events", href: "/events" },
  { text: "Starlight", href: "/starlight" },
  { text: "Techspire", href: "/techspire" },
  { text: "Get Involved", href: "/get-involved" },
  { text: "Sponsors", href: "/supporters" },
];

// Links to socials on nav
export const socialsData = [
  { Icon: GitHub, href: "https://github.com/devsoc-unsw" },
  { Icon: Facebook, href: "https://www.facebook.com/devsocUNSW/" },
  { Icon: Instagram, href: "https://www.instagram.com/devsoc_unsw/" },
  { Icon: LinkedIn, href: "https://www.linkedin.com/company/97436660/" },
  { Icon: DiscordIcon, href: "https://discord.com/invite/u9p34WUTcs" },
];
