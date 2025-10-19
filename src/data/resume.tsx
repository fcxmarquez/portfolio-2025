import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dillion Verma",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and competed in over 21 hackathons for fun. I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "francisco.marquez.solt@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Finsphera",
      href: "https://finsphera.com",
      location: "Mexico",
      title: "Technical Lead - Frontend",
      logoUrl: "/finsphera.svg",
      badges: [] as const,
      start: "May 2024",
      end: "October 2025",
      description: (
        <ul className="list-disc space-y-1 pl-4">
          <li>
            Managed frontend development as a direct report to CEO, driving technical roadmap for regulated fintech platform; successfully passed CNBV security audit by implementing compliance controls and conducting regulator demonstration.
          </li>
          <li>
            Architected company pivot to agentic AI platform using Python, CrewAI Flows, CopilotKit, and FastAPI with RAG integration, building custom chat interface with generative UI—product won 2nd place at IncMTY AirTech Challenge.
          </li>
          <li>
            Spearheaded React-to-Next.js migration and implemented Zustand state management, improving time-to-preview and developer experience across entire platform codebase
          </li>
          <li>
            Built internal operations dashboard covering KYC/KYB workflows, campaign management, withdrawal processing, and banking integration; delivered 12+ investor demos showcasing platform capabilities.
          </li>
          <li>
            Established engineering frontend excellence through CI/CD pipeline (GitHub Actions + AWS Amplify), implemented Linear, code review standards, automated linting, introduced unit testing framework with React testing library and established initial test coverage; hired and mentored 1 frontend engineer.
          </li>
        </ul>
      ),
    },
    {
      company: "Finsphera",
      href: "https://finsphera.com",
      location: "Mexico",
      title: "Software Engineer III - Frontend",
      logoUrl: "/finsphera.svg",
      badges: [] as const,
      start: "February 2023",
      end: "May 2024",
      description: (
        <ul className="list-disc space-y-1 pl-4">
          <li>
            Automated frontend service deployment to AWS Amplify using GitHub Actions CI/CD, enhancing deployment efficiency and reliability.
          </li>
          <li>
            Developed a comprehensive component library and established the platform&apos;s design system, standardizing UI elements and improving developer efficiency.
          </li>
          <li>
            Led a UI overhaul focusing on mobile-first design, significantly improving user engagement and accessibility across devices.
          </li>
          <li>
            Engineered key frontend self-services, including user onboarding and dashboards, using React and Redux.
          </li>
          <li>
            Worked with serverless features using AWS lambdas, AppSync, Amplify, GraphQL, DynamoDB and Cognito.
          </li>
          <li>
            Contributed to the regulatory approval process by implementing compliance requirements in platform architecture
          </li>
        </ul>
      ),
    },
    {
      company: "Homie",
      href: "https://www.homie.mx",
      location: "Mexico",
      title: "Frontend Engineer",
      logoUrl: "/homie.svg",
      badges: [] as const,
      start: "November 2021",
      end: "January 2023",
      description: (
        <ul className="list-disc space-y-1 pl-4">
          <li>
            Led development of Homie&apos;s Component Library enhancing development efficiency by standardizing UI components for rapid project integration.
          </li>
          <li>
            Bridged the gap between design and development teams by implementing a collaborative workflow through component library, significantly reducing project turnaround times.
          </li>
          <li>
            Mentored and integrated new team members into the development philosophy based on <strong>micro-frontend</strong> services, self component library and testing.
          </li>
          <li>
            Implemented the transformation of Homie&apos;s website through the development of new microservices, using <strong>NextJs</strong>, <strong>Typescript</strong>, <strong>Redux</strong>, and <strong>Jest</strong>, improving the user experience of property rental in Mexico.
          </li>
        </ul>
      ),
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ]
} as const;
