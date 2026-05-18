import type { Metadata } from "next";
import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Mortgage Solutions",
  description:
    "Expert residential mortgage lending: first-time homebuyer programs, conventional, FHA, VA, jumbo loans, and refinancing. Get pre-approved today.",
};

const loanTypes = [
  {
    icon: "🏠",
    title: "Conventional Loans",
    desc: "Competitive rates with flexible terms from 10 to 30 years. Ideal for borrowers with strong credit profiles.",
  },
  {
    icon: "🏛️",
    title: "FHA Loans",
    desc: "Government-backed loans with low down payment requirements — as little as 3.5%. Perfect for first-time buyers.",
  },
  {
    icon: "🎖️",
    title: "VA Loans",
    desc: "Exclusive benefits for veterans and active-duty military, including zero down payment and no PMI requirements.",
  },
  {
    icon: "💎",
    title: "Jumbo Loans",
    desc: "Financing above conforming loan limits for high-value properties with customized underwriting solutions.",
  },
  {
    icon: "🔄",
    title: "Refinancing",
    desc: "Lower your rate, reduce your term, or cash out equity. Strategic refinancing that saves you thousands.",
  },
  {
    icon: "🏗️",
    title: "Investment Properties",
    desc: "Tailored financing for rental properties and real estate investors looking to expand their portfolio.",
  },
];

const steps = [
  { step: "01", title: "Free Consultation", desc: "Discuss your goals, timeline, and financial picture with Liz." },
  { step: "02", title: "Pre-Qualification", desc: "We analyze your profile and identify the best loan programs for you." },
  { step: "03", title: "Application & Processing", desc: "Streamlined documentation and processing with dedicated support." },
  { step: "04", title: "Approval & Closing", desc: "Fast approvals and a smooth closing experience from start to finish." },
];

export default function MortgagePage() {
  return (
    <>
      {/* Page Hero */}
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
            <span className="text-2xl">🏠</span>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#E8C96A" }}>
              Mortgage Solutions
            </span>
          </div>
          <h1
            className="font-serif font-bold mb-5"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", color: "#111827" }}
          >
            Your Path to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Homeownership
            </span>
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "#111827" }}>
            With access to a broad network of lenders and 20+ years of expertise, Liz finds the right mortgage program for your unique situation — fast, seamlessly, and with your best interests first.
          </p>
          <Link href="/consultation" className="btn-gold px-8 py-4 rounded-full text-sm" id="mortgage-hero-cta">
            Get Pre-Qualified Today
          </Link>
        </div>
      </section>

      {/* Loan Types Grid */}
      <section className="py-24" style={{ background: "#F8FAFC" }}>
        <div className="container-xl">
          <div className="text-center mb-14">
            <div className="section-divider" />
            <h2 className="font-serif font-bold text-gray-900" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              Loan Programs We Offer
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanTypes.map((loan) => (
              <div key={loan.title} className="glass-card p-7">
                <span className="text-3xl mb-4 block">{loan.icon}</span>
                <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">{loan.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#111827" }}>{loan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-black">
        <div className="container-xl">
          <div className="text-center mb-14">
            <div className="section-divider" style={{ background: "linear-gradient(90deg, #C9A84C, #E8C96A)" }} />
            <h2 className="font-serif font-bold text-white" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              The Simple 4-Step Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.step} className="relative">
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-8 left-full w-full h-px z-0"
                    style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.3), transparent)", width: "calc(100% - 2rem)" }}
                  />
                )}
                <div className="glass-card p-6 relative z-10" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.1)" }}>
                  <span
                    className="font-serif font-bold text-4xl block mb-3"
                    style={{
                      background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.step}
                  </span>
                  <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadCaptureForm />
    </>
  );
}
