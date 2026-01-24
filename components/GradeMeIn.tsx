import { ProjectsCard } from "./ProjectCard";
import { ProjectData } from "@/data/projects";

export function GradeMeIn() {
  return (
    <div className="flex-1 relative flex items-center justify-center ">
      <div className="w-full max-w-md">
        <ProjectsCard
          projects={ProjectData.slice(1, 2)}
          className="grid-cols-1 md:grid-cols-1"
        />
      </div>
    </div>
  );
}
