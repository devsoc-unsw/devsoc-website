import {
  CoPresent,
  EmojiObjects as Lightbulb,
  Facebook,
  GitHub,
  Groups,
  Instagram,
  LinkedIn,
  School,
  FlightTakeoff,
} from "@mui/icons-material";
import { RecruitmentProps } from "./app/(pages)/get-involved/page";
import DiscordIcon from "./components/nav/DiscordIcon";
import { ProjectCardProps } from "./components/ProjectCard";

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
import unsw from "./assets/unsw.png";
import arc from "./assets/arc.png";
import csesoc from "./assets/csesocwhite.png";
import tradedesk from "./assets/thetradedesk.png";
import lyra from "./assets/lyra.svg";
import arista from "./assets/arista.png";
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
    name: "Chaos",
    desc: "A platform for simplifying applying and recruiting for student society subcommittees at UNSW.",
    logoUrl: "/projects/chaos/logo.png",
    thumbnailUrl: "/projects/chaos/thumbnail.png",
    status: "Operational",
  },
];

export const traineeProjectData: Omit<ProjectCardProps, "trainee">[] = [
  {
    name: "Groveify - 24T1 Trainee Project",
    desc: "Groveify is a habit tracker and productivity manager that comes with a cute little world to keep you going!",
    projectUrl: "https://groveify.com",
    thumbnailUrl: "/traineeProjects/groveify.png",
  },
  {
    name: "UNSWswipe (24T1)",
    desc: "Find the perfect groupmate for your CSE course with this real-time messaging app.",
    projectUrl: "https://github.com/devsoc-unsw/trainee-uranus-24t1",
    thumbnailUrl: "/traineeProjects/unswipe.png",
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
  // {
  //   name: "Your project can be here!",
  //   desc: "Submissions are still open! Take your chance to showcase your favourite project through the link below!",
  //   projectUrl: "https://forms.gle/FMGM8YbrhB4kXKUe8",
  //   thumbnailUrl: "/starlightProjects/placeholder.jpg",
  // },
  {
    name: "LemonOS",
    desc: "Hobby operating system written to run on PC hardware. Contains features and software found in many modern operating systems. Can run software common on Linux/unix systems and even games like DOOM!",
    projectUrl: "https://github.com/LemonOSProject/LemonOS",
    thumbnailUrl: "/starlightProjects/24_16_LemonOS.png",
  },
  {
    name: "Campus Collab - 24T1 Trainee Project",
    desc: "The ultimate platform for connecting and collaborating with fellow students. Effortlessly create and manage project listings and discover exciting events on and off campus!",
    projectUrl: "https://github.com/sohumshah2/campuscollab",
    thumbnailUrl: "/starlightProjects/24_15_CampusCollab.jpg",
  },
  {
    name: "FairShare",
    desc: "A receipt sharing website aimed at helping making splitting bills easier!",
    projectUrl: "https://fairshared.me",
    thumbnailUrl: "starlightProjects/24_17_FairShare.png",
  },
  {
    name: "Discord LeetCode Bot",
    desc: "Get motivated to LeetCode with this customisable Discord bot!",
    projectUrl: "https://github.com/Kaiqi-Liang/LeetCode-Daily",
    thumbnailUrl: "/starlightProjects/24_14_DiscordLeetCodeBot.png",
  },
  {
    name: "Quests - Stamp Rally Management System",
    desc: "A mobile friendly stamp rally management system equipped with tasks, rooms, societies and a raffle developed for MegaLAN Events!",
    projectUrl: "https://github.com/megalan-association/quests",
    thumbnailUrl: "/starlightProjects/24_11_Quests.jpeg",
  },
  {
    name: "Propagate.ink",
    desc: "The website application for visual learners! Create mind maps with accompanying, details and aesthetic notes for each node!",
    projectUrl: "https://www.propagate.ink",
    thumbnailUrl: "/starlightProjects/24_10_Propagate.png",
  },
  {
    name: "Way Home",
    desc: "WayHome is a cross platform location sharing app. Share your location and memories of your favorite places with your pookies!",
    projectUrl: "https://github.com/mt-fns/WayHome",
    thumbnailUrl: "/starlightProjects/24_09_WayHome.png",
  },
  {
    name: "Beem Memo Pay",
    desc: "Capture memories from group expenses and conclude your trips by sharing your favorite moments. Make group expenses on Beem fun and social!",
    projectUrl: "https://github.com/AI-Hack-2024/Beem-MemoPay",
    thumbnailUrl: "/starlightProjects/24_08_BeemMemoPay.png",
  },
  {
    name: "AchieveMint - 24T1 Trainee Project",
    desc: "Enhance your productivity with this all-in-one organization website, featuring a to-do list, note-taking, reminders and a resting page to help you stay on track and achieve more!",
    projectUrl: "https://github.com/devsoc-unsw/trainee-saturn-24t1",
    thumbnailUrl: "/starlightProjects/24_07_AchieveMint.png",
  },
  {
    name: "UNSWipe - 24T1 Trainee Project",
    desc: "Find the perfect groupmate for your CSE course with this real-time messaging app!",
    projectUrl: "https://github.com/devsoc-unsw/trainee-uranus-24t1",
    thumbnailUrl: "/traineeProjects/unswipe.png",
  },
  {
    name: "UNSW Redback Racing - Autonomous Vehicles",
    desc: "Suite of automated systems to allow an autonomous car to percieve and navigate around a circuit. This includes developing both vehicle simulations alongside hardware.",
    projectUrl: "https://www.redbackracing.com/",
    thumbnailUrl:
      "/starlightProjects/24_05_UNSWRedbackRacingAutonomousVehicles.png",
  },
  {
    name: "UNSW Redback Racing - Data Acquistion",
    desc: `Redback Racing's Data Acquisition Team focuses on capturing vehicle telemetry data and displaying it in a meaningful way. Check out their vehicle driver display and a live telemetry web app!`,
    projectUrl: "https://www.redbackracing.com/",
    thumbnailUrl:
      "/starlightProjects/24_04_UNSWRedbackRacingDataAcquisition.JPG",
  },
  {
    name: "Browoser",
    desc: "Funni browser app for Apple Watch built in SwiftUI. Also contains a useless AI to comfort you when you're lonely!!",
    projectUrl: "https://apps.apple.com/us/app/browoser/id6463472872",
    thumbnailUrl: "/starlightProjects/24_12_Browoser.png",
  },
  {
    name: "Hardstuck Debating Script",
    desc: "Automatically create debating scrim groups with this python script!",
    projectUrl: "https://github.com/TAS-scorchedshadow/DebatingAlgorithm",
    thumbnailUrl: "/starlightProjects/24_03_HardstuckDebating.png",
  },
  {
    name: "Groveify - 24T1 Trainee Project",
    desc: "Groveify is a habit tracker and productivity manager that comes with a cute little world to keep you going!",
    projectUrl: "https://groveify.com",
    thumbnailUrl: "/traineeProjects/groveify.png",
  },
  {
    name: "Generic Assembler",
    desc: "Convert assembly in a custom MIPS-Like assembly language into binary or hex format!",
    projectUrl: "https://github.com/JamesTreloar/GenericAssembler",
    thumbnailUrl: "/starlightProjects/24_01_GenericAssembler.png",
  },
  {
    name: "Riflelytics",
    desc: "Data aggregation and visualisation website for rifle shooting. Easily integrates with existing target hardware!",
    thumbnailUrl: "/starlightProjects/24_0A_riflelytics.png",
    projectUrl: "https://github.com/TAS-scorchedshadow/Rifle_Shooting_Major",
  },
];
// Data for the "Join DevSoc" section
// Should set/unset applicationUrl to mark recruitment as open/closed
export const recruitmentData: RecruitmentProps[] = [
  { position: "Directors", Icon: Lightbulb },
  // { position: "New Projects", Icon: FlightTakeoff },
  {
    position: "Subcommittee",
    applicationUrl: "https://tp.devso.cc/subcom",
    Icon: Groups,
  },
  {
    position: "Training Leads",
    Icon: CoPresent,
    applicationUrl: "https://tp.devso.cc/leads",
  },
  {
    position: "Trainees",
    Icon: School,
    applicationUrl: "https://tp.devso.cc/trainees",
  },
];

export const feedbackFormUrl = "https://forms.gle/TjHcB9MHf6AwojiE8";

export interface SponsorInfo {
  name: string;
  logo: StaticImport | string;
  url: string;
}

export interface StarlightSupporterData {
  supporterLogos: SponsorInfo[];
  industryLogos: SponsorInfo[];
}

export const starlightSupporterData: { [n: number]: StarlightSupporterData } = {
  2024: {
    supporterLogos: [
      {
        name: "UNSW",
        logo: unsw,
        url: "https://www.unsw.edu.au/",
      },
      {
        name: "Arc",
        logo: arc,
        url: "https://www.arc.unsw.edu.au/",
      },
      {
        name: "Roundhouse",
        logo: "https://www.arc.unsw.edu.au/assets/images/roundhouse-header.svg",
        url: "https://www.arc.unsw.edu.au/roundhouse",
      },
    ],
    industryLogos: [
      {
        name: "Macquarie",
        logo: "https://online.macquarie.com.au/modelmanager/assets/resources/app/macquarie-modelmanager/images/logo-vertical-inverse.png",
        url: "https://www.macquarie.com/au/en.html",
      },
      {
        name: "Zip Co",
        logo: "https://media.boohoo.com/i/boohooamplience/zippay_new_white_nobg_1309?fmt=webp",
        url: "https://zip.co/au",
      },
    ],
  },
};

export interface SupporterData {
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
        {
          name: "Lyra Technologies",
          logo: lyra,
          url: "https://www.lyratechnologies.com.au/",
        },

        // {
        //   name: "ZIP Logo",
        //   logo: "https://media.boohoo.com/i/boohooamplience/zippay_new_white_nobg_1309?fmt=webp",
        //   url: "https://zip.co/au",
        // },
      ],
    },
  ],
  2024: [
    {
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
      subtitle: "CSESoc & DevSoc Joint Sponsorship Drive",
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
      subtitle: "CSESoc & DevSoc Joint Sponsorship Drive",
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
          logo: "https://neara.com/wp-content/uploads/2023/03/footer-white-logo-with-red-icon.png",
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
      subtitle: "CSESoc & DevSoc Joint Sponsorship Drive",
      logos: [
        {
          name: "appian",
          logo: "https://www.cds.co.uk/hs-fs/hubfs/Appian-white-logo.png?width=1200&height=627&name=Appian-white-logo.png",
          url: "https://appian.com/",
        },
        {
          name: "FlowTraders",
          logo: "https://paragonnational.org/Companies/flow.png",
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

export interface EventsData {
  eventId: number;
  url: string;
  blurb?: string;
}

export const eventsData: { [year: number]: { [key: string]: EventsData[] } } = {
  2025: {
    t1: [
      {
        eventId: 871129181620045,
        url: "/events/2025/t1/training-recruitment.jpg",
      },
      {
        eventId: 960750976153060,
        url: "/events/2025/t1/o-week.jpg",
      },
      {
        eventId: 1784366812405086,
        url: "/events/2025/t1/alumni-panel.jpg",
      },
      {
        eventId: 645810791219709,
        url: "/events/2025/t1/subcom-recruitment.jpg",
      },
      {
        eventId: 1640016264063435,
        url: "/events/2025/t1/director-meet-greet.jpg",
      },
      {
        eventId: 956373929944745,
        url: "/events/2025/t1/resume-workshop.jpg",
      },
      {
        eventId: 4185180705043824,
        url: "/events/2025/t1/arista-bbq.jpg",
      },
      {
        eventId: 1283127062792775,
        url: "/events/2025/t1/ttd-bbq.jpg",
      },
      {
        eventId: 2851307125046408,
        url: "/events/2025/t1/hackabyte.jpg",
      },
      {
        eventId: 522815864195391,
        url: "/events/2025/t1/careers-fair.jpg",
      },
      {
        eventId: 1049058983717403,
        url: "/events/2025/t1/arista-site.jpg",
      },
      {
        eventId: 652045011121247,
        url: "/events/2025/t1/citadel-technical-interview.jpg",
      },
      {
        eventId: 1310327673376810,
        url: "/events/2025/t1/clubs-takeover.jpg",
      },
      {
        eventId: 1312081666752516,
        url: "/events/2025/t1/leetcode-workshop.jpg",
      },
      {
        eventId: 642914275228467,
        url: "/events/2025/t1/behaviour-workshop.jpg",
      },
      {
        eventId: 695822716461247,
        url: "/events/2025/t1/citadel-bbq.jpg",
      },
    ],
    t2: [
      {
        eventId: 1380586546511605,
        url: "/events/2025/t2/paintChill.jpg",
        blurb: `Join us for a chill afternoon to unwind, get creative and let your mind wander before assignment season hits 😵‍💫😵‍💫.
         No worries if your art looks like Picasso without the price tag, just come for the vibes 😎\n
  🗓️ 𝗪𝗛𝗘𝗡: 18th June 4-6 PM
  📍 𝗪𝗛𝗘𝗥𝗘: Mathews 104`
      },
      {
        eventId: 683939274224482,
        url: "/events/2025/t2/starlight.jpg",
        blurb: `🌟 APPLICATIONS FOR STARLIGHT ARE OPEN! 🌟\n
    Ever wanted a platform to showcase your latest project? Then Starlight is the perfect opportunity for YOU!🫵 Starlight is an open gallery event running in Week 8 of Term 2, where developers of all experience levels can showcase their projects and connect with their peers. Find more details in our FB event page!\n
    📅 𝗗𝗘𝗔𝗗𝗟𝗜𝗡𝗘: 14th July 2024 11:59pm (Week 7 Monday)
    💫 𝗦𝗛𝗢𝗪𝗖𝗔𝗦𝗘: Term 2, Week 8 Day TBC
    📍 𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡: TBD`,
      },
      
      {
        eventId: 1648737762479606,
        url: "/events/2025/t2/linkedinPhotoshoot.jpg",
      },
      {
        eventId: 1119467540015853,
        url: "/events/2025/t2/T2W1BBQ.jpg",
      },
      {
        eventId: 1062484559164505,
        url: "/events/2025/t2/rookie-code-rumble.jpg",
      },
      {
        eventId: 570192562824901,
        url: "/events/2025/t2/o-day-t2.jpg",
      },
      {
        eventId: 725155683421732,
        url: "/events/2025/t2/training-recruitment-t2.jpg",
      },
      {
        eventId: 639790979037857,
        url: "/events/2025/t2/training-subcom-recruit.jpg",
      },
    ],
    t3: [],
  },
  2024: {
    t1: [
      {
        eventId: 408235398306055,
        url: "/events/2024/t1/trainee-recruitment.jpg",
      },
      {
        eventId: 7218786831515014,
        url: "/events/2024/t1/lead-recruitment.jpg",
      },
      {
        eventId: 264622273172892,
        url: "/events/2024/t1/o-week.jpg",
      },
      {
        eventId: 275798828666607,
        url: "/events/2024/t1/subcom-recruitment.jpg",
      },
      {
        eventId: 2153641741645762,
        url: "/events/2024/t1/director-meet-greet.jpg",
      },
      {
        eventId: 1395740467719443,
        url: "/events/2024/t1/resume-workshop.jpg",
      },
      {
        eventId: 1140261576981892,
        url: "/events/2024/t1/alumni-panel.jpg",
      },
    ],
    t2: [
      {
        eventId: 978083463697396,
        url: "/events/2024/t2/training-recruitment.jpg",
      },
      {
        eventId: 1426532081562135,
        url: "/events/2024/t2/games-night.jpg",
      },
      {
        eventId: 440888395551383,
        url: "/events/2024/t2/behavioural-workshop.jpg",
      },
      {
        eventId: 1638626536886940,
        url: "/events/2024/t2/3d-animation-workshop.jpg",
      },
      {
        eventId: 806747934751895,
        url: "/events/2024/t2/technical-workshop.jpg",
      },
      {
        eventId: 995424298591300,
        url: "/events/2024/t2/starlight.jpg",
      },
      {
        eventId: 812985947468897,
        url: "/events/2024/t2/bbq.jpg",
      },
    ],
    t3: [
      {
        eventId: 1509821806303887,
        url: "/events/2024/t3/training-recruitment.jpg",
      },
      {
        eventId: 1782876068915405,
        url: "/events/2024/t3/programming-terms-irl.jpg",
      },
      {
        eventId: 1238021360714510,
        url: "/events/2024/t3/brain-busters.jpg",
      },
      {
        eventId: 1035358768318854,
        url: "/events/2024/t3/blueprint-hackathon.jpg",
      },
      {
        eventId: 428430126479506,
        url: "/events/2024/t3/fmaa-alternate-pathway.jpg",
      },
      {
        eventId: 391230697254986,
        url: "/events/2024/t3/techspire.jpg",
      },
      {
        eventId: 1586760535262553,
        url: "/events/2024/t3/clubs-takeover.jpg",
      },
      {
        eventId: 969014061938215,
        url: "/events/2024/t3/director-recruitment.jpg",
      },
      {
        eventId: 1213002186585963,
        url: "/events/2024/t3/scratch-showdown.jpg",
      },
    ],
  },
};
