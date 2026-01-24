import { Separator } from "@/components/ui/separator";
import { ProjectData } from "@/data/projects";
import { ProjectsCard } from "./ProjectCard";

export function Projects() {
  return (
    <section className="space-y-8 mt-24">
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-foreground tracking-tight">
            Past Projects
          </h2>
        </div>
        <Separator className="flex-1 bg-border" />
      </div>
      <ProjectsCard projects={ProjectData} />
    </section>
  );
}
