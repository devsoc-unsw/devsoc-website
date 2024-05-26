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

// People displayed in the "Meet the Team" section of "About Us"
// If no image set, an animated gray circle appears
export const teamData: TeamData = {
  2018: {
    executives: [
      { name: "Amri Chamela", title: "Projects Director", imgUrl: "https://gc-prod-top100awards-media.cdn.gradconnection.com/images/amri-chamela.2e16d0ba.fill-120x120.jpg" },
    ],
    subcommittees: []
  },
  2019: {
    executives: [
      { name: "Thomas Kunc", title: "Projects Director", imgUrl: "https://media.licdn.com/dms/image/C5603AQFILnScctz0CQ/profile-displayphoto-shrink_800_800/0/1521010349210?e=1721865600&v=beta&t=Mrf92v2FZgv8n47wotNEy794OwwEqBt_FoPc1lUxmmc" },
      { name: "Shane Kadish", title: "Projects Director", imgUrl: "https://media.licdn.com/dms/image/C5603AQENc_UoZObUcw/profile-displayphoto-shrink_800_800/0/1547879297950?e=1721865600&v=beta&t=bDBev-Et52gHRcbbL6PIYKwva6wj-5Gsc-3YoC66ISc" },
    ],
    subcommittees: [
      {
        name: "Degree\u00A0Planner",
        directors: [
          { name: "Jonathan Charles", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "Notangles",
        directors: [
          { name: "Tony Tang", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "uBark",
        directors: [
          { name: "Adam Tizzone", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "Freerooms",
        directors: [
          { name: "Callum Avery", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "Jobsboard",
        directors: [
          { name: "Adam Tizzone", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "Website\u00A0(CSESoc)",
        directors: [
          { name: "Gordon Zhong", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "Website\u00A0(CompClub)",
        directors: [
          { name: "Thomas Lam", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "Handbook\u00A0API",
        directors: [
          { name: "Zac Kologlu", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "isSocsOpen",
        directors: [
          { name: "Inura De Zoysa", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "Payments\u00A0Platform",
        directors: [
          { name: "Adam Tizzone", imgUrl: ""},
        ],
        subcommittee: []
      }
    ]
  },
  2020: {
    executives: [
      { name: "Gordon Zhong", title: "Projects Director", imgUrl: "https://media.licdn.com/dms/image/C4D03AQG-dYRSVdZcow/profile-displayphoto-shrink_800_800/0/1655776311291?e=1721865600&v=beta&t=hPnlermuSGmbDhwQXJBIWWAsAK0aiepWrfuzg6QQI2s" },
      { name: "Leesa Dang", title: "Projects Director", imgUrl: "https://media.licdn.com/dms/image/C5603AQHYY9CP2fU67A/profile-displayphoto-shrink_800_800/0/1557634147933?e=1721865600&v=beta&t=yKLSQLcWauAGh5HB2Y17f8IRIn2peUqwHCA0CCX7jl8" },
    ],
    subcommittees: [
      {
        name: "Notangles",
        directors: [
          { name: "Max Wo", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "Degree\u00A0Planner",
        directors: [
          { name: "Olga Popovic", imgUrl: ""},
          { name: "Max Wo", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "Slackbot",
        directors: [
          { name: "Parviz Ahmadi", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "Freerooms",
        directors: [
          { name: "Callum Avery", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "Jobsboard",
        directors: [
          { name: "Adam Tizzone", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "Website\u00A0(CSESoc)",
        directors: [
          { name: "Tommy Truong", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "Website\u00A0(CompClub)",
        directors: [
          { name: "Leesa Dang", imgUrl: ""},
          { name: "Gordon Zhang", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "Attendance\u00A0Tracker",
        directors: [],
        subcommittee: []
      },
      {
        name: "uBark",
        directors: [
          { name: "Adam Tizzone", imgUrl: ""},
        ],
        subcommittee: []
      }
    ]
  },
  2021: {
    executives: [
      { name: "Esther Wong", title: "Projects Director", imgUrl: "https://media.licdn.com/dms/image/C4D03AQGnqVZp3w7ITw/profile-displayphoto-shrink_800_800/0/1653634901266?e=1721865600&v=beta&t=q78_E16zwnaA8nWxFdZuYLXID5FAF181H_7upfl4FOA" },
      { name: "Zac Kologlu", title: "Projects Director", imgUrl: "https://media.licdn.com/dms/image/D5603AQFn-RBTj_zOqQ/profile-displayphoto-shrink_800_800/0/1673959501551?e=1721865600&v=beta&t=ByTFNe9DxG7R1cw3nySUXDOCAoBqYku2ZkLiX1EP7Lw" },
    ],
    subcommittees: [
      {
        name: "Circles",
        directors: [
          { name: "James Ji", imgUrl: ""},
          { name: "Jennifer Xu", imgUrl: ""},
        ],
        subcommittee: [
          { name: "Yiyan Yang", imgUrl: ""},
          { name: "Adam Brieger", imgUrl: ""},
          { name: "Vincent Xiao", imgUrl: ""},
          { name: "Kevin Huang", imgUrl: ""},
          { name: "Gabriella Hartanto", imgUrl: ""},
          { name: "Sally Sun", imgUrl: ""},
          { name: "Sanojan Thiyagaraja", imgUrl: ""},
        ]
      },
      {
        name: "Discord\u00A0Bot",
        directors: [
          { name: "Waleed Shahid", imgUrl: ""},
        ],
        subcommittee: [
          { name: "Jack Li", imgUrl: ""},
          { name: "Oliver Bowers", imgUrl: ""},
          { name: "Kamiyu Hijikata", imgUrl: ""},
          { name: "Sanyam Jain", imgUrl: ""},
          { name: "Rifa Jamal", imgUrl: ""},
          { name: "Maria Zhang", imgUrl: ""},
        ]
      },
      {
        name: "Freerooms",
        directors: [
          { name: "Mun Joon Teo", imgUrl: ""},
        ],
        subcommittee: [
          { name: "Keshiga Gopalarajah", imgUrl: ""},
          { name: "Grace Kan", imgUrl: ""},
          { name: "Arsham Emad", imgUrl: ""},
          { name: "Sarah Leung", imgUrl: ""},
          { name: "Damjan Stevanoski", imgUrl: ""},
        ]
      },
      {
        name: "Notangles",
        directors: [
          { name: "Luke Fisk-Lennon", imgUrl: ""},
        ],
        subcommittee: [
          { name: "Farnaz Tavakol", imgUrl: ""},
          { name: "Abiram Nadarajah", imgUrl: ""},
          { name: "Emily Tang", imgUrl: ""},
          { name: "Andrew Lin", imgUrl: ""},
          { name: "Oliver Xu", imgUrl: ""},
          { name: "Mehak Arya", imgUrl: ""},
          { name: "Martin Knezevic", imgUrl: ""},
        ]
      },
      {
        name: "Structs",
        directors: [
          { name: "Tim Zhang", imgUrl: ""},
        ],
        subcommittee: [
          { name: "Alexander Cunio", imgUrl: ""},
          { name: "Joanna Lin", imgUrl: ""},
          { name: "Dominic Allas", imgUrl: ""},
          { name: "Yunze Shi", imgUrl: ""},
          { name: "Rachel Yu", imgUrl: ""},
          { name: "Raghav Lall", imgUrl: ""},
          { name: "Joseph Xu", imgUrl: ""},
        ]
      },
      {
        name: "Website",
        directors: [
          { name: "Matt Rossouw", imgUrl: ""},
        ],
        subcommittee: [
          { name: "Priscilla Soo", imgUrl: ""},
          { name: "Jacky Xie", imgUrl: ""},
          { name: "Nian Li", imgUrl: ""},
          { name: "Varun Sethu", imgUrl: ""},
          { name: "Nathan Cao", imgUrl: ""},
          { name: "Zoe Ramirez", imgUrl: ""},
        ]
      },
    ]
  },
  2022: {
    executives: [
      { name: "James Ji", title: "Projects Director", imgUrl: "https://media.licdn.com/dms/image/D5603AQGTkMu2h1CoGw/profile-displayphoto-shrink_800_800/0/1671790198748?e=1721865600&v=beta&t=NXeEtcqCq7BNl_yt1wH_uXFp6mQZ3y2lboO29Zd14e4" },
      { name: "Vicky Wu", title: "Projects Director", imgUrl: "https://media.licdn.com/dms/image/D4E03AQHUzxhp4c_mnQ/profile-displayphoto-shrink_800_800/0/1677625183062?e=1721865600&v=beta&t=yItOAojz--6f35LuEslAdFLYDg0D8waAabGimIjQeoE" },
      { name: "Abiram Nadarajah", title: "Technical Director", imgUrl: "https://media.licdn.com/dms/image/C5603AQE3oeVUmozItw/profile-displayphoto-shrink_800_800/0/1619801785542?e=1721865600&v=beta&t=Ia_bthbsPaLnrj6dMghdgAvXoZ31-xa6X1Io18Tyl1Y"},
      { name: "Jared L", title: "Technical Director", imgUrl: "https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg" },
      { name: "Shrey Somaiya", title: "Projects Lead", imgUrl: "https://media.licdn.com/dms/image/C4D03AQHOAs0zYH4KCg/profile-displayphoto-shrink_800_800/0/1653994970103?e=1722470400&v=beta&t=EAfTDqAmqihOqV-xaPzLhM8991xihysmbOcg9sOM2zs" },

    ],
    subcommittees: [
      {
        name: "Chaos",
        directors: [
          { name: "Michael Vo", imgUrl: "zaxutic"},
          { name: "Lewis Cullen", imgUrl: ""},
          { name: "Evan Williams", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "Circles",
        directors: [
          { name: "Peter Derias", imgUrl: ""},
          { name: "Leo Sun", imgUrl: ""},
          { name: "Sanojay Thiagara", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "CSElectives",
        directors: [
          { name: "Vivian Wang", imgUrl: ""},
          { name: "Victoria Vu", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "Discord\u00A0Bot",
        directors: [
          { name: "Emily Lu", imgUrl: ""},
          { name: "Riz Manter", imgUrl: ""},
          { name: "Sanyam Jain", imgUrl: ""},
        ],
        subcommittee: [
          { name: "Harry Zhang", imgUrl: ""},
          { name: "Sam Schreyer", imgUrl: ""},
          { name: "Jason Gong", imgUrl: ""},
          { name: "Yuvraj Singh", imgUrl: ""},
          { name: "Jane Wang", imgUrl: ""},
          { name: "Dominic Cheung", imgUrl: ""},
          { name: "Murtaza Pakawala", imgUrl: ""},
          { name: "Alexander Chen", imgUrl: ""},]
      },
      {
        name: "Freerooms",
        directors: [
          { name: "Brittany Li", imgUrl: "Britain1680"},
          { name: "Bob Chen", imgUrl: "3bobchen"},
        ],
        subcommittee: []
      },
      {
        name: "Jobsboard",
        directors: [
          { name: "Darian Lee", imgUrl: ""},
          { name: "Joanna He", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "Notangles",
        directors: [
          { name: "Mun Joon Teo", imgUrl: ""},
          { name: "Oliver Xu", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "Structs",
        directors: [
          { name: "Dominic Atlas", imgUrl: ""},
          { name: "Joanna Sun", imgUrl: ""},
        ],
        subcommittee: []
      },
      {
        name: "Website",
        directors: [
          { name: "Varun Sethu", imgUrl: ""},
          { name: "Jacky Xie", imgUrl: ""},
        ],
        subcommittee: []
      },
    ]
  },
  2023: {
    executives: [
      { name: "Angella Pham", title: "Vice President Development", imgUrl: "https://media.licdn.com/dms/image/D4D03AQFiN1KH0S9hTA/profile-displayphoto-shrink_800_800/0/1714059532085?e=1721865600&v=beta&t=3DgZTuY5c5zHW40AflT3jP_-oTXSTtp3yXe89ccHgKo" },
      { name: "Hanyuan Li", title: "Vice President Development/Secretary", imgUrl: "https://media.licdn.com/dms/image/D5603AQEcsXuE78Vfeg/profile-displayphoto-shrink_800_800/0/1669526929705?e=1721865600&v=beta&t=uyJo3dG91ocUWoTPrLCMtxpm6P6aO_iiUbmqrbxUaFY" },
      { name: "Jared L", title: "Chief Technology Officer", imgUrl: "https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg" },
      { name: "Winnie Zhang", title: "Treasurer/Arc Delegate/GEDI", imgUrl: "https://media.licdn.com/dms/image/C4D03AQG2ZEafjLJUcQ/profile-displayphoto-shrink_800_800/0/1652866502245?e=1721865600&v=beta&t=y__ANoc8ULvSL8W748CYcKj4QvCqNZZzjhuDE0lHg54" },
      { name: "Max Xue", title: "Vice President", imgUrl: "/people/438332823_1121897719091622_159828398805774345_n.jpg" },
    ],
    subcommittees: [
      {
        name: "Chaos",
        directors: [
          { name: "Michael Vo", imgUrl: "zaxutic"},
          { name: "Alex Miao", imgUrl: "alexmiaopu"},
          { name: "Henry Wan", imgUrl: "m4ch374"},
        ],
        subcommittee: [
          { name: "Oscar Kologlu", imgUrl: "Oscaz"},
          { name: "Mohamed Uzman Zawahir", imgUrl: "kappamalone"},
          { name: "Dane Urban", imgUrl: "Danelegend"},
          { name: "William Zhang", imgUrl: "dhj03"},
          { name: "Kavika Palletenne", imgUrl: "KavikaPalletenne"},
          { name: "Muhammed Kumsuz", imgUrl: "kumsuzM"},
          { name: "Helen Song", imgUrl: "etyry"},]
      },
      {
        name: "Circles",
        directors: [
          { name: "Leonardo Fan", imgUrl: "leonardo-fan"},
          { name: "Hussain Nawaz", imgUrl: "imagine-hussain"},],
        subcommittee: [
          { name: "Christian Lam", imgUrl: "ui-Auxilary"},
          { name: "Martin Knezevic", imgUrl: "martanman"},
          { name: "Olli Bowers", imgUrl: "ollibowers"},
          { name: "Vinayak Fialok (Vinnie)", imgUrl: "VinayakFia"},
          { name: "Luke Prior", imgUrl: "LukePrior"},
          { name: "Lucas Harvey", imgUrl: "lhvy"},
          { name: "Kobi Beckett", imgUrl: "Bahnschrift"},
          { name: "Sandeep Das", imgUrl: "Dasyure"},
          { name: "Nyah Inglis", imgUrl: "Basialo"},
        ]
      },
      {
        name: "CSElectives",
        directors: [
          { name: "Joanna He", imgUrl: "joanna209"},
          { name: "Aimen Hamed", imgUrl: "aimenhamed"},],
        subcommittee: [
          { name: "Joel Huang", imgUrl: "jhuang1688"},
          { name: "Merry Rosalie", imgUrl: "MerryRosalie"},
          { name: "Vincent Le", imgUrl: "vinsentcs"},
          { name: "Timmy Huang", imgUrl: "timmy-huang"},
          { name: "Helen Mai", imgUrl: "Merlte"},
          { name: "Dylan Wang", imgUrl: "inutuzumab"},
          { name: "Ahnaf Tazwar", imgUrl: "ahnaftazwar368"},
          { name: "Edward Lukman", imgUrl: "gudluckman"},]
      },
      {
        name: "Discord\u00A0Bot",
        directors: [
          { name: "Alexander Chen", imgUrl: "zcday1"},
          { name: "Richard Zhong", imgUrl: "tunedin-ctrl"},],
        subcommittee: [
          { name: "Murtaza Pakawala", imgUrl: "MurtazaPakawala"},
          { name: "Thomas Zhao", imgUrl: "mi-mott"},
          { name: "Dominic Cheung", imgUrl: "Wolfdragon24"},
          { name: "Zhitao Chen", imgUrl: "Bigbugman"},
          { name: "Abraham Assariparambil Earnest", imgUrl: "abe123442"},
          { name: "Jeffrey Meng", imgUrl: "Meng0o"},
          { name: "Kaniz Kader", imgUrl: "kaniz3"},
          { name: "Jessica Xu", imgUrl: "jsxu29"},]
      },
      {
        name: "Freerooms",
        directors: [
          { name: "Bob Chen", imgUrl: "3bobchen"},
          { name: "Franco Reyes", imgUrl: "francojreyes"},
        ],
        subcommittee: [
          { name: "Benjamin Hung", imgUrl: "Benicillin1610"},
          { name: "William Zhong", imgUrl: "williamyzhong"},
          { name: "Sean Wibisono", imgUrl: "handsoapgt"},
          { name: "Harry Zhang", imgUrl: "Chromaggus"},
          { name: "Agnes Clemente", imgUrl: "agnesclemente"},
          { name: "Richard Xue", imgUrl: "Vinegarette"},
          { name: "Jessica Feng", imgUrl: "JessicaF"},
          { name: "Tommy Truong", imgUrl: "tommydachi"},
          { name: "Urja Arora", imgUrl: "ur-ja"},
          { name: "Alec Tan", imgUrl: "alecntan"},
          { name: "Nicole Chun Wai Yan", imgUrl: "crocyoiin"},]
      },
      {
        name: "Jobsboard",
        directors: [
          { name: "Matthew Liu", imgUrl: "matth3wliuu"},
          { name: "Gabriel Ting", imgUrl: "gtangelo"},
        ],
        subcommittee: [
          { name: "Sunny Wang", imgUrl: "casio987"},
          { name: "Adrian Tan", imgUrl: "adriantan09"},
          { name: "Xing He", imgUrl: "xincczn"},
          { name: "Edwin Lam", imgUrl: "oodwin"},
          { name: "Richard Bao", imgUrl: "RichardBao1"},
          { name: "William Owen Setiawan", imgUrl: "william-o-s"},
          { name: "Derek Xu", imgUrl: "derekxu04"},
        ]
      },
      {
        name: "Notangles",
        directors: [
          { name: "Raiyan Ahmed", imgUrl: "Rayahhhmed"},
          { name: "Manhua Lu", imgUrl: "manhualu"},],
        subcommittee: [
          { name: "Sijin Soon", imgUrl: "sssijin"},
          { name: "Wanning Cai", imgUrl: "incalescence"},
          { name: "Sally Sun", imgUrl: "sallyysun"},
          { name: "Eklavya Joshi", imgUrl: "eklavya-joshi"},
          { name: "Jasmine Tran", imgUrl: "jasttran"},
          { name: "Michael Siu", imgUrl: "M7s7"},
          { name: "Shaam Jevan", imgUrl: "Shzmj"},]
      },
      {
        name: "Structs",
        directors: [
          { name: "Edward Qian", imgUrl: "jedwed"},
          { name: "Luke Fisk-Lennon", imgUrl: "lukefisklennon"},
          { name: "Gordon Huang", imgUrl: "dqna64"},],
        subcommittee: [
          { name: "Jin Sunwoo", imgUrl: "JinTheHuman"},
          { name: "Justin Yang", imgUrl: "Kluvens"},
          { name: "Jonah Hopkin", imgUrl: "Keybinder"},
          { name: "Ben Luke Patel", imgUrl: "ben-patel"},
          { name: "Sohum Shah", imgUrl: "sohumshah2"},
          { name: "Fiona Chau", imgUrl: "FireSuperSaurus"},
          { name: "David Zhou", imgUrl: "Dammshine"},
          { name: "Shubh Shah", imgUrl: "Shubh141"},
          { name: "Manav Dodia", imgUrl: "manav1411"},
          { name: "James Treloar", imgUrl: "JamesTreloar"},
          { name: "Audrey Tanama", imgUrl: "audtan125"},]
      },
      {
        name: "Website",
        directors: [
          { name: "Laura Wen", imgUrl: "lauraw0"},
          { name: "Mae Vuong", imgUrl: "hdphuong"},
          { name: "James Teng", imgUrl: "jamest0"},
          { name: "Thomas Liang", imgUrl: "ShunyaoLiang"},],
        subcommittee: [
          { name: "Thomas Qu", imgUrl: "Plisp"},
          { name: "Winnie Tan", imgUrl: "winnteas"},
          { name: "Emily Lu", imgUrl: "EmilyyyL"},
          { name: "Brian Wang", imgUrl: "brian2w"},
          { name: "Westley Lo", imgUrl: "Expressionless-Ball-Thing"},
          { name: "Josh Ramos", imgUrl: "josh-ramos-22"},
          { name: "Brian Zhang", imgUrl: ""},
          { name: "Derek Tran", imgUrl: "Bandicoon"},
        ]
      },
      {
        name: "Culture",
        directors: [
          { name: "Jane Wang", imgUrl: ""},
          { name: "Sharon Zhong", imgUrl: ""},],
        subcommittee: [
          { name: "Kellie Yau", imgUrl: ""},
          { name: "Ramanpreet Singh", imgUrl: ""},
          { name: "William Feng", imgUrl: ""},
          { name: "Madeline Robinson", imgUrl: ""},
          { name: "Angeline Tran", imgUrl: ""},
          { name: "Brandon Tan", imgUrl: ""},
          { name: "Dylan Zhang", imgUrl: ""},
          { name: "Ashley Luong", imgUrl: ""},
          { name: "Rokika Khondaker", imgUrl: ""},]
      },
      {
        name: "Content",
        directors: [
          { name: "Rachel Ahn", imgUrl: ""},
          { name: "Omar Al Zeidat", imgUrl: ""},],
        subcommittee: [
          { name: "Jasmin Wu", imgUrl: ""},
          { name: "Ming Xuan Yong", imgUrl: ""},
          { name: "Vicky Lee", imgUrl: ""},
          { name: "Brendan Ngo", imgUrl: ""},
          { name: "James Kirkpatrick", imgUrl: ""},
          { name: "Alexandria Fee", imgUrl: ""},
          { name: "Matthew Lim", imgUrl: ""},
          { name: "Sophia Zheng", imgUrl: ""},]
      },
      {
        name: "UI\/UX",
        directors: [
          { name: "Darian Lee", imgUrl: "Darianlmj"},
          { name: "Grace Kan", imgUrl: "gracexkan"},],
        subcommittee: [
          { name: "Vivian Wang", imgUrl: "aquivere"},
          { name: "Daniel Huynh", imgUrl: "huynhdle"},
          { name: "Lucy Chhuo", imgUrl: "hhuolu"},
          { name: "Christina Thevasaeyan", imgUrl: "christinat09"},
          { name: "Brianna Kim", imgUrl: "bribrisleepy"},
          { name: "Derek Kim", imgUrl: "derekkim02"},]
      },
      {
        name: "Platform",
        directors: [
          { name: "Sacha Korban", imgUrl: "sachk"},],
        subcommittee: []
      },
      {
        name: "Architects",
        directors: [
          { name: "Peter Derias", imgUrl: "peedee2002"},
          { name: "Varun Sethu", imgUrl: "varun-sethu"},],
        subcommittee: []
      },
      {
        name: "Education",
        directors: [
          { name: "Simon Nguyen", imgUrl: "Allynixtor"},
          { name: "Terence Lau", imgUrl: "Laute"},
          { name: "Maxwell Phillips", imgUrl: "maxphillipsdev"},
          { name: "Madhav Kumar", imgUrl: "kumar-ish"},],
        subcommittee: [
          { name: "Luke Wang", imgUrl: "lukedwang"},
          { name: "Gerald Huang", imgUrl: "opengangs"},
          { name: "Ashley Chan", imgUrl: "ashrchan"},
          { name: "Tracy Qin", imgUrl: "tracyjqin"},
          { name: "Morgan Swaak", imgUrl: "morqanic"},
          { name: "Daniel Xie Chen", imgUrl: "BadAtEveryGame"},
          { name: "William Huynh", imgUrl: "WilliamHuynh5"},
          { name: "Parv Rehan", imgUrl: "parvyyy-cse"},
          { name: "Liam Smith", imgUrl: "BinaryGamer"},]
      },
      {
        name: "Training\u00A0Program",
        directors: [
          { name: "Henry Guo", imgUrl: "Suchpuns"},
          { name: "Joshi Ha", imgUrl: "joshi-hahahaha"},
        ],
        subcommittee: []
      }
    ]
  },
  2024: {
    executives: [
      { name: "Bob Chen", title: "Co-President", imgUrl: "/people/pres-nf.jpeg" },
      { name: "Sally Sun", title: "Co-President", imgUrl: "/people/pres-nm.png" },
      { name: "Jeremy Le", title: "Administrative Officer", imgUrl: "/people/admin.jpg" },
      { name: "Michael Girikallo", title: "GEDI Officer", imgUrl: "/people/gedi.jpeg" },
      { name: "Audrey Tanama", title: "VP (Internals)", imgUrl: "/people/vpi.jpeg" },
      { name: "Henry Guo", title: "VP (Operations)", imgUrl: "/people/vpo.jpeg" },
      { name: "Manhua Lu", title: "VP (Course Projects)", imgUrl: "/people/vpc.jpeg" },
      { name: "Franco Reyes", title: "VP (Standalone Projects)", imgUrl: "/people/vps.jpeg" },
    ],
    subcommittees: [
      {
        name: "Chaos",
        directors: [
          { name: "Kavika Palletenne", imgUrl: "KavikaPalletenne"},
          { name: "Peter Haraldur Hamar Osborne", imgUrl: "PeterOsborne"},
        ],
        subcommittee: [
          { name: "Alex Miao", imgUrl: "alexmiaopu"},
          { name: "Fritz Rehde", imgUrl: "fritzrehde"},
          { name: "Skye Blair", imgUrl: "skye-blair"},
          { name: "Zac Ecob", imgUrl: "ItsIronicIInsist"},
          { name: "Hellen Wang", imgUrl: "HellenMelon"},
          { name: "Alexander Lai", imgUrl: "alexlai18"},
          { name: "Yunshu Dai", imgUrl: "pigeonseverywhere"},
        ]
      },
      {
        name: "Circles",
        directors: [
          { name: "Martin Knezevic", imgUrl: "martanman"},
          { name: "Oliver Bowers", imgUrl: "ollibowers"},
        ],
        subcommittee: [
          { name: "Lucas Harvey", imgUrl: "lhvy"},
          { name: "Deki Lhamu", imgUrl: "pikapiku"},
          { name: "Jackson Wang", imgUrl: "arnold45202"},
          { name: "Salina Huang", imgUrl: "Salina-H"},
          { name: "Fai Chan", imgUrl: "chanfaileui"},
          { name: "Hussain Nawaz", imgUrl: "imaginehussain"},
          { name: "Joel Jose", imgUrl: "justjo3l"},
        ]
      },
      {
        name: "Freerooms",
        directors: [
          { name: "Jessica Feng", imgUrl: "JessicaF"},
          { name: "Richard Xue", imgUrl: "Vinegarette"},
        ],
        subcommittee: [
          { name: "Andrew Zhang", imgUrl: "azjy89"},
          { name: "Cherise Chan", imgUrl: "cherisechan"},
          { name: "Hung Pham", imgUrl: "SkellyBG"},
          { name: "Kelly Su", imgUrl: "kellysu1"},
          { name: "Livia Wang", imgUrl: "liv888"},
          { name: "Mark Tran", imgUrl: "marktran2"},
          { name: "Sophia Liu", imgUrl: "sobariu"},
        ]
      },
      {
        name: "Jobsboard",
        directors: [
          { name: "Richard Bao", imgUrl: "RichardBao1"},
          { name: "Flynn Lambrechts", imgUrl: "flynnlambrechts"},
        ],
        subcommittee: [
          { name: "Brian Nhan", imgUrl: "brnhan"},
          { name: "Natalie Jordanov", imgUrl: "nat859"},
          { name: "Emily Ngo", imgUrl: "engooo"},
          { name: "Rishabh Alajpur", imgUrl: "rishabhAlj"},
          { name: "Keven Liu", imgUrl: "gitgoonhubber"},
          { name: "Alec Liu", imgUrl: "alecliu1204"},
          { name: "Nguyen Gia Han Hanh", imgUrl: "hanhnguyengiahan"},
        ]
      },
      {
        name: "Notangles",
        directors: [
          { name: "Raiyan Ahmed", imgUrl: "Rayahhhmed"},
          { name: "Shaam Jevan", imgUrl: "Shzmj"},
        ],
        subcommittee: [
          { name: "Jasmine Tran", imgUrl: "jasttran"},
          { name: "Michael Siu", imgUrl: "m7s7"},
          { name: "Jordan Benjamin", imgUrl: "jordansbenjamin"},
          { name: "Nikki Qin", imgUrl: "nikkichins"},
          { name: "Lucy Chhuo", imgUrl: "hhuolu"},
          { name: "Sohum Shah", imgUrl: "sohumshah2"},
          { name: "Chanel Bouchaaya", imgUrl: "chanboba"},
        ]
      },
      {
        name: "Structs",
        directors: [
          { name: "Shubhum (Shubh) Shah", imgUrl: "Shubh141"},
          { name: "David Zhou", imgUrl: "Dammshine"},
        ],
        subcommittee: [
          { name: "Alex Lee", imgUrl: "NailTheHogRider"},
          { name: "Sylvia Wang", imgUrl: "PolarisXII"},
          { name: "Yian Li", imgUrl: "koritea"},
          { name: "Krista Chen", imgUrl: "kikikika"},
          { name: "Cyril Vivek Subramanian", imgUrl: "yellowsubmarine1447"},
          { name: "Andrea Kuchuk", imgUrl: "a-kuchuk"},
          { name: "Vincent Yu", imgUrl: "Byncent"},
        ]
      },
      {
        name: "Unilectives",
        directors: [
          { name: "Dylan Wang", imgUrl: "dylanwz"},
          { name: "Dimas Putra Anugerah", imgUrl: "eaglethrost"},
        ],
        subcommittee: [
          { name: "Alice Tang", imgUrl: "lightAndTangy"},
          { name: "Urja Arora", imgUrl: "ur-ja"},
          { name: "Maximilian Falco Widjaya", imgUrl: "maximilianfalco"},
          { name: "Tom Forsyth", imgUrl: "3syth"},
          { name: "Adrian Balbalosa", imgUrl: "adrianbalbs"},
          { name: "Kevin Edbert Sutandi", imgUrl: "KevinSutandi"},
          { name: "Christine Phung", imgUrl: "Christin322"},
        ]
      },
      {
        name: "Marketing",
        directors: [
          { name: "Angella Pham", imgUrl: "anjerraa"},
          { name: "Eric Wu", imgUrl: ""},
          { name: "Mark Quach", imgUrl: "markquach12"},
        ],
        subcommittee: [
          { name: "Himani Mittal", imgUrl: ""},
          { name: "Joye Fu", imgUrl: ""},
          { name: "Omar Al Zeidat", imgUrl: ""},
          { name: "Vincent Tannos", imgUrl: ""},
          { name: "Missy Chhuo", imgUrl: ""},
          { name: "Derik Sourignavong", imgUrl: "Derik-S"},
          { name: "Xing He", imgUrl: "xincczn"},
        ]
      },
      {
        name: "HR",
        directors: [
          { name: "Jade Kam", imgUrl: ""},
          { name: "Ashley Luong", imgUrl: "asssssssley"},
        ],
        subcommittee: [
          { name: "Jiatao (Tom) Liu", imgUrl: ""},
          { name: "Stephanie Lu", imgUrl: ""},
          { name: "Angeline Tran", imgUrl: ""},
          { name: "Bryan Zou", imgUrl: ""},
          { name: "Kim Lam", imgUrl: ""},
          { name: "Bella Cu", imgUrl: ""},
          { name: "Brandon Tan", imgUrl: ""},
          { name: "William Dang", imgUrl: ""},
          { name: "Arnold Tan", imgUrl: ""},
        ]
      },
      {
        name: "UI\/UX",
        directors: [
          { name: "Daniel Huynh", imgUrl: "ledanielhuynh"},
          { name: "Merry Rosalie", imgUrl: "MerryRosalie"},
        ],
        subcommittee: [
          { name: "Cindy Zhang", imgUrl: ""},
          { name: "Sandy Tran", imgUrl: ""},
          { name: "Rachel Bai", imgUrl: "rachel-bai"},
          { name: "Veer Sheth", imgUrl: "veersheth"},
          { name: "Vedad Neday Diznab", imgUrl: "d33-gari"},
          { name: "Hai Tao (Ricky) Guan", imgUrl: ""},
          { name: "Junya Wang", imgUrl: "sharkbaitchomp"},
        ]
      },
      {
        name: "Platform",
        directors: [
          { name: "Jared L", imgUrl: "lhjt"},
          { name: "Sacha Korban", imgUrl: "sachk"},
        ],
        subcommittee: [
          { name: "Mazen Zahr", imgUrl: "GKasparov"},
          { name: "Dragon Fan", imgUrl: "YellowChemistryPublishing"},
          { name: "Ada Mu", imgUrl: "classmateada"},
          { name: "Ethan Scott", imgUrl: "ChinoGoblino"},
        ]
      },
      {
        name: "Training\u00A0Program",
        directors: [
          { name: "Nicole Wai Yan Chun", imgUrl: "crocyoiin"},
          { name: "Dylan Dinh An Huynh", imgUrl: "TAS-scorchedshadow"}
        ],
        subcommittee: []
      }
    ]
  }
};
export type PersonProps = Omit<ExecProps, 'title'>;
interface TeamData {
  [key: number]: {
    executives: ExecProps[];
    subcommittees: {
      name: string,
      directors: PersonProps[],
      subcommittee: PersonProps[]
    }[]
  }
}

// Data for the "Join DevSoc" section
// Should set/unset applicationUrl to mark recruitment as open/closed
export const recruitmentData: RecruitmentProps[] = [
  { position: "Directors", Icon: Lightbulb },
  { position: "Subcommittee", Icon: Groups },
  {
    position: "Training Leads",
    Icon: CoPresent,
    applicationUrl: "https://forms.gle/PyUdngjAfE9oczGT6",
  },
  { position: "Trainees", Icon: School, applicationUrl: "https://forms.gle/1JckRMSsLfrY2bi7A" },
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
