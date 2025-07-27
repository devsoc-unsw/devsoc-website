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
  AutoAwesome,
} from "@mui/icons-material";
import { RecruitmentProps } from "./app/(pages)/get-involved/page";
import DiscordIcon from "./components/nav/DiscordIcon";
import { ProjectCardProps } from "./components/ProjectCard";

import atlassian from "./assets/atlassian.png";
import apple from "./assets/apple.png";
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
import roundhouse from "./assets/roundhouse.png";
import lyra from "./assets/lyra.svg";
import arista from "./assets/arista.png";
import createunsw from "./assets/createunsw.svg";
import google from "./assets/google.png";
import gmsoc from "./assets/gmsoc.png";
import gmsoc2 from "./assets/gmsoc2.png";
import ramsoc from "./assets/ramsoc.svg";
import redback from "./assets/redback.png";
import flowtraders from "./assets/flowtraders.png";
import bluesat from "./assets/bluesat.png";
import pearler from "./assets/pearler.png";
import canva from "./assets/canva.png";
import amazon from "./assets/amazon.png";
import jobsboard from "./public/projects/jobsboard/logo.png";
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

export const starlightProjectData: {
  [year: number]: Omit<ProjectCardProps, "trainee">[];
} = {
  2024: [
    {
      name: "LemonOS",
      desc: "Hobby operating system written to run on PC hardware. Contains features and software found in many modern operating systems. Can run software common on Linux/unix systems and even games like DOOM!",
      projectUrl: "https://github.com/LemonOSProject/LemonOS",
      thumbnailUrl: "/starlightProjects/2024/24_16_LemonOS.png",
    },
    {
      name: "Campus Collab - 24T1 Trainee Project",
      desc: "The ultimate platform for connecting and collaborating with fellow students. Effortlessly create and manage project listings and discover exciting events on and off campus!",
      projectUrl: "https://github.com/sohumshah2/campuscollab",
      thumbnailUrl: "/starlightProjects/2024/24_15_CampusCollab.jpg",
    },
    {
      name: "FairShare",
      desc: "A receipt sharing website aimed at helping making splitting bills easier!",
      projectUrl: "https://fairshared.me",
      thumbnailUrl: "starlightProjects/2024/24_17_FairShare.png",
    },
    {
      name: "Discord LeetCode Bot",
      desc: "Get motivated to LeetCode with this customisable Discord bot!",
      projectUrl: "https://github.com/Kaiqi-Liang/LeetCode-Daily",
      thumbnailUrl: "/starlightProjects/2024/24_14_DiscordLeetCodeBot.png",
    },
    {
      name: "Quests - Stamp Rally Management System",
      desc: "A mobile friendly stamp rally management system equipped with tasks, rooms, societies and a raffle developed for MegaLAN Events!",
      projectUrl: "https://github.com/megalan-association/quests",
      thumbnailUrl: "/starlightProjects/2024/24_11_Quests.jpeg",
    },
    {
      name: "Propagate.ink",
      desc: "The website application for visual learners! Create mind maps with accompanying, details and aesthetic notes for each node!",
      projectUrl: "https://www.propagate.ink",
      thumbnailUrl: "/starlightProjects/2024/24_10_Propagate.png",
    },
    {
      name: "Way Home",
      desc: "WayHome is a cross platform location sharing app. Share your location and memories of your favorite places with your pookies!",
      projectUrl: "https://github.com/mt-fns/WayHome",
      thumbnailUrl: "/starlightProjects/2024/24_09_WayHome.png",
    },
    {
      name: "Beem Memo Pay",
      desc: "Capture memories from group expenses and conclude your trips by sharing your favorite moments. Make group expenses on Beem fun and social!",
      projectUrl: "https://github.com/AI-Hack-2024/Beem-MemoPay",
      thumbnailUrl: "/starlightProjects/2024/24_08_BeemMemoPay.png",
    },
    {
      name: "AchieveMint - 24T1 Trainee Project",
      desc: "Enhance your productivity with this all-in-one organization website, featuring a to-do list, note-taking, reminders and a resting page to help you stay on track and achieve more!",
      projectUrl: "https://github.com/devsoc-unsw/trainee-saturn-24t1",
      thumbnailUrl: "/starlightProjects/2024/24_07_AchieveMint.png",
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
        "/starlightProjects/2024/24_05_UNSWRedbackRacingAutonomousVehicles.png",
    },
    {
      name: "UNSW Redback Racing - Data Acquistion",
      desc: `Redback Racing's Data Acquisition Team focuses on capturing vehicle telemetry data and displaying it in a meaningful way. Check out their vehicle driver display and a live telemetry web app!`,
      projectUrl: "https://www.redbackracing.com/",
      thumbnailUrl:
        "/starlightProjects/2024/24_04_UNSWRedbackRacingDataAcquisition.JPG",
    },
    {
      name: "Browoser",
      desc: "Funni browser app for Apple Watch built in SwiftUI. Also contains a useless AI to comfort you when you're lonely!!",
      projectUrl: "https://apps.apple.com/us/app/browoser/id6463472872",
      thumbnailUrl: "/starlightProjects/2024/24_12_Browoser.png",
    },
    {
      name: "Hardstuck Debating Script",
      desc: "Automatically create debating scrim groups with this python script!",
      projectUrl: "https://github.com/TAS-scorchedshadow/DebatingAlgorithm",
      thumbnailUrl: "/starlightProjects/2024/24_03_HardstuckDebating.png",
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
      thumbnailUrl: "/starlightProjects/2024/24_01_GenericAssembler.png",
    },
    {
      name: "Riflelytics",
      desc: "Data aggregation and visualisation website for rifle shooting. Easily integrates with existing target hardware!",
      thumbnailUrl: "/starlightProjects/2024/24_0A_riflelytics.png",
      projectUrl: "https://github.com/TAS-scorchedshadow/Rifle_Shooting_Major",
    },
  ],
  2025: [
    {
      name: "Arcane Raiders",
      desc: "Team up with your wizard friends to pillage the magic tower! Create elemental synergies, defeat powerful bosses and claim the tower's treasure in this rogue-like dungeon-raider.",
      projectUrl: "https://store.steampowered.com/app/2899410/Arcane_Raiders/",
      thumbnailUrl: "/starlightProjects/2025/25_04_ArcaneRaiders.jpg",
    },
    {
      name: "Bluesat - Ground Station",
      desc: "This ground station maintains an uplink and downlink connection with Bluesat's high altitude balloon and potentially their own cubesat in low Earth orbit.",
      projectUrl: "https://bluesat.unsw.edu.au/#projects",
      thumbnailUrl: "/starlightProjects/2025/25_10_BluesatGroundStation.png",
    },
    {
      name: "Bluesat - High Altitude Balloon",
      desc: "Bluesat's high air balloon just made its first flight reaching a max altitude of 35 km carrying a reseach payload!",
      projectUrl: "https://bluesat.unsw.edu.au/#projects",
      thumbnailUrl:
        "/starlightProjects/2025/25_12_BluesatHighAltitudeBalloon.jpg",
    },
    {
      name: "Bluesat - Rover",
      desc: "Bluesat has seen the returned to their Offworld Robotics project and in just entered their first rover challenge since 2019. ",
      projectUrl: "https://bluesat.unsw.edu.au/#projects",
      thumbnailUrl: "/starlightProjects/2025/25_11_BluesatRover.jpeg",
    },
    {
      name: "Breaktime",
      desc: "Block distracting apps permanently and take intentional breaks.",
      projectUrl: "http://breaktimeapp.github.io/",
      thumbnailUrl: "/starlightProjects/2025/25_20_Breaktime.png",
    },
    {
      name: "Cram & Conquer",
      desc: "A cozy study app built for students :) Focus better with aesthetic Pomodoro timer, lofi music, focus pets, and powerful study tools and trackers.",
      projectUrl: "https://www.cramandconquer.com/",
      thumbnailUrl: "/starlightProjects/2025/25_22_Cram&Conquer.png",
    },
    {
      name: "CREATE UNSW - Cheese Chessboard",
      desc: "An interactive physical chessboard with light-up visuals and piece-recognition technology.",
      projectUrl: "https://drive.google.com/file/d/1IYknRjvkHHzsWvHAHv4zv8tGuJXsc_fH/view?usp=sharing",
      thumbnailUrl: "/starlightProjects/2025/25_26_CreateUnswChessboard.png",
    },
    {
      name: "CREATE UNSW - Spiderbot",
      desc: "Check out this cool bot by the CREATE team! It even dances!",
      projectUrl: "https://www.facebook.com/watch/?v=1031336124791472",
      thumbnailUrl: "/starlightProjects/2025/25_06_CreateUNSWSpiderbot.png",
    },
    {
      name: "D&C: Divide and Conquer",
      desc: "An interactive visual novel-style learning platform that uses AI-generated narrative adventures to enhance student engagement with course content.",
      projectUrl: "https://github.com/michimochi25/divide-and-conquer",
      thumbnailUrl: "/starlightProjects/2025/25_23_D&C.png",
    },
        {
      name: "Doomscroll to Distinction",
      desc: "Doomscroll your way to a distinction. Students are already doomscrolling. Don’t fight it. Leverage it.",
      projectUrl: "https://drive.google.com/file/d/1u3Hsy_iYQQMIpxuhSS7B4cGYhjf7YEY-/view?usp=sharing",
      thumbnailUrl: "/starlightProjects/2025/25_28_Doomscroll.png",
    },
    {
      name: "Drift",
      desc: "Drift breaks your big goals into small, actionable steps and creates a clear daily schedule, making it easier to stay on track and achieve success step by step.",
      projectUrl:
        "https://github.com/devsoc-unsw/trainee-steel-25t1/blob/main/drift",
      thumbnailUrl: "/starlightProjects/2025/25_16_Drift.png",
    },
    {
      name: "Droid Racing Challenge - Speedy Gonzales",
      desc: "Autonomous racing droid using computer vision for lane detection and navigation.",
      projectUrl: "https://drive.google.com/file/d/1Yw2SDHKVrHkwCzYKx0xTL-6IKcXQFORX/view?usp=drive_link",
      thumbnailUrl: "/starlightProjects/2025/25_27_DroidRacingChallengeSpeedyGonzales.png",
    },
    {
      name: "Electus - 25T1 Trainee Project",
      desc: "Make society elections easier with this open source voting platform!",
      projectUrl: "https://github.com/devsoc-unsw/trainee-fighting-25t1",
      thumbnailUrl: "/starlightProjects/2025/25_03_Electus.png",
    },
    {
      name: "Formify",
      desc: "Formify automates tedious, manual form-filling with voice recognition! It uses WebSocket connections, real-time audio analysis, and mapping of natural dialogue into structured data to make interactions feel effortless.",
      projectUrl: "https://formify-mu.vercel.app/",
      thumbnailUrl: "/starlightProjects/2025/25_07_Formify.jpeg",
    },
    {
      name: "Generic Assembler (v2)",
      desc: "Assembles assembler for custom ISAs. Designed for learning processor development. Prevents the need for hand assembling.Currently supports MIPS like ISAs!",
      projectUrl: "https://github.com/JamesTreloar/GenericAssembler",
      thumbnailUrl: "/starlightProjects/2025/25_08_GenericAssembler.png",
    },
    {
      name: "Helios",
      desc: "Helios is the ultimate Chrome extension for language learners. Get instant translations, track your progress, and build vocabulary while watching Netflix, YouTube, or browsing the web.",
      projectUrl: "https://johnnieparris.github.io/HeliosLandingPage/",
      thumbnailUrl: "/starlightProjects/2025/25_15_Helios.png",
    },
    {
      name: "Inflow",
      desc: "Inflow is a smart Chrome extension that uses AI to block distracting sites based on your current goal, keeping you focused and in the zone without relying on static blocklists.",
      projectUrl: "https://github.com/trickytoy/InFlow",
      thumbnailUrl: "/starlightProjects/2025/25_18_Inflow.png",
    },
    {
      name: "Lock Step",
      desc: "A Cybersecurity Toolkit created to bridge the gap for small businesses who face real threats but lack the resources, time and expertise. Straightforward, Practical, and Jargon-free guidance!",
      projectUrl: "https://github.com/noorbabar/cybersecurity-toolkit",
      thumbnailUrl: "/starlightProjects/2025/25_17_LockStep.png",
    },
    {
      name: "Pokémon Showdown Team Stealer",
      desc: "A (soon to be) Chrome extension to help you steal teams from Showdown Live videos from YouTube! This app automates the tedious process of manually stealing Pokémon Showdown teams from YouTube videos!",
      projectUrl: "https://github.com/Gyoumi/ps-team-stealer",
      thumbnailUrl:
        "/starlightProjects/2025/25_13_PokemonShowdownTeamStealer.png",
    },
    {
      name: "QuirioPilot",
      desc: "AI tutor that doesn’t just answer questions it helps you explore your curiosity. It breaks queries down into clear subtopics, explain them in simple terms and generates interactive quizzes.",
      projectUrl: "https://github.com/Ayushk249/AI-learning-system",
      thumbnailUrl: "/starlightProjects/2025/25_24_QuirioPilot.png",
    },
    {
      name: "RAMSOC - Pick-a-bots",
      desc: "Pick-A-Bots is a webapp that lets RAMSoc Sumobots finals' audience “bet” on matches. Users starts with fixed tokens, stake tokens on their predicted winner, and earn tokens for correct picks.",
      projectUrl: "https://github.com/UNSW-Robotics-and-Mechatronics-Society/pick-a-bot-2025",
      thumbnailUrl: "/starlightProjects/2025/25_29_RamsocPickABots.png",
    },
    {
      name: "RAMSOC - Sumobots",
      desc: "The top bots from RAMSoc's Sumobot competition are coming! Check out their unique designs and learn more about the competition!",
      projectUrl: "https://sumobots.ramsocunsw.org/2025",
      thumbnailUrl: "/starlightProjects/2025/25_09_Sumobot.png",
    },
    {
      name: "Room 134",
      desc: "A physio student with zero experience in coding and 3d modelling started her three.js project.",
      projectUrl: "https://room-134.vercel.app/",
      thumbnailUrl: "/starlightProjects/2025/25_19_Room134.png",
    },
    {
      name: "Sussy Uni",
      desc: "Social deduction game for UNSW students to help them revise content, make friends, familiarise themselves with popular locations on campus, and have fun!",
      projectUrl: "https://sussyuni.com/",
      thumbnailUrl: "/starlightProjects/2025/25_25_SussyUni.png",
    },
    {
      name: "Tastebuds",
      desc: "Find the perfect taste for your buds! Find food to eat with your friends in real-time!",
      projectUrl: "https://github.com/kevinh-e/tastebuds",
      thumbnailUrl: "/starlightProjects/2025/25_21_Tastebuds.png",
    },

    {
      name: "UNSW Loove Letters",
      desc: "An anonymous confession platform for UNSW students, powered by AI moderation to ensure a safe and engaging space for sharing.",
      projectUrl: "https://unswloveletters.vercel.app/",
      thumbnailUrl: "/starlightProjects/2025/25_14_UNSWLoveLetters.png",
    },
    {
      name: "UNSW Redback Racing - Autonomous Vehicles",
      desc: "Suite of automated systems to allow an autonomous car to percieve and navigate around a circuit. This includes developing both vehicle simulations alongside hardware.",
      projectUrl: "https://www.redbackracing.com/",
      thumbnailUrl:
        "/starlightProjects/2025/25_02_UNSWRedbackRacingAutonomousVehicles.png",
    },
    {
      name: "UNSW Redback Racing - Data Acquistion",
      desc: `Redback Racing's Data Acquisition Team focuses on capturing vehicle telemetry data and displaying it in a meaningful way. Check out their vehicle driver display and a live telemetry web app!`,
      projectUrl: "https://www.redbackracing.com/",
      thumbnailUrl:
        "/starlightProjects/2025/25_01_UNSWRedbackRacingDataAcquisition.JPG",
    },
    {
      name: "yellowshirt - 24T2 Trainee Project",
      desc: "A location-guessing game for universities, targeting new and accustomed students alike.",
      projectUrl: "https://yellowshirt.xyz",
      thumbnailUrl: "/starlightProjects/2025/25_05_Yellowshirt.png",
    },
  ],
};

export const techspireSpeakerData: {
  [year: number]: Omit<ProjectCardProps, "trainee" | "projectUrl">[];
} = {
  2022: [
    {
      name: "Ofir Zeevi",
      desc: "Ofir's experience expands beyond the conventional career path of a Software Engineer. From his Network Engineering internship at Google to his current role as a Product Manager at Atlassian, he has developed a deep understanding of the tech industry.\n" +
          "\n" +
          "Some older students might know Ofir as CSESoc's 2018 Co-President where he was chosen for the Engineering Student Service Leadership Award. Others might know him as their camp leader, or from the weekly barbecues where he manned the grill.\n" +
          "\n" +
          "Whether or not you know him, if you have used JIRA, you have likely interacted with one of his features.",
      thumbnailUrl: "/techspireSpeakers/22/1.png",
    },
    {
      name: "Kath-Lin Han",
      desc: "During university, Kath-Lin explored a variety of internships in various fields from large industrial manufacturers to fast-paced FinTechs. Her exprience has taken her across the entire tech-stack from frontend to backend to UI design, helping her excel in her current role as a Full Stack Engineer at Pearler.\n" +
          "\n" +
          "Kath-Lin graduated from UNSW in 2021 after studying Computer Science and Mechatronics. Occasionally, you might see her at one of our barbecues in her white Pearler shirt!",
      thumbnailUrl: "/techspireSpeakers/22/2.png",
    },
    {
      name: "Adam Tizzone",
      desc: "Just a few years into his career, Adam has already built an impressive track record. Upon graduating from UNSW in 2019, he made his way to Washington as a full-time Software Engineer for Microsoft. Recently, he returned to Sydney to continue his story at Australia's most renowned start-up.\n" +
          "\n" +
          "During his time at university, Adam was heavily involved in various extra-cirriculars including CSESoc where he would eventually become the 2017 Co-President.\n" +
          "\n" +
          "He has a deep passion for music, having helped direct multiple revues for different societies. When he is away from his desk, you might find him in his garage working on cars.",
      thumbnailUrl: "/techspireSpeakers/22/3.png",
    },
    {
      name: "Marc Chee",
      desc: "Marc is best known by students as a beloved lecturer for UNSW's COMP1511 course where he inspired generations of CSESoc students with his enthusiastic and engaging lectures. It was no surprise when he was nominated for the Students' Choice Award in 2021.\n" +
          "\n" +
          "After leaving UNSW at the start of 2022, Marc opened a new chapter in his life with the Marc Chee School. He plans on pursuing his passion for teaching by spreading his knowledge of computer science to a new audience.\n" +
          "\n" +
          "These days, you can find Marc on YouTube talking code and life.",
      thumbnailUrl: "/techspireSpeakers/22/4.png",
    },
    {
      name: "Joanna He & Darian Lee",
      desc: "Founded in 2018 by Adam Tizzone, Jobsboard has played a crucial role in kickstarting the careers of many CSESoc students. It has scraped by in maintenance mode until this year, where a new team lead by Darian and Joanna aimed to completely revamp the project.\n" +
          "\n" +
          "With a modern UI, sponsor integrations, international support and more to come, the future careers of CSESoc students are in bright hands. Come listen to their journey.",
      thumbnailUrl: "/techspireSpeakers/22/6.png",
    },
    {
      name: "Adam Leung",
      desc: "Adam's journey began in highschool with an informatics class. Since then, he has continued to broaden his horizons through various companies and personal projects. He currently works on Amazon's InfoSec team as a Software Engineer whilst finishing his degree at USYD.\n" + "\n" + "Alongside representing his university at the Divisional and Regional ICPC, Adam also played a large role in founding USYD's Google Developer Student Club which has since grown to over 100 members.\n" +
          "\n" + "Adam's love for coding is evident via his diverse portfolio of personal projects and contributions to open source development.",
      thumbnailUrl: "/techspireSpeakers/22/5.png",
    },
  ],
  2024: [
    {
      name: "Chris Peters",
      desc: "Chris Peters is an Associate Director in Personal Technology Automation at Macquarie Group. He is passionate about automation, and for the past 10 years has been involved in creating restAPIs with .net core and various front-end frameworks, automating common business reporting and IT support tasks. Chris has over 20 years of professional work experience having worked as a Senior System Analyst at Abbott Laboratories and a Primary Developer at Menoko, prior to joining Macquarie Group 6 years ago. He now leads a team of passionate developers who he enjoys working with to deliver modern applications and new automation opportunities, helping to drive dramatic business growth.\n" +
          "\n" +
          "Chris is excited to be speaking at this year’s Techspire event. His speech will explore how “you are already becoming the leader you will be in 30 years”, and will draw on his own learnings from his career to date.",
      thumbnailUrl: "/techspireSpeakers/24/1.png",
    },
    {
      name: "Nick Patrikeos",
      desc: "Nick is a Software Engineer with a passion for education and helping others learn and grow. After growing up in Perth, Nick moved to Sydney to study Engineering at the University of New South Wales where he went on to work as a casual academic.\n" +
          "\n" +
          "Nick now works as a Software Engineer at Atlassian and oversees the software development at a Perth-based startup called The Growth Hunting Company. At Atlassian, Nick works on Post Office, Atlassian’s new unified messaging platform to power emails, notifications and in-product messaging. He works day-to-day with TypeScript, React and BitBucket CI pipelines in Atlassian’s Monorepo.\n" +
          "\n" +
          "Nick’s talk is titled “Why you should pay more attention to non-functional requirements” and discusses how we focus on the wrong thing - what we’re building - when we should be focusing on how we’re building it, in software engineering.",
      thumbnailUrl: "/techspireSpeakers/24/2.png",
    },
    {
      name: "Nelson Tam",
      desc: "Nelson is an engineering manager at Apple. He studied Computer Engineering at UNSW, with a focus on operating systems and microkernels. He has done a diverse range of roles over time - from sales and marketing, project management, product, then full circle back to engineering.\n" +
          "\n" +
          "Prior to joining Apple, Nelson has worked on kernels, static analysis, e-commerce marketplaces, and self-driving cars. Some of his previous employers include Freelancer.com and Ghost Locomotion.\n" +
          "\n" +
          "Nelson enjoys running and cycling, and had recently finished the Sydney Marathon 2024. He is a follower of Jesus, married to Sophia with three children. He is passionate about investing in people and sharing his life story with others.",
      thumbnailUrl: "/techspireSpeakers/24/3.png",
    },
    {
      name: "Richard Hofman",
      desc: "Richard Hofman is a Software Engineer in Google’s enterprise security team. He has long held a fascination with privacy and cryptography, and holds a Bachelor’s Degree in Computer Science, from the University of Auckland in New Zealand.\n" +
          "\n" +
          "In his role at Google, Richard’s work mostly encompasses cryptographically attested device identity and the infrastructure needed to issue and validate credentials based on these identities. He has also worked on improving the cryptographic security of SSH traffic at Google.\n" +
          "\n" +
          "Richard will be speaking about WebAuthn and FIDO2, two closely related, privacy-aware standards for online cryptographic authentication. These technologies form the basis for “Passkeys”, but are surprisingly broad in their own right.",
      thumbnailUrl: "/techspireSpeakers/24/6.png",
    },
    {
      name: "James Ji",
      desc: "James graduated from UNSW in 2023. He currently works at TikTok on the LIVE app, where he develops core revenue features that are innovative, secure and intuitive for our users.\n" +
          "\n" +
          "While at UNSW, he built Circles, the defacto degree planner for CSE students. He would later run CSESoc Projects (now DevSoc) where he spawned many new initiatives such as the Training Program and Techspire.\n" +
          "\n" +
          "We invited James back to share his unique experiences on building projects, starting initiatives, challenges in the industry and more.",
      thumbnailUrl: "/techspireSpeakers/24/4.png",
    },
    {
      name: "Sebastian Sequoiah-Grayson",
      desc: "Sebastian Sequoiah-Grayson is a Senior Lecturer in Epistemics at the School of Computer Science and Engineering at the University of New South Wales. His work covers issues in applied matters for the ethics of technology and artificial intelligence, and also abstract mathematical matters in substructural epistemic logics and epistemics broadly.",
      thumbnailUrl: "/techspireSpeakers/24/5.png",
    },
    {
      name: "Jake Renzella",
      desc: "Jake is a Senior Lecturer in the School of Computer Science and Engineering, with his interests in artificial intelligence being demonstrated in his new course for 2026: Machine Learning Engineering.\n" + "\n" +
      "His research focuses on applying artificial intelligence to educational contexts, working on DCC Help, a C compiler with an integrated LLM which provides in situ error explanations for novice programmers. His past work includes stochastic modelling for Defence projects as a Research Fellow at the Applied Artificial Intelligence Institute.\n" + "\n" +
          "Jake is excited to present his talk titled Great AI Depends on Great Software Engineering.",
      thumbnailUrl: "/techspireSpeakers/24/7.png",
    },
  ]
}

// Data for the "Join DevSoc" section
// Should set/unset applicationUrl to mark recruitment as open/closed
export const recruitmentData: RecruitmentProps[] = [
  {
    position: "Starlight",
    Icon: AutoAwesome,
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

export interface StarlightSupporterData {
  supporterLogos: SponsorInfo[];
  industryLogos?: SponsorInfo[];
  societyLogos?: SponsorInfo[];
}

export const starlightSupporterData: { [n: number]: StarlightSupporterData } = {
  2024: {
    supporterLogos: [
      {
        name: "Arc",
        logo: arc,
        url: "https://www.arc.unsw.edu.au/",
      },
      {
        name: "CSE",
        logo: cse,
        url: "https://www.unsw.edu.au/engineering/our-schools/computer-science-and-engineering",
      },
      {
        name: "Roundhouse",
        logo: roundhouse,
        url: "https://www.arc.unsw.edu.au/roundhouse",
      },
      {
        name: "UNSW",
        logo: unsw,
        url: "https://www.unsw.edu.au/",
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
  2025: {
    supporterLogos: [
      {
        name: "Arc",
        logo: arc,
        url: "https://www.arc.unsw.edu.au/",
      },
      {
        name: "CSE",
        logo: cse,
        url: "https://www.unsw.edu.au/engineering/our-schools/computer-science-and-engineering",
      },
      {
        name: "Roundhouse",
        logo: "https://www.arc.unsw.edu.au/assets/images/roundhouse-header.svg",
        url: "https://www.arc.unsw.edu.au/roundhouse",
      },
      {
        name: "UNSW",
        logo: unsw,
        url: "https://www.unsw.edu.au/",
      },
    ],
    industryLogos: [
      {
        name: "Arista",
        logo: arista,
        url: "https://www.arista.com/en/",
      },
      {
        name: "Lyra Technologies",
        logo: lyra,
        url: "https://www.lyratechnologies.com.au/",
      },
      {
        name: "imc",
        logo: imc,
        url: "https://www.imc.com/",
      },
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
      {
        name: "The Trade Desk",
        logo: tradedesk,
        url: "https://careers.thetradedesk.com/",
      },
    ],
    societyLogos: [
      {
        name: "Bluesat",
        logo: bluesat,
        url: "https://bluesat.unsw.edu.au/",
      },
      {
        name: "Create UNSW",
        logo: createunsw,
        url: "https://www.createunsw.com.au/",
      },
      {
        name: "Game Makers Society",
        logo: gmsoc2,
        url: "https://www.arc.unsw.edu.au/get-involved/opportunity?name=Game%20Making%20Society",
      },
      {
        name: "RAMSoc",
        logo: ramsoc,
        url: "https://ramsocunsw.org/",
      },

      {
        name: "Redback Racing",
        logo: redback,
        url: "https://www.redbackracing.com/",
      },
    ],
  },
};

export interface TechspireHeaderData {
  supporterLogos: SponsorInfo[];
  speakerLogos: SponsorInfo[];
  industryLogos: SponsorInfo[];
}

export const techspireHeaderData: { [n: number]: TechspireHeaderData } = {
  2022: {
    supporterLogos: [
      {
        name: "Arc",
        logo: arc,
        url: "https://www.arc.unsw.edu.au/",
      },
      {
        name: "Roundhouse",
        logo: roundhouse,
        url: "https://www.arc.unsw.edu.au/roundhouse",
      },
      {
        name: "UNSW",
        logo: unsw,
        url: "https://www.unsw.edu.au/",
      },
      {
        name: "CSESoc",
        logo: csesoc,
        url: "https://www.csesoc.unsw.edu.au/",
      },
    ],
    speakerLogos: [
      {
        name: "Atlassian",
        logo: atlassian,
        url: "https://www.atlassian.com/",
      },
      {
        name: "Pearler",
        logo: pearler,
        url: "https://pearler.com/",
      },
      {
        name: "Canva",
        logo: canva,
        url: "https://www.canva.com/",
      },
      {
        name: "CSE",
        logo: cse,
        url: "https://www.unsw.edu.au/engineering/our-schools/computer-science-and-engineering",
      },
      {
        name: "amazon",
        logo: amazon,
        url: "https://www.amazon.com.au/",
      },
      {
        name: "Jobsboard",
        logo: jobsboard,
        url: "https://github.com/devsoc-unsw/jobsboard",
      },
    ],
    industryLogos: [],
  },
  2024: {
    supporterLogos: [
      {
        name: "Arc",
        logo: arc,
        url: "https://www.arc.unsw.edu.au/",
      },
      {
        name: "Roundhouse",
        logo: roundhouse,
        url: "https://www.arc.unsw.edu.au/roundhouse",
      },
      {
        name: "UNSW",
        logo: unsw,
        url: "https://www.unsw.edu.au/",
      },
    ],
    speakerLogos: [
      {
        name: "Macquarie",
        logo: macquarie,
        url: "https://www.macquarie.com/au/en.html",
      },
      {
        name: "Atlassian",
        logo: atlassian,
        url: "https://www.atlassian.com/",
      },
      {
        name: "Apple",
        logo: apple,
        url: "https://www.apple.com/au/",
      },
      {
        name: "Google",
        logo: google,
        url: "https://google.com.au/",
      },

      {
        name: "TikTok",
        logo: tiktok,
        url: "https://www.tiktok.com/",
      },
      {
        name: "CSE",
        logo: cse,
        url: "https://www.unsw.edu.au/engineering/our-schools/computer-science-and-engineering",
      },
    ],
    industryLogos: [],
  },
  2025: {
    supporterLogos: [
      {
        name: "Arc",
        logo: arc,
        url: "https://www.arc.unsw.edu.au/",
      },
      {
        name: "Roundhouse",
        logo: roundhouse,
        url: "https://www.arc.unsw.edu.au/roundhouse",
      },
      {
        name: "UNSW",
        logo: unsw,
        url: "https://www.unsw.edu.au/",
      },
    ],
    speakerLogos: [],
    industryLogos: []
  },
};

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
        eventId: 1275611117623673,
        url: "/events/2025/t2/starLightShowcase.jpg",
        blurb: `‼️STARLIGHT PROJECT SHOWCASE‼️
        At Starlight we have the software and mechatronics projects on display made by the UNSW student community. Come on down **this Friday** and check out 30+ projects, and check out what opportunities are available to you as a UNSW engineering student!
        📅 𝗗𝗔𝗧𝗘 : 25th July 2025 (Week 8 Friday)
        ⏰ 𝗧𝗜𝗠𝗘: 4-8pm
        📍 𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡: Roundhouse`
      },
      {
        eventId: 639790979037857,
        url: "/events/2025/t2/training-subcom-recruit.jpg",
      },
      {
        eventId: 725155683421732,
        url: "/events/2025/t2/training-recruitment-t2.jpg",
      },
      {
        eventId: 570192562824901,
        url: "/events/2025/t2/o-day-t2.jpg",
      },
      {
        eventId: 1062484559164505,
        url: "/events/2025/t2/rookie-code-rumble.jpg",
      },
      {
        eventId: 1119467540015853,
        url: "/events/2025/t2/T2W1BBQ.jpg",
      },
      {
        eventId: 1648737762479606,
        url: "/events/2025/t2/linkedinPhotoshoot.jpg",
      },
      {
        eventId: 1380586546511605,
        url: "/events/2025/t2/paintChill.jpg",
      },
      {
        eventId: 1072982195023412,
        url: "/events/2025/t2/week-5-bbq.jpg",
      },
      {
        eventId: 681334814788758,
        url: "/events/2025/t2/industryMentoring.jpg",
      },
      {
        eventId: 1744190676180232,
        url: "/events/2025/t2/TriviaNight.jpg",
      },
      {
        eventId: 1871053577164558,
        url: "/events/2025/t2/rock-your-linkedin.jpg",
      },
      {
        eventId: 772603135193625,
        url: "/events/2025/t2/game-jam-hackathon.jpg",
      },
      {
        eventId: 683939274224482,
        url: "/events/2025/t2/starlight.jpg",
      },
      {
        eventId: 2535637913453765,
        url: "/events/2025/t2/tp-localhost-workshop.jpg",
      },
      {
        eventId: 1766471423940115,
        url: "/events/2025/t2/Week7BBQ.jpg",
      }
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
