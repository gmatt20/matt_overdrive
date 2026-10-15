import { Bravo } from "@/components/Bravo";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Trophy, ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";

interface EducationEntry {
  school: string;
  degree: string;
  location: string;
  period: string;
  status?: string;
}

const education: EducationEntry[] = [
  {
    school: "UC Irvine",
    degree: "M.S. Software Engineering",
    location: "Irvine, CA",
    period: "Sept 2026 - Dec 2027",
  },
  {
    school: "UC Riverside",
    degree: "B.A. Psychology",
    location: "Riverside, CA",
    period: "Conferred June 2026",
  },
];

interface ExperienceLink {
  label: string;
  href: string;
}

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  award?: string;
  awardHref?: string;
  links?: ExperienceLink[];
}

const experience: ExperienceEntry[] = [
  {
    role: "STEAM Instructor",
    company: "Dreams for Schools",
    period: "Aug 2026 - Present",
    location: "Santa Ana, CA",
    description:
      "Teaching Arduino programming, block-based coding, and introductory engineering to classrooms of 20+ elementary students across Orange County, delivering project-based STEAM curriculum alongside a team of 2+ instructors.",
  },
  {
    role: "Lead Development Intern",
    company: "UniConnect",
    period: "Feb 2026 - May 2026",
    location: "Remote",
    description:
      "Shipped a Next.js content management platform for a live iOS app — an admin dashboard tracking 10+ metrics with content moderation for 5+ admins, plus a vendor portal that let 9 Santa Barbara businesses publish deals directly to UCSB students, secured with Supabase row-level security.",
    links: [
      { label: "Live site", href: "https://uniconnect.social" },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/uniconnect-find-your-people/id6760719946",
      },
    ],
  },
  {
    role: "Team Lead",
    company: "Podium Education",
    period: "Aug 2025 - Apr 2026",
    location: "Remote",
    description:
      "Supported cohorts of 200+ students across U.S. universities. Taught agentic software development with Claude Code and Lovable, mentored students through HTML/CSS/JavaScript and Git/GitHub debugging, and graded projects with actionable technical feedback.",
    award: "Breakout Star",
    awardHref:
      "https://www.linkedin.com/feed/update/urn:li:activity:7491924666975100928/",
  },
  {
    role: "Frontend Software Engineer",
    company: "ACM @ UCR",
    period: "Jan 2025 - Dec 2025",
    location: "Riverside, CA",
    description:
      "Delivered 3 deployed Next.js applications (Taekwondo @ UCR, ACM Atlas, AI Student Collective) used by 1,000+ students and faculty. Translated Figma designs into reusable responsive components for a team of 5+ engineers and cut contentful paint by migrating images to WebP.",
    links: [{ label: "Live site", href: "https://acm.cs.ucr.edu/" }],
  },
];

export default function Bento() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
      <Card className="md:col-span-2 min-h-[500px] bg-card border-border relative hover:border-primary/50 transition-colors overflow-hidden flex flex-col md:flex-row">
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative z-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="font-display text-5xl md:text-7xl text-card-foreground tracking-wide">
                BRAVO AI
              </h2>
              <Link
                href="https://agentbravo.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  variant="outline"
                  className="font-mono font-normal text-primary border-primary/40 py-1 px-2.5 flex items-center gap-1.5 hover:border-primary transition-colors"
                >
                  <span className="inline-flex rounded-full h-2 w-2 bg-green-500" />
                  LIVE · agentbravo.xyz
                </Badge>
              </Link>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-lg">
              The{" "}
              <span className="text-foreground font-semibold">
                voice-first agentic agenda
              </span>{" "}
              solving “Calendar Tetris” forever.
            </p>
          </div>
        </div>
        <Bravo />
      </Card>
      {/* ABOUT ME & EDUCATION */}
      <Card className="bg-card border-border flex flex-col justify-between hover:border-primary/50 transition-colors">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg text-foreground">About Me</CardTitle>
            <Avatar className="h-10 w-10 border border-border">
              <AvatarImage src="/headshotsmol.webp" />
              <AvatarFallback>MG</AvatarFallback>
            </Avatar>
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col gap-6">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              I engineer and ship{" "}
              <span className="text-foreground font-medium">
                AI-powered products
              </span>{" "}
              that simplify workflows and empower people.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I built and shipped{" "}
              <span className="text-foreground font-medium">Bravo AI</span>, a
              voice-first calendar assistant that turns natural conversation
              into real scheduling actions. After gathering user feedback, I’m
              reimagining Bravo AI as a{" "}
              <span className="text-foreground font-medium">
                Chrome extension
              </span>{" "}
              to better integrate with how people work.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I’m currently pursuing my{" "}
              <span className="text-foreground font-medium">
                Master’s in Software Engineering at UC Irvine
              </span>
              , strengthening my fundamentals and collaborating with talented
              peers to build awesome software.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              My approach to software engineering is informed by my{" "}
              <span className="text-foreground font-medium">
                background in psychology
              </span>
              . I believe great software starts with understanding people, and I
              strive to put users at the center of every engineering decision.
            </p>
            <p className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-2.5 text-sm leading-relaxed text-muted-foreground">
              I’m currently seeking{" "}
              <span className="text-primary font-medium">
                Summer 2027 Software Engineering internship
              </span>{" "}
              opportunities.
            </p>
            <p className="text-sm text-muted-foreground/70 font-mono">
              Rock on 🤟
            </p>
          </div>

          <Separator className="bg-border" />

          <div className="space-y-3">
            <h4 className="text-base font-semibold text-foreground flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </h4>
            <div className="space-y-3">
              {education.map((edu) => (
                <div
                  key={edu.school}
                  className="flex items-start gap-3 rounded-lg border border-border bg-background/40 p-3 transition-colors hover:border-primary/40"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-semibold text-foreground">
                        {edu.school}
                      </p>
                      <Badge
                        variant="secondary"
                        className="text-[10px] h-5 font-mono shrink-0"
                      >
                        {edu.period}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {edu.degree}
                    </p>
                    <div className="flex items-center gap-2 pt-0.5">
                      <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground/70">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="hover:border-primary/50 transition-colors bg-card border-border relative overflow-hidden flex flex-col h-full">
        <CardHeader className="pb-2 shrink-0">
          <CardTitle className="text-foreground flex items-center gap-2 text-lg">
            <span>Experience</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 relative z-10 overflow-y-auto pr-2 custom-scrollbar">
          {experience.map((exp) => (
            <div key={`${exp.company}-${exp.role}`}>
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-semibold text-foreground">
                  {exp.role}
                </h3>
                <Badge
                  variant="outline"
                  className="text-[10px] px-2 h-5 border-primary/30 text-primary font-mono shrink-0"
                >
                  {exp.period}
                </Badge>
              </div>
              <div className="text-xs font-bold text-brand mt-0.5">
                {exp.company}
                {exp.location && (
                  <span className="font-normal text-muted-foreground/70">
                    {" · "}
                    {exp.location}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {exp.description}
              </p>
              {(exp.award || (exp.links && exp.links.length > 0)) && (
                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  {exp.award &&
                    (exp.awardHref ? (
                      <Link
                        href={exp.awardHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-2 py-0.5 text-[10px] font-medium text-yellow-500 transition-colors hover:border-yellow-500/80 hover:bg-yellow-500/20"
                      >
                        <Trophy className="h-3 w-3" />
                        {exp.award}
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-2 py-0.5 text-[10px] font-medium text-yellow-500">
                        <Trophy className="h-3 w-3" />
                        {exp.award}
                      </span>
                    ))}
                  {exp.links?.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-border bg-background/50 px-2 py-0.5 text-[10px] font-mono text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="https://www.linkedin.com/in/mattg2765/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground/80 transition-colors hover:text-foreground"
          >
            Full work history on LinkedIn
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </CardContent>
      </Card>
    </section>
  );
}
