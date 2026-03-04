import { useRef } from "react";
import { ArrowRight, Fingerprint, Eye, CircleDot, Brain, Cpu, BarChart3, Sparkles, Zap, Globe } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RippleCard from "@/components/RippleCard";
import ScrambleText from "@/components/ScrambleText";
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

const aiServices = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description: "End-to-end AI roadmaps tailored to your business goals, from ideation to deployment.",
  },
  {
    icon: Cpu,
    title: "Machine Learning Solutions",
    description: "Custom ML models for predictive analytics, NLP, and computer vision applications.",
  },
  {
    icon: BarChart3,
    title: "Intelligent Data Analytics",
    description: "Transform raw data into actionable insights with AI-powered dashboards and reporting.",
  },
  {
    icon: Sparkles,
    title: "Generative AI Integration",
    description: "Leverage LLMs, image generation, and creative AI to supercharge your workflows.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamline operations with intelligent automation that learns and adapts over time.",
  },
  {
    icon: Globe,
    title: "AI-Powered Digital Experiences",
    description: "Build conversational interfaces, recommendation engines, and personalized user journeys.",
  },
];

const narrativeSections = [
  {
    num: "01",
    title: <>Digital<br />Architecture</>,
    description: "We don't just build platforms; we design digital ecosystems that breathe. Our strategy maps the invisible paths where users find meaning.",
    icon: CircleDot,
    label: "Precision Engineering",
    align: "left" as const,
  },
  {
    num: "02",
    title: <>The Soul of<br />Identity</>,
    description: "A brand is more than a mark—it is a frequency. We help brands discover their authentic resonance and amplify it across the noise.",
    icon: Fingerprint,
    label: "Genetic Branding",
    align: "right" as const,
  },
  {
    num: "03",
    title: <>Intelligence<br />Visualized</>,
    description: "Complexity distilled into clarity. We transform abstract data into visceral visual experiences that inspire action.",
    icon: null,
    label: null,
    align: "center" as const,
  },
];

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyeSectionRef = useRef<HTMLDivElement>(null);

  // Scroll progress for the eye animation area (hero + approach + eye zoom)
  const { scrollYProgress: rawProgress } = useScroll({
    target: eyeSectionRef,
    offset: ["start start", "end end"],
  });

  const scrollYProgress = useSpring(rawProgress, { stiffness: 150, damping: 40, mass: 0.3 });

  // Eye transforms scoped to the eye section
  const eyeX = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ["55%", "-10%", "-10%", "17.5%"]);
  const eyeOpacity = useTransform(scrollYProgress, [0, 0.25, 0.4, 0.66, 0.85, 1], [0.85, 0.4, 0.4, 0.65, 1, 0]);
  const eyeScale = useTransform(scrollYProgress, [0, 0.33, 0.66, 0.85, 1], [1, 1.05, 1, 1.8, 3.5]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.33, 0.55], [1, 1, 0]);
  const approachTextOpacity = useTransform(scrollYProgress, [0.33, 0.66, 0.85], [1, 1, 0]);

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
      className="relative bg-background text-foreground font-body"
    >
      {/* Grain overlay */}
      <div className="fixed inset-0 bg-grain pointer-events-none z-0" />

      <Navbar />

      {/* ===== EYE ANIMATION AREA (sticky eye + 3 scroll sections) ===== */}
      <div ref={eyeSectionRef} className="relative">
        {/* Floating eye - sticky within this section */}
        <motion.div
          className="sticky top-0 h-screen w-[65%] pointer-events-none z-0 hidden md:block will-change-transform"
          style={{
            x: eyeX,
            opacity: eyeOpacity,
            scale: eyeScale,
            translateZ: 0,
            position: "fixed",
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

        {/* HERO SECTION */}
        <motion.section className="relative min-h-screen flex flex-col justify-center" style={{ opacity: heroTextOpacity }}>
          <div className="relative z-10 pt-24 pb-12 px-4 md:px-12 w-full max-w-7xl mx-auto">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col items-start gap-8 animate-fade-in relative z-20 max-w-2xl">
                <div className="space-y-6">
                  <span className="inline-block py-1 px-3 border border-border rounded-full text-xs tracking-widest uppercase font-light text-muted-foreground">
                    Visual Intelligence
                  </span>
                  <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tight text-foreground leading-[0.9]">
                    <ScrambleText text="A-ZENTRIX" />
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
                    href="#ai-solutions"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-border rounded-lg text-foreground hover:bg-accent transition-all duration-300 min-w-[180px]"
                  >
                    <span className="font-body font-medium text-sm tracking-wide">Our Portfolio</span>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-12 pt-12 border-t border-border w-full max-w-md mt-4">
                  <div>
                    <div className="text-3xl font-display font-semibold text-foreground mb-1">20+</div>
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

        {/* APPROACH SECTION */}
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
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* EYE ZOOM SECTION - empty spacer where eye centers & zooms */}
        <section className="relative min-h-screen flex flex-col justify-center items-center">
          <div className="relative z-10" />
        </section>
      </div>

      {/* ===== AI SOLUTIONS SECTION ===== */}
      <section id="ai-solutions" className="relative z-10 bg-[hsl(var(--overlay-bg))] py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="inline-block py-1.5 px-5 border border-foreground/20 rounded-full text-[10px] tracking-[0.25em] uppercase font-medium text-muted-foreground mb-6">
              AI-Powered Solutions
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight text-foreground leading-[1.05] mb-6">
              Intelligence,<br />Engineered.
            </h2>
            <p className="text-muted-foreground font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              A-Zentrix delivers cutting-edge AI solutions that transform how enterprises operate, compete, and innovate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {aiServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <RippleCard className="group h-full p-6 md:p-8 rounded-2xl border border-border bg-card transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                    <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-display text-sm tracking-widest uppercase font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light">
                    {service.description}
                  </p>
                </RippleCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NARRATIVE SECTION ===== */}
      <section className="relative z-10 bg-[hsl(var(--overlay-bg))] py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <span className="inline-block py-2 px-6 border border-primary/30 rounded-full">
              <span className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">
                The Visionary Perspective
              </span>
            </span>
            <h2 className="text-5xl md:text-[7rem] font-display leading-[0.85] tracking-tighter uppercase text-foreground mt-8">
              Unseen<br />
              <span className="text-primary">Narratives</span>
            </h2>
            <p className="max-w-xl mx-auto text-lg font-light text-muted-foreground tracking-widest uppercase mt-6">
              Scroll to unveil the depth of perception.
            </p>
          </motion.div>

          <div className="space-y-40">
            {narrativeSections.map((section) => (
              <motion.div
                key={section.num}
                className={`flex ${section.align === "right" ? "justify-end" : section.align === "center" ? "justify-center" : "justify-start"}`}
                initial={{
                  opacity: 0,
                  x: section.align === "left" ? -60 : section.align === "right" ? 60 : 0,
                  y: section.align === "center" ? 50 : 0,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <div
                  className={`glass-panel p-12 md:p-20 max-w-2xl relative ${
                    section.align === "center" ? "text-center border-none shadow-none" : "shadow-2xl"
                  }`}
                >
                  <span
                    className={`text-primary font-display text-6xl opacity-20 ${
                      section.align === "center"
                        ? "block mb-6"
                        : section.align === "right"
                        ? "absolute -top-10 -right-6"
                        : "absolute -top-10 -left-6"
                    }`}
                  >
                    {section.num}
                  </span>
                  <div className={section.align === "center" ? "space-y-8" : "space-y-6"}>
                    <h2
                      className={`font-display uppercase tracking-tight leading-none text-foreground ${
                        section.align === "center" ? "text-4xl md:text-7xl" : "text-4xl md:text-5xl"
                      }`}
                    >
                      {section.title}
                    </h2>
                    {section.align !== "center" && <div className="w-12 h-1 bg-primary" />}
                    <p
                      className={`text-muted-foreground font-light leading-relaxed ${
                        section.align === "center" ? "text-lg md:text-xl max-w-lg mx-auto" : "text-lg md:text-xl"
                      }`}
                    >
                      {section.description}
                    </p>
                    {section.icon && section.label && (
                      <div className="flex items-center gap-4 text-xs tracking-[0.3em] uppercase font-bold text-primary pt-4">
                        <section.icon className="w-5 h-5" />
                        {section.label}
                      </div>
                    )}
                    {section.align === "center" && (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="inline-flex items-center gap-4 px-12 py-5 bg-primary text-primary-foreground rounded-full hover:scale-105 transition-transform duration-500 group"
                      >
                        <span className="tracking-[0.4em] uppercase text-xs font-bold">Start Evolution</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-24">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 px-10 py-4 bg-foreground rounded-full text-background text-xs tracking-[0.2em] uppercase font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
            >
              Back to Top
            </a>
          </div>
        </div>
      </section>

      {/* Bottom blur orb */}
      <div className="fixed bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-muted/50 to-transparent opacity-30 blur-3xl -z-10 pointer-events-none" />

      <div className="relative z-10 bg-[hsl(var(--overlay-bg))]">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
