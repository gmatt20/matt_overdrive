import Bento from "@/components/Bento";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Projects } from "@/components/Projects";
import { GradeMeIn } from "@/components/GradeMeIn";

export default function MattOverdrive() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <main className="container px-4 py-12 md:px-8 md:py-24 max-w-7xl mx-auto space-y-32">
        <Hero />
        <Bento />
        <GradeMeIn />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
