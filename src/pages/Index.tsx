import { useRef } from "react";
import { ArrowRight, Fingerprint, Eye, CircleDot } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SandalOverlayContent from "@/components/SandalOverlayContent";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: rawProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll progress with a spring
  const scrollYProgress = useSpring(rawProgress, { stiffness: 150, damping: 40, mass: 0.3 });

  // Eye: right → left → center as you scroll through 3 sections
  const eyeX = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ["55%", "-10%", "-10%", "17.5%"]);
  const eyeOpacity = useTransform(scrollYProgress, [0, 0.25, 0.4, 0.66, 0.82, 0.92, 1], [0.85, 0.4, 0.4, 0.65, 1, 1, 0]);
  const eyeScale = useTransform(scrollYProgress, [0, 0.33, 0.66, 0.82, 0.95], [1, 1.05, 1, 1.8, 3.5]);
  const blackOverlayOpacity = useTransform(scrollYProgress, [0.78, 0.92], [0, 1]);
  const sandalContentOpacity = useTransform(scrollYProgress, [0.88, 0.98], [0, 1]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.33, 0.55], [1, 1, 0]);
  const approachTextOpacity = useTransform(scrollYProgress, [0.33, 0.66, 0.85], [1, 1, 0]);

  // Mask & gradient transforms (hoisted out of JSX to avoid re-creation on render)
  const maskGradient = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [
      "linear-gradient(to right, transparent 0%, black 30%, black 80%, transparent 100%)",
      "linear-gradient(to right, transparent 10%, black 30%, black 70%, transparent 90%)",
      "linear-gradient(to right, transparent 10%, black 30%, black 70%, transparent 90%)",
      "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
    ]
  );
  const bgGradient = useTransform(
    scrollYProgress,
    [0, 0.5, 0.85, 1],
    [
      "linear-gradient(to right, hsl(var(--background)) 0%, transparent 30%)",
      "linear-gradient(to left, hsl(var(--background)) 0%, transparent 30%)",
      "linear-gradient(to left, transparent 0%, transparent 100%)",
      "linear-gradient(to left, transparent 0%, transparent 100%)",
    ]
  );

  return (
    <div
      ref={containerRef}
      className="bg-background text-foreground font-body min-h-screen flex flex-col overflow-x-hidden relative transition-colors duration-500"
    >
      {/* Grain overlay */}
      <div className="fixed inset-0 bg-grain pointer-events-none z-0" />

      <Navbar />

      {/* ===== FLOATING EYE - scroll-linked ===== */}
      <motion.div
        className="fixed top-0 h-full w-[65%] pointer-events-none z-0 hidden md:block will-change-transform"
        style={{
          x: eyeX,
          opacity: eyeOpacity,
          scale: eyeScale,
          translateZ: 0,
        }}
      >
        <motion.div
          className="w-full h-full relative will-change-[mask-image]"
          style={{
            maskImage: maskGradient,
            WebkitMaskImage: maskGradient,
          }}
        >
          <img
            alt="Artistic eye sketch background"
            className="w-full h-full object-cover object-center"
            src={eyeBg}
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ background: bgGradient }}
        />
      </motion.div>

      {/* ===== HERO SECTION ===== */}
      <motion.section className="relative min-h-screen flex flex-col justify-center" style={{ opacity: heroTextOpacity }}>
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
      </motion.section>

      {/* ===== APPROACH SECTION ===== */}
      <motion.section id="approach" className="relative min-h-screen flex flex-col justify-center" style={{ opacity: approachTextOpacity }}>
        <div className="relative z-10 py-24 px-4 md:px-12 w-full max-w-7xl mx-auto">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:block" />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col items-start gap-8 relative z-20"
            >
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
                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.15, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex gap-6 group"
                  >
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
                  </motion.div>
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
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ===== EYE ZOOM SECTION - empty page where eye centers & zooms ===== */}
      <section className="relative min-h-screen flex flex-col justify-center items-center">
        <div className="relative z-10" />
      </section>

      {/* Sandal overlay that covers everything at end of scroll */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-50 will-change-[opacity]"
        style={{ opacity: blackOverlayOpacity, backgroundColor: "hsl(var(--overlay-bg))" }}
      />

      {/* AI Services content on sandal overlay */}
      <SandalOverlayContent opacity={sandalContentOpacity}
      />

      {/* Bottom blur orb */}
      <div className="fixed bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-muted/50 to-transparent opacity-30 blur-3xl -z-10 pointer-events-none" />

      <Footer />
    </div>
  );
};

export default Index;
