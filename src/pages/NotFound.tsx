import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center space-y-6">
          <motion.h1
            className="text-8xl md:text-[12rem] font-display font-medium text-foreground leading-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            404
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground font-light tracking-widest uppercase"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Page not found
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground rounded-full text-background text-xs tracking-[0.2em] uppercase font-medium hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Return Home
            </a>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
