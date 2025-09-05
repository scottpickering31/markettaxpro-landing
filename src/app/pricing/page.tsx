"use client";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BlueGradient } from "@/styles/blue-gradient";
import { useState } from "react";
import { Check, Info, Sparkles } from "lucide-react";

// In Next.js App Router, put this file at: app/pricing/page.tsx
export default function Page() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Free",
      badge: "Get started",
      prices: { monthly: 0, yearly: 0 },
      per: "/ forever",
      blurb: "For trying things out",
      features: [
        "Up to 100 transactions",
        "1 CSV import",
        "VAT tracker",
        "Email support",
      ],
      cta: "Get Started",
      href: "/",
      featured: false,
    },
    {
      name: "Pro",
      badge: "Most popular",
      prices: { monthly: 9, yearly: 84 }, // £7/mo effective (30% off)
      per: billing === "yearly" ? "/ year" : "/ month",
      blurb: "For active sellers",
      features: [
        "Unlimited transactions",
        "Etsy & eBay sync",
        "CSV + PDF exports",
        "Expenses & receipts",
        "Priority support",
      ],
      cta: billing === "yearly" ? "Start Annual" : "Start Monthly",
      href: "/",
      featured: true,
    },
    {
      name: "Business",
      badge: "For teams",
      prices: { monthly: 19, yearly: 180 }, // £15/mo effective
      per: billing === "yearly" ? "/ year" : "/ month",
      blurb: "For multi-shop or accountant-led",
      features: [
        "Everything in Pro",
        "Up to 5 connected shops",
        "Role-based access",
        "Advanced analytics",
        "Dedicated support window",
      ],
      cta: billing === "yearly" ? "Contact Sales" : "Contact Sales",
      href: "/contact",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-12 text-center">
        <h1 className="text-4xl tracking-tight sm:text-5xl">
          Simple pricing that{" "}
          <span
            className={`block font-bold underline underline-offset-6 sm:text-6xl mt-4 ${BlueGradient}`}
          >
            Grows with your Shop
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Start free, then upgrade when you’re ready. No hidden fees.
        </p>

        {/* Billing toggle */}
        <div className="mt-8 inline-flex items-center gap-3 rounded-full border bg-white/70 px-2 py-2 shadow-sm backdrop-blur">
          <button
            onClick={() => setBilling("monthly")}
            className={`rounded-full px-4 py-1.5 text-sm transition cursor-pointer ${
              billing === "monthly"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            aria-pressed={billing === "monthly"}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`rounded-full px-4 py-1.5 text-sm transition cursor-pointer ${
              billing === "yearly"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            aria-pressed={billing === "yearly"}
          >
            Yearly <span className="ms-1 text-xs opacity-80">(save ~30%)</span>
          </button>
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => {
            const price =
              billing === "yearly" ? p.prices.yearly : p.prices.monthly;
            return (
              <div
                key={p.name}
                className={`relative rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow${
                  p.featured ? "ring-2 ring-blue-600" : ""
                }`}
              >
                {p.badge && (
                  <div className="absolute -top-3 left-4 rounded-full border bg-white px-2.5 py-1 text-xs font-medium shadow-sm">
                    {p.badge}
                  </div>
                )}
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold">
                      £{price}
                      <span className="ms-1 text-sm font-normal text-gray-600">
                        {p.per}
                      </span>
                    </div>
                    {p.name === "Pro" && billing === "yearly" && (
                      <div className="text-xs text-green-700">
                        £7/mo effective
                      </div>
                    )}
                    {p.name === "Business" && billing === "yearly" && (
                      <div className="text-xs text-green-700">
                        £15/mo effective
                      </div>
                    )}
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-600">{p.blurb}</p>

                <ul className="mt-4 space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <Button className="w-full" asChild>
                    <Link href={p.href}>{p.cta}</Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="border-b p-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Sparkles className="h-5 w-5" /> Compare plans
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 text-sm">
            <div className="p-4 font-medium">Feature</div>
            <div className="p-4 font-medium">Free</div>
            <div className="p-4 font-medium">Pro</div>
            <div className="p-4 font-medium">Business</div>

            {[
              ["Transactions", "100", "Unlimited", "Unlimited"],
              ["CSV Imports", "1", "Unlimited", "Unlimited"],
              ["Marketplace sync (Etsy/eBay)", "—", "Included", "Included"],
              ["Exports (CSV/PDF)", "—", "Included", "Included"],
              ["Receipts & expenses", "—", "Included", "Included"],
              ["Role-based access", "—", "—", "Included"],
              ["Support", "Email", "Priority", "Priority"],
            ].map((row, i) => (
              <>
                <div key={`h-${i}`} className="p-4 border-t bg-gray-50">
                  {row[0]}
                </div>
                <div key={`f-${i}`} className="p-4 border-t">
                  {row[1]}
                </div>
                <div key={`p-${i}`} className="p-4 border-t">
                  {row[2]}
                </div>
                <div key={`b-${i}`} className="p-4 border-t">
                  {row[3]}
                </div>
              </>
            ))}
          </div>
          <div className="border-t p-4 text-xs text-gray-600 flex items-start gap-2">
            <Info className="mt-0.5 h-4 w-4" /> Prices in GBP. VAT handled at
            checkout where applicable.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-center text-2xl font-semibold">Pricing FAQ</h2>
        <div className="mx-auto mt-6 grid max-w-3xl gap-4">
          {[
            {
              q: "Can I switch plans later?",
              a: "Yes, you can upgrade or downgrade any time. Changes prorate automatically.",
            },
            {
              q: "Do you offer a free trial?",
              a: "Yes. Pro starts with a free trial — no credit card required to begin.",
            },
            {
              q: "What happens if I hit the VAT threshold?",
              a: "You’ll get proactive alerts as you approach £90,000 in 12‑month turnover, with guidance to stay compliant.",
            },
          ].map((f) => (
            <div key={f.q} className="rounded-xl border bg-white p-5 shadow-sm">
              <div className="font-medium">{f.q}</div>
              <p className="mt-1 text-sm text-gray-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-16 text-center">
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold">Ready to get started?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">
            Connect your shop and see your profit in minutes. Free plan
            available — upgrade any time.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button className="px-6 h-12" asChild>
              <Link href="/">Get Started Free</Link>
            </Button>
            <Button variant="outline" className="px-6 h-12" asChild>
              <Link href="/features">Explore Features</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
