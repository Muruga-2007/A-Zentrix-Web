import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Initialises Lenis smooth-scroll on the global `html` scroller.
 * – lerp-based easing gives a buttery, weighted feel
 * – wheelMultiplier keeps each scroll tick manageable
 * – duration controls how long the momentum lasts
 *
 * Lenis is automatically paused when any `[data-lenis-prevent]` element
 * is receiving pointer events (e.g. a fixed overlay with its own scroll).
 *
 * Call this once in a top-level component (e.g. App).
 */
export function useSmoothScroll() {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,            // scroll momentum length (seconds)
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
            smoothWheel: true,
            wheelMultiplier: 0.8,     // dial down wheel speed to avoid "too light"
            touchMultiplier: 1.5,     // keep touch natural
        });

        lenisRef.current = lenis;

        // Drive Lenis with rAF
        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return lenisRef;
}
