import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase("hold"), 600);
    const exitTimer = setTimeout(() => setPhase("exit"), 1800);
    const doneTimer = setTimeout(() => onComplete(), 2600);
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
        </div>

        {/* Curtain reveal - two panels sliding apart */}
        {phase === "exit" && (
          <>
            <motion.div
              className="absolute inset-0 bg-foreground origin-left z-10"
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0 }}
              style={{ transformOrigin: "right" }}
            />
            <motion.div
              className="absolute inset-0 bg-foreground origin-right z-10"
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0 }}
              style={{ transformOrigin: "left" }}
            />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
