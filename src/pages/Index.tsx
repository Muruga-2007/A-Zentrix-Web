import { ArrowRight, Fingerprint, Eye, CircleDot } from "lucide-react";
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

const Index = () => {
  return (
    <div className="bg-background text-foreground font-body min-h-screen flex flex-col overflow-x-hidden relative transition-colors duration-500">
      {/* Grain overlay */}
      <div className="fixed inset-0 bg-grain pointer-events-none z-0" />

      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex flex-col justify-center">
        {/* Background image - right side */}
        <div className="absolute top-0 right-0 h-full w-[65%] pointer-events-none z-0 hidden md:block opacity-60 mix-blend-multiply">
          <div
            className="w-full h-full relative"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 40%)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 40%)",
            }}
          >
            <img
              alt="Artistic eye sketch background"
              className="w-full h-full object-cover object-center translate-x-[10%] eye-blink"
              src={eyeBg}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent w-full h-full" />
        </div>

        <div className="relative z-10 pt-24 pb-12 px-4 md:px-12 w-full max-w-7xl mx-auto">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start gap-8 animate-fade-in relative z-20 max-w-2xl">
              <div className="space-y-6">
                <span className="inline-block py-1 px-3 border border-border rounded-full text-xs tracking-widest uppercase font-light text-muted-foreground">
                  Visual Intelligence
                </span>
                <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tight text-foreground leading-[0.9]">
                  A-ZENTRIX
                </h1>
                <p className="text-muted-foreground font-light text-lg md:text-xl tracking-wide leading-relaxed max-w-lg">
                  Bridging the gap between creative vision and corporate reality. We provide high-end visual solutions for the modern enterprise.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#approach"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground rounded-lg text-background hover:opacity-90 transition-all duration-300 shadow-lg group min-w-[180px]"
                >
                  <span className="font-body font-medium text-sm tracking-wide">Explore Solutions</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#approach"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-border rounded-lg text-foreground hover:bg-accent transition-all duration-300 min-w-[180px]"
                >
                  <span className="font-body font-medium text-sm tracking-wide">Our Portfolio</span>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-border w-full max-w-md mt-4">
                <div>
                  <div className="text-3xl font-display font-semibold text-foreground mb-1">200+</div>
                  <div className="text-xs tracking-widest uppercase text-muted-foreground">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-semibold text-foreground mb-1">98%</div>
                  <div className="text-xs tracking-widest uppercase text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="hidden md:block" />
          </div>
        </div>
      </section>

      {/* ===== APPROACH SECTION ===== */}
      <section id="approach" className="relative min-h-screen flex flex-col justify-center">
        {/* Background image - left side */}
        <div className="absolute top-0 left-0 h-full w-full md:w-[60%] pointer-events-none z-0 overflow-hidden">
          <div
            className="w-full h-full relative opacity-90"
            style={{
              maskImage: "linear-gradient(to right, black 60%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, black 60%, transparent 100%)",
            }}
          >
            <img
              alt="Artistic red eye illustration"
              className="w-full h-full object-cover object-left eye-blink"
              src={eyeBg}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-background via-transparent to-transparent w-full h-full" />
        </div>

        <div className="relative z-10 py-24 px-4 md:px-12 w-full max-w-7xl mx-auto">
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
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="inline-flex items-center justify-center gap-4 px-10 py-4 bg-foreground rounded-full text-background hover:bg-primary hover:text-primary-foreground transition-all duration-500 shadow-xl group"
                >
                  <span className="font-body font-medium text-xs tracking-[0.2em] uppercase">Back to Top</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom blur orb */}
      <div className="fixed bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-muted/50 to-transparent opacity-30 blur-3xl -z-10 pointer-events-none" />

      <Footer />
    </div>
  );
};

export default Index;
