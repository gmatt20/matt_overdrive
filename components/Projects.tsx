import { Separator } from "@/components/ui/separator";
import { ProjectData } from "@/data/projects";
import { ProjectsCard } from "./ProjectCard";
import { Project } from "@/types/Project";

function ProjectSection({
  title,
  projects,
}: {
  title: string;
  projects: Project[];
}) {
  if (projects.length === 0) return null;

  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold text-foreground tracking-tight whitespace-nowrap">
          {title}
        </h2>
        <Separator className="flex-1 bg-border" />
      </div>
      <ProjectsCard projects={projects} />
    </section>
  );
}

export function Projects() {
  const hackathon = ProjectData.filter((p) => p.category === "hackathon");
  const personal = ProjectData.filter((p) => p.category === "personal");
  const community = ProjectData.filter((p) => p.category === "community");

  return (
    <div className="space-y-24 mt-24">
      <ProjectSection title="Hackathon Projects" projects={hackathon} />
      <ProjectSection title="Personal Projects" projects={personal} />
      <ProjectSection title="Community & Client Work" projects={community} />
    </div>
  );
}
