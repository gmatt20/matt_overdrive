import { MapPin } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
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
            <p className="text-sm font-medium text-foreground">
              Founder @ <span className="text-primary">Bravo AI</span>
            </p>

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

      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground leading-[1.1]">
          SOFTWARE ENGINEER <br className="hidden md:block" />
          <span className="text-brand">& PRODUCT ARCHITECT.</span>
        </h1>
      </div>
    </section>
  );
}
