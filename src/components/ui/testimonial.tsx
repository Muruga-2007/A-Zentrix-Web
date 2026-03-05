import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import founderImg from "@/assets/founder.jpeg";
import cofounderImg from "@/assets/cofounder.png";
import developerImg from "@/assets/developer.jpg";
import prawinImg from "@/assets/prawin.png";
import niranjaniImg from "@/assets/niranjani.png";

const testimonials = [
  {
    quote:
      "At A-ZENTRIX, we believe in pushing boundaries and turning bold ideas into reality. Innovation isn't just what we do — it's who we are.",
    name: "Mohamed Arfeen",
    designation: "Founder & CEO at A-ZENTRIX",
    src: founderImg,
  },
  {
    quote:
      "Excellence is not a destination but a continuous journey. At A-ZENTRIX, we strive to deliver transformative solutions that make a lasting impact.",
    name: "Ashwin Ragav",
    designation: "Co-Founder & Director at A-ZENTRIX",
    src: cofounderImg,
  },
  {
    quote:
      "Building robust and scalable solutions is at the heart of what I do. Every line of code is an opportunity to create something meaningful.",
    name: "Muruganandam",
    designation: "Developer at A-ZENTRIX",
    src: developerImg,
  },
  {
    quote:
      "Great design meets great engineering. I'm passionate about crafting experiences that are both beautiful and functional.",
    name: "Prawin",
    designation: "Developer at A-ZENTRIX",
    src: prawinImg,
  },
  {
    quote:
      "Research drives innovation. I'm dedicated to exploring new frontiers and turning cutting-edge ideas into practical, impactful solutions.",
    name: "Niranjani Priya",
    designation: "Research & Development Head at A-ZENTRIX",
    src: niranjaniImg,
  },
  {
    quote:
      "The user interface is incredibly intuitive, which made the onboarding process for my team a breeze. We were up and running in hours, not days.",
    name: "Marcus Johnson",
    designation: "Head of Operations at Synergy Corp",
    src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=500&auto=format&fit=crop",
  },
  {
    quote:
      "Customer support is top-notch. They are responsive, knowledgeable, and genuinely invested in our success. It feels like a true partnership.",
    name: "Isabella Rossi",
    designation: "Client Success Manager at Horizon",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop",
  },
  {
    quote:
      "I'm impressed by the constant stream of updates and new features. The development team is clearly passionate and listens to user feedback.",
    name: "Kenji Tanaka",
    designation: "Software Engineer at CodeCrafters",
    src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=500&auto=format&fit=crop",
  },
  {
    quote:
      "The ROI was almost immediate. It streamlined our workflows so effectively that we cut project delivery times by nearly 30%.",
    name: "Fatima Al-Jamil",
    designation: "CFO at Apex Financial",
    src: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=500&auto=format&fit=crop",
  },
  {
    quote:
      "Their innovative approach to problem-solving sets them apart. Every collaboration has exceeded our expectations and delivered measurable results.",
    name: "Liam Chen",
    designation: "Product Director at NovaTech",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
  },
  {
    quote:
      "Working with A-ZENTRIX transformed our digital strategy. The team's expertise and dedication made all the difference in achieving our goals.",
    name: "Amara Osei",
    designation: "Marketing Lead at BrightPath",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop",
  },
];

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = React.useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  const isActive = (index: number) => index === active;
  const randomRotate = () => `${Math.floor(Math.random() * 16) - 8}deg`;

  return (
    <div className="mx-auto max-w-sm px-4 py-16 font-sans antialiased md:max-w-5xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
        {/* Image Section */}
        <div>
          <div className="relative h-72 w-full sm:h-80 md:h-96">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotate(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? "0deg" : randomRotate(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -60, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotate(),
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover"
                    style={{ objectPosition: "center 20%" }}
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/500x500/e2e8f0/64748b?text=${testimonial.name.charAt(0)}`;
                      e.currentTarget.onerror = null;
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Text and Controls Section */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-foreground">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              "{testimonials[active].quote}"
            </motion.p>
          </motion.div>
          <div className="mt-8 flex gap-4">
            <button
              onClick={handlePrev}
              className="group/btn flex h-8 w-8 items-center justify-center rounded-full bg-muted transition-colors hover:bg-accent"
            >
              <ArrowLeft className="h-4 w-4 text-foreground transition-transform group-hover/btn:-translate-x-0.5" />
            </button>
            <button
              onClick={handleNext}
              className="group/btn flex h-8 w-8 items-center justify-center rounded-full bg-muted transition-colors hover:bg-accent"
            >
              <ArrowRight className="h-4 w-4 text-foreground transition-transform group-hover/btn:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export function AnimatedTestimonialsDemo() {
  return <AnimatedTestimonials testimonials={testimonials} autoplay />;
}

export { AnimatedTestimonials, testimonials };
export type { Testimonial };
