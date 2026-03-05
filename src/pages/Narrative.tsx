import { useRef, useState, useEffect } from "react";
import { ArrowRight, Fingerprint, Eye, CircleDot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import eyeBg from "@/assets/eye-bg.jpg";
import OptimizedImage from "@/components/OptimizedImage";

interface SectionConfig {
  className: string;
  width: string;
  height: string;
  left: string;
  top: string;
  opacity: number;
  scale: number;
  rotate: number;
}

const eyeConfigs: Record<string, SectionConfig> = {
  hero: {
    className: "hero",
    width: "120vw",
    height: "120vh",
    left: "-10%",
    top: "-10%",
    opacity: 0.3,
    scale: 1.1,
    rotate: -5,
  },
  section1: {
    className: "section1",
    width: "80vw",
    height: "80vh",
    left: "30%",
    top: "10%",
    opacity: 0.6,
    scale: 1,
    rotate: 0,
  },
  section2: {
    className: "section2",
    width: "60vw",
    height: "60vh",
    left: "-20%",
    top: "20%",
    opacity: 0.5,
    scale: 1.5,
    rotate: 15,
  },
  section3: {
    className: "section3",
    width: "100vw",
    height: "100vh",
    left: "0",
    top: "0",
    opacity: 0.8,
    scale: 0.8,
    rotate: -10,
  },
};

const sections = [
  {
    id: "hero",
    content: (
      <div className="text-center space-y-8 px-6">
        <div className="inline-block py-2 px-6 border border-primary/30 rounded-full mb-4">
          <span className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">
            The Visionary Perspective
          </span>
        </div>
        <h1 className="text-7xl md:text-[10rem] font-display leading-[0.85] tracking-tighter uppercase text-foreground">
          AI<br />
          <span className="text-primary">Assistant</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl font-light text-muted-foreground tracking-widest uppercase">
          Pioneering AI and Tech Solutions
        </p>
      </div>
    ),
    align: "center" as const,
  },
  {
    id: "section1",
    content: (
      <div className="glass-panel p-12 md:p-20 max-w-2xl relative z-10 shadow-2xl">
        <span className="text-primary font-display text-6xl opacity-20 absolute -top-10 -left-10">
          01
        </span>
        <div className="space-y-6">
          <h2 className="text-5xl font-display uppercase tracking-tight leading-none text-foreground">
            Our<br />Mission
          </h2>
          <div className="w-12 h-1 bg-primary" />
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            To deliver AI-powered solutions that drive efficiency, automate complexity, and scale business growth. We connect innovation with real-world application.
          </p>
          <div className="flex items-center gap-4 text-xs tracking-[0.3em] uppercase font-bold text-primary pt-4">
            <CircleDot className="w-5 h-5" />
            Impactful Technology
          </div>
        </div>
      </div>
    ),
    align: "left" as const,
  },
  {
    id: "section2",
    content: (
      <div className="glass-panel p-12 md:p-20 max-w-2xl relative z-10 shadow-2xl">
        <span className="text-primary font-display text-6xl opacity-20 absolute -top-10 -right-10">
          02
        </span>
        <div className="space-y-6">
          <h2 className="text-5xl font-display uppercase tracking-tight leading-none text-foreground">
            Our<br />Vision
          </h2>
          <div className="w-12 h-1 bg-primary" />
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            To lead the global shift toward intelligent enterprise solutions by embedding AI across industries, creating a future powered by data intelligence.
          </p>
          <div className="flex items-center gap-4 text-xs tracking-[0.3em] uppercase font-bold text-primary pt-4">
            <Fingerprint className="w-5 h-5" />
            Next-Gen Software
          </div>
        </div>
      </div>
    ),
    align: "right" as const,
  },
  {
    id: "section3",
    content: (
      <div className="glass-panel p-12 md:p-20 max-w-2xl relative z-10 text-center border-none shadow-none">
        <span className="text-primary font-display text-6xl opacity-20 block mb-6">
          03
        </span>
        <div className="space-y-8">
          <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tight text-foreground">
            Our<br />Journey
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-lg mx-auto leading-relaxed">
            A-Zentrix was founded to simplify the adoption of AI and automation for businesses of all sizes, evolving into a full-stack solution provider.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-4 px-12 py-5 bg-primary text-primary-foreground rounded-full hover:scale-105 transition-transform duration-500 group"
          >
            <span className="tracking-[0.4em] uppercase text-xs font-bold">
              Start Evolution
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    ),
    align: "center" as const,
  },
];

const alignClasses = {
  left: "justify-start items-center",
  right: "justify-end items-center",
  center: "justify-center items-center flex-col",
};

const Narrative = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("hero");
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [transitionDone, setTransitionDone] = useState(false);

  useEffect(() => {
    // Circular reveal takes ~1.2s
    const timer = setTimeout(() => setTransitionDone(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sections[i].id);
            }
          });
        },
        { threshold: 0.5, root: scrollRef.current }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const config = eyeConfigs[activeSection] || eyeConfigs.hero;

  return (
    <div className="bg-background text-foreground font-body min-h-screen flex flex-col overflow-hidden relative transition-colors duration-500">
      {/* Circular Reveal Transition */}
      <AnimatePresence>
        {!transitionDone && (
          <motion.div
            className="fixed inset-0 z-[100] pointer-events-none"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background that gets revealed through */}
            <motion.div
              className="absolute inset-0 bg-background"
              initial={{
                clipPath: "circle(0% at 50% 50%)",
              }}
              animate={{
                clipPath: "circle(150% at 50% 50%)",
              }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
              style={{ backgroundColor: "hsl(var(--overlay-bg))" }}
            />
            {/* Circular wipe that reveals content underneath */}
            <motion.div
              className="absolute inset-0"
              initial={{
                clipPath: "circle(150% at 50% 50%)",
              }}
              animate={{
                clipPath: "circle(0% at 50% 50%)",
              }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
              style={{ backgroundColor: "hsl(var(--background))" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grain */}
      <div className="fixed inset-0 bg-grain pointer-events-none z-[60]" />

      <Navbar />

      {/* Floating Eye — animated based on active section */}
      <motion.div
        className="fixed pointer-events-none z-[5] will-change-transform hidden md:block"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          width: config.width,
          height: config.height,
          left: config.left,
          top: config.top,
          opacity: transitionDone ? config.opacity : 0,
          scale: config.scale,
          rotate: config.rotate,
        }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="relative w-full h-full">
          <OptimizedImage
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            style={{ mixBlendMode: "multiply" }}
            src={eyeBg}
          />
          <OptimizedImage
            alt="Artistic eye"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            src={eyeBg}
          />
          <OptimizedImage
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-50 scale-110"
            style={{ filter: "hue-rotate(0deg) saturate(1.2)" }}
            src={eyeBg}
          />
        </div>
      </motion.div>

      {/* Snap-scroll container */}
      <main
        ref={scrollRef}
        data-lenis-prevent
        className="snap-y snap-proximity h-screen overflow-y-scroll overflow-x-hidden hide-scrollbar"
      >
        {sections.map((section, i) => (
          <section
            key={section.id}
            ref={(el) => { sectionRefs.current[i] = el; }}
            className={`snap-start h-screen relative flex ${alignClasses[section.align]} overflow-hidden px-6 md:px-10`}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={transitionDone ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
            >
              {section.content}
            </motion.div>
          </section>
        ))}

        {/* Footer snap section */}
        <section className="snap-start h-screen flex flex-col items-center justify-end pb-12">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Narrative;
