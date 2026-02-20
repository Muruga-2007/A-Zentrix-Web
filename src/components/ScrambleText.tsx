import { useState, useEffect, useCallback, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&!?※△▽";

interface ScrambleTextProps {
  text: string;
  className?: string;
  interval?: number;
}

const ScrambleText = ({ text, className, interval = 20000 }: ScrambleTextProps) => {
  const [display, setDisplay] = useState(text);
  const [glitching, setGlitching] = useState(false);
  const frameRef = useRef<number>(0);

  const scramble = useCallback(() => {
    setGlitching(true);
    const duration = 1800;
    const start = performance.now();

    const tick = () => {
      const elapsed = performance.now() - start;
      const progress = Math.min(elapsed / duration, 1);

      const result = text
        .split("")
        .map((char, i) => {
          if (char === "-" || char === " ") return char;
          const threshold = (i + 1) / text.length;
          if (progress > threshold) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(result);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
        setGlitching(false);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
  }, [text]);

  useEffect(() => {
    const id = setInterval(scramble, interval);
    return () => {
      clearInterval(id);
      cancelAnimationFrame(frameRef.current);
    };
  }, [scramble, interval]);

  return (
    <span
      className={`relative inline-block ${className ?? ""}`}
      style={{
        textShadow: glitching
          ? "2px 0 hsl(var(--primary)), -2px 0 hsl(var(--destructive, 0 84% 60%))"
          : "none",
        transition: "text-shadow 0.1s",
      }}
    >
      {glitching && (
        <>
          <span
            className="absolute inset-0 opacity-60"
            style={{
              clipPath: "inset(10% 0 60% 0)",
              transform: "translateX(3px)",
              color: "hsl(var(--primary))",
            }}
            aria-hidden
          >
            {display}
          </span>
          <span
            className="absolute inset-0 opacity-60"
            style={{
              clipPath: "inset(50% 0 10% 0)",
              transform: "translateX(-3px)",
              color: "hsl(var(--destructive, 0 84% 60%))",
            }}
            aria-hidden
          >
            {display}
          </span>
        </>
      )}
      {display}
    </span>
  );
};

export default ScrambleText;
