"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import FundingCalculator from "@/components/FundingCalculator";

const fundingTypes = [
  {
    id: "unsecured-credit",
    icon: "💳",
    title: "Unsecured Lines of Credit",
    amount: "Up to $500K",
    desc: "Access $50K–$500K+ in working capital with no collateral required. Rates and terms designed for growing businesses.",
    detail:
      "Unsecured business lines of credit give you flexible capital without putting your assets on the line. We match you with lenders offering the best rates based on your business profile, revenue history, and credit standing.",
    bullets: [
      "No collateral required",
      "$50K–$500K+ available",
      "Revolving credit — borrow as needed",
      "Fast approvals, often 24–48 hrs",
    ],
    accentColor: "#C9A84C",
    accentRgb: "201,168,76",
  },
  {
    id: "sba-loans",
    icon: "🏦",
    title: "SBA Loan Programs",
    amount: "Up to $5M",
    desc: "Government-backed SBA 7(a) and 504 loans for expansion, equipment, real estate, and working capital needs.",
    detail:
      "SBA loans offer some of the lowest rates and longest terms available to small businesses. Liz navigates the complex application process on your behalf — identifying the right program, preparing documentation, and liaising with lenders to maximize approval odds.",
    bullets: [
      "SBA 7(a) & 504 loan programs",
      "Rates as low as prime + 2.25%",
      "Terms up to 25 years",
      "Full application management",
    ],
    accentColor: "#C9A84C",
    accentRgb: "201,168,76",
  },
  {
    id: "startup-funding",
    icon: "🚀",
    title: "Startup & New Business",
    amount: "Up to $150K",
    desc: "Specialized programs for businesses under 2 years old. We structure deals that traditional lenders won't touch.",
    detail:
      "New businesses face unique challenges — but that doesn't mean you're out of options. We specialize in startup-friendly programs including business credit cards, microloans, and personal credit leverage strategies that get you funded fast.",
    bullets: [
      "Businesses under 2 years old welcome",
      "Personal credit leverage strategies",
      "Business credit card stacking",
      "Microloan program access",
    ],
    accentColor: "#C9A84C",
    accentRgb: "201,168,76",
  },
  {
    id: "equipment-financing",
    icon: "⚙️",
    title: "Equipment Financing",
    amount: "Up to $2M",
    desc: "100% equipment financing with fast approvals and competitive rates. Get the tools you need without depleting cash reserves.",
    detail:
      "Finance virtually any type of business equipment — machinery, vehicles, technology, or medical devices — with 100% financing and terms up to 7 years. The equipment itself serves as collateral, making approvals faster and rates more competitive.",
    bullets: [
      "100% equipment cost covered",
      "All equipment types qualify",
      "Terms up to 7 years",
      "Preserves your working capital",
    ],
    accentColor: "#C9A84C",
    accentRgb: "201,168,76",
  },
  {
    id: "commercial-real-estate",
    icon: "🏢",
    title: "Commercial Real Estate",
    amount: "Custom",
    desc: "Investment property loans, commercial mortgages, and bridge financing for real estate acquisitions and development.",
    detail:
      "From owner-occupied commercial properties to multi-unit investment acquisitions, we connect you with commercial lenders offering competitive LTV ratios, flexible structures, and terms tailored to your investment strategy.",
    bullets: [
      "Owner-occupied & investment properties",
      "Bridge loans & construction financing",
      "Up to 80% LTV on most programs",
      "Mixed-use & multi-unit properties",
    ],
    accentColor: "#C9A84C",
    accentRgb: "201,168,76",
  },
  {
    id: "corporate-credit",
    icon: "📈",
    title: "Corporate Credit Building",
    amount: "Strategy",
    desc: "Establish and grow a robust business credit profile that attracts premium financing terms and vendor accounts.",
    detail:
      "A strong business credit profile unlocks better rates, higher limits, and vendor net terms that transform your cash flow. Liz builds your Dun & Bradstreet, Experian Business, and Equifax Business profiles from the ground up with a proven roadmap.",
    bullets: [
      "D&B, Experian & Equifax Business profiles",
      "Net-30 vendor account strategy",
      "Business credit monitoring included",
      "6–12 month growth roadmap",
    ],
    accentColor: "#C9A84C",
    accentRgb: "201,168,76",
  },
];

const requirements = [
  "Business entity established (LLC, Corp, etc.)",
  "EIN (Employer Identification Number)",
  "Business bank account",
  "Minimum 6 months in business (some programs)",
  "Basic business documentation",
];

type FundingType = (typeof fundingTypes)[number];

export default function BusinessFundingPage() {
  const [activeService, setActiveService] = useState<FundingType | null>(null);
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

  const handleGetStarted = (service: FundingType) => {
    setSelectedFormService("Business Funding");
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
          style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
        />
        <div className="container-xl relative z-10 text-center max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}
          >
            <span className="text-2xl">📈</span>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#E8C96A" }}>
              Business Funding
            </span>
          </div>
          <h1
            className="font-serif font-bold mb-5"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", color: "#111827" }}
          >
            Capital for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Corporate Growth
            </span>
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "#111827" }}>
            Stop letting capital constraints limit your vision. Liz connects entrepreneurs and business owners with the right funding vehicles — from unsecured credit lines to SBA programs — to fuel unstoppable growth.
          </p>

          {/* Funding stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { value: "$180M+", label: "Total Funded" },
              { value: "48hrs", label: "Avg. Approval Time" },
              { value: "500+", label: "Businesses Funded" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span
                  className="font-serif font-bold text-2xl block"
                  style={{
                    background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-xs" style={{ color: "#111827" }}>{stat.label}</span>
              </div>
            ))}
          </div>

          <Link href="/consultation" className="btn-gold px-8 py-4 rounded-full text-sm" id="funding-hero-cta">
            Apply for Funding Today
          </Link>
        </div>
      </section>

      {/* ── Funding Types ──────────────────────────────────── */}
      <section className="py-24" style={{ background: "#F8FAFC" }}>
        <div className="container-xl">
          <div className="text-center mb-14">
            <div className="section-divider" />
            <h2 className="font-serif font-bold text-gray-900" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              Funding Solutions We Offer
            </h2>
            <p className="text-sm mt-3" style={{ color: "#6B7280" }}>
              Click any option to learn more
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fundingTypes.map((f) => (
              <button
                key={f.id}
                id={f.id}
                onClick={() => setActiveService(f)}
                className="glass-card p-7 text-left group cursor-pointer transition-all duration-200 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                style={{ border: "1px solid rgba(201,168,76,0.12)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{f.icon}</span>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.2)" }}
                  >
                    {f.amount}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-gray-900 text-lg mb-2 group-hover:text-yellow-700 transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>{f.desc}</p>
                <span
                  className="inline-flex items-center gap-1 text-xs font-semibold tracking-wide"
                  style={{ color: "#C9A84C" }}
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

      {/* ── Requirements ───────────────────────────────────── */}
      <section className="py-20 bg-black">
        <div className="container-xl">
          <div
            className="rounded-3xl p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, rgba(20,184,166,0.03) 100%)",
              border: "1px solid rgba(201,168,76,0.12)",
            }}
          >
            <div>
              <h2 className="font-serif font-bold text-white text-2xl mb-4">
                Basic Requirements to Get Started
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
                Most business owners qualify for at least one of our funding programs. Here&apos;s what you typically need:
              </p>
              <ul className="space-y-3">
                {requirements.map((r) => (
                  <li key={r} className="check-item" style={{ color: "rgba(255,255,255,0.8)" }}>
                    <span className="check-icon">
                      <svg className="w-2.5 h-2.5" style={{ color: "#14B8A6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="font-serif font-bold text-white text-xl">Not incorporated yet?</p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                No problem. Liz can guide you through entity formation and corporate credit building from scratch — setting your business up for maximum funding eligibility from day one.
              </p>
              <Link href="/consultation" className="btn-gold px-6 py-3 rounded-full text-sm" id="funding-req-cta">
                Get Started Anyway →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Calculator ─────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#F8FAFC" }}>
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="font-serif font-bold text-gray-900 mb-4" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              Calculate Your Potential Payments
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Use our business funding calculator to estimate your monthly payments based on various funding amounts and terms.
            </p>
          </div>
          <FundingCalculator />
        </div>
      </section>

      <LeadCaptureForm defaultService={selectedFormService} />

      {/* ── Service Modal ──────────────────────────────────── */}
      {activeService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="funding-modal-title"
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
              border: "1px solid rgba(201,168,76,0.25)",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100"
              aria-label="Close"
              id="funding-modal-close"
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Icon + badge */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{
                  background: `rgba(${activeService.accentRgb},0.1)`,
                  border: `1px solid rgba(${activeService.accentRgb},0.25)`,
                }}
              >
                {activeService.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: activeService.accentColor }}
                  >
                    Business Funding
                  </span>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: `rgba(${activeService.accentRgb},0.12)`, color: activeService.accentColor }}
                  >
                    {activeService.amount}
                  </span>
                </div>
                <h2 id="funding-modal-title" className="font-serif font-bold text-xl text-gray-900">
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
                id="funding-modal-get-started"
                onClick={() => handleGetStarted(activeService)}
                className="btn-gold flex-1 py-3.5 rounded-xl text-sm font-semibold"
              >
                Apply for Funding — Free Consult
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
