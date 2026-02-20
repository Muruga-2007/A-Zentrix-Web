import { useState, useEffect, useCallback, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#&";

interface ScrambleTextProps {
  text: string;
  className?: string;
  interval?: number;
}

const ScrambleText = ({ text, className, interval = 8000 }: ScrambleTextProps) => {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef<number>(0);

  const scramble = useCallback(() => {
    const duration = 3000;
    const start = performance.now();
    // Random resolve order for each character
    const order = text.split("").map((_, i) => ({ i, r: Math.random() }));
    order.sort((a, b) => a.r - b.r);
    const resolveAt = order.map((o, idx) => ({ charIndex: o.i, threshold: (idx + 1) / text.length }));

    const tick = () => {
      const elapsed = performance.now() - start;
      const progress = Math.min(elapsed / duration, 1);

      const result = text
        .split("")
        .map((char, i) => {
          if (char === "-" || char === " ") return char;
          const entry = resolveAt.find(e => e.charIndex === i)!;
          if (progress > entry.threshold) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(result);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
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

  return <span className={className}>{display}</span>;
};

export default ScrambleText;
