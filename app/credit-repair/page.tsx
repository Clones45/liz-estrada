"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const services = [
  {
    id: "credit-dispute",
    icon: "🎯",
    title: "Credit Dispute Resolution",
    desc: "We challenge inaccurate, outdated, and unverifiable items across all three bureaus on your behalf.",
    detail:
      "Our team crafts bureau-specific dispute letters backed by the Fair Credit Reporting Act (FCRA). We track every response, escalate when needed, and fight until every unjust item is removed or corrected.",
    bullets: [
      "Dispute across Equifax, Experian & TransUnion",
      "FCRA-backed dispute letters",
      "Aggressive follow-up on every response",
      "Avg. 60–90 day removal timeline",
    ],
    formService: "Credit Repair & Restoration",
    accentColor: "#14B8A6",
    accentRgb: "20,184,166",
  },
  {
    id: "collections-removal",
    icon: "🗑️",
    title: "Collections & Charge-off Removal",
    desc: "Strategic negotiation and dispute processes to remove damaging collections and charge-offs from your report.",
    detail:
      "Collections and charge-offs can devastate your score. We negotiate pay-for-delete agreements, dispute unverifiable accounts, and use goodwill intervention strategies to clear your record.",
    bullets: [
      "Pay-for-delete negotiation",
      "Goodwill letter campaigns",
      "Unverifiable debt disputes",
      "Statute of limitations analysis",
    ],
    formService: "Credit Repair & Restoration",
    accentColor: "#14B8A6",
    accentRgb: "20,184,166",
  },
  {
    id: "rapid-rescore",
    icon: "⚡",
    title: "Rapid Rescore",
    desc: "Fast-track credit score improvements in as little as 3–5 business days for time-sensitive situations.",
    detail:
      "Closing on a mortgage next week? Our rapid rescore process works directly through lender channels to update your credit file in days — not months — when you need it most.",
    bullets: [
      "Score updates in 3–5 business days",
      "Works with your mortgage lender",
      "Ideal before major loan applications",
      "Proven to add 20–80+ points fast",
    ],
    formService: "Credit Repair & Restoration",
    accentColor: "#14B8A6",
    accentRgb: "20,184,166",
  },
  {
    id: "credit-building",
    icon: "🏗️",
    title: "Credit Building Strategy",
    desc: "Implement proven techniques — authorized users, secured cards, credit-builder loans — to grow your score.",
    detail:
      "Removing negatives is only half the battle. We layer in positive credit accounts, advise on authorized user strategies, and time new applications for maximum impact on your profile.",
    bullets: [
      "Authorized user account placement",
      "Secured card & credit-builder loans",
      "Strategic new account timing",
      "Mix optimization for score growth",
    ],
    formService: "Credit Repair & Restoration",
    accentColor: "#14B8A6",
    accentRgb: "20,184,166",
  },
  {
    id: "identity-theft",
    icon: "🔍",
    title: "Identity Theft Recovery",
    desc: "Comprehensive recovery plan including fraud alerts, security freezes, and dispute filings for compromised accounts.",
    detail:
      "If your identity has been stolen, we act fast. We help you file FTC reports, place fraud alerts, initiate security freezes, and dispute every fraudulent account on all three bureaus.",
    bullets: [
      "FTC identity theft report filing",
      "Fraud alerts on all 3 bureaus",
      "Security freeze implementation",
      "Full fraudulent account dispute",
    ],
    formService: "Credit Repair & Restoration",
    accentColor: "#14B8A6",
    accentRgb: "20,184,166",
  },
  {
    id: "profile-optimization",
    icon: "📊",
    title: "Credit Profile Optimization",
    desc: "Reduce utilization ratios, diversify credit mix, and time applications strategically for maximum score impact.",
    detail:
      "We analyze every scoring factor — utilization, age of accounts, payment history, credit mix — and build a custom optimization roadmap that maximizes your score for your specific goals.",
    bullets: [
      "Utilization ratio management",
      "Credit mix diversification plan",
      "Inquiry minimization strategy",
      "Goal-based score targeting",
    ],
    formService: "Credit Repair & Restoration",
    accentColor: "#14B8A6",
    accentRgb: "20,184,166",
  },
];

const phases = [
  { phase: "Phase 1", title: "Analysis & Strategy", desc: "Deep dive into all 3 bureau reports to identify every dispute opportunity and build your custom roadmap." },
  { phase: "Phase 2", title: "Dispute & Negotiate", desc: "Send targeted dispute letters, follow up aggressively, and negotiate directly with creditors and bureaus." },
  { phase: "Phase 3", title: "Build & Optimize", desc: "Add positive credit accounts, optimize ratios, and layer credit-building strategies for sustained growth." },
  { phase: "Phase 4", title: "Monitor & Maintain", desc: "Ongoing monitoring, alerts, and quarterly check-ins to protect and continue improving your score." },
];

type Service = (typeof services)[number];

export default function CreditRepairPage() {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [selectedFormService, setSelectedFormService] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeService]);

  const handleGetStarted = (service: Service) => {
    setSelectedFormService(service.formService);
    setActiveService(null);
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative py-32 pt-48 overflow-hidden bg-white">
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
              Credit Repair &amp; Restoration
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
            style={{ background: "rgba(20,184,166,0.08)", border: "1px solid rgba(20,184,166,0.2)" }}
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

      {/* ── Services Grid ──────────────────────────────────── */}
      <section className="py-24" style={{ background: "#F8FAFC" }}>
        <div className="container-xl">
          <div className="text-center mb-14">
            <div className="section-divider" style={{ background: "linear-gradient(90deg, #14B8A6, #2DD4BF)" }} />
            <h2 className="font-serif font-bold text-gray-900" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              Complete Credit Restoration Services
            </h2>
            <p className="text-sm mt-3" style={{ color: "#6B7280" }}>
              Click any service to learn more
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <button
                key={s.id}
                id={s.id}
                onClick={() => setActiveService(s)}
                className="glass-card p-7 text-left group cursor-pointer transition-all duration-200 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
                style={{ border: "1px solid rgba(20,184,166,0.12)" }}
              >
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="font-serif font-bold text-gray-900 text-lg mb-2 group-hover:text-teal-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>{s.desc}</p>
                <span
                  className="inline-flex items-center gap-1 text-xs font-semibold tracking-wide"
                  style={{ color: "#14B8A6" }}
                >
                  Learn more
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4-Phase Process ────────────────────────────────── */}
      <section id="process" className="py-24 bg-black">
        <div className="container-xl">
          <div className="text-center mb-14">
            <div className="section-divider" style={{ background: "linear-gradient(90deg, #14B8A6, #2DD4BF)" }} />
            <h2 className="font-serif font-bold text-white" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              The 4-Phase Restoration System
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((p) => (
              <div key={p.phase} className="glass-card p-6" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.1)" }}>
                <span className="text-xs font-semibold tracking-widest uppercase block mb-3" style={{ color: "#2DD4BF" }}>
                  {p.phase}
                </span>
                <h3 className="font-serif font-bold text-white text-lg mb-2">{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadCaptureForm defaultService={selectedFormService} />

      {/* ── Service Modal ──────────────────────────────────── */}
      {activeService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveService(null)}
          />

          {/* Panel */}
          <div
            className="relative w-full max-w-lg rounded-3xl p-8 shadow-2xl animate-fade-up"
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(20,184,166,0.2)",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100"
              aria-label="Close"
              id="modal-close"
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Icon + badge */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: `rgba(${activeService.accentRgb},0.1)`, border: `1px solid rgba(${activeService.accentRgb},0.25)` }}
              >
                {activeService.icon}
              </div>
              <div>
                <span
                  className="text-xs font-semibold tracking-widest uppercase block mb-1"
                  style={{ color: activeService.accentColor }}
                >
                  Credit Repair Service
                </span>
                <h2 id="modal-title" className="font-serif font-bold text-xl text-gray-900">
                  {activeService.title}
                </h2>
              </div>
            </div>

            {/* Divider */}
            <div
              className="h-px mb-6"
              style={{ background: `linear-gradient(90deg, rgba(${activeService.accentRgb},0.4), transparent)` }}
            />

            {/* Detail copy */}
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
              {activeService.detail}
            </p>

            {/* Bullet list */}
            <ul className="space-y-2.5 mb-8">
              {activeService.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm" style={{ color: "#111827" }}>
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `rgba(${activeService.accentRgb},0.12)` }}
                  >
                    <svg className="w-2.5 h-2.5" style={{ color: activeService.accentColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                id="modal-get-started"
                onClick={() => handleGetStarted(activeService)}
                className="btn-teal flex-1 py-3.5 rounded-xl text-sm font-semibold"
              >
                Get Started — Free Consultation
              </button>
              <button
                onClick={() => setActiveService(null)}
                className="py-3.5 px-5 rounded-xl text-sm font-semibold border transition-colors hover:bg-gray-50"
                style={{ borderColor: "#E5E7EB", color: "#374151" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
