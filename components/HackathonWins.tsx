"use client";

import { useState } from "react";
import {
  Trophy,
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
} from "lucide-react";
import { SiGooglechrome } from "react-icons/si";
import { ProjectsCard } from "./ProjectCard";
import { ProjectData } from "@/data/projects";
import { Project } from "@/types/Project";
import { cn } from "@/lib/utils";
import ecomindImg from "@/public/ecomind.webp";

const ecomindCard: Project = {
  url: ecomindImg,
  link: "https://www.eco-mind.tech/",
  title: "EcoMind",
  description:
    "A full-stack energy-optimization suite (Chrome extension, VS Code extension, and dashboard) that audits LLM usage in real time, quantifying the energy, water, and CO₂ cost of AI queries.",
  techStack: [
    { name: "Chrome Ext", icon: SiGooglechrome },
    { name: "VS Code", icon: Code2 },
    { name: "Vector DB", icon: Database },
  ],
  alt: "Picture of EcoMind",
};

interface Win {
  event: string;
  award: string;
  name: string;
  blurb: string;
  card: Project;
}

const wins: Win[] = [
  {
    event: "SF Hacks 2026",
    award: "Best Hack for Climate Action",
    name: "EcoMind",
    blurb:
      "A full-stack energy-optimization suite (Chrome extension, VS Code extension, and dashboard) that audits LLM usage in real time — quantifying the energy, water, and CO₂ cost of AI queries. Built with a team of three in a single hackathon weekend.",
    card: ecomindCard,
  },
  {
    event: "SB Hacks 2026",
    award: "Best Use of Vultr",
    name: "GradeMeIn",
    blurb:
      "We built an anti-AI plagiarism detection tool in 24 hours. I engineered the frontend-to-backend infrastructure and utilized Vultr cloud instances.",
    card: ProjectData[1],
  },
];

export function HackathonWins() {
  const [index, setIndex] = useState(0);
  const win = wins[index];
  const go = (dir: number) =>
    setIndex((i) => (i + dir + wins.length) % wins.length);

  return (
    <section className="relative rounded-xl border hover:border-yellow-500/80 transition-colors border-yellow-500/30 bg-card p-8 md:p-12 overflow-hidden">
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous winning project"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 text-muted-foreground backdrop-blur transition-colors hover:text-foreground hover:border-yellow-500/50"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next winning project"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 text-muted-foreground backdrop-blur transition-colors hover:text-foreground hover:border-yellow-500/50"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center px-6 md:px-8">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/50 bg-yellow-500/10 px-4 py-1.5 text-sm font-medium text-yellow-500">
            <Trophy className="h-4 w-4" />
            <span>WINNER: {win.award}</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              {win.event}
            </h2>
            <h3 className="text-xl text-muted-foreground font-mono">
              Project: {win.name}
            </h3>
          </div>

          <p className="text-muted-foreground leading-relaxed text-lg">
            {win.blurb}
          </p>
        </div>

        <div className="flex-1 relative flex items-center justify-center ">
          <div className="w-full max-w-md">
            <ProjectsCard
              projects={[win.card]}
              className="grid-cols-1 md:grid-cols-1"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 flex items-center justify-center gap-2">
        {wins.map((w, i) => (
          <button
            key={w.name}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show ${w.name}`}
            aria-current={i === index}
            className={cn(
              "h-2 rounded-full transition-all",
              i === index
                ? "w-6 bg-yellow-500"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60",
            )}
          />
        ))}
      </div>
    </section>
  );
}
