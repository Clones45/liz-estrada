import type { Metadata } from "next";
import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import FundingCalculator from "@/components/FundingCalculator";

export const metadata: Metadata = {
  title: "Business Funding",
  description:
    "Strategic business funding solutions: unsecured lines of credit, SBA loans, startup capital, and corporate credit building. Scale your business today.",
};

const fundingTypes = [
  { icon: "💳", title: "Unsecured Lines of Credit", desc: "Access $50K–$500K+ in working capital with no collateral required. Rates and terms designed for growing businesses.", amount: "Up to $500K" },
  { icon: "🏦", title: "SBA Loan Programs", desc: "Government-backed SBA 7(a) and 504 loans for expansion, equipment, real estate, and working capital needs.", amount: "Up to $5M" },
  { icon: "🚀", title: "Startup & New Business", desc: "Specialized programs for businesses under 2 years old. We structure deals that traditional lenders won't touch.", amount: "Up to $150K" },
  { icon: "⚙️", title: "Equipment Financing", desc: "100% equipment financing with fast approvals and competitive rates. Get the tools you need without depleting cash reserves.", amount: "Up to $2M" },
  { icon: "🏢", title: "Commercial Real Estate", desc: "Investment property loans, commercial mortgages, and bridge financing for real estate acquisitions and development.", amount: "Custom" },
  { icon: "📈", title: "Corporate Credit Building", desc: "Establish and grow a robust business credit profile that attracts premium financing terms and vendor accounts.", amount: "Strategy" },
];

const requirements = [
  "Business entity established (LLC, Corp, etc.)",
  "EIN (Employer Identification Number)",
  "Business bank account",
  "Minimum 6 months in business (some programs)",
  "Basic business documentation",
];

export default function BusinessFundingPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-32 pt-48 overflow-hidden bg-white"
      >
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

      {/* Funding Types */}
      <section className="py-24" style={{ background: "#F8FAFC" }}>
        <div className="container-xl">
          <div className="text-center mb-14">
            <div className="section-divider" />
            <h2 className="font-serif font-bold text-gray-900" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              Funding Solutions We Offer
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fundingTypes.map((f) => (
              <div key={f.title} className="glass-card p-7">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{f.icon}</span>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: "rgba(201,168,76,0.12)", color: "#E8C96A", border: "1px solid rgba(201,168,76,0.2)" }}
                  >
                    {f.amount}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#111827" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
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

      <LeadCaptureForm />
    </>
  );
}
