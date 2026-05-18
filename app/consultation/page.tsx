import type { Metadata } from "next";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Schedule your free, no-obligation consultation with Liz Estrada. Get a personalized financial strategy for mortgage, credit repair, or business funding.",
};

export default function ConsultationPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative py-24 pt-48 text-center overflow-hidden bg-white"
      >
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
        />
        <div className="container-xl relative z-10 max-w-2xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#E8C96A" }}>
              Free Consultation
            </span>
          </div>
          <h1
            className="font-serif font-bold mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", color: "#111827" }}
          >
            Let&apos;s Build Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Financial Roadmap
            </span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#111827" }}>
            In a single, focused session with Liz, you&apos;ll walk away with complete clarity on where you stand, what&apos;s possible, and exactly what steps to take next.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16" style={{ background: "#F8FAFC" }}>
        <div className="container-xl max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            {[
              { icon: "🗓️", title: "30-Minute Session", desc: "Focused strategy call — no fluff, no sales pressure. Pure value." },
              { icon: "📋", title: "Custom Action Plan", desc: "Leave with a written roadmap tailored to your exact situation." },
              { icon: "💰", title: "100% Free", desc: "No cost. No obligation. Zero strings attached." },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 text-center">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm" style={{ color: "#111827" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form (full page version) */}
      <LeadCaptureForm />
    </>
  );
}
