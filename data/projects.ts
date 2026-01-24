import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

import tkd from "@/public/tkd.webp";
import acm from "@/public/acm.webp";
import aisc from "@/public/aisc.webp";
import Bravo from "@/public/bravo.webp";
import GradeMeIn from "@/public/GradeMeIn.webp";
import BitWizards from "@/public/BitWizards.webp";
import Cinemagine from "@/public/Cinemagine.webp";
import neovim from "@/public/neovim.webp";
import charity_water from "@/public/charity_water.webp";
import ponder from "@/public/ponder.webp";

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
} from "react-icons/si";
import { PlugZap, Database, BrainCircuit, CodeXml } from "lucide-react";

interface TechItem {
  name: string;
  icon?: IconType | React.ElementType;
}

export interface Project {
  url: StaticImageData;
  link: string;
  title: string;
  description?: string;
  techStack?: TechItem[]; // Updated to hold name AND icon
  alt: string;
}

export const ProjectData: Project[] = [
  {
    url: Bravo,
    link: "https://agentbravo.xyz/",
    title: "Agent Bravo AI",
    description:
      "A voice-first AI calendar agent that negotiates schedules in real-time. Built with Deepgram for voice streaming and syncs directly with Google Calendar.",
    techStack: [
      { name: "Deepgram", icon: SiDeepgram },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Clerk", icon: SiClerk },
      { name: "WebSockets", icon: PlugZap },
      { name: "Neon", icon: Database },
      { name: "Drizzle", icon: SiDrizzle },
    ],
    alt: "Picture of Agent Bravo AI",
  },
  {
    url: GradeMeIn,
    link: "https://devpost.com/software/grademein/",
    title: "GradeMeIn (SB Hacks Winner)",
    description:
      "An AI-powered LMS designed to detect plagiarism. Uses a custom voice agent to interview students about their code to verify authorship.",
    techStack: [
      { name: "Hackathon", icon: CodeXml },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Deepgram", icon: SiDeepgram },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    alt: "Picture of GradeMeIn",
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
      { name: "Lazy.nvim", icon: Database }, // Generic fallback
      { name: "Mason", icon: PlugZap }, // Generic fallback
    ],
    alt: "Picture of overdrive.nvim",
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
  },
];
