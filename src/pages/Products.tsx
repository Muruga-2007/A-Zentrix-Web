import { motion } from "framer-motion";
import { ArrowRight, Layers, Zap, Shield, BarChart3, Globe, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const products = [
  {
    id: "zentrix-platform",
    name: "ZENTRIX Platform",
    tagline: "Enterprise-grade digital transformation engine",
    description:
      "A unified SaaS platform that orchestrates your entire digital ecosystem — from workflow automation to real-time analytics. Built for teams that refuse to compromise on performance.",
    features: [
      {
        icon: Layers,
        title: "Modular Architecture",
        desc: "Plug-and-play modules that scale with your business needs.",
      },
      {
        icon: Zap,
        title: "Real-time Processing",
        desc: "Sub-millisecond data processing for mission-critical operations.",
      },
      {
        icon: Shield,
        title: "Enterprise Security",
        desc: "SOC 2 compliant with end-to-end encryption and role-based access.",
      },
    ],
    gradient: "from-primary/10 via-transparent to-secondary/10",
    accent: "primary",
  },
  {
    id: "zentrix-analytics",
    name: "ZENTRIX Analytics",
    tagline: "Intelligence that drives decisions",
    description:
      "Transform raw data into actionable insights with our AI-powered analytics suite. Visualize trends, predict outcomes, and automate reporting — all from a single dashboard.",
    features: [
      {
        icon: BarChart3,
        title: "Predictive Insights",
        desc: "AI-driven forecasting that learns from your business patterns.",
      },
      {
        icon: Globe,
        title: "Multi-source Integration",
        desc: "Connect 200+ data sources for a unified business view.",
      },
      {
        icon: Cpu,
        title: "Smart Automation",
        desc: "Automated reporting and alerts tailored to your KPIs.",
      },
    ],
    gradient: "from-secondary/10 via-transparent to-primary/10",
    accent: "secondary",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

const Products = () => {
  return (
    <PageTransition>
      <div className="bg-background text-foreground font-body min-h-screen flex flex-col overflow-x-hidden relative">
        <div className="fixed inset-0 bg-grain pointer-events-none z-0" />
        <Navbar />

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.p
              className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Products
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Tools built for the{" "}
              <span className="text-primary">future</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Precision-engineered software that transforms how enterprises
              operate, analyze, and grow.
            </motion.p>
          </div>
        </section>

        {/* Product Sections */}
        {products.map((product, productIndex) => (
          <section
            key={product.id}
            className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-20"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${product.gradient} pointer-events-none`}
            />
            <div className="max-w-6xl mx-auto relative">
              {/* Product Header */}
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
                  productIndex % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                <motion.div
                  className="md:direction-ltr"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.span
                    className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 border border-border px-4 py-1.5 rounded-full"
                    variants={fadeUp}
                    custom={0}
                  >
                    0{productIndex + 1}
                  </motion.span>
                  <motion.h2
                    className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-4"
                    variants={fadeUp}
                    custom={1}
                  >
                    {product.name}
                  </motion.h2>
                  <motion.p
                    className="text-lg text-primary font-medium mb-6"
                    variants={fadeUp}
                    custom={2}
                  >
                    {product.tagline}
                  </motion.p>
                  <motion.p
                    className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8"
                    variants={fadeUp}
                    custom={3}
                  >
                    {product.description}
                  </motion.p>
                  <motion.button
                    className="group inline-flex items-center gap-2 text-sm tracking-widest uppercase text-foreground hover:text-primary transition-colors duration-300"
                    variants={fadeUp}
                    custom={4}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>

                {/* Product Visual / Mockup */}
                <motion.div
                  className="md:direction-ltr"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card shadow-lg">
                    {/* Abstract UI mockup */}
                    <div className="absolute inset-0 p-6 flex flex-col gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-destructive/60" />
                        <div className="w-3 h-3 rounded-full bg-primary/40" />
                        <div className="w-3 h-3 rounded-full bg-secondary/40" />
                        <div className="flex-1" />
                        <div className="h-2 w-24 rounded-full bg-muted" />
                      </div>
                      <div className="flex-1 grid grid-cols-3 gap-3 mt-2">
                        <div className="col-span-1 space-y-3">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="h-3 rounded-full bg-muted"
                              style={{ width: `${60 + Math.random() * 40}%` }}
                            />
                          ))}
                        </div>
                        <div className="col-span-2 rounded-xl bg-muted/50 border border-border p-4 flex flex-col justify-end gap-2">
                          <div className="flex items-end gap-2 h-full">
                            {[...Array(8)].map((_, i) => (
                              <motion.div
                                key={i}
                                className={`flex-1 rounded-t-md ${
                                  productIndex === 0
                                    ? "bg-primary/60"
                                    : "bg-secondary/60"
                                }`}
                                initial={{ height: 0 }}
                                whileInView={{
                                  height: `${30 + Math.random() * 60}%`,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.6,
                                  delay: 0.4 + i * 0.08,
                                  ease: "easeOut",
                                }}
                              />
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <div className="h-2 w-12 rounded-full bg-muted" />
                            <div className="h-2 w-8 rounded-full bg-muted" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Features Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                {product.features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    className="group p-8 rounded-2xl border border-border bg-card/50 hover:bg-card hover:shadow-lg transition-all duration-500"
                    variants={fadeUp}
                    custom={i}
                  >
                    <feature.icon className="w-6 h-6 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-display font-medium mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="relative z-10 py-24 px-6 md:px-12 lg:px-20">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-6">
              Ready to elevate your operations?
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Get in touch to schedule a demo or explore how A-ZENTRIX products
              can transform your business.
            </p>
            <a
              href="mailto:contact@a-zentrix.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm tracking-widest uppercase hover:opacity-90 transition-opacity duration-300"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Products;
