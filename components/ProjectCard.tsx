import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Project {
  url: StaticImageData | string;
  link: string;
  title: string;
  alt: string;
}

interface ProjectsCardProps {
  projects: Project[] | Project;
  className?: string;
}

export function ProjectsCard({ projects, className }: ProjectsCardProps) {
  const projectList = Array.isArray(projects) ? projects : [projects];

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6", className)}>
      {projectList.map((project, index) => (
        <div
          key={index}
          className="relative aspect-video w-full overflow-hidden rounded-lg border border-border group"
        >
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 block"
          >
            <Image
              src={project.url}
              alt={project.alt}
              fill
              className="object-cover transition-all duration-700 ease-out group-hover:scale-105  opacity-80 group-hover:opacity-100"
            />

            <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
              <span className="text-foreground font-bold text-lg mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                {project.title}
              </span>
              <div className="flex items-center gap-2 border border-primary/50 bg-card px-3 py-1.5 rounded shadow-[0_0_15px_rgba(0,0,0,0.2)] transform scale-90 group-hover:scale-100 transition-all duration-300 delay-100">
                <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  VISIT SITE
                </span>
                <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>

            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:top-3 group-hover:left-3" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:bottom-3 group-hover:right-3" />
          </Link>
        </div>
      ))}
    </div>
  );
}
