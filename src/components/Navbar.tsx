import { useLocation } from "react-router-dom";
import { Sun } from "lucide-react";
import { motion } from "framer-motion";
import ScrambleText from "@/components/ScrambleText";

const navLinks = [
  { label: "Gallery", href: "#" },
  { label: "Roadmap", href: "#" },
  { label: "Solution", href: "#" },
  { label: "Collaborators", href: "#" },
  { label: "About", href: "#approach" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 w-full max-w-7xl mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
    >
      <a
        href="/"
        className="text-lg tracking-[0.3em] font-display font-medium text-foreground opacity-90 hover:opacity-100 transition-opacity"
      >
        A-ZENTRIX
      </a>
      <motion.div
        className="hidden md:flex items-center gap-8 glass-panel px-10 py-3 rounded-full shadow-glass"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {navLinks.map((link, i) => (
          <motion.a
            key={`${link.label}-${i}`}
            href={link.href}
            className="text-xs tracking-widest uppercase font-light text-muted-foreground hover:text-primary transition-colors duration-300 story-link"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.06 }}
          >
            <span>{link.label}</span>
          </motion.a>
        ))}
      </motion.div>
      <motion.button
        onClick={() => document.documentElement.classList.toggle("dark")}
        className="w-10 h-10 flex items-center justify-center rounded-full glass-panel hover:bg-accent hover:scale-110 transition-all duration-300 shadow-sm"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        whileHover={{ rotate: 180 }}
        whileTap={{ scale: 0.9 }}
      >
        <Sun className="w-4 h-4" />
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
