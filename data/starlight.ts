import { CardType } from "../components/ProjectCard";

import janeStreet from "../assets/jane_street.svg";
import imc from "../assets/imc.png";
import sc from "../assets/sc.png";
import cse from "../assets/CSE.jpeg";
import unsw from "../assets/unsw.png";
import arc from "../assets/arc.png";
import tradedesk from "../assets/thetradedesk.png";
import roundhouse from "../assets/roundhouse.png";
import lyra from "../assets/lyra.svg";
import arista from "../assets/arista.png";
import createunsw from "../assets/createunsw.svg";
import gmsoc2 from "../assets/gmsoc2.png";
import ramsoc from "../assets/ramsoc.svg";
import redback from "../assets/redback.png";
import bluesat from "../assets/bluesat.png";
import { SponsorInfo } from "./supporters";

export const starlightProjectData: {
  [year: number]: CardType[];
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
      projectUrl:
        "https://drive.google.com/file/d/1IYknRjvkHHzsWvHAHv4zv8tGuJXsc_fH/view?usp=sharing",
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
      projectUrl:
        "https://drive.google.com/file/d/1u3Hsy_iYQQMIpxuhSS7B4cGYhjf7YEY-/view?usp=sharing",
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
      projectUrl:
        "https://drive.google.com/file/d/1Yw2SDHKVrHkwCzYKx0xTL-6IKcXQFORX/view?usp=drive_link",
      thumbnailUrl:
        "/starlightProjects/2025/25_27_DroidRacingChallengeSpeedyGonzales.png",
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
      projectUrl:
        "https://github.com/UNSW-Robotics-and-Mechatronics-Society/pick-a-bot-2025",
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
