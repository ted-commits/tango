import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Infinity, PlugZap, TestTube2, Workflow, ShieldCheck, Cpu, Bot, ArrowRight, Github, Linkedin } from "lucide-react";

// --- Inline SVG Logo (mark + word) ---
const TangoLogo = ({ className = "w-36 h-auto" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg width="40" height="40" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="52" stroke="currentColor" strokeWidth="12"/>
      <circle cx="36" cy="92" r="8" fill="currentColor"/>
      <circle cx="100" cy="36" r="8" fill="currentColor"/>
      <path d="M72 32c-18 0-32 14-32 32h22a10 10 0 0 0 10-10V32z" fill="currentColor"/>
      <rect x="48" y="58" width="44" height="12" rx="6" fill="currentColor"/>
      <circle cx="92" cy="76" r="8" fill="currentColor"/>
      <path d="M64 72v28a8 8 0 0 0 16 0V72" fill="currentColor"/>
    </svg>
    <span className="font-semibold text-2xl tracking-tight">tango</span>
  </div>
);

// --- UI Helpers ---
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-6 md:px-8 ${className}`}>{children}</div>
);

const PrimaryButton = ({ children }) => (
  <a href="#cta" className="inline-flex items-center gap-2 rounded-2xl bg-[#E65027] px-5 py-3 text-white font-medium shadow-lg shadow-orange-500/20 transition hover:translate-y-[-1px] hover:shadow-orange-500/30">
    {children} <ArrowRight className="w-4 h-4"/>
  </a>
);

const SecondaryButton = ({ children }) => (
  <a href="#demo" className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 dark:border-zinc-700 px-5 py-3 text-zinc-900 dark:text-zinc-100 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800">
    {children}
  </a>
);

const Badge = ({ children, tone = "violet" }) => (
  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ring-${tone}-300/50 bg-${tone}-50/60 text-${tone}-700 dark:bg-${tone}-500/10 dark:text-${tone}-300`}>
    {children}
  </span>
);

// --- Main Page ---
export default function App() {
  const platforms = [
    { name: "ServiceNow" },
    { name: "Microsoft Dynamics" },
    { name: "NetSuite" },
    { name: "Workday" },
    { name: "Oracle" },
    { name: "Salesforce" },
  ];

  const pillars = [
    {
      icon: <Cpu className="w-5 h-5"/>,
      title: "ALM AI",
      text: "Plan, prioritize, and govern with AI across every environment.",
    },
    {
      icon: <Bot className="w-5 h-5"/>,
      title: "Vibe Coding",
      text: "Natural‑language prompts become secure, reviewable changes.",
    },
    {
      icon: <TestTube2 className="w-5 h-5"/>,
      title: "Testing",
      text: "Self‑healing, cross‑platform tests that ship with your pipeline.",
    },
    {
      icon: <Workflow className="w-5 h-5"/>,
      title: "RPA",
      text: "Automate repetitive ops across apps, data, and approvals.",
    },
  ];

  const benefits = [
    { icon: <Infinity className="w-5 h-5"/>, title: "CI/CD in Rhythm", text: "Branch, merge, validate, release—continuously." },
    { icon: <ShieldCheck className="w-5 h-5"/>, title: "Built‑in Governance", text: "Audit trails, approvals, and policy as code." },
    { icon: <PlugZap className="w-5 h-5"/>, title: "Plug‑and‑Play Integrations", text: "First‑class connectors for enterprise suites." },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-[#0b0b0c] dark:text-zinc-100">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur border-b border-zinc-100/80 dark:border-zinc-800/80 bg-white/70 dark:bg-[#0b0b0c]/70">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3 text-[#E65027] dark:text-[#E65027]">
            <TangoLogo/>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            <a href="#pillars" className="hover:text-[#E65027]">Products</a>
            <a href="#integrations" className="hover:text-[#E65027]">Integrations</a>
            <a href="#why" className="hover:text-[#E65027]">Why Tango</a>
            <a href="#cta" className="hover:text-[#E65027]">Get Started</a>
          </nav>
          <div className="flex items-center gap-3">
            <SecondaryButton>Docs</SecondaryButton>
            <PrimaryButton>Try Tango</PrimaryButton>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(230,80,39,0.12),transparent_60%)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,rgba(230,80,39,0.18),transparent_60%)]"/>
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-20">
          <div>
            <Badge tone="violet">Copado for ServiceNow • Dynamics • NetSuite • Workday • Oracle</Badge>
            <h1 className="mt-5 text-5xl md:text-6xl font-extrabold tracking-tight">
              Build, test, and ship across <span className="text-[#E65027]">every enterprise platform</span>
            </h1>
            <p className="mt-5 text-lg text-zinc-600 dark:text-zinc-300 max-w-xl">
              Tango unifies CI/CD, Testing, ALM AI, Vibe Coding, and RPA—so your teams move in harmony from idea to release.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton>Launch Sandbox</PrimaryButton>
              <SecondaryButton>Book a Demo</SecondaryButton>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
              <CheckCircle className="w-4 h-4"/> SOC 2 • SSO • Audit Trails
              <CheckCircle className="w-4 h-4"/> GitOps‑native
            </div>
          </div>
          <div>
            {/* Animated pipeline card */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-2xl">
              <div className="flex items-center gap-3">
                <TangoLogo className="w-28"/>
                <span className="text-sm text-zinc-500">Pipeline: main → prod</span>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Lint & Typecheck", status: "Passed" },
                  { label: "Unit Tests", status: "Passed" },
                  { label: "E2E Tests", status: "Passed" },
                  { label: "RPA Flows", status: "Queued" },
                  { label: "Change Review", status: "Approved" },
                  { label: "Deploy to Workday", status: "Deploying" },
                ].map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 * i }} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{s.label}</span>
                      <span className="text-xs text-[#2EC4B6]">{s.status}</span>
                    </div>
                    <div className="mt-3 h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800">
                      <div className="h-1.5 w-3/4 rounded-full bg-[#E65027]"/>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Platform marquee */}
      <section id="integrations" className="py-10">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-widest text-zinc-500">
            {platforms.map((p) => (
              <span key={p.name} className="opacity-80 hover:opacity-100">{p.name}</span>
            ))}
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section id="pillars" className="py-20 bg-[#F4F4F6] dark:bg-zinc-900/60">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">One platform. Four superpowers.</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300 max-w-2xl">Everything you need to plan, build, test, and automate across ServiceNow, Dynamics, NetSuite, Workday, Oracle, and Salesforce.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {pillars.map((item, i) => (
              <div key={i} className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6">
                <div className="flex items-center gap-3 text-[#7D5FFF]">{item.icon}<span className="text-sm font-semibold uppercase tracking-widest">{item.title}</span></div>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Tango */}
      <section id="why" className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-950">
                <div className="flex items-center gap-3 text-[#2EC4B6]">{b.icon}<span className="text-lg font-semibold">{b.title}</span></div>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">{b.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 bg-gradient-to-b from-white to-[#FFF3EF] dark:from-zinc-950 dark:to-zinc-900">
        <Container className="text-center">
          <h3 className="text-4xl font-extrabold">Ship faster, safer, together</h3>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">Spin up a sandbox, connect your stacks, and watch your pipeline find its rhythm.</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <PrimaryButton>Start Free</PrimaryButton>
            <SecondaryButton>Talk to Sales</SecondaryButton>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-zinc-200 dark:border-zinc-800">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-[#E65027]"><TangoLogo/></div>
          <div className="text-sm text-zinc-500">© {new Date().getFullYear()} Tango. All rights reserved.</div>
          <div className="flex items-center gap-4 text-zinc-500">
            <a href="#" className="hover:text-[#E65027]"><Github className="w-5 h-5"/></a>
            <a href="#" className="hover:text-[#E65027]"><Linkedin className="w-5 h-5"/></a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
