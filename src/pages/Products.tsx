import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Eye,
  MessageSquare,
  Volume2,
  Users,
  Shield,
  TrendingUp,
  Globe,
  Zap,
  Heart,
  BarChart3,
  Building2,
  GraduationCap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] as const },
  }),
};

const stats = [
  { value: "0.3", label: "Psychiatrists per 100K in India", sub: "vs WHO recommended 3" },
  { value: "170K", label: "Suicide deaths in India", sub: "in 2024 alone" },
  { value: "90%", label: "Never receive support", sub: "of those who need it" },
  { value: "₹2K–8K", label: "Per therapy session", sub: "unaffordable for most" },
];

const pipeline = [
  {
    step: "01",
    icon: Eye,
    title: "Emotion Detection",
    description:
      "OpenCV activates the camera. DeepFace analyzes 68 facial landmarks in real time, identifying dominant emotions — anxiety, sadness, anger, fear — with over 92% accuracy.",
  },
  {
    step: "02",
    icon: MessageSquare,
    title: "Language Understanding",
    description:
      "A proprietary NLP engine processes the user's words — analyzing tone, sentiment, context, and emotional intensity simultaneously.",
  },
  {
    step: "03",
    icon: Brain,
    title: "AI Response Generation",
    description:
      "Google Gemini AI synthesizes the emotional state and conversational context into a single, personalized, therapeutically-informed response in real time.",
  },
  {
    step: "04",
    icon: Volume2,
    title: "Voice Output",
    description:
      "pyttsx3 converts the response to natural speech — because sometimes reading feels like too much effort.",
  },
];

const pricing = [
  {
    name: "Free Tier",
    price: "₹0",
    period: "forever",
    description: "5 sessions/month — building habit and driving word-of-mouth.",
    highlight: false,
  },
  {
    name: "Individual Premium",
    price: "₹434",
    period: "/month",
    description:
      "Unlimited sessions, emotion history, and full feature access — less than one therapy session.",
    highlight: true,
  },
  {
    name: "SME Plan",
    price: "₹12,000",
    period: "/month",
    description:
      "10–200 employees with HR dashboards, anonymous analytics, and team stress monitoring.",
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "₹85,000",
    period: "/month",
    description:
      "HRMS integration, custom AI personas, API access, and dedicated account management.",
    highlight: false,
  },
];

const markets = [
  { icon: TrendingUp, value: "₹43.41T", label: "Global Mental Health Market" },
  { icon: Globe, value: "₹6.07T", label: "Digital Mental Health (25% CAGR)" },
  { icon: BarChart3, value: "₹87–174B", label: "Our Serviceable Market (5–10%)" },
  { icon: Building2, value: "₹8.68T", label: "Corporate Wellness by 2028" },
];

const audiences = [
  { icon: GraduationCap, label: "Students under academic pressure" },
  { icon: Building2, label: "Professionals facing burnout" },
  { icon: Globe, label: "Rural communities with no clinic access" },
  { icon: Heart, label: "Anyone who needs someone at 3am" },
];

const Products = () => {
  return (
    <PageTransition>
      <div className="bg-background text-foreground font-body min-h-screen flex flex-col relative">
        <div className="fixed inset-0 bg-grain pointer-events-none z-0" />
        <Navbar />

        {/* ── Hero ── */}
        <section className="relative z-10 pt-36 pb-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.p
              className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Product
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Mental Wellness{" "}
              <span className="text-primary">System</span>
            </motion.h1>
            <motion.p
              className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering Mental Wellness Through Emotional Intelligence Backed By Deep Tech
            </motion.p>
          </div>
        </section>

        {/* ── What We Are ── */}
        <section className="relative z-10 py-24 px-6 md:px-12 lg:px-20 border-t border-border">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground border border-border px-4 py-1.5 rounded-full">
                What We Are
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
                Mental Wellness System is an AI-powered mental wellness companion that provides instant, affordable, and stigma-free emotional support to anyone who needs it — anytime, anywhere.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                We combine real-time facial emotion detection, natural language processing, and generative AI to understand how a person truly feels and respond with genuine empathy — not scripts, not templates, not generic advice.
              </p>
              <p className="text-lg font-display text-primary font-medium">
                We are not a chatbot. We are not a hotline. We are the voice that answers when no one else will.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── The Problem ── */}
        <section className="relative z-10 py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-destructive/5 to-transparent">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground border border-border px-4 py-1.5 rounded-full">
                The Problem
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mt-6 mb-4">
                A system that has <span className="text-primary">fundamentally failed</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                Mental health is in crisis — and the system built to address it has failed the people who need it most. This is not a gap in the market. It is a failure of humanity at scale.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="p-6 rounded-2xl border border-border bg-card/50 text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                >
                  <p className="text-2xl md:text-3xl font-display font-medium text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-foreground font-medium mb-1">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="relative z-10 py-24 px-6 md:px-12 lg:px-20 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground border border-border px-4 py-1.5 rounded-full">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mt-6 mb-4">
                Multimodal AI pipeline
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                The entire pipeline runs in under 2 seconds. Voice & text input. Tamil & English. 24/7.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pipeline.map((step, i) => (
                <motion.div
                  key={step.step}
                  className="group relative p-8 rounded-2xl border border-border bg-card/30 hover:bg-card hover:shadow-lg transition-all duration-500"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground tracking-widest">
                        STEP {step.step}
                      </span>
                      <h3 className="text-lg font-display font-medium mt-1 mb-3 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who We Serve ── */}
        <section className="relative z-10 py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-secondary/5 to-transparent">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground border border-border px-4 py-1.5 rounded-full">
                Who We Serve
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mt-6">
                1.1 billion people
              </h2>
              <p className="text-muted-foreground mt-3 text-base leading-relaxed">
                who need mental health support but cannot access traditional therapy — due to cost, stigma, geography, or time.
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {audiences.map((a, i) => (
                <motion.div
                  key={a.label}
                  className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card/30"
                  variants={fadeUp}
                  custom={i}
                >
                  <a.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{a.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── The Market ── */}
        <section className="relative z-10 py-24 px-6 md:px-12 lg:px-20 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground border border-border px-4 py-1.5 rounded-full">
                The Market
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mt-6">
                Fastest-growing segment in healthcare
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {markets.map((m, i) => (
                <motion.div
                  key={m.label}
                  className="p-6 rounded-2xl border border-border bg-card/50 text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                >
                  <m.icon className="w-5 h-5 text-primary mx-auto mb-3" />
                  <p className="text-xl md:text-2xl font-display font-medium text-foreground mb-1">
                    {m.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Business Model / Pricing ── */}
        <section className="relative z-10 py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground border border-border px-4 py-1.5 rounded-full">
                Business Model
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mt-6 mb-4">
                Built to serve every segment
              </h2>
              <p className="text-muted-foreground text-base">
                LTV:CAC ratio of 3:1 · 78% gross margin at scale · Institution licensing from ₹1.2L–8L/year
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricing.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  className={`relative p-8 rounded-2xl border transition-all duration-500 ${
                    plan.highlight
                      ? "border-primary bg-primary/5 shadow-lg"
                      : "border-border bg-card/30 hover:bg-card"
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-6 text-[10px] tracking-widest uppercase bg-primary text-primary-foreground px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  )}
                  <p className="text-sm text-muted-foreground mb-2">{plan.name}</p>
                  <p className="text-2xl font-display font-medium text-foreground">
                    {plan.price}
                    <span className="text-sm text-muted-foreground font-light">
                      {plan.period}
                    </span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                    {plan.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Now ── */}
        <section className="relative z-10 py-24 px-6 md:px-12 lg:px-20 border-t border-border">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground border border-border px-4 py-1.5 rounded-full">
                Why Now
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mt-6">
                The right moment
              </h2>
            </motion.div>
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Zap,
                  title: "AI accuracy crossed the threshold",
                  desc: "Emotion detection hit 92% accuracy in 2023 — the technology finally works at therapeutic grade.",
                },
                {
                  icon: Heart,
                  title: "Post-COVID mental health surge",
                  desc: "India saw a 47% spike in anxiety disorders. Mental health became a mainstream crisis impossible to ignore.",
                },
                {
                  icon: Shield,
                  title: "Infrastructure is ready",
                  desc: "850 million smartphone users and ₹5,000 crore government digital health investment create the rails for national-scale delivery.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-5"
                  variants={fadeUp}
                  custom={i}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
              <p className="text-sm text-muted-foreground italic pt-4 border-t border-border">
                The problem is 70 years old. The solution became possible 18 months ago.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Vision CTA ── */}
        <section className="relative z-10 py-32 px-6 md:px-12 lg:px-20">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-8 leading-[1.2]">
              A world where mental wellness is not a luxury — but a{" "}
              <span className="text-primary">right</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              Available to every person, in every language, at every hour, at a price anyone can afford.
            </p>
            <p className="text-muted-foreground text-base italic mb-12">
              "Mental wellness shouldn't be a luxury. We're making it a right."
            </p>
            <a
              href="mailto:contact@azentrix.ai"
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
