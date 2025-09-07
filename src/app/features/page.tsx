import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BlueGradient } from "@/styles/blue-gradient";
import { Check, Shield, Zap, LineChart } from "lucide-react";

// If you prefer the route /features, place this file at: app/features/page.tsx
export default function Page() {
  const core = [
    {
      title: "Automatic imports",
      desc: "Connect Etsy, eBay (and more soon) or upload CSVs — transactions appear instantly.",
      image: "/automatic-imports.png",
    },
    {
      title: "£1,000 allowance vs expenses",
      desc: "We compare both options and show which saves you the most tax.",
      image: "/allowance-expenses.png",
    },
    {
      title: "Clear profit summaries",
      desc: "Real profit after fees, shipping and expenses — always up to date.",
      image: "/clear-profit.png",
    },
  ];

  const pro = [
    {
      icon: Zap,
      title: "Smart automations",
      points: [
        "Auto-categorise common expenses",
        "Rules for suppliers & descriptions",
        "One-click bulk edits",
      ],
    },
    {
      icon: LineChart,
      title: "Analytics that matter",
      points: [
        "Trend lines for revenue & profit",
        "Best-selling products at a glance",
        "Month-by-month HMRC-ready totals",
      ],
    },
    {
      icon: Shield,
      title: "Built-in compliance",
      points: [
        "VAT threshold tracker (UK £90,000)",
        "Exportable evidence for Self Assessment",
        "Role-based access for your accountant",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      {/* Hero */}
      <section
        id="overview"
        className="mx-auto max-w-6xl px-6 pt-12 text-center"
      >
        <h1 className="text-4xl tracking-tight sm:text-5xl">
          Powerful features for{" "}
          <span
            className={`block font-bold underline underline-offset-8 sm:text-7xl mt-4 ${BlueGradient}`}
          >
            Marketplace Sellers
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          From automatic imports to clear profit summaries — everything you need
          to ditch spreadsheets and file with confidence.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button className="px-6 h-12" asChild>
            <Link
              href="https://app.markettaxpro.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Free
            </Link>
          </Button>
          <Button variant="outline" className="px-6 h-12" asChild>
            <Link href="#automations">See what’s inside</Link>
          </Button>
        </div>
      </section>

      {/* Core features grid */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {core.map((f) => (
            <article
              key={f.title}
              className="group relative flex flex-col justify-between rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              </div>
              <div className="mt-4">
                <Image
                  src={f.image}
                  alt={f.title}
                  width={520}
                  height={360}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
                  className="rounded-md border object-contain"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pro feature buckets */}
      <section id="automations" className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-center text-3xl font-semibold">
          Level up with{" "}
          <span
            className={`${BlueGradient} font-bold underline underline-offset-2`}
          >
            Smart Tools
          </span>
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pro.map((b) => (
            <div
              key={b.title}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <b.icon className="h-6 w-6" aria-hidden />
                <h3 className="font-semibold">{b.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {b.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4" aria-hidden />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Analytics preview */}
      <section id="analytics" className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Clear analytics</h3>
            <p className="mt-3 text-gray-600">
              Understand what’s working: top products, seasonal trends, and
              month‑by‑month profit. Export the exact numbers you need — no
              manual maths required.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4" /> Trend lines for revenue &
                profit
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4" /> Fee breakdowns across
                marketplaces
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4" /> CSV/PDF exports ready for
                HMRC
              </li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <Image
              src="/clear-profit.png"
              alt="Analytics preview"
              width={900}
              height={560}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-md object-contain"
            />
          </div>
        </div>
      </section>

      {/* Compliance callout */}
      <section id="compliance" className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Shield className="h-5 w-5" /> Stay compliant without the panic
          </h3>
          <p className="mt-2 text-gray-600">
            Get proactive alerts as you approach the UK VAT threshold (£90,000),
            and keep tidy records for your Self Assessment.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-700">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
              <Check className="h-4 w-4" /> VAT threshold tracker
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
              <Check className="h-4 w-4" /> Exportable evidence
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
              <Check className="h-4 w-4" /> Accountant access
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-16 text-center">
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold">Ready to try MarketTaxPro?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">
            Connect your shop and see your profit in minutes. Free plan
            available — upgrade any time.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button className="px-6 h-12" asChild>
              <Link
                href="https://app.markettaxpro.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started Free
              </Link>
            </Button>
            <Button variant="outline" className="px-6 h-12" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
