import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credit Repair & Restoration",
  description:
    "Professional credit repair and restoration services: dispute inaccuracies, remove collections, optimize your credit score, and unlock financial freedom.",
};

export default function CreditRepairLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
