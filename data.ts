import {
  CoPresent,
  EmojiObjects as Lightbulb,
  Facebook,
  GitHub,
  Groups,
  Instagram,
  LinkedIn,
  School,
} from "@mui/icons-material";
import { RecruitmentProps } from "./app/(pages)/get-involved/page";
import DiscordIcon from "./components/nav/DiscordIcon";

import janeStreet from "./assets/jane_street.svg";
import rs from "./assets/rs.png";
import rp from "./assets/rp.png";
import sig from "./assets/sig.png";
import imc from "./assets/imc.png";
import sc from "./assets/sc.png";
import quickli from "./assets/quickli.png";
import qrt from "./assets/qrt.svg";
import zurich from "./assets/zurich.png";
import citadel from "./assets/citadel.png";
import optiver from "./assets/optiver.png";
import macquarie from "./assets/macquarie.svg";
import tiktok from "./assets/tiktok.svg";
import acnc from "./assets/acnc.png";
import cse from "./assets/CSE.jpeg";
import arc from "./assets/arc.png";
import tradedesk from "./assets/thetradedesk.png";
import lyra from "./assets/lyra.svg";
import arista from "./assets/arista.png";
import flowtraders from "./assets/flowtraders.png";
import neara from "./assets/neara.webp";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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

// Data displayed on the cards of the "Our Projects" page
// If "projectUrl" is not set, then the card will say 'Coming soon!'

// Data for the "Join DevSoc" section
// Should set/unset applicationUrl to mark recruitment as open/closed
export const recruitmentData: RecruitmentProps[] = [
  {
    position: "Starlight",
    Icon: AutoAwesome,
  },
  {
    position: "Directors",
    Icon: Group,
    applicationUrl: "https://forms.gle/Q5vGYt6rhjexTocU8",
  },
  {
    position: "Subcommittee",
    Icon: Groups,
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

export interface SponsorInfo {
  name: string;
  logo: StaticImport | string;
  url: string;
}

export interface SupporterData {
  infoBar?: string;
  title: string;
  subtitle?: string;
  logos: SponsorInfo[];
}

export const affilateData: SupporterData = {
  title: "Affiliations",
  logos: [
    {
      name: "Arc",
      logo: arc,
      url: "https://www.arc.unsw.edu.au/",
    },
    {
      name: "Registered Charity",
      logo: acnc,
      url: "https://www.acnc.gov.au/charity/charities/7fa763bf-0876-ee11-8179-00224893b0ed/profile",
    },
    {
      name: "School of CSE",
      logo: cse,
      url: "https://www.unsw.edu.au/engineering/our-schools/computer-science-and-engineering",
    },
  ],
};
export const projectSupporterData: { [year: number]: SupporterData[] } = {
  2025: [
    {
      title: "Platinum Tier",
      logos: [
        {
          name: "Arista",
          logo: arista,
          url: "https://www.arista.com/en/",
        },
        {
          name: "The Trade Desk",
          logo: tradedesk,
          url: "https://careers.thetradedesk.com/",
        },
      ],
    },
    {
      title: "Gold Tier",
      logos: [
        {
          name: "Jane Street",
          logo: janeStreet,
          url: "https://www.janestreet.com/",
        },
        {
          name: "Safety Culture",
          logo: sc,
          url: "https://safetyculture.com/",
        },
      ],
    },
    {
      title: "Silver Tier",
      logos: [
        {
          name: "Citadel",
          logo: citadel,
          url: "https://www.citadelsecurities.com/",
        },
        {
          name: "imc",
          logo: imc,
          url: "https://www.imc.com/",
        },
        {
          name: "Lyra Technologies",
          logo: lyra,
          url: "https://www.lyratechnologies.com.au/",
        },
        {
          name: "QRT",
          logo: qrt,
          url: "https://www.qube-rt.com/careers/",
        },
        {
          name: "Record Point",
          logo: rp,
          url: "https://www.recordpoint.com/",
        },
        {
          name: "TikTok",
          logo: tiktok,
          url: "https://careers.tiktok.com/",
        },
      ],
    },
  ],
  2024: [
    {
      infoBar:
        "In 2024, CSESoc and DevSoc collaborated on a joint sponsorship programme.",
      title: "Project Sponsors",
      logos: [
        {
          name: "Jane Street",
          logo: janeStreet,
          url: "https://www.janestreet.com/",
        },
        {
          name: "TikTok",
          logo: tiktok,
          url: "https://careers.tiktok.com/",
        },
        {
          name: "Macquarie",
          logo: macquarie,
          url: "https://www.macquarie.com",
        },
      ],
    },
    {
      title: "Diamond Tier",
      // subtitle: "CSESoc & DevSoc Joint Sponsorship Drive",
      logos: [
        {
          name: "Jane Street",
          logo: janeStreet,
          url: "https://www.janestreet.com/",
        },
        {
          name: "TikTok",
          logo: tiktok,
          url: "https://careers.tiktok.com/",
        },
      ],
    },
    {
      title: "Gold Tier",
      // subtitle: "CSESoc & DevSoc Joint Sponsorship Drive",
      logos: [
        {
          name: "Atlassian",
          logo: "https://www.skillfinder.com.au/media/wysiwyg/atlassian-logo-gradient-horizontal-white.png",
          url: "https://www.atlassian.com/",
        },
        {
          name: "Citadel",
          logo: citadel,
          url: "https://www.citadelsecurities.com/",
        },
        {
          name: "imc",
          logo: imc,
          url: "https://www.imc.com/",
        },
        {
          name: "neara",
          logo: neara,
          url: "https://neara.com/",
        },
        {
          name: "Safety Culture",
          logo: sc,
          url: "https://safetyculture.com/",
        },
        {
          name: "Zurich",
          logo: zurich,
          url: "https://www.zurich.com.au/",
        },
      ],
    },
    {
      title: "Silver Tier",
      // subtitle: "CSESoc & DevSoc Joint Sponsorship Drive",
      logos: [
        {
          name: "appian",
          logo: "https://www.cds.co.uk/hs-fs/hubfs/Appian-white-logo.png?width=1200&height=627&name=Appian-white-logo.png",
          url: "https://appian.com/",
        },
        {
          name: "FlowTraders",
          logo: flowtraders,
          url: "https://www.flowtraders.com/",
        },
        {
          name: "Macquarie",
          logo: macquarie,
          url: "https://www.macquarie.com",
        },
        {
          name: "Optiver",
          logo: optiver,
          url: "https://optiver.com/",
        },
        {
          name: "quantium",
          logo: "https://becarwise.com.au/wp-content/uploads/2022/04/quantium-logo-w.png",
          url: "https://quantium.com/",
        },
        {
          name: "Quickli",
          logo: quickli,
          url: "https://quickli.com.au/",
        },
        {
          name: "revolutioniseSPORT",
          logo: rs,
          url: "https://www.revolutionise.com.au/",
        },
        {
          name: "RecordPoint",
          logo: rp,
          url: "https://www.recordpoint.com/",
        },
        {
          name: "SIG",
          logo: sig,
          url: "https://sig.com/",
        },
        {
          name: "ZIP",
          logo: "https://media.boohoo.com/i/boohooamplience/zippay_new_white_nobg_1309?fmt=webp",
          url: "https://zip.co/au",
        },
        {
          name: "Canva",
          logo: "https://www.edigitalagency.com.au/wp-content/uploads/Canva-wordmark-logo-white-font-png.png",
          url: "https://www.canva.com/",
        },
      ],
    },
  ],
};
