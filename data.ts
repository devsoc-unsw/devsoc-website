import { EmojiObjects as Lightbulb, Facebook, GitHub, Instagram, LinkedIn, Person, School } from '@mui/icons-material';
import { ProjectCardProps } from './app/(pages)/our-projects/page';
import { PersonProps } from './app/(pages)/about-us/page';
import { RecruitmentProps } from './app/(pages)/get-involved/page';

// General stuff:
// - All images need to go somewhere in /public, and the links are rooted at the /public folder
// - Available icons can be found here: https://mui.com/material-ui/material-icons/

// Pages and links displayed on nav
// Probably shouldn't be touched
export const navData = [
  { text: 'About Us', href: '/about-us' },
  { text: 'Our Projects', href: '/our-projects' },
  { text: 'Get Involved', href: '/get-involved' },
];

// Links to socials on nav
export const socialsData = [
  { Icon: GitHub, href: "https://github.com/devsoc-unsw" },
  { Icon: Facebook, href: "https://www.facebook.com/devsocUNSW/" },
  { Icon: Instagram, href: "https://www.instagram.com/devsoc_unsw/" },
  { Icon: LinkedIn, href: "https://www.linkedin.com/company/97436660/" },
];

// Data displayed on the cards of the "Our Projects" page
// If "projectUrl" is not set, then the card will say 'Coming soon!'
export const projectData: ProjectCardProps[] = [
  {
    name: "Notangles",
    desc: "An interactive drag-and-drop timetable planner designed to help UNSW students plan their ideal weekly timetable.",
    logoUrl: "/projects/notangles/logo.png",
    thumbnailUrl: "/projects/notangles/thumbnail.png",
    projectUrl: "https://notangles.csesoc.app/"
  },
  {
    name: "Circles",
    desc: "A UNSW degree planner where you can explore and validate your degree structure.",
    logoUrl: "/projects/circles/logo.png",
    thumbnailUrl: "/projects/circles/thumbnail.png",
    projectUrl: "https://circles.csesoc.app/"
  },
  {
    name: "Unilectives",
    desc: "Your one-stop shop for UNSW course and elective reviews.",
    logoUrl: "/projects/unilectives/logo.png",
    thumbnailUrl: "/projects/unilectives/thumbnail.png",
    projectUrl: "https://unilectives.csesoc.app/"
  },
  {
    name: "Structs.sh",
    desc: "An interactive data structure and algorithm visualiser and educational platform for computer science students.",
    logoUrl: "/projects/structs/logo.png",
    thumbnailUrl: "/projects/structs/thumbnail.png",
    projectUrl: "https://structs.sh/"
  },
  {
    name: "Freerooms",
    desc: "A tool to view the timetable of any room on campus, and find an available room that suits all your needs.",
    logoUrl: "/projects/freerooms/logo.png",
    thumbnailUrl: "/projects/freerooms/thumbnail.png",
    projectUrl: "https://freerooms.csesoc.app/"
  },
  {
    name: "Jobsboard",
    desc: "A portal for students to explore job openings offered by our sponsors and other tech companies.",
    logoUrl: "/projects/jobsboard/logo.png",
    thumbnailUrl: "/projects/jobsboard/thumbnail.png",
    projectUrl: "https://jobsboard.csesoc.unsw.edu.au/"
  },
  {
    name: "Chaos",
    desc: "A platform for simplifying applying and recruiting for student society subcommittees at UNSW.",
    logoUrl: "/projects/chaos/logo.png",
    thumbnailUrl: "/projects/chaos/thumbnail.png",
  },
];

// People displayed in the "Meet the Team" section of "About Us"
// If no image set, an animated gray circle appears
export const teamData: PersonProps[] = [
  { name: "Bob Chen", title: "President", imgUrl: '/people/pres.jpeg' },
  { name: "Jeremy Le", title: "Administrative Officer", imgUrl: '/people/admin.jpg' },
  { name: "Michael Girikallo", title: "GEDI Officer", imgUrl: '/people/gedi.jpeg' },
  { name: "Alex Chen", title: "VP Internals", imgUrl: '/people/vpi.jpeg' },
  { name: "Henry Guo", title: "VP Operations", imgUrl: '/people/vpo.jpeg' },
  { name: "Manhua Lu", title: "VP Course Projects", imgUrl: '/people/vpc.jpeg' },
  { name: "Franco Reyes", title: "VP Standalone Projects", imgUrl: '/people/vps.jpeg' },
];

// Data for the "Join DevSoc" section
// Should set/unset applicationUrl to mark recruitment as open/closed
export const recruitmentData: RecruitmentProps[] = [
  { position: "Directors", Icon: Lightbulb },
  { position: "Subcom", Icon: Person },
  { position: "Trainees", Icon: School },
];

export const feedbackFormUrl = "https://forms.gle/TjHcB9MHf6AwojiE8";
