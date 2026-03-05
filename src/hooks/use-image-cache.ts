import { useEffect, useRef } from "react";

/**
 * Global in-memory image cache.
 * Persists across component mounts/unmounts for the lifetime of the SPA.
 */
const imageCache = new Map<string, HTMLImageElement>();

/**
 * Returns `true` if the image is already in cache (decoded and ready).
 */
export function isImageCached(src: string): boolean {
    return imageCache.has(src);
}

/**
 * Pre-fetch a single image into browser memory.
 * Resolves when the image is fully decoded and cached.
 * If the image is already cached this is a no-op.
 */
export function preloadImage(src: string): Promise<HTMLImageElement> {
    if (imageCache.has(src)) {
        return Promise.resolve(imageCache.get(src)!);
    }
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            imageCache.set(src, img);
            resolve(img);
        };
        img.onerror = reject;
    });
}

/**
 * Hook: pre-fetch a list of image sources into the in-memory cache.
 * Images that are already cached are skipped.
 *
 * @param sources Array of image URLs (Vite-imported strings or public paths)
 * @param options.priority  When `true` the images are loaded eagerly
 *                          (default `false` — queued via `requestIdleCallback`)
 *
 * @example
 * ```ts
 * import hero from "@/assets/eye-bg.jpg";
 * import team from "@/assets/founder.jpeg";
 *
 * useImageCache([hero, team]);
 * ```
 */
export function useImageCache(
    sources: string[],
    options: { priority?: boolean } = {}
) {
    const { priority = false } = options;
    const loadedRef = useRef(false);

    useEffect(() => {
        if (loadedRef.current) return;
        loadedRef.current = true;

        const load = () => {
            for (const src of sources) {
                preloadImage(src).catch(() => {
                    // Silently ignore failed preloads
                });
            }
        };

        if (priority) {
            load();
        } else if ("requestIdleCallback" in window) {
            const id = (window as any).requestIdleCallback(load);
            return () => (window as any).cancelIdleCallback(id);
        } else {
            const id = setTimeout(load, 200);
            return () => clearTimeout(id);
        }
    }, [sources, priority]);
}
