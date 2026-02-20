import { useRef, useCallback, useEffect, useState } from "react";
import { motion, MotionValue, useMotionValueEvent } from "framer-motion";
import { Brain, Cpu, BarChart3, Sparkles, Zap, Globe } from "lucide-react";
import RippleCard from "./RippleCard";

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

interface SandalOverlayContentProps {
  opacity: MotionValue<number>;
}

const SandalOverlayContent = ({ opacity }: SandalOverlayContentProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Reset scroll to top whenever the overlay becomes visible
  useMotionValueEvent(opacity, "change", (latest) => {
    const nowVisible = latest > 0.05;
    if (nowVisible && !isVisible) {
      scrollRef.current?.scrollTo({ top: 0 });
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

  return (
    <motion.div
      className="fixed inset-0 z-[51] pointer-events-none flex items-center justify-center will-change-[opacity]"
      style={{ opacity }}
    >
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className="pointer-events-auto w-full max-w-6xl mx-auto px-6 md:px-12 overflow-y-auto max-h-screen py-24 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]"
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="inline-block py-1.5 px-5 border border-foreground/20 rounded-full text-[10px] tracking-[0.25em] uppercase font-medium text-foreground/60 mb-6">
            AI-Powered Solutions
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight text-foreground/90 leading-[1.05] mb-6">
            Intelligence,<br />Engineered.
          </h2>
          <p className="text-foreground/50 font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
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
              <RippleCard className="group h-full p-6 md:p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.03] hover:bg-foreground/[0.06] transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-foreground/[0.08] flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                  <service.icon className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display text-sm tracking-widest uppercase font-semibold text-foreground/80 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-foreground/45 leading-relaxed font-light">
                  {service.description}
                </p>
              </RippleCard>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-foreground/90 rounded-full text-background text-xs tracking-[0.2em] uppercase font-medium hover:bg-foreground transition-all duration-300 shadow-lg"
          >
            Back to Top
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SandalOverlayContent;
