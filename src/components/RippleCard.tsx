import { useRef, useState, useCallback } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

let rippleId = 0;

interface RippleCardProps {
  children: React.ReactNode;
  className?: string;
}

const RippleCard = ({ children, className = "" }: RippleCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = ++rippleId;
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 900);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      className={`relative overflow-hidden ${className}`}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-primary/10 animate-[ripple_0.9s_ease-out_forwards]"
          style={{
            left: r.x,
            top: r.y,
            width: 0,
            height: 0,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
      {children}
    </div>
  );
};

export default RippleCard;
