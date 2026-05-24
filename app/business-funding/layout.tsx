import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Funding",
  description:
    "Strategic business funding solutions: unsecured lines of credit, SBA loans, startup capital, and corporate credit building. Scale your business today.",
};

export default function BusinessFundingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
