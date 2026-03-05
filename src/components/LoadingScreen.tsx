import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef(Date.now());

  // Realistic progress: fast start, pause around 40-60%, then finish
  useEffect(() => {
    const duration = 1200;
    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const t = Math.min(elapsed / duration, 1);
      let mapped: number;
      if (t < 0.3) {
        mapped = (t / 0.3) * 0.35;
      } else if (t < 0.6) {
        const sub = (t - 0.3) / 0.3;
        mapped = 0.35 + sub * 0.2;
      } else if (t < 0.85) {
        const sub = (t - 0.6) / 0.25;
        mapped = 0.55 + sub * 0.35;
      } else {
        const sub = (t - 0.85) / 0.15;
        const eased = 1 - Math.pow(1 - sub, 2);
        mapped = 0.9 + eased * 0.1;
      }
      setProgress(Math.min(Math.round(mapped * 100), 100));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase("hold"), 200);
    const exitTimer = setTimeout(() => setPhase("exit"), 1300);
    const doneTimer = setTimeout(() => onComplete(), 1800);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : null}
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-foreground"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Grain texture */}
        <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none" />

        {/* Animated brand */}
        <div className="relative flex flex-col items-center gap-6 overflow-hidden">
          {/* Top line reveal */}
          <motion.div
            className="h-px bg-background/30 origin-center"
            initial={{ width: 0 }}
            animate={{ width: phase === "enter" ? 0 : 120 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          />

          {/* Brand name with clip reveal */}
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-4xl md:text-6xl tracking-[0.3em] uppercase text-background font-medium"
              initial={{ y: "110%" }}
              animate={{ y: phase === "enter" ? "110%" : "0%" }}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
            >
              A-Zentrix
            </motion.h1>
          </div>

          {/* Subtitle clip reveal */}
          <div className="overflow-hidden">
            <motion.p
              className="text-background/40 text-[10px] tracking-[0.5em] uppercase font-light"
              initial={{ y: "110%" }}
              animate={{ y: phase === "enter" ? "110%" : "0%" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.35 }}
            >
              Visual Intelligence
            </motion.p>
          </div>

          {/* Bottom line reveal */}
          <motion.div
            className="h-px bg-background/30 origin-center"
            initial={{ width: 0 }}
            animate={{ width: phase === "enter" ? 0 : 120 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
          />

          {/* Progress bar + counter */}
          <motion.div
            className="flex flex-col items-center gap-3 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "enter" ? 0 : 0.6 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-32 h-[2px] bg-background/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-background/30 text-[10px] tracking-[0.3em] font-mono tabular-nums">
              {String(progress).padStart(3, "\u2007")}%
            </span>
          </motion.div>
        </div>

        {/* Curtain reveal - two panels sliding apart */}
        {phase === "exit" && (
          <>
            <motion.div
              className="absolute inset-0 bg-foreground origin-left z-10"
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              style={{ transformOrigin: "right" }}
            />
            <motion.div
              className="absolute inset-0 bg-foreground origin-right z-10"
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
