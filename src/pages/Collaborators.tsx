import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { AnimatedTestimonialsDemo } from "@/components/ui/testimonial";

const Collaborators = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        <section className="relative pt-32 pb-16 overflow-hidden">
          {/* Animated grid background */}
          <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
            <div
              className="w-[200%] h-[200%]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
                backgroundSize: "3rem 3rem",
                animation: "animate-grid 40s linear infinite alternate",
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-foreground mb-4">
                Our Collaborators
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by industry leaders. Hear what our partners have to say
                about working with A-ZENTRIX.
              </p>
            </motion.div>

            <AnimatedTestimonialsDemo />
          </div>
        </section>

        <Footer />
      </div>

      <style>{`
        @keyframes animate-grid {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </PageTransition>
  );
};

export default Collaborators;
