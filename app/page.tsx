import {
  ArrowUp,
  ArrowRight,
  Mic,
  ArrowUpRight,
  Github,
  Linkedin,
  Trophy,
  Briefcase,
  Mail,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Bravo from "@/public/bravo.png";
import GradeMeIn from "@/public/GradeMeIn.png";
import Link from "next/link";

export default function MattOverdrive() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <main className="container px-4 py-12 md:px-8 md:py-24 max-w-7xl mx-auto space-y-32">
        {/* HERO SECTION */}

        <section className="space-y-8 mb-15">
          <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
            <div className="flex items-center gap-5">
              <Avatar className="h-20 w-20 border-2 border-border bg-muted">
                <AvatarImage src="/headshotsmol.jpg" alt="Matthew G" />
                <AvatarFallback>MG</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-foreground">
                  Matthew G.
                </h2>
                <p className="text-sm font-medium text-foreground">
                  Founder @ <span className="text-primary">Bravo AI</span>
                </p>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-mono">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Anaheim, CA</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <Badge
                variant="outline"
                className="font-mono font-normal text-muted-foreground py-1.5 px-3 flex items-center gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                STATUS: BUILDING BRAVO AI
              </Badge>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground leading-[1.1]">
              ENGINEERING SYSTEMS <br className="hidden md:block" />
              <span className="text-brand">& FOUNDING FUTURES.</span>
            </h1>
          </div>
        </section>

        {/* BENTO GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <Card className="md:col-span-2 min-h-[500px] bg-card border-border relative overflow-hidden group flex flex-col md:flex-row">
            {/* Left Content */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative z-10">
              <div className="space-y-4">
                <h2 className="font-display text-5xl md:text-7xl text-card-foreground tracking-wide">
                  BRAVO AI
                </h2>

                <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-lg">
                  The{" "}
                  <span className="text-foreground font-semibold">
                    voice-first agentic agenda
                  </span>{" "}
                  solving "Calendar Tetris" forever.
                </p>
              </div>
            </div>

            <div className="flex-1 relative flex items-center justify-center p-8 overflow-hidden">
              <div className="relative w-full max-w-md aspect-square border border-border rounded-xl shadow-sm overflow-hidden bg-muted/20">
                <Image
                  src={Bravo}
                  alt="Bravo AI Interface"
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 grayscale-[100%] opacity-90 group-hover:opacity-100"
                />
                <Link
                  href="https://agentbravo.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 block"
                >
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
                    <div className="flex items-center gap-2 border border-primary/50 bg-card px-4 py-2 rounded shadow-[0_0_15px_rgba(0,0,0,0.2)] transform scale-90 group-hover:scale-100 transition-all duration-300 delay-75">
                      <span className="font-bold text-foreground text-sm">
                        View Bravo
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                    </div>
                  </div>

                  <span className="text-foreground font-mono text-xs tracking-widest uppercase bg-background/80 border border-border px-3 py-1 rounded"></span>

                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:top-5 group-hover:left-5" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:bottom-5 group-hover:right-5" />
                </Link>
              </div>
            </div>
          </Card>

          {/* ABOUT ME & EDUCATION */}
          <Card className="bg-card border-border flex flex-col justify-between hover:border-primary/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-foreground">
                  About Me
                </CardTitle>
                <Avatar className="h-10 w-10 border border-border">
                  <AvatarImage src="/headshotsmol.jpg" />
                  <AvatarFallback>MG</AvatarFallback>
                </Avatar>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hello! I'm Matthew—a{" "}
                  <span className="text-foreground font-medium">
                    software engineer
                  </span>{" "}
                  obsessed with building AI-powered productivity tools.
                </p>
                <Separator className="bg-border" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I leverage my background in{" "}
                  <span className="text-foreground font-medium">
                    Psychology
                  </span>{" "}
                  to build AI tools that actual humans can use with ease.
                </p>
                <p className="text-sm text-muted-foreground">
                  As the Founder of{" "}
                  <span className="text-primary font-medium">Bravo AI</span>, I
                  am driven by curiosity and the belief that the best way to
                  predict the future is to compile it.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex gap-4 text-muted-foreground">
                <Github className="h-4 w-4 hover:text-foreground cursor-pointer transition-colors" />
                <Linkedin className="h-4 w-4 hover:text-foreground cursor-pointer transition-colors" />
                <Mail className="h-4 w-4 hover:text-foreground cursor-pointer transition-colors" />
              </div>
            </CardFooter>
          </Card>

          <Card className="hover:border-primary/50 transition-colors bg-card border-border relative overflow-hidden flex flex-col h-full">
            <div className="absolute -right-6 -bottom-6 opacity-5 pointer-events-none">
              <Briefcase className="h-32 w-32 text-foreground" />
            </div>

            <CardHeader className="pb-2 shrink-0">
              <CardTitle className="text-foreground flex items-center gap-2 text-lg">
                <Briefcase className="h-4 w-4 text-primary" />
                <span>Experience</span>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6 relative z-10 overflow-y-auto pr-2 custom-scrollbar">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-semibold text-foreground">
                    Founder & Lead Engineer
                  </h3>
                  <Badge
                    variant="outline"
                    className="text-[10px] px-1.5 h-5 border-primary/30 text-primary"
                  >
                    Present
                  </Badge>
                </div>
                <div className="text-xs font-mono text-muted-foreground mt-0.5">
                  Bravo AI
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Architecting a voice-first calendar agent using Deepgram’s
                  Flux for low-latency speech and Google Calendar API for
                  bi-directional sync.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-semibold text-foreground">
                    Associate Team Lead
                  </h3>
                  <Badge variant="secondary" className="text-[10px] px-1.5 h-5">
                    Present
                  </Badge>
                </div>
                <div className="text-xs font-mono text-muted-foreground mt-0.5">
                  Podium Education
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Supporting a 200+ student cohort. Mentoring trainees in
                  full-stack web development (HTML/CSS/JS) and troubleshooting
                  Git workflows.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-semibold text-foreground">
                    Frontend Software Engineer
                  </h3>
                  <span className="text-[10px] text-muted-foreground font-mono pt-1">
                    2025
                  </span>
                </div>
                <div className="text-xs font-mono text-muted-foreground mt-0.5">
                  ACM @ UCR
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Shipped 3 production websites for 1,000+ users. Engineered
                  responsive UIs using Next.js, TypeScript, and Tailwind CSS.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="relative rounded-xl border border-yellow-500/50 bg-card p-8 md:p-12 overflow-hidden">
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
                engineered the frontend-to-backend infrastructure and utilized
                Vultr cloud instances.
              </p>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted shadow-sm group">
              <Link
                href="https://devpost.com/software/grademein"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 block"
              >
                <Image
                  src={GradeMeIn}
                  alt="GradeMeIn Project"
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 grayscale-[40%]"
                />

                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
                  <div className="flex items-center gap-2 border border-primary/50 bg-card px-4 py-2 rounded shadow-[0_0_15px_rgba(0,0,0,0.2)] transform scale-90 group-hover:scale-100 transition-all duration-300 delay-75">
                    <span className="font-bold text-foreground text-sm">
                      View Devpost
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                  </div>
                </div>

                {/* 3. CORNER BRACKETS (Technical Viewfinder Effect) */}
                <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:top-4 group-hover:left-4" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:bottom-4 group-hover:right-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-border mt-32 pt-10 pb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <div className="font-mono text-sm text-primary font-bold">
                Matthew Garcia
              </div>
              <p className="text-sm text-muted-foreground">
                "Success is not final, failure is not fatal."
              </p>
            </div>

            <div className="flex gap-6 items-center">
              <Separator
                orientation="vertical"
                className="h-8 bg-border hidden md:block"
              />
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
