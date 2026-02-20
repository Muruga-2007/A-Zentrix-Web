import { useState, useEffect, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

interface ScrambleTextProps {
  text: string;
  className?: string;
  interval?: number;
  scrambleDuration?: number;
}

const ScrambleText = ({ text, className, interval = 20000, scrambleDuration = 1500 }: ScrambleTextProps) => {
  const [display, setDisplay] = useState(text);

  const scramble = useCallback(() => {
    const steps = 10;
    const stepTime = scrambleDuration / steps;
    let step = 0;

    const tick = setInterval(() => {
      step++;
      const progress = step / steps;
      const result = text
        .split("")
        .map((char, i) => {
          if (char === "-" || char === " ") return char;
          if (progress > (i + 1) / text.length) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");
      setDisplay(result);

      if (step >= steps) {
        clearInterval(tick);
        setDisplay(text);
      }
    }, stepTime);
  }, [text, scrambleDuration]);

  useEffect(() => {
    const id = setInterval(scramble, interval);
    return () => clearInterval(id);
  }, [scramble, interval]);

  return <span className={className}>{display}</span>;
};

export default ScrambleText;
