import { ArrowRight, Fingerprint, Eye, CircleDot } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import approachEye from "@/assets/approach-eye.png";
import OptimizedImage from "@/components/OptimizedImage";

const services = [
  {
    icon: CircleDot,
    title: "Digital Strategy",
    description:
      "Navigating complex digital landscapes with surgical precision and creative foresight to architect conversion-focused user journeys.",
  },
  {
    icon: Fingerprint,
    title: "Brand Identity",
    description:
      "Forging the soul of your enterprise through a cohesive visual language that communicates authority and elegance simultaneously.",
  },
  {
    icon: Eye,
    title: "Visual Intelligence",
    description:
      "Transforming raw data into compelling high-art narratives, enabling stakeholders to visualize growth and performance with clarity.",
  },
];

const Approach = () => {
  return (
    <PageTransition>
      <div className="bg-white text-gray-800 font-body min-h-screen flex flex-col overflow-x-hidden relative">
        <div className="fixed inset-0 bg-grain pointer-events-none z-0" />

        <Navbar />

        <main className="flex-grow flex items-center relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[85vh] items-center px-0">
            {/* Eye image - left side */}
            <motion.div
              className="relative h-full w-full hidden md:block"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <div
                className="w-full h-full"
                style={{
                  maskImage:
                    "linear-gradient(to right, black 60%, transparent 95%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, black 60%, transparent 95%)",
                }}
              >
                <OptimizedImage
                  alt="Detailed realistic eye illustration"
                  className="w-full h-full object-cover object-center scale-110"
                  src={approachEye}
                  priority
                  blur={false}
                />
              </div>
            </motion.div>

            {/* Content - right side */}
            <motion.div
              className="px-8 md:px-16 lg:px-24 py-24 flex flex-col justify-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <div className="space-y-8">
                <header>
                  <motion.span
                    className="inline-block mb-4 text-xs tracking-[0.4em] uppercase font-semibold text-primary/80"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Our Expertise
                  </motion.span>
                  <motion.h1
                    className="text-5xl md:text-7xl font-display font-medium tracking-tight text-gray-900 leading-tight uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    Our Visionary
                    <br />
                    Approach
                  </motion.h1>
                </header>

                <motion.p
                  className="text-gray-500 font-light text-lg leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                >
                  We perceive what others overlook. Our methodology combines
                  artistic intuition with data-driven strategy to craft
                  corporate identities that resonate on a deeper, more impactful
                  frequency.
                </motion.p>

                <div className="grid grid-cols-1 gap-10 pt-10">
                  {services.map((service, i) => (
                    <motion.div
                      key={service.title}
                      className="flex gap-6 group"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.7 + i * 0.15,
                        ease: "easeOut",
                      }}
                      whileHover={{ x: 6 }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border border-gray-100 group-hover:border-primary/20 transition-colors">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-display font-bold text-gray-900 uppercase tracking-widest">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-light leading-relaxed max-w-sm">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Approach;
