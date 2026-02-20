import { Link, useLocation } from "react-router-dom";
import { Sun } from "lucide-react";

const navLinks = [
  { label: "Gallery", href: "#" },
  { label: "Artists", href: "#" },
  { label: "Exhibitions", href: "#" },
  { label: "About", href: "/approach" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 w-full max-w-7xl mx-auto">
      <Link
        to="/"
        className="text-lg tracking-[0.3em] font-display font-medium text-foreground opacity-90 hover:opacity-100 transition-opacity"
      >
        A-ZENTRIX
      </Link>
      <div className="hidden md:flex items-center gap-8 glass-panel px-10 py-3 rounded-full shadow-glass">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="text-xs tracking-widest uppercase font-light text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <button
        onClick={() => document.documentElement.classList.toggle("dark")}
        className="w-10 h-10 flex items-center justify-center rounded-full glass-panel hover:bg-accent transition-all shadow-sm"
      >
        <Sun className="w-4 h-4" />
      </button>
    </nav>
  );
};

export default Navbar;
