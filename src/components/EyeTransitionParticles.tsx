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
  color: string;
}

interface EyeTransitionParticlesProps {
  scrollProgress: MotionValue<number>;
}

const PARTICLE_COLORS = [
  "hsl(0 53% 43%)",      // primary red
  "hsl(30 80% 55%)",     // warm amber
  "hsl(45 90% 65%)",     // gold
  "hsl(15 70% 50%)",     // burnt orange
  "hsl(0 0% 85%)",       // soft white
];

const EyeTransitionParticles = ({ scrollProgress }: EyeTransitionParticlesProps) => {
  const particleOpacity = useTransform(scrollProgress, [0.76, 0.83, 0.95, 1], [0, 1, 1, 0]);
  const rayOpacity = useTransform(scrollProgress, [0.78, 0.86, 0.96, 1], [0, 0.8, 1, 0]);
  const rayScale = useTransform(scrollProgress, [0.78, 0.95], [0.3, 3]);
  const rayRotate = useTransform(scrollProgress, [0.78, 1], [0, 60]);

  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      angle: (i / 40) * 360 + Math.random() * 9,
      distance: 60 + Math.random() * 350,
      size: 1.5 + Math.random() * 4,
      delay: Math.random() * 1.8,
      duration: 1.8 + Math.random() * 2.5,
      opacity: 0.4 + Math.random() * 0.6,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
    }));
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[49]"
      style={{ opacity: particleOpacity }}
    >
      {/* Primary radial light rays */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          opacity: rayOpacity,
          scale: rayScale,
          rotate: rayRotate,
          transformOrigin: "38% 32%",
        }}
      >
        {Array.from({ length: 12 }, (_, i) => i * 30).map((angle) => (
          <div
            key={angle}
            className="absolute left-[38%] top-[32%] origin-left"
            style={{
              transform: `rotate(${angle}deg)`,
              width: "70vw",
              height: "2px",
              background: `linear-gradient(90deg, hsl(30 80% 55% / 0.7), hsl(0 53% 43% / 0.3) 35%, transparent 75%)`,
            }}
          />
        ))}
        {/* Secondary thinner rays offset */}
        {Array.from({ length: 12 }, (_, i) => i * 30 + 15).map((angle) => (
          <div
            key={`s-${angle}`}
            className="absolute left-[38%] top-[32%] origin-left"
            style={{
              transform: `rotate(${angle}deg)`,
              width: "50vw",
              height: "1px",
              background: `linear-gradient(90deg, hsl(45 90% 65% / 0.5), hsl(0 0% 85% / 0.15) 50%, transparent 80%)`,
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
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: "38%",
              top: "32%",
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            }}
            animate={{
              x: [0, x * 0.3, x],
              y: [0, y * 0.3, y],
              opacity: [0, p.opacity, 0],
              scale: [0, 1.8, 0],
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

      {/* Central glow pulse — warm amber */}
      <motion.div
        className="absolute rounded-full"
        style={{
          left: "38%",
          top: "32%",
          width: 160,
          height: 160,
          x: -80,
          y: -80,
          background: `radial-gradient(circle, hsl(30 80% 55% / 0.5) 0%, hsl(0 53% 43% / 0.2) 35%, transparent 70%)`,
          opacity: rayOpacity,
          scale: rayScale,
        }}
      />
    </motion.div>
  );
};

export default EyeTransitionParticles;
