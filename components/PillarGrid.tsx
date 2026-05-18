import Link from "next/link";

const pillars = [
  {
    id: "pillar-mortgage",
    href: "/mortgage",
    accent: "#C9A84C",
    accentRgb: "201,168,76",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    label: "Mortgage Solutions",
    tagline: "Your Path to Homeownership",
    description:
      "From first-time buyers to seasoned investors, we navigate the full spectrum of residential lending to get you into the right loan at the right rate.",
    checks: [
      "First-Time Homebuyer Programs",
      "Conventional & FHA/VA Loans",
      "Cash-Out Refinancing",
      "Investment Property Financing",
      "Jumbo Loan Solutions",
    ],
  },
  {
    id: "pillar-credit",
    href: "/credit-repair",
    accent: "#14B8A6",
    accentRgb: "20,184,166",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Credit Repair & Restoration",
    tagline: "Rebuild. Restore. Rise.",
    description:
      "We dispute inaccuracies, negotiate removals, and implement proven credit-building strategies that transform your financial profile and unlock new opportunities.",
    checks: [
      "Bad Credit Recovery Programs",
      "Collections & Charge-off Removal",
      "Rapid Rescore Strategies",
      "Credit Score Optimization",
      "Identity Theft Recovery",
    ],
  },
  {
    id: "pillar-funding",
    href: "/business-funding",
    accent: "#C9A84C",
    accentRgb: "201,168,76",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    label: "Business Funding",
    tagline: "Capital for Corporate Growth",
    description:
      "Whether you're scaling an existing enterprise or launching a new venture, we connect you with the right funding vehicles to accelerate your business vision.",
    checks: [
      "Unsecured Business Lines of Credit",
      "SBA Loan Programs",
      "Startup & New Business Funding",
      "Equipment Financing",
      "Corporate Credit Building",
    ],
  },
];

export default function PillarGrid() {
  return (
    <section
      id="pillars"
      className="py-24 relative overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }}
      />

      <div className="container-xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="section-divider" />
          <span
            className="text-xs font-semibold tracking-widest uppercase block mb-3"
            style={{ color: "var(--color-navy-700)" }}
          >
            Our Services
          </span>
          <h2
            className="font-serif font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#111827" }}
          >
            Three Pillars of{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Excellence
            </span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#111827" }}>
            A comprehensive ecosystem of financial solutions built around your success.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.id}
              id={pillar.id}
              className="glass-card p-8 flex flex-col animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: `rgba(${pillar.accentRgb}, 0.1)`,
                  border: `1px solid rgba(${pillar.accentRgb}, 0.25)`,
                  color: pillar.accent,
                }}
              >
                {pillar.icon}
              </div>

              {/* Label & tagline */}
              <span
                className="text-xs font-semibold tracking-widest uppercase block mb-1"
                style={{ color: pillar.accent }}
              >
                {pillar.label}
              </span>
              <h3 className="font-serif font-bold text-xl text-gray-900 mb-3">
                {pillar.tagline}
              </h3>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "#111827" }}>
                {pillar.description}
              </p>

              {/* Divider */}
              <div
                className="h-px mb-6"
                style={{ background: `linear-gradient(90deg, rgba(${pillar.accentRgb}, 0.3), transparent)` }}
              />

              {/* Checklist */}
              <ul className="space-y-2.5 flex-1 mb-8">
                {pillar.checks.map((item) => (
                  <li key={item} className="check-item">
                    <span className="check-icon">
                      <svg className="w-2.5 h-2.5" style={{ color: "#14B8A6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={pillar.href}
                className="flex items-center gap-2 text-sm font-semibold group transition-colors duration-200"
                style={{ color: pillar.accent }}
              >
                Explore Service
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
