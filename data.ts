import {
  CoPresent,
  EmojiObjects as Lightbulb,
  Facebook,
  GitHub,
  Groups,
  Instagram,
  LinkedIn,
  School
} from '@mui/icons-material';
import { RecruitmentProps } from './app/(pages)/get-involved/page';
import DiscordIcon from './components/nav/DiscordIcon';
import { ProjectCardProps } from './components/ProjectCard';

import janeStreet from './assets/jane_street.svg';
import rs from './assets/rs.png';
import rp from './assets/rp.png';
import sig from './assets/sig.png';
import imc from './assets/imc.png';
import sc from './assets/sc.png';
import quickli from './assets/quickli.png';
import zurich from './assets/zurich.png';
import citadel from './assets/citadel.png';
import optiver from './assets/optiver.png';
import macquarie from './assets/macquarie.svg';
import tiktok from './assets/tiktok.svg';
import acnc from './assets/acnc.png';
import cse from './assets/CSE.jpeg';
import csesoc from './assets/csesocwhite.png';
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {ExecProps} from "./components/PeopleSection";

// General stuff:
// - All images need to go somewhere in /public, and the links are rooted at the /public folder
// - Available icons can be found here: https://mui.com/material-ui/material-icons/

// Pages and links displayed on nav
// Probably shouldn't be touched
export const navData = [
  { text: 'About Us', href: '/about-us' },
  { text: 'Our Projects', href: '/our-projects' },
  { text: 'Starlight', href: '/starlight'},
  { text: 'Get Involved', href: '/get-involved' },
  { text: 'Supporters', href: '/supporters' },
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
export const projectData: Omit<ProjectCardProps, "trainee">[] = [
  {
    name: "Notangles",
    desc: "An interactive drag-and-drop timetable planner designed to help UNSW students plan their ideal weekly timetable.",
    logoUrl: "/projects/notangles/logo.png",
    thumbnailUrl: "/projects/notangles/thumbnail.png",
    projectUrl: "https://notangles.devsoc.app/",
    status: "Operational",
  },
  {
    name: "Circles",
    desc: "A UNSW degree planner where you can explore and validate your degree structure.",
    logoUrl: "/projects/circles/logo.png",
    thumbnailUrl: "/projects/circles/thumbnail.png",
    projectUrl: "https://circles.devsoc.app/",
    status: "Operational",
  },
  {
    name: "Unilectives",
    desc: "Your one-stop shop for UNSW course and elective reviews.",
    logoUrl: "/projects/unilectives/logo.png",
    thumbnailUrl: "/projects/unilectives/thumbnail.png",
    projectUrl: "https://unilectives.devsoc.app/",
    status: "Operational",
  },
  {
    name: "Structs.sh",
    desc: "An interactive data structure and algorithm visualiser and educational platform for computer science students.",
    logoUrl: "/projects/structs/logo.png",
    thumbnailUrl: "/projects/structs/thumbnail.png",
    projectUrl: "https://structs.sh/",
    status: "Operational",
  },
  {
    name: "Freerooms",
    desc: "A tool to view the timetable of any room on campus, and find an available room that suits all your needs.",
    logoUrl: "/projects/freerooms/logo.png",
    thumbnailUrl: "/projects/freerooms/thumbnail.png",
    projectUrl: "https://freerooms.devsoc.app/",
    status: "Operational",
  },
  {
    name: "Jobsboard",
    desc: "A portal for students to explore job openings offered by our sponsors and other tech companies.",
    logoUrl: "/projects/jobsboard/logo.png",
    thumbnailUrl: "/projects/jobsboard/thumbnail.png",
    projectUrl: "https://jobsboard.csesoc.unsw.edu.au/",
    status: "Operational",
  },
  {
    name: "Chaos",
    desc: "A platform for simplifying applying and recruiting for student society subcommittees at UNSW.",
    logoUrl: "/projects/chaos/logo.png",
    thumbnailUrl: "/projects/chaos/thumbnail.png",
    status: "Operational",
  },
];

export const traineeProjectData: Omit<ProjectCardProps, "trainee">[] = [
  {
    name: "Unswipe (24T1)",
    desc: "Find the perfect groupmate for your CSE course with this real-time messaging app.",
    projectUrl: "https://github.com/devsoc-unsw/trainee-uranus-24t1",
    thumbnailUrl: "/traineeProjects/unswipe.png"
  },
  {
    name: "Moodify (23T3)",
    desc: "Discover the power of personalized playlists tailored to your mood and activities with Moodify!",
    projectUrl: "https://github.com/csesoc/trainee-3-23t3",
    thumbnailUrl: "/traineeProjects/moodify.png",
  },
  {
    name: "Waves (23T1)",
    desc: "An app to help coordinate and arrange the 'when' and the 'where' of meetings.",
    projectUrl: "https://github.com/csesoc/trainee-2-23t1",
    thumbnailUrl: "/traineeProjects/waves.png",
  },
  {
    name: "Loft (22T3)",
    desc: "A customisable productivity app with multiple widgets such as a pomodoro timer, YouTube player and notepad.",
    projectUrl: "https://github.com/csesoc/trainee-3-22t3",
    thumbnailUrl: "/traineeProjects/loft.png",
  },
];

export const starlightProjectData: Omit<ProjectCardProps, "trainee">[] = [
  {
    name: "Your project can be here!",
    desc: "Submissions are still open! Take your chance to showcase your favourite project through the link below!",
    projectUrl: "https://forms.gle/FMGM8YbrhB4kXKUe8",
    thumbnailUrl: "/starlightProjects/placeholder.jpg"
  },
  {
    name: "Browoser",
    desc: "Funni browser app for Apple Watch built in SwiftUI. Also contains a useless AI to comfort you when you're lonely!!",
    projectUrl: "https://apps.apple.com/us/app/browoser/id6463472872",
    thumbnailUrl: "/starlightProjects/24_04_Browoser.png"
  },
  {
    name: "Hardstuck Debating Script",
    desc: "Automatically create debating scrim groups with this python script!",
    projectUrl: "https://github.com/TAS-scorchedshadow/DebatingAlgorithm",
    thumbnailUrl: "/starlightProjects/24_03_HardstuckDebating.png"
  },
  {
    name: "Groveify - 24T1 Trainee Project",
    desc: "Groveify is a habit tracker and productivity manager that comes with a cute little world to keep you going!",
    projectUrl: "https://groveify.com",
    thumbnailUrl: "/starlightProjects/24_02_Groveify.png"
  },
  {
    name: "Generic Assembler",
    desc: "Convert assembly in a custom MIPS-Like assembly language into binary or hex format!",
    projectUrl: "https://github.com/JamesTreloar/GenericAssembler",
    thumbnailUrl: "/starlightProjects/24_01_GenericAssembler.png"
  },
  {
    name: "Riflelytics",
    desc: "Data aggregation and visualisation website for rifle shooting. Easily integrates with existing target hardware!",
    thumbnailUrl:"/starlightProjects/24_05_riflelytics.png"
  },
]
// Data for the "Join DevSoc" section
// Should set/unset applicationUrl to mark recruitment as open/closed
export const recruitmentData: RecruitmentProps[] = [
  { position: "Directors", Icon: Lightbulb },
  { position: "Subcommittee", Icon: Groups },
  {
    position: "Training Leads",
    Icon: CoPresent,
  },
  { position: "Trainees", Icon: School },
];

export const feedbackFormUrl = "https://forms.gle/TjHcB9MHf6AwojiE8";

export interface SponsorInfo {
  name: string;
  logo: StaticImport | string;
  url: string;
}

export interface SupporterData {
  title: string;
  subtitle?: string;
  logos: SponsorInfo[];
}

export const projectSupporterData: SupporterData[] = [
  {
    title: "Affiliations",
    logos: [
      {
        name: "Registered Charity",
        logo: acnc,
        url: "https://www.acnc.gov.au/charity/charities/7fa763bf-0876-ee11-8179-00224893b0ed/profile"
      },
      {
        name: "School of CSE",
        logo: cse,
        url: "https://www.unsw.edu.au/engineering/our-schools/computer-science-and-engineering"
      },
      {
        name: "CSESoc",
        logo: csesoc,
        url: "https://www.csesoc.unsw.edu.au/"
      }
    ]
  },
  {
    title: "Project Sponsors",
    logos: [
      {
        name: "Jane Street",
        logo: janeStreet,
        url: "https://www.janestreet.com/"
      },
      {
        name: "TikTok",
        logo: tiktok,
        url: "https://careers.tiktok.com/"
      },
      {
        name: "Macquarie",
        logo: macquarie,
        url: "https://www.macquarie.com"
      }
    ]
  },
  {
    title: "Diamond Tier",
    subtitle: "CSESoc & DevSoc Joint Sponsorship Drive",
    logos: [
      {
        name: "Jane Street",
        logo: janeStreet,
        url: "https://www.janestreet.com/"
      },
      {
        name: "TikTok",
        logo: tiktok,
        url: "https://careers.tiktok.com/"
      }
    ]
  },
  {
    title: "Gold Tier",
    subtitle: "CSESoc & DevSoc Joint Sponsorship Drive",
    logos: [
      {
        name: "Atlassian",
        logo: "https://www.skillfinder.com.au/media/wysiwyg/atlassian-logo-gradient-horizontal-white.png",
        url: "https://www.atlassian.com/"
      },
      {
        name: "Citadel",
        logo: citadel,
        url: "https://www.citadelsecurities.com/"
      },
      {
        name: "imc",
        logo: imc,
        url: "https://www.imc.com/"
      },
      {
        name: "neara",
        logo: "https://neara.com/wp-content/uploads/2023/03/footer-white-logo-with-red-icon.png",
        url: "https://neara.com/"
      },
      {
        name: "SafetyCulture",
        logo: sc,
        url: "https://safetyculture.com/"
      },
      {
        name: "Zurich",
        logo: zurich,
        url: "https://www.zurich.com.au/"
      }
    ]
  },
  {
    title: "Silver Tier",
    subtitle: "CSESoc & DevSoc Joint Sponsorship Drive",
    logos: [
      {
        name: "appian",
        logo: "https://www.cds.co.uk/hs-fs/hubfs/Appian-white-logo.png?width=1200&height=627&name=Appian-white-logo.png",
        url: "https://appian.com/"
      },
      {
        name: "FlowTraders",
        logo: "https://paragonnational.org/Companies/flow.png",
        url: "https://www.flowtraders.com/"
      },
      {
        name: "Macquarie",
        logo: macquarie,
        url: "https://www.macquarie.com"
      },
      {
        name: "Optiver",
        logo: optiver,
        url: "https://optiver.com/"
      },
      {
        name: "quantium",
        logo: "https://becarwise.com.au/wp-content/uploads/2022/04/quantium-logo-w.png",
        url: "https://quantium.com/"
      },
      {
        name: "Quickli",
        logo: quickli,
        url: "https://quickli.com.au/"
      },
      {
        name: "revolutioniseSPORT",
        logo: rs,
        url: "https://www.revolutionise.com.au/"
      },
      {
        name: "RecordPoint",
        logo: rp,
        url: "https://www.recordpoint.com/"
      },
      {
        name: "SIG",
        logo: sig,
        url: "https://sig.com/"
      },
      {
        name: "ZIP",
        logo: "https://media.boohoo.com/i/boohooamplience/zippay_new_white_nobg_1309?fmt=webp",
        url: "https://zip.co/au"
      },
      {
        name: "Canva",
        logo: "https://www.edigitalagency.com.au/wp-content/uploads/Canva-wordmark-logo-white-font-png.png",
        url: "https://www.canva.com/"
      }
    ]
  }
];
