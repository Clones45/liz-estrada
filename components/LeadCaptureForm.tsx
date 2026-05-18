"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  "Mortgage / Home Loan",
  "Credit Repair & Restoration",
  "Business Funding",
  "Refinancing",
  "Not Sure — Need Guidance",
];

export default function LeadCaptureForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: "#F9FAFB" }}
    >
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Info */}
          <div>
            <div className="section-divider" style={{ margin: "0 0 1.5rem" }} />
            <span
              className="text-xs font-semibold tracking-widest uppercase block mb-3"
              style={{ color: "var(--color-navy-700)" }}
            >
              Free Consultation
            </span>
            <h2
              className="font-serif font-bold mb-5"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", color: "#111827" }}
            >
              Take the First Step Toward Financial{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Freedom
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#111827" }}>
              Whether you&apos;re dreaming of homeownership, rebuilding your credit, or scaling your business — Liz will craft a personalized roadmap to get you there.
            </p>

            {/* Why us list */}
            <div className="space-y-4">
              {[
                { icon: "⭐", text: "Free, no-obligation strategy session" },
                { icon: "⚡", text: "Same-day or next-day response" },
                { icon: "🔒", text: "100% confidential consultation" },
                { icon: "🎯", text: "Customized action plan included" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm" style={{ color: "#111827" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div
              className="mt-10 p-5 rounded-2xl"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
              }}
            >
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#111827" }}>
                Prefer to reach out directly?
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+15597370273"
                  className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold-500"
                  style={{ color: "var(--color-navy-700)" }}
                  id="contact-phone-link"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (559) 737-0273
                </a>
                <a
                  href="mailto:liz@lizestrada.com"
                  className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold-500"
                  style={{ color: "var(--color-navy-700)" }}
                  id="contact-email-link"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  liz@lizestrada.com
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="glass-card p-8 md:p-10"
                id="lead-capture-form"
              >
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-6">
                  Request Your Free Consultation
                </h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-semibold tracking-wide uppercase mb-2" style={{ color: "#111827" }}>
                      Full Name *
                    </label>
                    <input
                      id="form-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-email" className="block text-xs font-semibold tracking-wide uppercase mb-2" style={{ color: "#111827" }}>
                        Email Address *
                      </label>
                      <input
                        id="form-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="form-phone" className="block text-xs font-semibold tracking-wide uppercase mb-2" style={{ color: "#111827" }}>
                        Phone Number *
                      </label>
                      <input
                        id="form-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(XXX) XXX-XXXX"
                        value={form.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-service" className="block text-xs font-semibold tracking-wide uppercase mb-2" style={{ color: "#111827" }}>
                      What financial solution do you need today? *
                    </label>
                    <div className="relative">
                      <select
                        id="form-service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="" disabled>Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <svg
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                        style={{ color: "#111827" }}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-message" className="block text-xs font-semibold tracking-wide uppercase mb-2" style={{ color: "#111827" }}>
                      Tell Us About Your Situation (Optional)
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={3}
                      placeholder="Brief description of your goals or current situation..."
                      value={form.message}
                      onChange={handleChange}
                      className="form-input resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  id="form-submit"
                  disabled={loading}
                  className="btn-gold w-full py-4 rounded-xl text-sm mt-6 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Submit & Request Consultation"
                  )}
                </button>

                <p className="text-center text-xs mt-4" style={{ color: "#111827" }}>
                  🔒 Your information is 100% secure and never shared.
                </p>
              </form>
            ) : (
              <div
                className="glass-card p-10 text-center"
                id="form-success-message"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(20,184,166,0.15)", border: "1px solid rgba(20,184,166,0.3)" }}
                >
                  <svg className="w-8 h-8" style={{ color: "#14B8A6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-2xl text-gray-900 mb-3">
                  Thank You, {form.name.split(" ")[0]}!
                </h3>
                <p className="mb-6" style={{ color: "#111827" }}>
                  Your consultation request has been received. Liz will reach out within 24 hours to schedule your personalized strategy session.
                </p>
                <Link href="/" className="btn-teal px-6 py-3 rounded-full text-sm inline-block">
                  Return Home
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
