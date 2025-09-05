import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Button } from "@/components/ui/button";
import { BlueGradient } from "@/styles/blue-gradient";
import React from "react";

const faqs = [
  {
    q: "How does MarketTaxPro work?",
    a: "We automatically sync your marketplace data (Etsy, eBay, etc.), track expenses, and generate ready-to-file reports.",
  },
  {
    q: "Is my data secure?",
    a: "Yes, we use bank-grade encryption and never share your data with third parties.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely! You can upgrade, downgrade, or cancel your plan whenever you like with no hidden fees.",
  },
  {
    q: "Do you support VAT tracking?",
    a: "Yes, we proactively alert you as you approach the £90,000 VAT threshold so you can stay compliant.",
  },
  {
    q: "Which marketplaces do you integrate with?",
    a: "We currently support Etsy and eBay with Vinted, Depop, and more coming soon.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes, the Pro plan starts with a free trial so you can try all features without a credit card.",
  },
  {
    q: "What kind of support do you provide?",
    a: "We provide email support for all plans and priority support for Pro and Business subscribers.",
  },
  {
    q: "Can multiple team members access the same account?",
    a: "Yes, the Business plan includes role-based access so multiple people can collaborate securely.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      {/* FAQ Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-12 text-center">
        <h1 className="text-4xl tracking-tight sm:text-5xl">
          Frequently Asked{" "}
          <span
            className={`block font-bold underline underline-offset-8 sm:text-5xl mt-4 ${BlueGradient}`}
          >
            Questions
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Everything you need to know about MarketTaxPro.
        </p>
      </section>

      {/* FAQ List */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">{faq.q}</h3>
              <p className="mt-2 text-gray-600 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="mx-auto max-w-6xl px-6 pb-16 text-center">
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold">Still have questions?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">
            Reach out to our team — we&apos;re here to help you every step of
            the way.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Button variant="outline" className="px-6 h-12">
              Contact Support
            </Button>
            <Button className="px-6 h-12">Get Started Free</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
