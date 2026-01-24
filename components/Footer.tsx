import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32 pt-10 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <div className="font-mono flex text-sm text-primary font-bold">
            Matthew Garcia
          </div>
          <p className="text-sm text-muted-foreground">
            &quot;Everything around you that you call life was made up by people
            who were no smarter than you&quot;
            <br />- Steve Jobs
          </p>
        </div>
        <div className="flex gap-6 items-center">
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
    </footer>
  );
}
