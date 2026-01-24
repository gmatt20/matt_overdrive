import { Trophy } from "lucide-react";
import { ProjectsCard } from "./ProjectCard";
import { ProjectData } from "@/data/projects";

export function GradeMeIn() {
  return (
    <section className="relative rounded-xl border hover:border-yellow-500/80 transition-colors border-yellow-500/30 bg-card p-8 md:p-12 overflow-hidden">
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/50 bg-yellow-500/10 px-4 py-1.5 text-sm font-medium text-yellow-500">
            <Trophy className="h-4 w-4" />
            <span>WINNER: Best Use of Vultr</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              SB Hacks 2026
            </h2>
            <h3 className="text-xl text-muted-foreground font-mono">
              Project: GradeMeIn
            </h3>
          </div>

          <p className="text-muted-foreground leading-relaxed text-lg">
            We built an anti-AI plagiarism detection tool in 24 hours. I
            engineered the frontend-to-backend infrastructure and utilized Vultr
            cloud instances.
          </p>
        </div>

        <div className="flex-1 relative flex items-center justify-center ">
          <div className="w-full max-w-md">
            <ProjectsCard
              projects={ProjectData.slice(1, 2)}
              className="grid-cols-1 md:grid-cols-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
