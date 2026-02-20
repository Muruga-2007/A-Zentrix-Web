import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="w-full py-10 px-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-muted-foreground font-light tracking-[0.2em] uppercase z-10 max-w-7xl mx-auto border-t border-border">
    <div className="mb-4 md:mb-0">© 2023 A-Zentrix Studio. All rights reserved.</div>
    <div className="flex gap-10">
      <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
      <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
    </div>
  </footer>
);

export default Footer;
