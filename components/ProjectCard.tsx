import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Project } from "@/types/Project";

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
          className="relative h-[20rem] w-full overflow-hidden rounded-lg border border-border group bg-muted"
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
              className="object-cover transition-all duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-40 group-hover:blur-[2px]"
            />

            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/80 transition-colors duration-300 flex flex-col items-center justify-center px-4 text-center backdrop-blur-[0px] group-hover:backdrop-blur-[2px]">
              <span className="text-foreground font-bold text-xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out opacity-0 group-hover:opacity-100">
                {project.title}
              </span>

              {project.description && (
                <p className="text-xs text-muted-foreground font-medium leading-relaxed max-w-[90%] translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 ease-out">
                  {project.description}
                </p>
              )}

              {project.techStack && (
                <div className="flex flex-wrap gap-1.5 justify-center mt-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 ease-out">
                  {project.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 text-[10px] font-mono bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 rounded"
                    >
                      <tech.icon className="w-3 h-3" />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4 flex items-center gap-2 border border-primary/50 bg-card px-3 py-1.5 rounded shadow-[0_0_15px_rgba(0,0,0,0.2)] transform scale-90 translate-y-4 group-hover:translate-y-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150">
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
