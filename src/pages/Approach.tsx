import { ArrowRight, Fingerprint, Eye, CircleDot } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import eyeBg from "@/assets/eye-bg.jpg";

const services = [
  {
    icon: CircleDot,
    title: "Digital Strategy",
    description: "Navigating complex digital landscapes with foresight and architectural precision.",
  },
  {
    icon: Fingerprint,
    title: "Brand Identity",
    description: "Forging the soul of your brand through cohesive visual narratives and storytelling.",
  },
  {
    icon: Eye,
    title: "Visual Intelligence",
    description: "Transforming complex datasets into compelling artistic visuals that drive decisions.",
  },
];

const Approach = () => {
  return (
    <div className="bg-background text-foreground font-body min-h-screen flex flex-col overflow-x-hidden relative transition-colors duration-500">
      <div className="fixed inset-0 bg-grain pointer-events-none z-0" />

      <Navbar />

      {/* Background image - left side */}
      <div className="fixed top-0 left-0 h-full w-full md:w-[60%] pointer-events-none z-0 animate-slide-in-left overflow-hidden">
        <div
          className="w-full h-full relative opacity-90"
          style={{
            maskImage: "linear-gradient(to right, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, black 60%, transparent 100%)",
          }}
        >
          <img
            alt="Artistic red eye illustration"
            className="w-full h-full object-cover object-left"
            src={eyeBg}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-background via-transparent to-transparent w-full h-full" />
      </div>

      <main className="flex-grow flex flex-col justify-center relative z-10 pt-24 pb-12 px-4 md:px-12 w-full max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="hidden md:block" />
          <div className="flex flex-col items-start gap-8 animate-fade-in relative z-20">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 py-1 px-4 border border-primary/20 bg-primary/5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-primary">Strategic Focus</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-foreground leading-[1.1] uppercase">
                Our Visionary<br />Approach
              </h2>
              <p className="text-muted-foreground font-light text-base md:text-lg tracking-wide leading-relaxed max-w-md">
                We perceive what others overlook. Our methodology combines artistic intuition with data-driven strategy to craft identities that resonate on a deeper frequency.
              </p>
            </div>

            <div className="space-y-8 mt-4 w-full max-w-md">
              {services.map((service) => (
                <div key={service.title} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-sm tracking-widest uppercase font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-4 px-10 py-4 bg-foreground rounded-full text-background hover:bg-primary hover:text-primary-foreground transition-all duration-500 shadow-xl group"
              >
                <span className="font-body font-medium text-xs tracking-[0.2em] uppercase">Continue Journey</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Approach;
