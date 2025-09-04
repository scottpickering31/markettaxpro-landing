import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Button } from "@/components/ui/button";
import React from "react";

const plans = [
  {
    name: "Free",
    price: "£0",
    blurb: "For getting started",
    bullets: [
      "Up to 100 transactions",
      "1 CSV import",
      "VAT tracker",
      "Email support",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "£9 / mo",
    blurb: "For active sellers",
    bullets: [
      "Unlimited transactions",
      "Etsy & eBay sync",
      "CSV + PDF exports",
      "Expenses & receipts",
      "Priority support",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
];

export default function page() {
  return (
    <div>
      <Header />
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-center text-2xl font-semibold">Simple pricing</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-gray-600">
          Start free, then upgrade when you’re ready. No hidden fees.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow ${
                p.featured ? "ring-2 ring-brand-500" : ""
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="text-xl font-bold">{p.price}</div>
              </div>
              <p className="mt-1 text-sm text-gray-600">{p.blurb}</p>

              <ul className="mt-4 space-y-2 text-sm">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button className="w-full">{p.cta}</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
