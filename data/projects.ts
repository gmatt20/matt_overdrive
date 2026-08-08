import tkd from "@/public/tkd.webp";
import acm from "@/public/acm.webp";
import aisc from "@/public/aisc.webp";
import Bravo from "@/public/bravo.webp";
import GradeMeIn from "@/public/GradeMeIn.webp";
import BitWizards from "@/public/BitWizards.webp";
import Cinemagine from "@/public/Cinemagine.webp";
import neovim from "@/public/neovim.webp";
import caremate from "@/public/caremate.webp";
import neuronbook from "@/public/neuronbook.webp";
import charity_water from "@/public/charity_water.webp";
import ponder from "@/public/ponder.webp";
import cast from "@/public/cast.webp";
import uniconnect from "@/public/uniconnect.webp";

import {
  SiNextdotjs,
  SiDeepgram,
  SiClerk,
  SiMongodb,
  SiTailwindcss,
  SiTauri,
  SiSqlite,
  SiGooglegemini,
  SiTypescript,
  SiDrizzle,
  SiFigma,
  SiLua,
  SiNeovim,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiClaude,
  SiStripe,
  SiPython,
  SiPypi,
  SiGithubactions,
  SiPytest,
  SiFlask,
  SiLangchain,
  SiFastapi,
  SiReact,
  SiSupabase,
  SiVercel,
  SiApple,
} from "react-icons/si";
import { PlugZap, Database, BrainCircuit, CodeXml } from "lucide-react";
import { Project } from "@/types/Project";

export const ProjectData: Project[] = [
  {
    url: Bravo,
    link: "https://agentbravo.xyz/",
    title: "Agent Bravo AI",
    description:
      "A live, voice-first AI calendar assistant built solo end-to-end. Real-time Deepgram voice pipeline with LLM command parsing, two-way Google Calendar sync, and Stripe subscription billing.",
    techStack: [
      { name: "Deepgram", icon: SiDeepgram },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Claude", icon: SiClaude },
      { name: "Stripe", icon: SiStripe },
      { name: "Neon", icon: Database },
      { name: "Drizzle", icon: SiDrizzle },
    ],
    alt: "Picture of Agent Bravo AI",
    fit: "contain",
    category: "flagship",
  },
  {
    url: GradeMeIn,
    link: "https://devpost.com/software/grademein/",
    title: "GradeMeIn (SB Hacks Winner)",
    description:
      "An AI-powered LMS designed to detect plagiarism. Uses a custom voice agent to interview students about their submission to verify authorship.",
    techStack: [
      { name: "Hackathon", icon: CodeXml },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Deepgram", icon: SiDeepgram },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    alt: "Picture of GradeMeIn",
    category: "hackathon-win",
  },
  {
    url: cast,
    link: "https://github.com/gmatt20/cast",
    title: "Cast",
    description:
      "An open-source CLI that scaffolds new project structures from a single command. Published to PyPI with automated GitHub Actions releases and a pytest suite.",
    techStack: [
      { name: "Python", icon: SiPython },
      { name: "PyPI", icon: SiPypi },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "pytest", icon: SiPytest },
    ],
    alt: "Picture of Cast CLI",
    fit: "contain",
    category: "personal",
  },
  {
    url: ponder,
    link: "https://ponder-9thg-8xxgoc2uw-gmattdevs-4416s-projects.vercel.app/",
    title: "Ponder",
    description:
      "A privacy-first notes app that runs offline. I built a dual database architecture with SQLite for the desktop app and IndexedDB for the browser.",
    techStack: [
      { name: "Tauri", icon: SiTauri },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "SQLite", icon: SiSqlite },
      { name: "Zustand", icon: BrainCircuit },
    ],
    alt: "Picture Ponder: Privacy First Notes App",
    category: "personal",
  },
  {
    url: neovim,
    link: "https://github.com/gmatt20/overdrive.nvim/",
    title: "overdrive.nvim",
    description:
      "My personal Neovim configuration written in Lua. Optimized for React and TypeScript development with custom LSP setups.",
    techStack: [
      { name: "Lua", icon: SiLua },
      { name: "Neovim", icon: SiNeovim },
      { name: "Lazy.nvim", icon: Database },
      { name: "Mason", icon: PlugZap },
    ],
    alt: "Picture of overdrive.nvim",
    category: "personal",
  },
  {
    url: Cinemagine,
    link: "https://devpost.com/software/cinemagine/",
    title: "Cinemagine",
    description:
      "A movie discovery engine that uses RAG (Retrieval-Augmented Generation) to give personalized recommendations based on your current mood.",
    techStack: [
      { name: "Hackathon", icon: CodeXml },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Gemini", icon: SiGooglegemini },
      { name: "Clerk", icon: SiClerk },
    ],
    alt: "Picture of Cinemagine",
    category: "hackathon",
  },
  {
    url: BitWizards,
    link: "https://devpost.com/software/bit-wizards/",
    title: "BitWizards",
    description:
      "An interactive educational platform built in 24 hours. Features complex game logic and responsive animations to make learning fun.",
    techStack: [
      { name: "Hackathon", icon: CodeXml },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Clerk", icon: SiClerk },
    ],
    alt: "Picture of BitWizards",
    category: "hackathon",
  },
  {
    url: neuronbook,
    link: "https://devpost.com/software/neuronbook",
    title: "NeuronBook",
    description:
      "Turns passive PDF reading into active mastery using AI-powered Socratic questions and a visual knowledge graph that evolves as you learn. Built at DeveloperWeek 2026.",
    techStack: [
      { name: "Hackathon", icon: CodeXml },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Flask", icon: SiFlask },
      { name: "LangChain", icon: SiLangchain },
    ],
    alt: "Picture of NeuronBook",
    category: "hackathon",
  },
  {
    url: caremate,
    link: "https://devpost.com/software/caremate-ohnrv9",
    title: "CareMate",
    description:
      "A multimodal AI platform that detects caregiver burnout in real time, synthesizing multiple data streams into a unified 0–100 risk score and generating actionable, tailored interventions. Built at RoseHack 2026.",
    techStack: [
      { name: "Hackathon", icon: CodeXml },
      { name: "React Native", icon: SiReact },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Gemini", icon: SiGooglegemini },
    ],
    alt: "Picture of CareMate",
    category: "hackathon",
  },
  {
    url: uniconnect,
    link: "https://uniconnect.social",
    title: "UniConnect",
    description:
      "A two-sided platform for a live iOS campus-events app — an admin dashboard and a vendor portal (9 Santa Barbara businesses onboarded) on Supabase, plus the Next.js marketing site.",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Supabase", icon: SiSupabase },
      { name: "Vercel", icon: SiVercel },
      { name: "iOS", icon: SiApple },
    ],
    alt: "Picture of UniConnect",
    category: "community",
  },
  {
    url: acm,
    link: "https://acm.cs.ucr.edu/",
    title: "ACM @ UCR",
    description:
      "The official website for UCR's largest Computer Science club. I worked in a frontend development team to serve over 1,000 active student members.",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },

      { name: "TypeScript", icon: SiTypescript },
      { name: "Figma", icon: SiFigma },
    ],
    alt: "Picture of the ACM @ UCR Website",
    category: "community",
  },
  {
    url: aisc,
    link: "https://aisc.ucrhighlanders.org/",
    title: "AI Student Collective",
    description:
      "A central resource hub for AI students at UCR. Built it with an awesome frontend team.",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Figma", icon: SiFigma },
    ],
    alt: "Picture of the AI Student Collective @ UCR Website",
    category: "community",
  },
  {
    url: tkd,
    link: "https://tkd.ucrhighlanders.org/",
    title: "TKD @ UCR",
    description:
      "The official website for UCR Taekwondo team. Focused on fast load times and mobile responsiveness.",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Figma", icon: SiFigma },
    ],
    alt: "Picture of The Taekwondo @ UCR Website",
    category: "community",
  },
  {
    url: charity_water,
    link: "https://gmatt20.github.io/charity-water-lp/",
    title: "Charity: Water Landing Page",
    description:
      "A responsive landing page project focused on semantic HTML and accessibility standards. This was built when I was a trainee at the Global Career Accelerator",
    techStack: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
    ],
    alt: "Picture Charity: Water Landing Page",
    category: "community",
  },
];
