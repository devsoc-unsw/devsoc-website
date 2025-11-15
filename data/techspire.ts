import { CardType } from "../components/ProjectCard";
import atlassian from "../assets/atlassian.png";
import apple from "../assets/apple.png";
import janeStreet from "../assets/jane_street.svg";
import rp from "../assets/rp.png";
import imc from "../assets/imc.png";
import sc from "../assets/sc.png";
import qrt from "../assets/qrt.svg";
import citadel from "../assets/citadel.png";
import macquarie from "../assets/macquarie.svg";
import tiktok from "../assets/tiktok.svg";
import cse from "../assets/CSE.jpeg";
import unsw from "../assets/unsw.png";
import arc from "../assets/arc.png";
import csesoc from "../assets/csesocwhite.png";
import roundhouse from "../assets/roundhouse.png";
import lyra from "../assets/lyra.svg";
import arista from "../assets/arista.png";
import google from "../assets/google.png";
import pearler from "../assets/pearler.png";
import canva from "../assets/canva.png";
import amazon from "../assets/amazon.png";
import jobsboard from "../public/projects/jobsboard/logo.png";
import { SponsorInfo } from "./supporters";

export const techspireSpeakerData: Record<string, CardType[]> = {
  2022: [
    {
      name: "Ofir Zeevi",
      desc:
        "Ofir's experience expands beyond the conventional career path of a Software Engineer. From his Network Engineering internship at Google to his current role as a Product Manager at Atlassian, he has developed a deep understanding of the tech industry.\n" +
        "\n" +
        "Some older students might know Ofir as CSESoc's 2018 Co-President where he was chosen for the Engineering Student Service Leadership Award. Others might know him as their camp leader, or from the weekly barbecues where he manned the grill.\n" +
        "\n" +
        "Whether or not you know him, if you have used JIRA, you have likely interacted with one of his features.",
      thumbnailUrl: "/techspireSpeakers/22/1.webp",
    },
    {
      name: "Kath-Lin Han",
      desc:
        "During university, Kath-Lin explored a variety of internships in various fields from large industrial manufacturers to fast-paced FinTechs. Her exprience has taken her across the entire tech-stack from frontend to backend to UI design, helping her excel in her current role as a Full Stack Engineer at Pearler.\n" +
        "\n" +
        "Kath-Lin graduated from UNSW in 2021 after studying Computer Science and Mechatronics. Occasionally, you might see her at one of our barbecues in her white Pearler shirt!",
      thumbnailUrl: "/techspireSpeakers/22/2.webp",
    },
    {
      name: "Adam Tizzone",
      desc:
        "Just a few years into his career, Adam has already built an impressive track record. Upon graduating from UNSW in 2019, he made his way to Washington as a full-time Software Engineer for Microsoft. Recently, he returned to Sydney to continue his story at Australia's most renowned start-up.\n" +
        "\n" +
        "During his time at university, Adam was heavily involved in various extra-cirriculars including CSESoc where he would eventually become the 2017 Co-President.\n" +
        "\n" +
        "He has a deep passion for music, having helped direct multiple revues for different societies. When he is away from his desk, you might find him in his garage working on cars.",
      thumbnailUrl: "/techspireSpeakers/22/3.webp",
    },
    {
      name: "Marc Chee",
      desc:
        "Marc is best known by students as a beloved lecturer for UNSW's COMP1511 course where he inspired generations of CSESoc students with his enthusiastic and engaging lectures. It was no surprise when he was nominated for the Students' Choice Award in 2021.\n" +
        "\n" +
        "After leaving UNSW at the start of 2022, Marc opened a new chapter in his life with the Marc Chee School. He plans on pursuing his passion for teaching by spreading his knowledge of computer science to a new audience.\n" +
        "\n" +
        "These days, you can find Marc on YouTube talking code and life.",
      thumbnailUrl: "/techspireSpeakers/22/4.webp",
    },
    {
      name: "Joanna He & Darian Lee",
      desc:
        "Founded in 2018 by Adam Tizzone, Jobsboard has played a crucial role in kickstarting the careers of many CSESoc students. It has scraped by in maintenance mode until this year, where a new team lead by Darian and Joanna aimed to completely revamp the project.\n" +
        "\n" +
        "With a modern UI, sponsor integrations, international support and more to come, the future careers of CSESoc students are in bright hands. Come listen to their journey.",
      thumbnailUrl: "/techspireSpeakers/22/6.webp",
    },
    {
      name: "Adam Leung",
      desc:
        "Adam's journey began in highschool with an informatics class. Since then, he has continued to broaden his horizons through various companies and personal projects. He currently works on Amazon's InfoSec team as a Software Engineer whilst finishing his degree at USYD.\n" +
        "\n" +
        "Alongside representing his university at the Divisional and Regional ICPC, Adam also played a large role in founding USYD's Google Developer Student Club which has since grown to over 100 members.\n" +
        "\n" +
        "Adam's love for coding is evident via his diverse portfolio of personal projects and contributions to open source development.",
      thumbnailUrl: "/techspireSpeakers/22/5.webp",
    },
  ],
  2024: [
    {
      name: "Chris Peters",
      desc:
        "Chris Peters is an Associate Director in Personal Technology Automation at Macquarie Group. He is passionate about automation, and for the past 10 years has been involved in creating restAPIs with .net core and various front-end frameworks, automating common business reporting and IT support tasks. Chris has over 20 years of professional work experience having worked as a Senior System Analyst at Abbott Laboratories and a Primary Developer at Menoko, prior to joining Macquarie Group 6 years ago. He now leads a team of passionate developers who he enjoys working with to deliver modern applications and new automation opportunities, helping to drive dramatic business growth.\n" +
        "\n" +
        "Chris is excited to be speaking at this year’s Techspire event. His speech will explore how “you are already becoming the leader you will be in 30 years”, and will draw on his own learnings from his career to date.",
      thumbnailUrl: "/techspireSpeakers/24/1.webp",
    },
    {
      name: "Nick Patrikeos",
      desc:
        "Nick is a Software Engineer with a passion for education and helping others learn and grow. After growing up in Perth, Nick moved to Sydney to study Engineering at the University of New South Wales where he went on to work as a casual academic.\n" +
        "\n" +
        "Nick now works as a Software Engineer at Atlassian and oversees the software development at a Perth-based startup called The Growth Hunting Company. At Atlassian, Nick works on Post Office, Atlassian’s new unified messaging platform to power emails, notifications and in-product messaging. He works day-to-day with TypeScript, React and BitBucket CI pipelines in Atlassian’s Monorepo.\n" +
        "\n" +
        "Nick’s talk is titled “Why you should pay more attention to non-functional requirements” and discusses how we focus on the wrong thing - what we’re building - when we should be focusing on how we’re building it, in software engineering.",
      thumbnailUrl: "/techspireSpeakers/24/2.webp",
    },
    {
      name: "Nelson Tam",
      desc:
        "Nelson is an engineering manager at Apple. He studied Computer Engineering at UNSW, with a focus on operating systems and microkernels. He has done a diverse range of roles over time - from sales and marketing, project management, product, then full circle back to engineering.\n" +
        "\n" +
        "Prior to joining Apple, Nelson has worked on kernels, static analysis, e-commerce marketplaces, and self-driving cars. Some of his previous employers include Freelancer.com and Ghost Locomotion.\n" +
        "\n" +
        "Nelson enjoys running and cycling, and had recently finished the Sydney Marathon 2024. He is a follower of Jesus, married to Sophia with three children. He is passionate about investing in people and sharing his life story with others.",
      thumbnailUrl: "/techspireSpeakers/24/3.webp",
    },
    {
      name: "Richard Hofman",
      desc:
        "Richard Hofman is a Software Engineer in Google’s enterprise security team. He has long held a fascination with privacy and cryptography, and holds a Bachelor’s Degree in Computer Science, from the University of Auckland in New Zealand.\n" +
        "\n" +
        "In his role at Google, Richard’s work mostly encompasses cryptographically attested device identity and the infrastructure needed to issue and validate credentials based on these identities. He has also worked on improving the cryptographic security of SSH traffic at Google.\n" +
        "\n" +
        "Richard will be speaking about WebAuthn and FIDO2, two closely related, privacy-aware standards for online cryptographic authentication. These technologies form the basis for “Passkeys”, but are surprisingly broad in their own right.",
      thumbnailUrl: "/techspireSpeakers/24/6.webp",
    },
    {
      name: "James Ji",
      desc:
        "James graduated from UNSW in 2023. He currently works at TikTok on the LIVE app, where he develops core revenue features that are innovative, secure and intuitive for our users.\n" +
        "\n" +
        "While at UNSW, he built Circles, the defacto degree planner for CSE students. He would later run CSESoc Projects (now DevSoc) where he spawned many new initiatives such as the Training Program and Techspire.\n" +
        "\n" +
        "We invited James back to share his unique experiences on building projects, starting initiatives, challenges in the industry and more.",
      thumbnailUrl: "/techspireSpeakers/24/4.webp",
    },
    {
      name: "Sebastian Sequoiah-Grayson",
      desc: "Sebastian Sequoiah-Grayson is a Senior Lecturer in Epistemics at the School of Computer Science and Engineering at the University of New South Wales. His work covers issues in applied matters for the ethics of technology and artificial intelligence, and also abstract mathematical matters in substructural epistemic logics and epistemics broadly.",
      thumbnailUrl: "/techspireSpeakers/24/5.webp",
    },
    {
      name: "Jake Renzella",
      desc:
        "Jake is a Senior Lecturer in the School of Computer Science and Engineering, with his interests in artificial intelligence being demonstrated in his new course for 2026: Machine Learning Engineering.\n" +
        "\n" +
        "His research focuses on applying artificial intelligence to educational contexts, working on DCC Help, a C compiler with an integrated LLM which provides in situ error explanations for novice programmers. His past work includes stochastic modelling for Defence projects as a Research Fellow at the Applied Artificial Intelligence Institute.\n" +
        "\n" +
        "Jake is excited to present his talk titled Great AI Depends on Great Software Engineering.",
      thumbnailUrl: "/techspireSpeakers/24/7.webp",
    },
  ],
  2025: [
    {
      name: "Michał Lewczyk",
      desc: "Michał Lewczyk is a software engineer at Arista Networks, building the world’s fastest network switches. Earlier in his career, he pioneered LTE for Scandinavian telecom giants, and at Dolby made sure you could pump more bass out of anything with a speaker. He can program anything — from a washing machine to a Base Station Transceiver — all delivered with his signature East European accent and passion for sharing knowledge.",
      thumbnailUrl: "/techspireSpeakers/25/IMG_5579.png",
    },
    {
      name: "Hussain Nawaz",
      desc:
        "I am a low-latency developer at QRT. I work on systems for high-frequency trading, ranging from market data feeds to execution.\n" +
        "\n" +
        "Keeping software high-performance is a critical part of my role and requires me to understand and probe the layers of abstraction between my code and the physical hardware.\n" +
        "\n" +
        "I graduated recently from UNSW. During my time there, I spent 3 years with DevSoc. I worked on Circles – a project that I directed for a year, which later became the most widely used DevSoc project.",
      thumbnailUrl: "/techspireSpeakers/25/IMG_5784.jpg",
    },
    {
      name: "Luke Donnet",
      desc:
        "A Full Stack Software Engineer at SafetyCulture who specializes in identity, access management, and authentication for distributed systems. Years of maintaining business-critical infrastructure have provided firsthand experience with how systems fail, from routine timeout cascades to bizarre edge cases that surface at the worst times. These incidents have revealed surprising patterns about data flow and failure propagation across service boundaries, especially where legacy and modern architectures meet." +
        "\n" +
        "At SafetyCulture, each production incident becomes an opportunity to strengthen system resilience and deepen the team's collective understanding. Rather than seeking simple root causes or assigning blame, they focus on uncovering the complex interactions and reasonable decisions that lead to unexpected outcomes. The most valuable lessons come from understanding not just what went wrong, but why it made sense at the time.",
      thumbnailUrl:
        "/techspireSpeakers/25/PXL_20251010_025158035.PORTRAIT~2.jpg",
    },
    {
      name: "Dr. Hammond Pearce",
      desc: "Dr. Hammond Pearce is a Senior Lecturer in UNSW's School of Computer Science and Engineering. Previously he worked at NYU's Department of Electrical and Computer Engineering / NYU Center for Cybersecurity as a Research Assistant Professor, and at NASA Ames on a research internship. His research interests lie in cybersecurity and hardware and embedded systems design, as well as the intersection of AI and industrial informatics in this area - in particular, Hammond is passionate about exploring the future of the design process in the hardware and firmware spaces, which involves the investigation of tools like ChatGPT and other Large Language Models and how they impact the development lifecycle. As part of his research work he won the Cybersecurity Award 2023 for the Best Machine Learning and Security Paper, the inaugural Efabless AI Generated Open-Source Silicon Design Challenge, and also previously won the Distinguished Paper Award at IEEE Symposium on Security and Privacy in 2022. Hammond obtained his Ph.D. in 2020 from the University of Auckland, New Zealand.",
      thumbnailUrl: "/techspireSpeakers/25/hammond.jpeg",
    },
    {
      name: "Anthony Woodward",
      desc:
        "Anthony Woodward is the co-founder and CEO of RecordPoint, an innovative, fast-growing Australian SaaS solution focused on helping organizations discover, govern, and control their data for tighter compliance, more efficiency, and less risk. With a background in both technology and the law, Anthony has also held positions at Unique World, Commander, and Freehills.\n" +
        "He also co-hosts the FILED podcast and writes the FILED newsletter, focusing on the intersection of data privacy and governance. Anthony is regarded as one of the leading thinkers on the intersection of data and privacy. ",
      thumbnailUrl: "/techspireSpeakers/25/Anthony.jpg",
    },
    {
      name: "Anh Dao",
      desc:
        "Anh is the co-founder of Lyra, a digital product studio that has worked with over 40 clients from San Francisco and Australia to design, build, and ship incredible products.\n" +
        "\n" +
        "Earlier in his career, he worked with many venture-backed startups, corporations, as well as teams including 88Rising, Paraform, Soma Capital, Elsa Fertility and many more.\n" +
        "\n" +
        "Currently Anh leads a team of 50 employees, and when he's not dancing (breaking), he's building the future of products at Lyra.",
      thumbnailUrl: "/techspireSpeakers/25/lyra.jpeg",
    },
  ],
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
        name: "CSE",
        logo: cse,
        url: "https://www.unsw.edu.au/engineering/our-schools/computer-science-and-engineering",
      },
      {
        name: "UNSW",
        logo: unsw,
        url: "https://www.unsw.edu.au/",
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
        name: "Jane Street",
        logo: janeStreet,
        url: "https://www.janestreet.com/",
      }
    ],
    speakerLogos: [
      {
        name: "Arista",
        logo: arista,
        url: "https://www.arista.com/en/",
      },
      {
        name: "CSE",
        logo: cse,
        url: "https://www.unsw.edu.au/engineering/our-schools/computer-science-and-engineering",
      },
      {
        name: "Lyra",
        logo: lyra,
        url: "https://www.lyratechnologies.com.au/",
      },
      {
        name: "QRT",
        logo: qrt,
        url: "https://www.qube-rt.com/careers/",
      },
      {
        name: "Recordpoint",
        logo: rp,
        url: "https://www.recordpoint.com/",
      },
      {
        name: "Safety Culture",
        logo: sc,
        url: "https://safetyculture.com/",
      },
    ],
    industryLogos: [],
  },
};
