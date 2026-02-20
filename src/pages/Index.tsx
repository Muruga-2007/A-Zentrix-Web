import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import eyeBg from "@/assets/eye-bg.jpg";

const Index = () => {
  return (
    <div className="bg-background text-foreground font-body min-h-screen flex flex-col overflow-x-hidden relative transition-colors duration-500">
      {/* Grain overlay */}
      <div className="fixed inset-0 bg-grain pointer-events-none z-0" />

      <Navbar />

      {/* Background image - right side */}
      <div className="fixed top-0 right-0 h-full w-[65%] pointer-events-none z-0 hidden md:block opacity-60 mix-blend-multiply">
        <div
          className="w-full h-full relative"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 40%)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 40%)",
          }}
        >
          <img
            alt="Artistic eye sketch background"
            className="w-full h-full object-cover object-center translate-x-[10%]"
            src={eyeBg}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent w-full h-full" />
      </div>

      <main className="flex-grow flex flex-col justify-center relative z-10 pt-24 pb-12 px-4 md:px-12 w-full max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start gap-8 animate-fade-in relative z-20 max-w-2xl">
            <div className="space-y-6">
              <span className="inline-block py-1 px-3 border border-border rounded-full text-xs tracking-widest uppercase font-light text-muted-foreground">
                Visual Intelligence
              </span>
              <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tight text-foreground leading-[0.9]">
                A-ZENTRIX
              </h1>
              <p className="text-muted-foreground font-light text-lg md:text-xl tracking-wide leading-relaxed max-w-lg">
                Bridging the gap between creative vision and corporate reality. We provide high-end visual solutions for the modern enterprise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="#"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground rounded-lg text-background hover:opacity-90 transition-all duration-300 shadow-lg group min-w-[180px]"
              >
                <span className="font-body font-medium text-sm tracking-wide">Explore Solutions</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/approach"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-border rounded-lg text-foreground hover:bg-accent transition-all duration-300 min-w-[180px]"
              >
                <span className="font-body font-medium text-sm tracking-wide">Our Portfolio</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-border w-full max-w-md mt-4">
              <div>
                <div className="text-3xl font-display font-semibold text-foreground mb-1">200+</div>
                <div className="text-xs tracking-widest uppercase text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-display font-semibold text-foreground mb-1">98%</div>
                <div className="text-xs tracking-widest uppercase text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </main>

      {/* Bottom blur orb */}
      <div className="fixed bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-muted/50 to-transparent opacity-30 blur-3xl -z-10 pointer-events-none" />

      <Footer />
    </div>
  );
};

export default Index;
