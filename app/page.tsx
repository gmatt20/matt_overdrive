import { Briefcase } from "lucide-react";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Bravo } from "@/components/Bravo";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Projects } from "@/components/Projects";
import { GradeMeIn } from "@/components/GradeMeIn";
import { GraduationCap } from "lucide-react";

export default function MattOverdrive() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <main className="container px-4 py-12 md:px-8 md:py-24 max-w-7xl mx-auto space-y-32">
        <Hero />
        {/* BENTO GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <Card className="md:col-span-2 min-h-[500px] bg-card border-border relative hover:border-primary/50 transition-colors overflow-hidden flex flex-col md:flex-row">
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
            <CardContent className="flex-1 flex flex-col gap-6">
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
                  I am driven by curiosity and the belief that the best way to
                  predict the future is to build it.
                </p>
              </div>

              <Separator className="bg-border" />

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  Education
                </h4>
                <div className="flex justify-between items-start">
                  <div className="space-y-0.5">
                    <p className="text-xs font-medium text-foreground">
                      UC Riverside
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      B.A. Psychology
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-[10px] h-5 font-mono"
                  >
                    June 2026
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:border-primary/50 transition-colors bg-card border-border relative overflow-hidden flex flex-col h-full">
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
                    Solo Lead Engineer & Architect
                  </h3>
                  <Badge
                    variant="outline"
                    className="text-[10px] px-2 h-5 border-primary/30 text-primary font-mono"
                  >
                    2026 - Present
                  </Badge>
                </div>
                <div className="text-xs font-bold text-brand mt-0.5">
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
                  <Badge
                    variant="outline"
                    className="text-[10px] px-2 h-5 border-primary/30 text-primary font-mono"
                  >
                    2025 - Present
                  </Badge>
                </div>
                <div className="text-xs text-brand font-bold mt-0.5">
                  Podium Education
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Supporting a 200+ student cohort. Mentoring trainees in web
                  development (HTML/CSS/JS) and troubleshooting Git workflows.
                </p>
              </div>
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-semibold text-foreground">
                    Frontend Software Engineer
                  </h3>
                  <Badge
                    variant="outline"
                    className="text-[10px] px-2 h-5 border-primary/30 text-primary font-mono"
                  >
                    2024 - 2025
                  </Badge>
                </div>
                <div className="text-xs font-bold text-brand mt-0.5">
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
        <GradeMeIn />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
