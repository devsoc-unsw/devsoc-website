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
import { PersonProps } from './app/(pages)/about-us/page';
import { RecruitmentProps } from './app/(pages)/get-involved/page';
import DiscordIcon from './components/nav/DiscordIcon';
import { ProjectCardProps } from './components/ProjectCard';

import janeStreet from './assets/jane_street.svg';
import macquarie from './assets/macquarie.svg';
import tiktok from './assets/tiktok.svg';
import acnc from './assets/ACNC-Registered-Charity-Logo_RGB.png';
import csesoc from './assets/csesocwhite.png';
import {StaticImport} from "next/dist/shared/lib/get-img-props";

// General stuff:
// - All images need to go somewhere in /public, and the links are rooted at the /public folder
// - Available icons can be found here: https://mui.com/material-ui/material-icons/

// Pages and links displayed on nav
// Probably shouldn't be touched
export const navData = [
  { text: 'About Us', href: '/about-us' },
  { text: 'Our Projects', href: '/our-projects' },
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
export const projectData: Omit<ProjectCardProps, 'trainee'>[] = [
  {
    name: "Notangles",
    desc: "An interactive drag-and-drop timetable planner designed to help UNSW students plan their ideal weekly timetable.",
    logoUrl: "/projects/notangles/logo.png",
    thumbnailUrl: "/projects/notangles/thumbnail.png",
    projectUrl: "https://notangles.devsoc.app/",
    status: "Operational"
  },
  {
    name: "Circles",
    desc: "A UNSW degree planner where you can explore and validate your degree structure.",
    logoUrl: "/projects/circles/logo.png",
    thumbnailUrl: "/projects/circles/thumbnail.png",
    projectUrl: "https://circles.devsoc.app/",
    status: "Operational"
  },
  {
    name: "Unilectives",
    desc: "Your one-stop shop for UNSW course and elective reviews.",
    logoUrl: "/projects/unilectives/logo.png",
    thumbnailUrl: "/projects/unilectives/thumbnail.png",
    projectUrl: "https://unilectives.devsoc.app/",
    status: "Operational"
  },
  {
    name: "Structs.sh",
    desc: "An interactive data structure and algorithm visualiser and educational platform for computer science students.",
    logoUrl: "/projects/structs/logo.png",
    thumbnailUrl: "/projects/structs/thumbnail.png",
    projectUrl: "https://structs.sh/",
    status: "Operational"
  },
  {
    name: "Freerooms",
    desc: "A tool to view the timetable of any room on campus, and find an available room that suits all your needs.",
    logoUrl: "/projects/freerooms/logo.png",
    thumbnailUrl: "/projects/freerooms/thumbnail.png",
    projectUrl: "https://freerooms.devsoc.app/",
    status: "Operational"
  },
  {
    name: "Jobsboard",
    desc: "A portal for students to explore job openings offered by our sponsors and other tech companies.",
    logoUrl: "/projects/jobsboard/logo.png",
    thumbnailUrl: "/projects/jobsboard/thumbnail.png",
    projectUrl: "https://jobsboard.csesoc.unsw.edu.au/",
    status: "Operational"
  },
  {
    name: "Chaos",
    desc: "A platform for simplifying applying and recruiting for student society subcommittees at UNSW.",
    logoUrl: "/projects/chaos/logo.png",
    thumbnailUrl: "/projects/chaos/thumbnail.png",
    status: "Operational"
  },
];

export const traineeProjectData: Omit<ProjectCardProps, 'trainee'>[] = [
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
    thumbnailUrl: "/traineeProjects/loft.png"
  },
];

// People displayed in the "Meet the Team" section of "About Us"
// If no image set, an animated gray circle appears
export const teamData: PersonProps[] = [
  { name: "Bob Chen", title: "Co-President", imgUrl: '/people/pres-nf.jpeg' },
  { name: "Sally Sun", title: "Co-President", imgUrl: '/people/pres-nm.png' },
  { name: "Jeremy Le", title: "Administrative Officer", imgUrl: '/people/admin.jpg' },
  { name: "Michael Girikallo", title: "GEDI Officer", imgUrl: '/people/gedi.jpeg' },
  { name: "Audrey Tanama", title: "VP (Internals)", imgUrl: '/people/vpi.jpeg' },
  { name: "Henry Guo", title: "VP (Operations)", imgUrl: '/people/vpo.jpeg' },
  { name: "Manhua Lu", title: "VP (Course Projects)", imgUrl: '/people/vpc.jpeg' },
  { name: "Franco Reyes", title: "VP (Standalone Projects)", imgUrl: '/people/vps.jpeg' },
];

// Data for the "Join DevSoc" section
// Should set/unset applicationUrl to mark recruitment as open/closed
export const recruitmentData: RecruitmentProps[] = [
  { position: "Directors", Icon: Lightbulb },
  { position: "Subcommittee", Icon: Groups },
  { position: "Training Leads", Icon: CoPresent },
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
        logo: "https://paragonnational.org/Companies/CitSec.png",
        url: "https://www.citadelsecurities.com/"
      },
      {
        name: "imc",
        logo: "https://www.csesoc.unsw.edu.au/img/imc.8b57c3e7.png",
        url: "https://www.imc.com/"
      },
      {
        name: "neara",
        logo: "https://neara.com/wp-content/uploads/2023/03/footer-white-logo-with-red-icon.png",
        url: "https://neara.com/"
      },
      {
        name: "SafetyCulture",
        logo: "https://help.comtrac.com.au/hs-fs/hubfs/SafetyCulture%20-%20Full%20Logo%20-%20Light-1.png?width=800&height=214&name=SafetyCulture%20-%20Full%20Logo%20-%20Light-1.png",
        url: "https://safetyculture.com/"
      },
      {
        name: "Zurich",
        logo: "https://gi.zurich.com.hk/idp/resources/definition/generic/Resources/en/us/logo_zurich_white__1657974027000.png",
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
        logo: "https://bitsinglass.com/wp-content/uploads/2021/04/Appian-Logo_White.png",
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
        logo: "https://assessment-portal.optiver.com/images/logos/optiver_main_logo_white.png",
        url: "https://optiver.com/"
      },
      {
        name: "quantium",
        logo: "https://becarwise.com.au/wp-content/uploads/2022/04/quantium-logo-w.png",
        url: "https://quantium.com/"
      },
      {
        name: "Quickli",
        logo: "https://quickli.com.au/_next/image?url=%2Fbrand_logos%2Fquickli-sm.png&w=256&q=75",
        url: "https://quickli.com.au/"
      },
      {
        name: "revolutioniseSPORT",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQDYA_qERK_e76kd38L6EFbM1kdOMZyB7-99UlXQDSHA&s",
        url: "https://www.revolutionise.com.au/"
      },
      {
        name: "RecordPoint",
        logo: "https://theme.zdassets.com/theme_assets/139762/824b3de04cf1e19ad190af6e4db4aba86773ab66.png",
        url: "https://www.recordpoint.com/"
      },
      {
        name: "SIG",
        logo: "https://media.cdn.gradconnection.com/uploads/e0f736e2-e850-44cf-8f24-403715f73268-e0f736e2-e850-44cf-8f24-403715f73268-e0f736_zHHGBsa.png",
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
