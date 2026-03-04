import { motion, MotionValue, useTransform } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  angle: number;
  distance: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

interface EyeTransitionParticlesProps {
  scrollProgress: MotionValue<number>;
}

const EyeTransitionParticles = ({ scrollProgress }: EyeTransitionParticlesProps) => {
  const particleOpacity = useTransform(scrollProgress, [0.78, 0.85, 0.95, 1], [0, 1, 1, 0]);
  const rayOpacity = useTransform(scrollProgress, [0.80, 0.88, 0.96, 1], [0, 0.6, 0.8, 0]);
  const rayScale = useTransform(scrollProgress, [0.80, 0.95], [0.5, 2.5]);
  const rayRotate = useTransform(scrollProgress, [0.80, 1], [0, 45]);

  // Generate particles radiating from the pupil center
  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      id: i,
      angle: (i / 24) * 360 + Math.random() * 15,
      distance: 80 + Math.random() * 300,
      size: 1 + Math.random() * 3,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
      opacity: 0.3 + Math.random() * 0.7,
    }));
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[49]"
      style={{ opacity: particleOpacity }}
    >
      {/* Radial light rays from pupil center */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          opacity: rayOpacity,
          scale: rayScale,
          rotate: rayRotate,
          transformOrigin: "38% 32%",
        }}
      >
        {[0, 30, 60, 90, 120, 150].map((angle) => (
          <div
            key={angle}
            className="absolute left-[38%] top-[32%] origin-left"
            style={{
              transform: `rotate(${angle}deg)`,
              width: "60vw",
              height: "1px",
              background: `linear-gradient(90deg, hsl(var(--primary) / 0.6), hsl(var(--primary) / 0.1) 40%, transparent 80%)`,
            }}
          />
        ))}
        {[15, 45, 75, 105, 135, 165].map((angle) => (
          <div
            key={`s-${angle}`}
            className="absolute left-[38%] top-[32%] origin-left"
            style={{
              transform: `rotate(${angle}deg)`,
              width: "40vw",
              height: "1px",
              background: `linear-gradient(90deg, hsl(var(--foreground) / 0.3), transparent 60%)`,
            }}
          />
        ))}
      </motion.div>

      {/* Floating particles */}
      {particles.map((p) => {
        const rad = (p.angle * Math.PI) / 180;
        const x = Math.cos(rad) * p.distance;
        const y = Math.sin(rad) * p.distance;

        return (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary"
            style={{
              width: p.size,
              height: p.size,
              left: "38%",
              top: "32%",
            }}
            animate={{
              x: [0, x * 0.3, x],
              y: [0, y * 0.3, y],
              opacity: [0, p.opacity, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        );
      })}

      {/* Central glow pulse */}
      <motion.div
        className="absolute rounded-full"
        style={{
          left: "38%",
          top: "32%",
          width: 120,
          height: 120,
          x: -60,
          y: -60,
          background: `radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, hsl(var(--primary) / 0.1) 40%, transparent 70%)`,
          opacity: rayOpacity,
          scale: rayScale,
        }}
      />
    </motion.div>
  );
};

export default EyeTransitionParticles;
