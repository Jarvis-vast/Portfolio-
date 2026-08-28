import { useState, type FormEvent } from "react";
import {
  Sparkles,
  Cpu,
  Layers,
  Globe,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  X,
  Mail,
  Send,
  Zap,
  Boxes,
  Briefcase,
  GraduationCap,
  Workflow,
  BarChart3,
  Truck,
  FileSpreadsheet,
  Linkedin,
  Github,
  Target,
  Search,
  UserCheck,
  PhoneCall,
  CalendarCheck,
  Lock,
  PackageCheck,
  RefreshCw,
  Sliders,
  Code2,
  Terminal,
} from "lucide-react";
import CtaFooter from "./components/CtaFooter";
import HeroBackground from "./components/HeroBackground";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Zelvora Automation Pipeline Inquiry",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setIsContactOpen(false);
      setFormData({
        name: "",
        email: "",
        subject: "Zelvora Automation Pipeline Inquiry",
        message: "",
      });
    }, 2200);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 04. EXPERIENCE / CREDIBILITY
  const experiences = [
    {
      role: "Founder & Lead Architect",
      company: "Zelvora (AI & Automation Agency)",
      period: "Present",
      type: "Agency Venture",
      description:
        "Constructed production-ready n8n and Make.com automation pipelines deeply integrated with LLMs for global clients. Designed custom multi-agent business process workflows and eliminated repetitive operational friction.",
      highlights: [
        "Production n8n/Make automation pipelines integrated with LLMs",
        "Custom agentic workflows eliminating repetitive organizational friction",
        "Autonomous operations consulting and enterprise workflow design",
      ],
    },
    {
      role: "Regional Manager",
      company: "Skydot Courier",
      period: "Operations & Logistics",
      type: "Executive Operations",
      description:
        "Spearheaded automated dispatch coordination models, decreasing scheduling latency by 30%. Engineered fleet routing frameworks and SLA tracking systems to guarantee optimal regional throughput.",
      highlights: [
        "Decreased scheduling latency by 30% via automated dispatch models",
        "Fleet routing and logistic frameworks optimization",
        "End-to-end SLA performance tracking and operational triage",
      ],
    },
    {
      role: "Consultant & Systems Architect",
      company: "Independent System Development",
      period: "Ongoing",
      type: "System Architecture",
      description:
        "Architected the H.U.L.K. OS framework and structured automated client acquisition and business intelligence architectures for data-driven operations.",
      highlights: [
        "Architected foundational H.U.L.K. OS framework",
        "Engineered custom MIS reporting and Excel VBA automation macros",
        "Designed target-led multi-channel acquisition infrastructure",
      ],
    },
  ];

  // 05. SELECTED WORK / PROJECTS
  const selectedProjects = [
    {
      title: "Strive",
      tagline: "AI-Powered Platform & Execution Architecture",
      problem:
        "Operators and builders need focused execution environments that bridge human decision-making with automated workflows without unnecessary platform bloat.",
      solution:
        "Architected and deployed an AI-assisted execution platform enabling structured task workflows, live tracking, and human-in-the-loop performance.",
      role: "Creator & Developer",
      status: "DEPLOYED",
      icon: Globe,
      githubUrl: "https://github.com/Jarvis-vast/strive-ai",
      liveUrl: "https://strive-ai-platform-c9l7.vercel.app/",
    },
    {
      title: "AmplifyLane",
      tagline: "Growth & Automation Platform",
      problem:
        "Modern marketing workflows and digital asset distribution demand streamlined multi-channel staging and automated campaign management.",
      solution:
        "Engineered and deployed an automated web platform designed to orchestrate and amplify digital campaign assets with high-velocity scheduling.",
      role: "Creator & Developer",
      status: "DEPLOYED",
      icon: BarChart3,
      githubUrl: "https://github.com/Jarvis-vast/Amplifylane",
      liveUrl: "https://amplifylane-5o27crbf6-jarvis-vasts-projects.vercel.app/",
    },
    {
      title: "H.U.L.K. OS",
      tagline: "High-Throughput Distributed Architecture",
      problem:
        "Complex enterprise AI workloads require resilient orchestration across multiple LLMs without bottlenecking operational workflows.",
      solution:
        "Engineered distributed task-splitting and multi-agent coordination architecture capable of handling heavy computational loads.",
      role: "Lead Systems Architect",
      status: "IN DEVELOPMENT",
      icon: Zap,
    },
    {
      title: "Dispatch & SLA Optimization Engine",
      tagline: "Automated Logistics Coordination (Skydot Courier)",
      problem:
        "Manual dispatch assignments created latency, misrouted couriers, and caused SLA breaches across high-volume distribution nodes.",
      solution:
        "Engineered automated coordination models and dynamic routing rules, reducing scheduling latency by 30% with live SLA monitoring.",
      role: "Operations & Systems Lead",
      status: "DEPLOYED",
      icon: Truck,
    },
    {
      title: "Enterprise Multi-Agent Middleware",
      tagline: "Custom n8n & Make Automation Pipelines (Zelvora)",
      problem:
        "Siloed SaaS applications and manual data entry resulted in hundreds of lost hours and fragmented customer data pipelines.",
      solution:
        "Constructed production middleware workflows integrating CRM, databases, and LLM reasoning loops into a unified execution spine.",
      role: "Lead Automation Architect",
      status: "BUILT",
      icon: Workflow,
    },
    {
      title: "Automated MIS & Telemetry System",
      tagline: "Custom Excel VBA & Data Automation",
      problem:
        "Stakeholders lacked fast, unified performance metrics due to unstandardized, manual operational data aggregation.",
      solution:
        "Built automated VBA macros and real-time Management Information System (MIS) pipelines to deliver instant commercial telemetry.",
      role: "Creator & Architect",
      status: "BUILT",
      icon: FileSpreadsheet,
    },
  ];

  // 07. CONSTANT CLIENT ACQUISITION ENGINE
  const acquisitionSteps = [
    { step: "01", name: "Find", desc: "Identify high-intent enterprise targets through structured data scrapers.", icon: Search },
    { step: "02", name: "Qualify", desc: "Filter leads by operational complexity, team headcount, and stack friction.", icon: UserCheck },
    { step: "03", name: "Research", desc: "Deep operational discovery into existing bottlenecks and automation gaps.", icon: Target },
    { step: "04", name: "Reach Out", desc: "Tailored outbound offering high-signal operational improvements.", icon: Send },
    { step: "05", name: "Follow Up", desc: "Systematic multi-touch sequences providing concrete technical value.", icon: PhoneCall },
    { step: "06", name: "Book", desc: "Frictionless calendar scheduling and preliminary qualification sync.", icon: CalendarCheck },
    { step: "07", name: "Close", desc: "Structured scoping proposal with measurable operational SLA benchmarks.", icon: Lock },
    { step: "08", name: "Deliver", desc: "Rapid deployment of production n8n/Make agentic workflows.", icon: PackageCheck },
    { step: "09", name: "Retain", desc: "Continuous monitoring, pipeline refinement, and proactive maintenance.", icon: RefreshCw },
  ];

  // 08. AI PRODUCTS / SYSTEMS & MICRO-SAAS
  const productConcepts = [
    {
      name: "LeadForge AI",
      category: "Growth & Intelligence",
      description: "Automated lead discovery and multi-parameter data enrichment pipeline for B2B operators.",
      status: "Concept",
      badge: "Concept",
    },
    {
      name: "WappFlow AI",
      category: "Operations & Support",
      description: "Intelligent communication routing and automated triage for instant customer resolution.",
      status: "Prototype",
      badge: "Prototype",
    },
    {
      name: "Webvora AI",
      category: "Web & Conversions",
      description: "Conversion-optimized AI system site generator designed specifically for agency workflows.",
      status: "In Development",
      badge: "In Development",
    },
    {
      name: "Bookly AI",
      category: "Scheduling & Calendar",
      description: "Context-aware appointment coordinator that qualifies inquiries before calendar booking.",
      status: "Concept",
      badge: "Concept",
    },
    {
      name: "ContentForge AI",
      category: "Media & Distribution",
      description: "Multi-channel content repurposing pipeline transforming core insights into varied formats.",
      status: "Prototype",
      badge: "Prototype",
    },
    {
      name: "OpsFlow AI",
      category: "Operations Telemetry",
      description: "Automated SLA tracking and process friction alert system for logistics and support teams.",
      status: "In Development",
      badge: "In Development",
    },
  ];

  const microSaaSList = [
    { name: "Simple CRM for Solo Operators", status: "Concept", desc: "Frictionless client management without SaaS bloat." },
    { name: "Invoice Chasing Automation", status: "Concept", desc: "Automated payment reminders with smart escalation." },
    { name: "Uptime & Workflow Monitor", status: "Concept", desc: "Instant alert dispatch when webhooks or APIs fail." },
    { name: "Review Response Drafting", status: "Prototype", desc: "AI-assisted feedback analysis and personalized replies." },
    { name: "Meeting-to-Task Compiler", status: "In Development", desc: "Extract actionable tasks directly into project boards." },
    { name: "Domain & Renewal Tracker", status: "Concept", desc: "Centralized renewal alerts and DNS health verification." },
  ];

  // 09. OM ECOSYSTEM
  const ecosystemLayers = [
    {
      name: "Mission Control",
      type: "Orchestration Layer",
      description: "Centralized telemetry and decision console coordinating business health, agency pipelines, and deployed automations.",
      icon: Terminal,
    },
    {
      name: "AI Operating Systems",
      type: "CirculOS & Edith AI",
      description: "Context-aware executive engines coordinating multi-agent workflows, data synthesis, and rapid decision support.",
      icon: Cpu,
    },
    {
      name: "Core Infrastructure",
      type: "H.U.L.K. OS",
      description: "Resilient distributed execution pipeline engineered for heavy multi-model computational loads and task queuing.",
      icon: Zap,
    },
    {
      name: "Shared Libraries & Tools",
      type: "Modular Building Blocks",
      description: "Reusable authentication, webhook handlers, scraping utilities, and prompt engines shared across all ventures.",
      icon: Code2,
    },
    {
      name: "AI Workforce & Agents",
      type: "Execution Layer",
      description: "Autonomous task-specific agents executing operational triage, data aggregation, dispatching, and MIS updates.",
      icon: Sparkles,
    },
    {
      name: "Zelvora Studio",
      type: "Commercial Agency",
      description: "The client-facing business translating ecosystem infrastructure into custom enterprise automation pipelines.",
      icon: Boxes,
    },
  ];

  // Education Background
  const education = [
    {
      degree: "PGPM in Marketing & Operations",
      institution: "IBS Mumbai",
      period: "2024 – 2026",
      details:
        "Executive mastery in commercial marketing strategies, operations scalability, supply chain workflows, and business systems design.",
    },
    {
      degree: "Bachelor of Business Administration (BBA)",
      institution: "D.Y. Patil University",
      period: "2021 – 2024",
      details:
        "Rigorous foundation in business administration, organizational operations, financial analysis, and strategic entrepreneurship.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white font-body">
      {/* 01. NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/75 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <a
            href="#"
            id="brand-logo"
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5 font-heading italic text-lg text-white group-hover:border-white/50 transition-colors">
              OB
            </div>
            <div className="flex flex-col">
              <span className="font-heading italic text-xl tracking-tight text-white leading-none">
                Om Bhagwat
              </span>
              <span className="text-[10px] tracking-wider uppercase text-white/40 font-body font-normal mt-0.5">
                Founder · Systems
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase text-white/60 font-body font-normal">
            <button
              onClick={() => scrollToSection("work")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("zelvora")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Zelvora
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("cta-footer")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/ombhagwat"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Om Bhagwat LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://github.com/Jarvis-vast"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Om Bhagwat GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>

            <button
              id="header-contact-btn"
              onClick={() => setIsContactOpen(true)}
              className="liquid-glass-strong rounded-full px-5 py-2 text-xs font-medium text-white hover:bg-white/10 transition-all font-body cursor-pointer flex items-center gap-1.5"
            >
              <span>Work With Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* 02. HERO — PERSONAL BRAND */}
      <section
        id="hero"
        className="relative pt-40 pb-24 px-6 md:px-16 lg:px-24 overflow-hidden"
      >
        {/* Background Visual Layer */}
        <HeroBackground />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-white/60 text-xs font-light mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>FOUNDER &bull; AI ENTREPRENEUR &bull; BUSINESS BUILDER</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading italic text-white tracking-tight leading-[0.92] max-w-5xl mb-6">
            BUILDING BUSINESSES, SYSTEMS, AND PRODUCTS WITH AI.
          </h1>

          <p className="text-white/65 font-light text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            I design intelligent systems that automate repetitive work, improve how businesses operate, and extend what people can accomplish.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("work")}
              className="bg-white text-black rounded-full px-7 py-3 text-sm font-medium hover:bg-white/90 transition-colors font-body cursor-pointer flex items-center gap-2"
            >
              EXPLORE MY WORK
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsContactOpen(true)}
              className="liquid-glass-strong rounded-full px-7 py-3 text-sm font-medium text-white hover:bg-white/10 transition-all font-body cursor-pointer"
            >
              WORK WITH ME
            </button>
          </div>

          {/* Ambient Proof & Positioning Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mt-24 pt-12 border-t border-white/10 text-left">
            <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/5">
              <div className="text-xs uppercase tracking-widest text-white/40 font-body mb-2">
                Agency Venture
              </div>
              <div className="text-2xl font-heading italic text-white mb-1">
                Zelvora.studio
              </div>
              <p className="text-xs text-white/50 font-light leading-relaxed">
                Production-ready n8n & Make.com automation pipelines integrated with LLMs for global clients.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/5">
              <div className="text-xs uppercase tracking-widest text-white/40 font-body mb-2">
                Operations Proof
              </div>
              <div className="text-2xl font-heading italic text-white mb-1">
                -30% Scheduling Latency
              </div>
              <p className="text-xs text-white/50 font-light leading-relaxed">
                Automated dispatch coordination models and fleet routing optimized at Skydot Courier.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/5">
              <div className="text-xs uppercase tracking-widest text-white/40 font-body mb-2">
                Commercial Foundation
              </div>
              <div className="text-2xl font-heading italic text-white mb-1">
                Marketing & Operations
              </div>
              <p className="text-xs text-white/50 font-light leading-relaxed">
                PGPM candidate at IBS Mumbai (2024–2026) & BBA from D.Y. Patil University (2021–2024).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. ABOUT / FOUNDER */}
      <section
        id="about"
        className="py-28 px-6 md:px-16 lg:px-24 border-t border-white/5 bg-gradient-to-b from-black via-zinc-950/20 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-widest text-white/40 font-body mb-3">
                About / Founder
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.95] mb-6">
                Where commercial strategy meets agentic execution.
              </h2>
              <p className="text-white/65 font-light text-base leading-relaxed mb-6">
                I combine business thinking, operations, marketing, and technology to build systems that improve how work gets done. Rather than chasing superficial AI tools, I design connected operational architectures that eliminate friction and unlock human leverage.
              </p>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-xs text-white/50 font-light leading-relaxed">
                <span className="text-white font-medium block mb-1">
                  Direct Inquiries & Collaboration
                </span>
                Email:{" "}
                <a
                  href="mailto:bhagwatom987@gmail.com"
                  className="text-white hover:underline font-normal"
                >
                  bhagwatom987@gmail.com
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {/* Intersection Pill Grid */}
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
                <div className="text-xs uppercase tracking-widest text-white/40 font-body mb-4">
                  Core Intersection
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Business Management",
                    "Marketing Strategy",
                    "Operations Scaling",
                    "Entrepreneurship",
                    "AI Agents",
                    "Workflow Automation",
                    "Systems Architecture",
                  ].map((pill) => (
                    <span
                      key={pill}
                      className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs text-white/80 font-light"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Systems should allow founders and executives to focus purely on high-conviction decisions, while intelligent automation handles routine operational complexity.
                </p>
              </div>

              {/* Education Block */}
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <GraduationCap className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading italic text-white">
                      Education & Academic Pedigree
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-white/40 font-body">
                      Formal Business & Operations Training
                    </p>
                  </div>
                </div>

                <div className="space-y-6 divide-y divide-white/5">
                  {education.map((edu) => (
                    <div key={edu.institution} className="pt-4 first:pt-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <span className="text-base text-white font-medium font-body">
                          {edu.degree}
                        </span>
                        <span className="text-xs text-white/40 font-mono">
                          {edu.period}
                        </span>
                      </div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mb-2 font-body">
                        {edu.institution}
                      </div>
                      <p className="text-xs text-white/60 font-light leading-relaxed">
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. EXPERIENCE / CREDIBILITY */}
      <section
        id="experience"
        className="py-28 px-6 md:px-16 lg:px-24 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-white/40 font-body mb-2">
                Credibility & Track Record
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight">
                Experience & Proof
              </h2>
            </div>
            <p className="text-white/60 font-light text-sm md:text-base max-w-md">
              Demonstrated inside real organizations: managing operations, reducing latency, and engineering custom AI automation.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[11px] font-body tracking-wider uppercase text-white/40 px-2.5 py-0.5 rounded-full border border-white/10 bg-white/[0.02]">
                        {exp.type}
                      </span>
                      <span className="text-xs text-white/40 font-mono">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-3xl font-heading italic text-white group-hover:text-white/90 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-xs uppercase tracking-wider text-white/50 font-body mt-1">
                      {exp.company}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-white/70 font-light leading-relaxed mb-6 max-w-4xl">
                  {exp.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4 border-t border-white/5">
                  {exp.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="text-xs text-white/50 font-light flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. SELECTED WORK / PROJECTS */}
      <section
        id="work"
        className="py-28 px-6 md:px-16 lg:px-24 border-t border-white/5 bg-gradient-to-b from-black via-zinc-950/30 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-white/40 font-body mb-2">
                Systems & Architecture
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight">
                Selected Work
              </h2>
            </div>
            <p className="text-white/60 font-light text-sm md:text-base max-w-md">
              Focused architectural builds spanning distributed execution, logistics automation, and enterprise multi-agent workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedProjects.map((proj) => {
              const IconComp = proj.icon;
              const hasExternalLinks = proj.liveUrl || proj.githubUrl;

              return (
                <div
                  key={proj.title}
                  className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
                        <IconComp className="w-6 h-6 text-white/80" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-body tracking-wider uppercase text-white/60 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02]">
                          {proj.status}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-3xl font-heading italic text-white mb-1 group-hover:text-white/90 transition-colors">
                      {proj.title}
                    </h3>
                    <div className="text-xs uppercase tracking-wider text-white/40 font-body mb-5">
                      {proj.tagline}
                    </div>

                    <div className="space-y-3 mb-6">
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-white/30 font-body">
                          Operational Challenge
                        </div>
                        <p className="text-xs text-white/60 font-light leading-relaxed">
                          {proj.problem}
                        </p>
                      </div>

                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-white/30 font-body">
                          Architectural Solution
                        </div>
                        <p className="text-xs text-white/70 font-light leading-relaxed">
                          {proj.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-body">
                      <span className="text-white/40">
                        Role: <strong className="text-white/80 font-normal">{proj.role}</strong>
                      </span>

                      {hasExternalLinks ? (
                        <div className="flex items-center gap-2">
                          {proj.liveUrl && (
                            <a
                              href={proj.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3.5 py-1.5 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors flex items-center gap-1 text-[11px] tracking-wide"
                              aria-label={`View live deployed application for ${proj.title}`}
                            >
                              <span>VIEW LIVE</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          )}
                          {proj.githubUrl && (
                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/80 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1 text-[11px] tracking-wide"
                              aria-label={`View GitHub repository for ${proj.title}`}
                            >
                              <Github className="w-3 h-3" />
                              <span>VIEW CODE</span>
                            </a>
                          )}
                        </div>
                      ) : (
                        <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">
                          Architecture & Infrastructure
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* GitHub Technical Credibility Pathway */}
          <div className="mt-10 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-white/[0.03] via-white/[0.015] to-transparent border border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-light mb-3">
                <Github className="w-3.5 h-3.5 text-white" />
                <span>Technical Credibility</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-heading italic text-white mb-2">
                Personal GitHub
              </h3>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                Explore the systems, experiments, and products I'm building.
              </p>
            </div>
            <a
              href="https://github.com/Jarvis-vast"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-all font-body flex items-center gap-2 whitespace-nowrap self-start md:self-auto cursor-pointer"
              aria-label="Explore Om Bhagwat's personal GitHub profile and repositories"
            >
              <Github className="w-4 h-4" />
              <span>github.com/Jarvis-vast</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 06. ZELVORA.STUDIO — THE BUSINESS */}
      <section
        id="zelvora"
        className="py-28 px-6 md:px-16 lg:px-24 border-t border-white/5 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="p-10 md:p-14 rounded-3xl bg-white/[0.02] border border-white/15 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-light mb-6">
                  <Boxes className="w-3.5 h-3.5 text-white" />
                  <span>Commercial Agency</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.92] mb-4">
                  Zelvora.studio
                </h2>

                <p className="text-lg md:text-xl text-white/80 font-light mb-4">
                  AI-powered business systems and automation solutions.
                </p>

                <p className="text-sm text-white/60 font-light leading-relaxed mb-8 max-w-xl">
                  Zelvora designs and deploys custom middleware workflows, multi-agent process loops, and intelligent automation pipelines that help businesses automate repetitive tasks, reduce latency, and operate with maximum efficiency.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="bg-white text-black rounded-full px-7 py-3 text-sm font-medium hover:bg-white/90 transition-colors font-body cursor-pointer flex items-center gap-2"
                  >
                    EXPLORE ZELVORA
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollToSection("acquisition")}
                    className="liquid-glass-strong rounded-full px-7 py-3 text-sm font-medium text-white hover:bg-white/10 transition-all font-body cursor-pointer"
                  >
                    View Revenue Engine
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                  <Workflow className="w-5 h-5 text-white/80 mb-3" />
                  <h4 className="text-base text-white font-medium mb-1">
                    n8n & Make Middleware
                  </h4>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    Custom API integrations connecting fragmented CRMs and operational databases.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                  <Sparkles className="w-5 h-5 text-white/80 mb-3" />
                  <h4 className="text-base text-white font-medium mb-1">
                    Multi-Agent Loops
                  </h4>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    LLM-orchestrated task execution for automated triage, enrichment, and analysis.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                  <Sliders className="w-5 h-5 text-white/80 mb-3" />
                  <h4 className="text-base text-white font-medium mb-1">
                    Operations Scaling
                  </h4>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    SLA optimization and automated dispatch models to eliminate execution delays.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                  <FileSpreadsheet className="w-5 h-5 text-white/80 mb-3" />
                  <h4 className="text-base text-white font-medium mb-1">
                    Automated MIS
                  </h4>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    Instant performance dashboards built on automated Excel VBA and telemetry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07. CONSTANT CLIENT ACQUISITION — REVENUE ENGINE */}
      <section
        id="acquisition"
        className="py-28 px-6 md:px-16 lg:px-24 border-t border-white/5 bg-gradient-to-b from-black via-zinc-950/20 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-white/40 font-body mb-2">
                Revenue Architecture
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight">
                Constant Client Acquisition
              </h2>
            </div>
            <p className="text-white/60 font-light text-sm md:text-base max-w-md">
              A systematic, multi-stage operating framework engineered to find, qualify, convert, and retain high-value automation partners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            {acquisitionSteps.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.step}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-white/40">
                        {step.step}
                      </span>
                      <IconComp className="w-4 h-4 text-white/60" />
                    </div>
                    <div className="text-sm font-medium text-white mb-1">
                      {step.name}
                    </div>
                    <p className="text-[11px] text-white/50 font-light leading-snug">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 08. AI PRODUCTS / SYSTEMS & MICRO-SAAS */}
      <section
        id="products"
        className="py-28 px-6 md:px-16 lg:px-24 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-white/40 font-body mb-2">
                Product Direction & Experiments
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight">
                AI Products & Systems
              </h2>
            </div>
            <p className="text-white/60 font-light text-sm md:text-base max-w-md">
              Exploratory prototypes, product architectures, and targeted micro-SaaS concepts developed across the OM roadmap.
            </p>
          </div>

          {/* Product Concepts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {productConcepts.map((prod) => (
              <div
                key={prod.name}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-white/50">
                      {prod.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02] text-white/60">
                      {prod.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading italic text-white mb-2">
                    {prod.name}
                  </h3>
                  <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">
                    {prod.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Micro-SaaS Explorations */}
          <div className="p-8 md:p-10 rounded-3xl bg-white/[0.015] border border-white/10">
            <div className="text-xs uppercase tracking-widest text-white/40 font-body mb-2">
              Modular Micro-SaaS Focus
            </div>
            <h4 className="text-2xl font-heading italic text-white mb-6">
              Targeted Workflow Utilities
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {microSaaSList.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-2xl bg-black/40 border border-white/5"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-medium text-white">
                      {item.name}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider font-mono text-white/40 px-2 py-0.5 rounded border border-white/10">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-white/50 font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 09. OM ECOSYSTEM — LONG-TERM VISION */}
      <section
        id="ecosystem"
        className="py-28 px-6 md:px-16 lg:px-24 border-t border-white/5 bg-gradient-to-b from-black via-zinc-950/40 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-white/40 font-body mb-2">
                Long-Term Vision
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight">
                The OM Ecosystem
              </h2>
            </div>
            <p className="text-white/60 font-light text-sm md:text-base max-w-md">
              A connected ecosystem of businesses, AI systems, shared infrastructure, reusable components, and autonomous workforce capabilities.
            </p>
          </div>

          <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/15 mb-12 text-center max-w-4xl mx-auto">
            <div className="text-xs uppercase tracking-widest text-white/40 font-body mb-3">
              Core Operating Axiom
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-heading italic text-white tracking-tight">
              BUILD ONCE. REUSE. CONNECT. AUTOMATE. IMPROVE.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemLayers.map((layer) => {
              const IconComp = layer.icon;
              return (
                <div
                  key={layer.name}
                  className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
                        <IconComp className="w-6 h-6 text-white/80" />
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-white/40 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02]">
                        {layer.type}
                      </span>
                    </div>

                    <h3 className="text-2xl font-heading italic text-white mb-2 group-hover:text-white/90 transition-colors">
                      {layer.name}
                    </h3>
                    <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FOUNDER PHILOSOPHY */}
      <section
        id="philosophy"
        className="py-28 px-6 md:px-16 lg:px-24 border-t border-white/5 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-white/40 font-body">
            Founder Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mt-4 mb-6 tracking-tight leading-[0.95]">
            &ldquo;AI should make humans more capable.&rdquo;
          </h2>
          <p className="text-white/65 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            I don't see AI as a replacement for human potential. I see it as infrastructure that gives people more leverage — handling the repetitive, operational friction so humans can focus on high-conviction decisions and meaningful building.
          </p>
        </div>
      </section>

      {/* 11. CTA + FOOTER (Supplied cinematic component with Mux HLS & Contact Form) */}
      <CtaFooter
        onWorkWithMe={() => setIsContactOpen(true)}
        onExploreWork={() => scrollToSection("work")}
      />

      {/* Interactive Contact / Work With Me Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg p-8 rounded-3xl bg-zinc-950 border border-white/15 text-white shadow-2xl">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {contactSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-4 animate-bounce" />
                <h3 className="text-3xl font-heading italic text-white mb-2">
                  Message Dispatched
                </h3>
                <p className="text-sm text-white/60 font-light max-w-xs">
                  Thank you for reaching out. Om Bhagwat will review your inquiry and connect via {formData.email || "email"} shortly.
                </p>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-light mb-4">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Direct Inquiry</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-heading italic text-white mb-2">
                  Work With Om Bhagwat
                </h3>
                <p className="text-xs md:text-sm text-white/60 font-light mb-6">
                  Inquire about custom AI automation pipelines, Zelvora agency engagements, or systems architecture partnerships.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 font-body">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/50 mb-1.5">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/50 mb-1.5">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/50 mb-1.5">
                      Objective
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-white/40"
                    >
                      <option value="Zelvora Automation Pipeline Inquiry">
                        Zelvora AI Automation Pipeline
                      </option>
                      <option value="Multi-Agent Workflow Architecture">
                        Multi-Agent Workflow Architecture
                      </option>
                      <option value="Operations & SLA Optimization">
                        Operations & Logistics Optimization
                      </option>
                      <option value="OM Ecosystem Collaboration">
                        OM Ecosystem Collaboration
                      </option>
                      <option value="General Strategic Advisory">General Strategic Advisory</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/50 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Outline your systems goals, automation requirements, or strategic partnership..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white/40 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 bg-white text-black py-3 rounded-xl font-medium text-sm hover:bg-white/90 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Terms & Privacy Quick Info Drawer */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg p-8 rounded-3xl bg-zinc-950 border border-white/15 text-white shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-xs text-white/60 mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span className="uppercase tracking-widest">Legal Notice</span>
            </div>
            <h3 className="text-3xl font-heading italic text-white mb-4">
              {activeModal === "privacy" ? "Privacy Policy" : "Terms of Service"}
            </h3>
            <p className="text-sm text-white/70 font-light leading-relaxed mb-4">
              {activeModal === "privacy"
                ? "Om Bhagwat respects your privacy. Inquiries submitted through this portfolio are solely used to establish direct communication regarding business partnerships, advisory, or system architecture. We never sell or share data with third parties."
                : "All materials, brand identities, and proprietary architectures (including OM Ecosystem, Zelvora, H.U.L.K. OS) are intellectual assets of Om Bhagwat. Content is provided for informational and partnership review purposes."}
            </p>
            <button
              onClick={() => setActiveModal(null)}
              className="mt-4 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

