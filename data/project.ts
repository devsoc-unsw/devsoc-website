import {
  StandardProjectCardProps,
  TraineeCardProps,
} from "../components/ProjectCard";

const flagshipProjectRaw = [
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
] as const;

export const flagshipProjectData: StandardProjectCardProps[] =
  flagshipProjectRaw.map((p) => ({ ...p, type: "standard_project" }));

const traineeProjectRaw = [
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

export const traineeProjectData: TraineeCardProps[] = traineeProjectRaw.map(
  (p) => ({ ...p, type: "trainee" })
);

const collabProjectsRaw = [
  {
    name: "UNSW Engineering Persona Quiz",
    desc: "Interactive quiz for first year engineering students. Built in collbaration with UNSW Engineering in 2025.",
    logoUrl: "/projects/quiz/logo.png",
    thumbnailUrl: "/projects/quiz/thumbnail.png",
    projectUrl: "https://quiz.devsoc.app",
    status: "Operational",
  },
] as const;

export const collabProjectData: StandardProjectCardProps[] =
  collabProjectsRaw.map((p) => ({ ...p, type: "standard_project" }));
