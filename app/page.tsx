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

import { Link } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Bravo } from "@/components/Bravo";
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
import { Projects } from "@/components/Projects";
import { GradeMeIn } from "@/components/GradeMeIn";

export default function MattOverdrive() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <main className="container px-4 py-12 md:px-8 md:py-24 max-w-7xl mx-auto space-y-32">
        <Hero />

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
            <Bravo />
          </Card>
          {/* ABOUT ME & EDUCATION */}
          <Card className="bg-card border-border flex flex-col justify-between hover:border-primary/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-foreground">
                  About Me
                </CardTitle>
                <Avatar className="h-10 w-10 border border-border">
                  <AvatarImage src="/headshotsmol.webp" />
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

            <GradeMeIn />
          </div>
        </section>

        <Projects />
        <Footer />
      </main>
    </div>
  );
}
