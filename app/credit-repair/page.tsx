import type { Metadata } from "next";
import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Credit Repair & Restoration",
  description:
    "Professional credit repair and restoration services: dispute inaccuracies, remove collections, optimize your credit score, and unlock financial freedom.",
};

const services = [
  { icon: "🎯", title: "Credit Dispute Resolution", desc: "We challenge inaccurate, outdated, and unverifiable items across all three bureaus on your behalf." },
  { icon: "🗑️", title: "Collections & Charge-off Removal", desc: "Strategic negotiation and dispute processes to remove damaging collections and charge-offs from your report." },
  { icon: "⚡", title: "Rapid Rescore", desc: "Fast-track credit score improvements in as little as 3–5 business days for time-sensitive situations." },
  { icon: "🏗️", title: "Credit Building Strategy", desc: "Implement proven techniques — authorized users, secured cards, credit-builder loans — to grow your score." },
  { icon: "🔍", title: "Identity Theft Recovery", desc: "Comprehensive recovery plan including fraud alerts, security freezes, and dispute filings for compromised accounts." },
  { icon: "📊", title: "Credit Profile Optimization", desc: "Reduce utilization ratios, diversify credit mix, and time applications strategically for maximum score impact." },
];

const phases = [
  { phase: "Phase 1", title: "Analysis & Strategy", desc: "Deep dive into all 3 bureau reports to identify every dispute opportunity and build your custom roadmap." },
  { phase: "Phase 2", title: "Dispute & Negotiate", desc: "Send targeted dispute letters, follow up aggressively, and negotiate directly with creditors and bureaus." },
  { phase: "Phase 3", title: "Build & Optimize", desc: "Add positive credit accounts, optimize ratios, and layer credit-building strategies for sustained growth." },
  { phase: "Phase 4", title: "Monitor & Maintain", desc: "Ongoing monitoring, alerts, and quarterly check-ins to protect and continue improving your score." },
];

export default function CreditRepairPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-32 pt-48 overflow-hidden bg-white"
      >
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #14B8A6, transparent)" }}
        />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)" }}
        />
        <div className="container-xl relative z-10 text-center max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: "rgba(20,184,166,0.08)", border: "1px solid rgba(20,184,166,0.2)" }}
          >
            <span className="text-2xl">✅</span>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#2DD4BF" }}>
              Credit Repair & Restoration
            </span>
          </div>
          <h1
            className="font-serif font-bold mb-5"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", color: "#111827" }}
          >
            Rebuild. Restore.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #14B8A6, #2DD4BF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Rise.
            </span>
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "#111827" }}>
            Your credit score is the gateway to every major financial opportunity in your life. Don&apos;t let errors, collections, or past setbacks hold you back. Liz&apos;s proven system transforms credit profiles — fast.
          </p>

          {/* Score improvement showcase */}
          <div
            className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl mb-8"
            style={{
              background: "rgba(20,184,166,0.08)",
              border: "1px solid rgba(20,184,166,0.2)",
            }}
          >
            <div className="text-center">
              <span className="font-serif font-bold text-3xl" style={{ color: "rgba(255,80,80,0.9)" }}>541</span>
              <p className="text-xs mt-1" style={{ color: "#111827" }}>Starting Score</p>
            </div>
            <svg className="w-8 h-8" style={{ color: "#14B8A6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <div className="text-center">
              <span
                className="font-serif font-bold text-3xl"
                style={{
                  background: "linear-gradient(135deg, #14B8A6, #2DD4BF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                720+
              </span>
              <p className="text-xs mt-1" style={{ color: "#111827" }}>After 6 Months</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation" className="btn-teal px-8 py-4 rounded-full text-sm" id="credit-hero-cta">
              Start Your Credit Restoration
            </Link>
            <Link href="#process" className="btn-outline px-8 py-4 rounded-full text-sm">
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24" style={{ background: "#F8FAFC" }}>
        <div className="container-xl">
          <div className="text-center mb-14">
            <div className="section-divider" style={{ background: "linear-gradient(90deg, #14B8A6, #2DD4BF)" }} />
            <h2 className="font-serif font-bold text-gray-900" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              Complete Credit Restoration Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="glass-card p-7">
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#111827" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Phase Process */}
      <section id="process" className="py-24 bg-black">
        <div className="container-xl">
          <div className="text-center mb-14">
            <div className="section-divider" style={{ background: "linear-gradient(90deg, #14B8A6, #2DD4BF)" }} />
            <h2 className="font-serif font-bold text-white" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              The 4-Phase Restoration System
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((p, i) => (
              <div key={p.phase} className="glass-card p-6" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.1)" }}>
                <span
                  className="text-xs font-semibold tracking-widest uppercase block mb-3"
                  style={{ color: "#2DD4BF" }}
                >
                  {p.phase}
                </span>
                <h3 className="font-serif font-bold text-white text-lg mb-2">{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadCaptureForm />
    </>
  );
}
