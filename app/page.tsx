import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import PillarGrid from "@/components/PillarGrid";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Liz Estrada | Financial Expert — Mortgage, Credit Repair & Business Funding",
  description:
    "Empowering families and businesses to achieve financial freedom through expert mortgage solutions, credit restoration, and strategic business funding. Trusted since 2003.",
};

const testimonials = [
  {
    name: "Maria T.",
    role: "First-Time Homebuyer",
    quote:
      "Liz made the entire mortgage process feel seamless. She got us into our dream home with a rate we never thought possible. Truly a miracle worker!",
    stars: 5,
    service: "Mortgage",
  },
  {
    name: "James R.",
    role: "Business Owner",
    quote:
      "My credit score went from 541 to 720 in just 6 months. Liz's credit restoration program is absolutely unmatched. I'm now approved for everything.",
    stars: 5,
    service: "Credit Repair",
  },
  {
    name: "Sandra M.",
    role: "Entrepreneur",
    quote:
      "Liz secured $150K in unsecured business credit for my company within weeks. Her knowledge of business funding is next level.",
    stars: 5,
    service: "Business Funding",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PillarGrid />

      {/* Social Proof / Testimonials */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "#F8FAFC" }}
        id="testimonials"
      >
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="container-xl relative z-10">
          <div className="text-center mb-14">
            <div className="section-divider" />
            <span
              className="text-xs font-semibold tracking-widest uppercase block mb-3"
              style={{ color: "var(--color-navy-700)" }}
            >
              Client Success Stories
            </span>
            <h2
              className="font-serif font-bold"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", color: "#111827" }}
            >
              Real Results. Real Lives{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Transformed.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="glass-card p-7 flex flex-col animate-fade-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <svg key={j} className="w-4 h-4" style={{ color: "#C9A84C" }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "#111827" }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid #E5E7EB" }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-sm"
                    style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)", color: "#FFFFFF" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs" style={{ color: "#111827" }}>{t.role}</p>
                  </div>
                  <span
                    className="ml-auto text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: "#F3F4F6", color: "var(--color-navy-700)", border: "1px solid #E5E7EB" }}
                  >
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section
        className="py-20 relative"
        style={{ background: "#F3F4F6" }}
        id="about-teaser"
      >
        <div className="container-xl">
          <div
            className="rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10"
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(20,184,166,0.04) 100%)",
              border: "1px solid rgba(201,168,76,0.12)",
            }}
          >
            <div className="flex-1">
              <span
                className="text-xs font-semibold tracking-widest uppercase block mb-3"
                style={{ color: "var(--color-teal-500)" }}
              >
                About Liz Estrada
              </span>
              <h2
                className="font-serif font-bold mb-4"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#111827" }}
              >
                20+ Years of Financial Expertise
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#111827" }}>
                Since 2003, Liz Estrada has been a trusted financial strategist helping everyday people achieve extraordinary financial milestones. From guiding first-time homebuyers to engineering multi-million dollar business credit facilities, her expertise spans the full spectrum of personal and corporate finance.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/about"
                className="btn-teal px-8 py-4 rounded-full text-sm inline-block"
                id="about-teaser-cta"
              >
                Meet Liz →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LeadCaptureForm />
      <FaqSection />
    </>
  );
}
