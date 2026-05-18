"use client";

import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "2,500+", label: "Clients Served" },
  { value: "$180M+", label: "Funded" },
  { value: "98%", label: "Client Satisfaction" },
];

const trustBadges = [
  "NMLS Licensed",
  "Equal Housing Lender",
  "BBB Accredited",
  "Since 2003",
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "#FFFFFF",
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(20,184,166,0.07) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)" }}
      />

      {/* Gold top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
      />

      <div className="container-xl relative z-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div className="animate-fade-up">
            {/* Tag line */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#C9A84C" }}
              />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#E8C96A" }}>
                Trusted Since 2003
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-serif font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#111827" }}
            >
              The Three{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Pillars
              </span>{" "}
              of Financial Freedom
            </h1>

            <p className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: "#111827" }}>
              For over 20 years, Liz Estrada has helped thousands of families and businesses unlock their financial potential through expert mortgage solutions, credit restoration, and strategic business funding.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/consultation"
                className="btn-gold px-7 py-3.5 rounded-full text-sm text-center"
                id="hero-cta-consultation"
              >
                Book Free Consultation
              </Link>
              <Link
                href="#pillars"
                className="btn-outline px-7 py-3.5 rounded-full text-sm text-center"
                id="hero-cta-services"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2.5">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                    color: "#111827",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Portrait */}
          <div className="relative flex flex-col items-center animate-fade-up animate-delay-200">
            {/* Decorative ring */}
            <div
              className="absolute -inset-6 rounded-3xl opacity-40"
              style={{
                background: "linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(20,184,166,0.1) 100%)",
                filter: "blur(20px)",
              }}
            />

            {/* Portrait frame */}
            <div
              className="relative w-full max-w-md rounded-3xl overflow-hidden"
              style={{
                aspectRatio: "3/4",
                border: "1px solid rgba(201,168,76,0.2)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
              }}
            >
              <Image
                src="/liz-estrada-portrait.png"
                alt="Liz Estrada — Financial Expert"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
                loading="eager"
              />
              {/* Gradient overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)" }}
              />
              {/* Name badge */}
              <div
                className="absolute bottom-5 left-5 right-5 px-5 py-3 rounded-xl"
                style={{
                  background: "#FFFFFF",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <p className="font-serif font-bold text-gray-900 text-base">Liz Estrada</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-gold-500)" }}>
                  Financial Strategist & Mortgage Expert
                </p>
              </div>
            </div>

            {/* Floating stat cards */}
            <div
              className="absolute -right-4 top-12 px-4 py-3 rounded-xl"
              style={{
                background: "#FFFFFF",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(201,168,76,0.2)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              }}
            >
              <div className="stat-badge">
                <span className="stat-value text-2xl">$180M+</span>
                <span className="stat-label">Funded</span>
              </div>
            </div>

            <div
              className="absolute -left-4 bottom-24 px-4 py-3 rounded-xl"
              style={{
                background: "#FFFFFF",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(20,184,166,0.25)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              }}
            >
              <div className="stat-badge">
                <span className="stat-value text-2xl" style={{ background: "linear-gradient(135deg, #14B8A6, #2DD4BF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>2,500+</span>
                <span className="stat-label">Clients Served</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8 rounded-2xl"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            backdropFilter: "blur(8px)",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="stat-badge"
              style={{ borderRight: i < stats.length - 1 ? "1px solid #E5E7EB" : "none" }}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-widest uppercase" style={{ color: "#111827" }}>Scroll</span>
        <svg className="w-4 h-4" style={{ color: "#111827" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
