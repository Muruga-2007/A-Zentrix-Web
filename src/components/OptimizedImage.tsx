import { useState, useRef, useEffect, ImgHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { isImageCached } from "@/hooks/use-image-cache";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "onLoad"> {
    /**
     * The image source — a Vite-imported asset string or a public URL.
     */
    src: string;
    /**
     * Alt text (required for accessibility).
     */
    alt: string;
    /**
     * Whether this image is above the fold / critical.
     * When `true`, uses `loading="eager"` and `fetchpriority="high"`.
     * Default: `false` (lazy-loads).
     */
    priority?: boolean;
    /**
     * Wrapper className (applied to the outer container).
     */
    wrapperClassName?: string;
    /**
     * Whether to show the blur placeholder effect.
     * Default: `true`.
     */
    blur?: boolean;
    /**
     * Fade-in duration in seconds.
     * Default: `0.5`.
     */
    fadeDuration?: number;
}

/**
 * A drop-in `<img>` replacement that:
 * 1. Lazy-loads by default (`loading="lazy"`, `decoding="async"`)
 * 2. Shows a CSS blur placeholder until fully decoded
 * 3. Fades in smoothly once loaded
 * 4. Skips the blur/fade if the image is already in the memory cache
 */
const OptimizedImage = ({
    src,
    alt,
    priority = false,
    wrapperClassName = "",
    blur = true,
    fadeDuration = 0.5,
    className = "",
    style,
    ...rest
}: OptimizedImageProps) => {
    // If already in memory cache, skip the animation entirely
    const alreadyCached = isImageCached(src);
    const [loaded, setLoaded] = useState(alreadyCached);
    const imgRef = useRef<HTMLImageElement>(null);

    // Handle case where browser has the image in disk cache (complete before onload fires)
    useEffect(() => {
        if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
            setLoaded(true);
        }
    }, []);

    return (
        <motion.img
            ref={imgRef}
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            className={className}
            style={{
                ...style,
                filter: blur && !loaded ? "blur(20px)" : "none",
                transition: `filter ${fadeDuration}s ease-out`,
            }}
            initial={alreadyCached ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            transition={{ duration: alreadyCached ? 0 : fadeDuration, ease: "easeOut" }}
            onLoad={() => setLoaded(true)}
            {...(rest as any)}
        />
    );
};

export default OptimizedImage;
