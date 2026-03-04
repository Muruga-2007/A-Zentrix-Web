import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = forwardRef<HTMLElement>((_, ref) => (
  <motion.footer
    ref={ref}
    className="w-full py-10 px-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-muted-foreground font-light tracking-[0.2em] uppercase z-10 max-w-7xl mx-auto border-t border-border"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.5 }}
  >
    <div className="mb-4 md:mb-0">© 2023 A-Zentrix Studio. All rights reserved.</div>
    <div className="flex gap-10">
      <Link to="#" className="hover:text-primary hover:tracking-[0.3em] transition-all duration-300">Privacy Policy</Link>
      <Link to="#" className="hover:text-primary hover:tracking-[0.3em] transition-all duration-300">Terms of Service</Link>
    </div>
  </motion.footer>
));

Footer.displayName = "Footer";

export default Footer;