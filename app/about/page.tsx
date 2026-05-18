import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "About Liz Estrada",
  description:
    "Meet Liz Estrada — a financial expert with 20+ years of experience (since 2003) in mortgage lending, credit repair, and business funding. Trusted by 2,500+ clients.",
};

const milestones = [
  { year: "2003", event: "Founded financial consulting practice, beginning her journey in mortgage lending." },
  { year: "2007", event: "Expanded into credit restoration services, helping clients through the financial crisis." },
  { year: "2012", event: "Launched business funding division, connecting entrepreneurs with strategic capital." },
  { year: "2017", event: "Surpassed $50M in total mortgage origination and business credit facilitated." },
  { year: "2021", event: "Reached 2,000+ client milestone with 98% satisfaction rating maintained." },
  { year: "2023", event: "Celebrated 20 years of excellence. $180M+ total funded across all service pillars." },
];

const values = [
  { icon: "🤝", title: "Client-First Always", desc: "Every recommendation is driven by what genuinely serves your best interests — not commission incentives." },
  { icon: "🔒", title: "Integrity & Transparency", desc: "No hidden fees, no misleading promises. Just honest, straightforward guidance grounded in expertise." },
  { icon: "⚡", title: "Results-Driven", desc: "We measure success by your outcomes — approved loans, improved scores, funded businesses." },
  { icon: "🎓", title: "Financial Education", desc: "Empowering clients with knowledge so they can maintain and grow their financial health long-term." },
];

export default function AboutPage() {
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

        <div className="container-xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ background: "rgba(20,184,166,0.08)", border: "1px solid rgba(20,184,166,0.2)" }}
              >
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#2DD4BF" }}>
                  20+ Years of Excellence
                </span>
              </div>
              <h1
                className="font-serif font-bold mb-5"
                style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", color: "#111827" }}
              >
                Meet{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Liz Estrada
                </span>
              </h1>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#111827" }}>
                Since 2003, Liz Estrada has dedicated her career to transforming the financial lives of families and businesses. Based in Visalia, California, and partnering with First Capital Group, what began as a passion for helping first-time homebuyers navigate the mortgage process has evolved into a comprehensive financial services practice serving over 2,500 clients.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#111827" }}>
                As a licensed Mortgage Loan Officer (NMLS# 1514454) armed with deep expertise in mortgage origination, credit law, and business finance, Liz brings a unique multi-disciplinary approach that addresses your complete financial picture — not just a single transaction.
              </p>
              <div className="flex gap-4">
                <Link href="/consultation" className="btn-gold px-6 py-3 rounded-full text-sm" id="about-cta-consult">
                  Work With Liz
                </Link>
                <Link href="#milestones" className="btn-outline px-6 py-3 rounded-full text-sm">
                  Our Journey
                </Link>
              </div>
            </div>

            {/* Portrait */}
            <div className="relative flex justify-center">
              <div
                className="absolute -inset-8 rounded-3xl opacity-30"
                style={{
                  background: "linear-gradient(135deg, rgba(201,168,76,0.2) 0%, rgba(20,184,166,0.15) 100%)",
                  filter: "blur(30px)",
                }}
              />
              <div
                className="relative w-full max-w-sm rounded-3xl overflow-hidden"
                style={{
                  aspectRatio: "3/4",
                  border: "1px solid rgba(201,168,76,0.2)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
                }}
              >
                <Image
                  src="/liz-estrada-portrait.png"
                  alt="Liz Estrada — Financial Expert with 20+ years of experience"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Experience badge */}
              <div
                className="absolute -right-4 top-8 px-5 py-4 rounded-2xl text-center"
                style={{
                  background: "#FFFFFF",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                }}
              >
                <span
                  className="font-serif font-bold text-3xl block"
                  style={{
                    background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  20+
                </span>
                <span className="text-xs uppercase tracking-wider" style={{ color: "#111827" }}>Years<br />Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24" style={{ background: "#F8FAFC" }}>
        <div className="container-xl">
          <div className="text-center mb-14">
            <div className="section-divider" />
            <h2 className="font-serif font-bold text-gray-900" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              The Values That Drive Everything
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass-card p-7 text-center">
                <span className="text-4xl mb-4 block">{v.icon}</span>
                <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#111827" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="milestones" className="py-24 bg-black">
        <div className="container-xl max-w-4xl">
          <div className="text-center mb-14">
            <div className="section-divider" style={{ background: "linear-gradient(90deg, #C9A84C, #E8C96A)" }} />
            <h2 className="font-serif font-bold text-white" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              20 Years of Impact
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(180deg, rgba(201,168,76,0.4), rgba(20,184,166,0.2), transparent)" }}
            />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-14 md:pl-0 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                    <div className="glass-card p-6" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.1)" }}>
                      <span
                        className="font-serif font-bold text-2xl block mb-2"
                        style={{
                          background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {m.year}
                      </span>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>{m.event}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div
                    className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full mt-6"
                    style={{
                      background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                      boxShadow: "0 0 12px rgba(201,168,76,0.5)",
                    }}
                  />

                  {/* Empty half for alternating */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-white">
        <div className="container-xl max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <div className="section-divider mx-auto mb-6" style={{ background: "linear-gradient(90deg, #C9A84C, #E8C96A)", width: "60px", height: "3px", borderRadius: "3px" }} />
            <h2 className="font-serif font-bold text-gray-900" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              Liz in Action
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A glimpse into Liz's professional journey, dedication to her clients, and community involvement.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="relative aspect-square rounded-2xl overflow-hidden group shadow-lg" style={{ border: "1px solid rgba(0,0,0,0.05)" }}>
                <Image
                  src={`/assets/Liz${num}.jpg`}
                  alt={`Liz Estrada - Gallery Image ${num}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadCaptureForm />
    </>
  );
}
