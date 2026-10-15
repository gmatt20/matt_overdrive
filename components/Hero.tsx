import { MapPin } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <section className="space-y-8 mb-15">
      <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
        <div className="flex items-center gap-5">
          <Avatar className="h-20 w-20 border-2 border-border bg-muted">
            <AvatarImage src="/headshotsmol.webp" alt="Matthew G" />
            <AvatarFallback>MG</AvatarFallback>
          </Avatar>

          <div className="space-y-1">
            <h2 className="text-xl font-bold text-foreground">Matthew G.</h2>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-mono">
              <MapPin className="h-3.5 w-3.5" />
              <span>Anaheim, CA</span>
            </div>

            <div className="flex gap-2 items-center">
              <Link
                href="https://www.github.com/gmatt20/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <SiGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/mattg2765/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <SiLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05]">
          <span className="block text-foreground">Software Engineer</span>
          <span className="block text-brand">Building AI-powered products</span>
        </h1>

        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base md:text-xl font-semibold text-muted-foreground">
          <span>Full-stack engineering</span>
          <span aria-hidden="true" className="text-brand/50">
            /
          </span>
          <span>Voice AI</span>
          <span aria-hidden="true" className="text-brand/50">
            /
          </span>
          <span>Agentic systems</span>
        </p>

        <p className="md:text-xl font-semibold text-brand pt-1">
          MSWE @ UC Irvine
        </p>
      </div>
    </section>
  );
}
