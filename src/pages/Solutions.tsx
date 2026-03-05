import { useRef } from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, BarChart3, Sparkles, Zap, Globe, ArrowRight } from "lucide-react";
import RippleCard from "@/components/RippleCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import eyeBg from "@/assets/eye-bg.jpg";
import OptimizedImage from "@/components/OptimizedImage";

const aiServices = [
    {
        icon: Brain,
        title: "AI & Machine Learning",
        description: "Predictive models and intelligent automation for business transformation.",
        color: "from-blue-500/20 to-cyan-500/20",
    },
    {
        icon: BarChart3,
        title: "AI-Powered Analytics",
        description: "Harnessing the power of AI to transform raw data into actionable insights.",
        color: "from-purple-500/20 to-pink-500/20",
    },
    {
        icon: Globe,
        title: "Cloud Solutions",
        description: "Scalable infrastructure and cloud migration optimized for performance.",
        color: "from-orange-500/20 to-red-500/20",
    },
    {
        icon: Zap,
        title: "Cybersecurity Services",
        description: "Protecting your business from potential risks with AI-driven threat detection.",
        color: "from-amber-500/20 to-yellow-500/20",
    },
    {
        icon: Cpu,
        title: "Custom Software",
        description: "High-performance web and enterprise applications tailored to your needs.",
        color: "from-green-500/20 to-emerald-500/20",
    },
    {
        icon: Sparkles,
        title: "AI-Powered Automation",
        description: "Streamline workflows and eliminate repetitive tasks with our frameworks.",
        color: "from-indigo-500/20 to-blue-500/20",
    },
];

const Solutions = () => {
    return (
        <div className="relative bg-background text-foreground font-body min-h-screen flex flex-col pt-24 overflow-x-hidden">
            {/* Premium Background Eye */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-10 grayscale scale-110">
                <OptimizedImage
                    alt=""
                    className="w-full h-full object-cover object-center"
                    src={eyeBg}
                />
            </div>

            {/* Grain overlay */}
            <div className="fixed inset-0 bg-grain opacity-[0.4] pointer-events-none z-[1]" />

            {/* Decorative gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px]" />
            </div>

            <Navbar />

            <main className="flex-grow container mx-auto px-6 md:px-16 lg:px-24 py-16 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                >
                    <span className="inline-block py-1.5 px-5 border border-foreground/20 rounded-full text-[10px] tracking-[0.25em] uppercase font-medium text-muted-foreground mb-6">
                        AI-Powered Solutions
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight text-foreground leading-[1.05] mb-8 uppercase">
                        Intelligence,<br />Engineered.
                    </h1>
                    <p className="text-muted-foreground font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        A-Zentrix delivers cutting-edge AI solutions that transform how enterprises operate, compete, and innovate. We bridge the gap between complex data and actionable intelligence.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                        },
                    }}
                >
                    {aiServices.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
                            }}
                        >
                            <RippleCard className="group h-full p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <service.icon className="w-6 h-6 text-foreground opacity-80 group-hover:opacity-100 group-hover:text-primary transition-all" />
                                </div>
                                <h3 className="font-display text-lg tracking-widest uppercase font-semibold text-foreground mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed font-light mb-6">
                                    {service.description}
                                </p>
                                <div className="mt-auto pt-4 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold text-primary">
                                        Learn More <ArrowRight className="w-3 h-3" />
                                    </div>
                                </div>
                            </RippleCard>
                        </motion.div>
                    ))}
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default Solutions;
