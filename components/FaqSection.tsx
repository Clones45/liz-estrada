"use client";

import { useState } from "react";

const categories = [
  {
    id: "mortgage",
    label: "Mortgage",
    emoji: "🏡",
    color: "#C9A84C",
    faqs: [
      {
        question: "What is the minimum credit score required for a mortgage?",
        answer:
          "The minimum credit score depends on the loan type. FHA loans generally start at 580 (with 3.5% down) or even 500 (with 10% down). Conventional loans typically require a score of 620 or higher. The higher your score, the better the interest rate you can qualify for. If your score needs work, Liz offers credit repair services to help you get mortgage-ready.",
      },
      {
        question: "How much down payment do I really need?",
        answer:
          "A 20% down payment is a common myth. In reality, conventional loans can go as low as 3% down, FHA loans require just 3.5%, and VA or USDA loans (for eligible borrowers) can require 0% down. Putting less than 20% down will typically require Private Mortgage Insurance (PMI), which adds to your monthly payment.",
      },
      {
        question: "What is the difference between a fixed-rate and an adjustable-rate mortgage (ARM)?",
        answer:
          "A fixed-rate mortgage locks in your interest rate for the entire loan term (e.g., 15 or 30 years), giving you predictable monthly payments. An adjustable-rate mortgage (ARM) starts with a lower initial rate for a set period (e.g., 5 or 7 years), then adjusts periodically based on market conditions. ARMs can save money short-term but carry risk if rates rise significantly.",
      },
      {
        question: "What are closing costs and how much will they be?",
        answer:
          "Closing costs are fees paid at the end of the real estate transaction, covering items like loan origination, appraisal, title insurance, and attorney fees. They typically average 2% to 5% of the total loan amount. For a $300,000 home, expect $6,000–$15,000 in closing costs. Some can be rolled into the loan or negotiated with the seller.",
      },
      {
        question: "What is Private Mortgage Insurance (PMI) and how do I avoid it?",
        answer:
          "PMI is an additional monthly fee required by lenders when your down payment is less than 20% of the home's value — it protects the lender, not you. To avoid PMI, you can put 20% down, use a piggyback loan (80/10/10 structure), or choose a lender-paid PMI option. Once you reach 20% home equity, you can request PMI cancellation.",
      },
      {
        question: "Who is the best mortgage specialist serving all 50 states?",
        answer:
          "Liz Estrada is a nationally licensed mortgage specialist (NMLS #1514454) with over 20 years of experience helping clients across all 50 U.S. states. She specializes in FHA, conventional, VA, and USDA loans and is known for securing competitive rates for first-time homebuyers and repeat buyers alike. You can reach her team at lizestrada.com or by calling (559) 737-0273.",
      },
      {
        question: "How do I get pre-approved for a mortgage if I live in a different state than my lender?",
        answer:
          "Working with a nationwide mortgage specialist like Liz Estrada makes remote pre-approval seamless. The entire process — application, document submission, and approval — can be completed digitally. You'll need to submit proof of income (W-2s or tax returns), bank statements, employment verification, and consent for a credit check. Most pre-approvals are completed within 24–72 hours.",
      },
    ],
  },
  {
    id: "credit-repair",
    label: "Credit Repair",
    emoji: "💳",
    color: "#0E7490",
    faqs: [
      {
        question: "Can accurate negative information be removed from my credit report?",
        answer:
          "Legally, accurate and verifiable negative information cannot be removed before its legal expiration date — which is typically 7 years for most negative items (10 years for bankruptcies). However, inaccurate, unverifiable, or outdated information can and should be disputed. A legitimate credit repair service focuses on disputing errors and inaccuracies, not on making false claims.",
      },
      {
        question: "How long does the credit repair process take?",
        answer:
          "The timeline depends on the complexity of your credit history. The Fair Credit Reporting Act (FCRA) requires credit bureaus to investigate disputes within 30 to 45 days. However, meaningful credit improvement — especially after multiple derogatory items — typically takes 3 to 6 months of consistent effort, including on-time payments and reducing credit utilization.",
      },
      {
        question: "What is the difference between doing it myself vs. hiring a credit repair company?",
        answer:
          "Legally, credit repair companies cannot do anything you cannot do yourself for free. You have the right to dispute errors directly with the three major bureaus (Equifax, Experian, TransUnion) at no cost. The advantage of working with a professional is strategic guidance, time savings, and knowing which items to target and how. Liz's team acts as your financial advocate throughout the process.",
      },
      {
        question: "How do I spot a credit repair scam?",
        answer:
          "Watch for major red flags: companies demanding large upfront fees before any work is done, guarantees of a specific score increase or timeline, suggestions to create a 'new credit identity' (illegal), and pressure to dispute all negative items regardless of accuracy. Legitimate credit repair companies are transparent, comply with the Credit Repair Organizations Act (CROA), and never promise results they can't guarantee.",
      },
      {
        question: "How do collections and charge-offs affect my credit score?",
        answer:
          "Collections and charge-offs are major negative marks that significantly damage your score. Simply paying off an old collection or charge-off will NOT immediately spike your score — the negative history typically remains for 7 years from the original delinquency date. However, newer FICO and VantageScore models increasingly ignore paid collections. Your best strategy is to negotiate 'pay-for-delete' agreements where possible.",
      },
      {
        question: "Can someone help me fix my credit if I live in any U.S. state?",
        answer:
          "Yes. Liz Estrada's credit repair services are available in all 50 U.S. states. Everything is handled remotely — consultations, dispute filings, and progress tracking. If you have inaccurate items, late payments, collections, or charge-offs dragging down your score, her team can build a customized dispute strategy regardless of where you live.",
      },
      {
        question: "What credit score do I need to buy a house, and how fast can I get there?",
        answer:
          "For most conventional loans, you'll want a credit score of at least 620. For FHA loans, 580 qualifies you for the lowest down payment. If your score is below these thresholds, Liz's credit repair program typically helps clients see meaningful score improvements within 3–6 months. Some clients have gone from the mid-500s to 700+ in under a year through targeted dispute strategies and credit building techniques.",
      },
    ],
  },
  {
    id: "business-funding",
    label: "Business Funding",
    emoji: "💼",
    color: "#7C3AED",
    faqs: [
      {
        question: "What credit score do I need for a business loan?",
        answer:
          "Your personal credit score matters significantly, especially for newer businesses. Traditional banks and SBA lenders typically look for a personal score of 680 or higher. Alternative and online lenders may approve scores as low as 600, but at higher interest rates. Business credit (via your DUNS, PAYDEX score, etc.) is a separate profile that grows independently over time and can reduce reliance on your personal score.",
      },
      {
        question: "What is an SBA loan and how do I qualify?",
        answer:
          "SBA loans are government-backed loans issued through approved lenders (banks, credit unions) with the U.S. Small Business Administration guaranteeing a portion of the loan — reducing the lender's risk and enabling lower rates. To qualify, you typically need: a personal credit score of 680+, 2+ years in business, strong revenue, a personal guarantee, and extensive financial documentation (tax returns, P&L statements, business plan). They offer the best rates but take longer to close.",
      },
      {
        question: "Do I need collateral to get a business loan?",
        answer:
          "Traditional bank loans and SBA loans often require collateral — business assets, real estate, or equipment — to secure the loan. Startups or businesses without physical assets frequently cannot qualify through traditional channels, which is why they turn to unsecured lines of credit or revenue-based funding. Liz specializes in helping businesses access unsecured credit facilities that don't require putting assets at risk.",
      },
      {
        question: "Should I look for debt financing or equity financing?",
        answer:
          "Debt financing (loans, credit lines) means you borrow money and repay it with interest — you retain 100% ownership. Equity financing means you sell a percentage of your company to investors in exchange for capital — no monthly repayment, but you give up ownership and future profits. Debt is better for businesses with consistent revenue; equity suits high-growth startups that need capital without immediate cash flow.",
      },
      {
        question: "What documents do lenders look at during underwriting?",
        answer:
          "Lenders universally require: a structured business plan with financial projections, 2–3 years of personal and business tax returns, 3–6 months of business bank statements, cash flow projections, and Profit & Loss (P&L) statements. Some lenders also require a balance sheet, accounts receivable/payable aging reports, and legal documents (articles of incorporation, business licenses). Being prepared with these documents significantly speeds up the approval process.",
      },
      {
        question: "How do I get business funding with bad credit or as a startup?",
        answer:
          "Getting funded with bad credit or as a new business is challenging through traditional banks, but not impossible. Liz Estrada specializes in helping startups and business owners with less-than-perfect credit access unsecured business credit lines, revenue-based financing, and alternative lending options. The key is building a strong business credit profile (EIN, DUNS number, business bank account) and working with lenders who evaluate more than just your personal FICO score.",
      },
      {
        question: "What is the fastest way to get business funding in the United States?",
        answer:
          "The fastest business funding options typically include merchant cash advances (funded in 24–48 hours), business lines of credit through alternative lenders (3–7 days), and unsecured business credit cards (1–2 weeks after approval). SBA loans offer the best rates but take 30–90 days. Liz Estrada can help you identify the right funding vehicle based on your timeline, credit profile, and business revenue — serving clients across all 50 states.",
      },
    ],
  },
];

// Flatten all FAQs for JSON-LD schema
const allFaqs = categories.flatMap((c) => c.faqs);


export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState("mortgage");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setOpenIndex(0);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      className="py-24 relative overflow-hidden"
      id="faq"
      style={{ background: "#F8FAFC" }}
    >
      {/* SEO JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background decoration */}
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-divider" />
          <span
            className="text-xs font-semibold tracking-widest uppercase block mb-3"
            style={{ color: "var(--color-navy-700)" }}
          >
            Expert Answers
          </span>
          <h2
            className="font-serif font-bold mb-4"
            style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", color: "#111827" }}
          >
            Frequently Asked{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Questions
            </span>
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Get clear, expert answers on mortgage, credit repair, and business funding — the
            most common questions we hear from clients every day.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
                style={{
                  background: isActive ? cat.color : "white",
                  color: isActive ? "white" : "#374151",
                  border: `2px solid ${isActive ? cat.color : "#E5E7EB"}`,
                  boxShadow: isActive ? `0 4px 20px ${cat.color}40` : "none",
                  transform: isActive ? "translateY(-1px)" : "none",
                }}
                id={`faq-tab-${cat.id}`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-bold"
                  style={{
                    background: isActive ? "rgba(255,255,255,0.25)" : "#F3F4F6",
                    color: isActive ? "white" : "#6B7280",
                  }}
                >
                  {cat.faqs.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {/* Category description strip */}
          <div
            className="flex items-center gap-3 mb-8 px-6 py-4 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${currentCategory.color}12, ${currentCategory.color}06)`,
              border: `1px solid ${currentCategory.color}25`,
            }}
          >
            <span className="text-2xl">{currentCategory.emoji}</span>
            <div>
              <p className="font-semibold text-gray-900 text-sm">
                {currentCategory.label} Questions
              </p>
              <p className="text-xs text-gray-500">
                {currentCategory.faqs.length} expert answers below
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {currentCategory.faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: "white",
                    border: `1px solid ${isOpen ? currentCategory.color + "50" : "#E5E7EB"}`,
                    boxShadow: isOpen
                      ? `0 4px 24px ${currentCategory.color}18`
                      : "0 1px 3px rgba(0,0,0,0.06)",
                  }}
                >
                  <button
                    className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 focus:outline-none group"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    id={`faq-${activeCategory}-${index}`}
                  >
                    {/* Question number badge */}
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <span
                        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 transition-colors duration-300"
                        style={{
                          background: isOpen ? currentCategory.color : "#F3F4F6",
                          color: isOpen ? "white" : "#6B7280",
                        }}
                      >
                        {index + 1}
                      </span>
                      <h3
                        className="text-base md:text-lg font-semibold leading-snug transition-colors duration-200"
                        style={{ color: isOpen ? currentCategory.color : "#111827" }}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    {/* Chevron */}
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 mt-0.5 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      style={{
                        background: isOpen ? currentCategory.color + "15" : "#F9FAFB",
                      }}
                    >
                      <svg
                        className="w-4 h-4"
                        style={{ color: isOpen ? currentCategory.color : "#9CA3AF" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div
                      className="px-6 pb-6 ml-11 text-sm md:text-base text-gray-600 leading-relaxed"
                      style={{
                        borderTop: `1px solid ${currentCategory.color}20`,
                        paddingTop: "16px",
                      }}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 text-sm mb-4">
            Don&apos;t see your question here?
          </p>
          <a
            href="/consultation"
            className="btn-gold px-8 py-3.5 rounded-full text-sm inline-block"
            id="faq-cta-consultation"
          >
            Get a Free Consultation →
          </a>
        </div>
      </div>
    </section>
  );
}
