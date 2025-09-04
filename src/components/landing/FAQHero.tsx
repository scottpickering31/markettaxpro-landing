"use client";

import React from "react";
import { AccordionFull } from "../local/Accordion";

const faqs = [
  {
    q: "What marketplaces do you support?",
    a: "Etsy and eBay sync live; Vinted and Depop import via CSV. We’re exploring additional integrations (e.g., Shopify, Amazon, TikTok Shop) based on demand—no hard dates yet, but you can start today with the supported flows.",
  },
  {
    q: "How often does MarketTaxPro sync my sales and fees?",
    a: "For live integrations (Etsy/eBay), new activity is pulled regularly and appears shortly after it’s available via the marketplace APIs. CSV imports (Vinted/Depop) update instantly when you upload a new file.",
  },
  {
    q: "Can I track multiple shops or marketplaces together?",
    a: "Absolutely. Connect as many shops as you need across supported marketplaces, and view combined totals or filter by shop. Exports can be per-shop or consolidated—whatever you prefer.",
  },
  {
    q: "How do you calculate ‘real’ profit?",
    a: "Profit reflects sales minus marketplace fees, payment fees (where available), shipping costs, refunds/returns, and any expenses you record. You can attach receipts and edit entries so the numbers match reality.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Where available we connect via official OAuth flows with read-only permissions, so we never see your marketplace passwords. Data is encrypted in transit and at rest, and you can disconnect any integration at any time from within your marketplace account or MarketTaxPro.",
  },
  {
    q: "What if I go over 100 transactions on the free plan?",
    a: "Upgrade anytime for unlimited history and full exports—your data stays intact. You can switch plans or cancel whenever you like; downgrading just re-applies free plan limits without deleting past records.",
  },
  {
    q: "Do you file my tax return?",
    a: "No. MarketTaxPro doesn’t submit returns to HMRC. We prepare clean, audit-ready figures (income, expenses, fees, shipping, and profit) and let you export them to CSV or PDF, so you can file confidently yourself or share them with an associate.",
  },
  {
    q: "Can I import past transactions and migrate existing data?",
    a: "Yes. You can bring in historical sales via CSV (and via live sync where the marketplace API provides history). Most sellers start by importing the current tax year, then add previous periods if needed.",
  },
];

export default function FAQHero() {
  return (
    <div className="mx-auto max-w-3xl py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <AccordionFull
        defaultValue="0"
        items={faqs.map((faq, i) => ({
          value: String(i),
          title: faq.q,
          content: <p>{faq.a}</p>,
        }))}
      />
    </div>
  );
}
