import { useRef, useCallback, useState } from "react";
import { motion, MotionValue, useMotionValueEvent } from "framer-motion";
import { Brain, Cpu, BarChart3, Sparkles, Zap, Globe, ArrowRight, CircleDot, Fingerprint } from "lucide-react";
import RippleCard from "./RippleCard";
import eyeBg from "@/assets/eye-bg.jpg";

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
    eye: { scale: 1, x: "30%", y: "-5%", opacity: 0.5, rotate: 0 },
  },
  {
    num: "02",
    title: <>The Soul of<br />Identity</>,
    description: "A brand is more than a mark—it is a frequency. We help brands discover their authentic resonance and amplify it across the noise.",
    icon: Fingerprint,
    label: "Genetic Branding",
    align: "right" as const,
    eye: { scale: 1.4, x: "-30%", y: "0%", opacity: 0.4, rotate: 15 },
  },
  {
    num: "03",
    title: <>Intelligence<br />Visualized</>,
    description: "Complexity distilled into clarity. We transform abstract data into visceral visual experiences that inspire action.",
    icon: null,
    label: null,
    align: "center" as const,
    eye: { scale: 0.8, x: "0%", y: "0%", opacity: 0.7, rotate: -10 },
  },
];

interface SandalOverlayContentProps {
  opacity: MotionValue<number>;
}

const SandalOverlayContent = ({ opacity }: SandalOverlayContentProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeNarrative, setActiveNarrative] = useState(-1);

  useMotionValueEvent(opacity, "change", (latest) => {
    const nowVisible = latest > 0.05;
    if (nowVisible && !isVisible) {
      scrollRef.current?.scrollTo({ top: 0 });
      setActiveNarrative(-1);
    }
    setIsVisible(nowVisible);
  });

  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    if (e.deltaY < 0 && el.scrollTop <= 0) {
      return;
    }
    e.stopPropagation();
  }, []);

  const eyeConfig = activeNarrative >= 0
    ? narrativeSections[activeNarrative].eye
    : { scale: 0.3, x: "0%", y: "0%", opacity: 0, rotate: 0 };

  return (
    <motion.div
      className="fixed inset-0 z-[51] pointer-events-none flex items-center justify-center will-change-[opacity]"
      style={{ opacity }}
    >
      {/* Narrative Eye Background */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0 hidden md:block"
        animate={{
          scale: eyeConfig.scale,
          x: eyeConfig.x,
          y: eyeConfig.y,
          opacity: eyeConfig.opacity,
          rotate: eyeConfig.rotate,
        }}
        transition={{
          duration: 1.2,
          ease: [0.23, 1, 0.32, 1],
          opacity: { duration: activeNarrative >= 0 ? 1.8 : 0.6 },
        }}
      >
        <img
          alt=""
          className="w-full h-full object-cover"
          src={eyeBg}
        />
      </motion.div>

      <div
        ref={scrollRef}
        onWheel={handleWheel}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        className={`w-full max-w-6xl mx-auto px-6 md:px-12 overflow-y-auto max-h-screen py-24 [&::-webkit-scrollbar]:!hidden [&::-webkit-scrollbar]:!w-0 [&::-webkit-scrollbar]:!h-0 relative z-10 ${isVisible ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* ===== AI SOLUTIONS SECTION ===== */}
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

        {/* ===== NARRATIVE DIVIDER ===== */}
        <motion.div
          className="text-center my-16"
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

        {/* ===== NARRATIVE SECTIONS ===== */}
        <div className="space-y-40">
          {narrativeSections.map((section, i) => (
            <motion.div
              key={section.num}
              className={`flex ${section.align === "right" ? "justify-end" : section.align === "center" ? "justify-center" : "justify-start"}`}
              initial={{ opacity: 0, x: section.align === "left" ? -60 : section.align === "right" ? 60 : 0, y: section.align === "center" ? 50 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              onViewportEnter={() => setActiveNarrative(i)}
              onViewportLeave={() => setActiveNarrative((prev) => (prev === i ? -1 : prev))}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className={`glass-panel p-12 md:p-20 max-w-2xl relative ${section.align === "center" ? "text-center border-none shadow-none" : "shadow-2xl"}`}>
                <span className={`text-primary font-display text-6xl opacity-20 ${
                  section.align === "center" ? "block mb-6" : section.align === "right" ? "absolute -top-10 -right-6" : "absolute -top-10 -left-6"
                }`}>
                  {section.num}
                </span>
                <div className={section.align === "center" ? "space-y-8" : "space-y-6"}>
                  <h2 className={`font-display uppercase tracking-tight leading-none text-foreground ${section.align === "center" ? "text-4xl md:text-7xl" : "text-4xl md:text-5xl"}`}>
                    {section.title}
                  </h2>
                  {section.align !== "center" && <div className="w-12 h-1 bg-primary" />}
                  <p className={`text-muted-foreground font-light leading-relaxed ${section.align === "center" ? "text-lg md:text-xl max-w-lg mx-auto" : "text-lg md:text-xl"}`}>
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
                      onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
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

        <div className="text-center mt-24 pb-12">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-foreground rounded-full text-background text-xs tracking-[0.2em] uppercase font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
          >
            Back to Top
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SandalOverlayContent;
