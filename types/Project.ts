import { StaticImageData } from "next/image";

export interface TechItem {
  name: string;
  icon: React.ElementType;
}

export interface Project {
  url: StaticImageData | string;
  link: string;
  title: string;
  description?: string;
  techStack?: TechItem[];
  alt: string;
}
