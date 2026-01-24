import { StaticImageData } from "next/image";
import tkd from "@/public/tkd.webp";
import acm from "@/public/acm.webp";
import aisc from "@/public/aisc.webp";
import Bravo from "@/public/bravo.webp";
import GradeMeIn from "@/public/GradeMeIn.webp";
import BitWizards from "@/public/BitWizards.webp";
import Cinemagine from "@/public/Cinemagine.webp";

interface Project {
  url: StaticImageData;
  link: string;
  title: string;
  alt: string;
}

export const ProjectData: Project[] = [
  {
    url: Bravo,
    link: "https://agentbravo.xyz/",
    title: "Agent Bravo AI",
    alt: "Picture of Agent Bravo AI",
  },
  {
    url: GradeMeIn,
    link: "https://devpost.com/software/grademein/",
    title: "GradeMeIn: Winner at SB Hacks",
    alt: "Picture of GradeMeIn",
  },
  {
    url: tkd,
    link: "https://tkd.ucrhighlanders.org/",
    title: "TKD @ UCR Website",
    alt: "Picture of The Taekwondo @ UCR Website",
  },
  {
    url: acm,
    link: "https://acm.cs.ucr.edu/",
    title: "ACM @ UCR",
    alt: "Picture of the ACM @ UCR Website",
  },
  {
    url: aisc,
    link: "https://aisc.ucrhighlanders.org/",
    title: "AI Student Collective @ UCR",
    alt: "Picture of the AI Student Collective @ UCR Website",
  },
  {
    url: Cinemagine,
    link: "https://devpost.com/software/cinemagine",
    title: "Cinemagine",
    alt: "Picture of Cinemagine",
  },
  {
    url: BitWizards,
    link: "https://devpost.com/software/bit-wizards",
    title: "BitWizards",
    alt: "Picture of BitWizards",
  },
];
