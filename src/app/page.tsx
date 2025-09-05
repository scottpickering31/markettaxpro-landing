import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import FAQHero from "@/components/landing/FAQHero";
import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/local/Carousel";
import ParallaxPlaceholder from "@/components/landing/ParallaxPlaceholder";
import { BlueGradient } from "@/styles/blue-gradient";

const features = [
  {
    title: "Automatic imports",
    description:
      "Connect Etsy or eBay directly, or upload CSVs from Vinted/Depop — your transactions appear instantly.",
    image: "/automatic-imports.png",
  },
  {
    title: "£1,000 allowance vs expenses",
    description:
      "We do the maths and show you which option saves you the most tax.",
    image: "/allowance-expenses.png",
  },
  {
    title: "Clear profit summaries",
    description:
      "See your real profit after fees, shipping, and expenses, updated in real time.",
    image: "/clear-profit.png",
  },
  {
    title: "One-click exports",
    description:
      "Download your year’s numbers in CSV or PDF, ready to file in your Self Assessment.",
    image: "/exports.png",
  },
  {
    title: "VAT threshold tracking",
    description:
      "Alerts when your 12-month turnover approaches £90,000 so you never get caught out.",
    image: "/vat-threshold.png",
  },
  {
    title: "Receipts in one place",
    description:
      "Upload photos of packaging, postage or travel receipts — no more shoeboxes of paper.",
    image: "/receipts.png",
  },
];

const testimonials = [
  {
    quote:
      "I used to dread tax season — now I just log in and everything's already organised. It’s saved me hours every week!",
    author: "Sophie Turner, Etsy shop owner",
    headshot: "/sophie-turner.png",
  },
  {
    quote:
      "The VAT alert gave me time to prepare instead of panicking. It’s like having a personal accountant in my pocket.",
    author: "James Whitfield, eBay seller",
    headshot: "/james-whitfield.png",
  },
  {
    quote:
      "MarketTaxPro took the stress out of tracking my expenses. I can finally focus on growing my shop instead of spreadsheets.",
    author: "Ella Richards, Vinted seller",
    headshot: "/ella-richards.png",
  },
  {
    quote:
      "I sell across Depop and Etsy, and having all my transactions in one place has been a total game-changer.",
    author: "Kevin Chiu, Depop & Etsy seller",
    headshot: "/kevin-chiu.png",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <ParallaxPlaceholder
        image="/mountains-600x600.jpg"
        side="left"
        width={250}
        height={250}
        top={260}
        speed={0.7}
        rotation={30}
      />
      <ParallaxPlaceholder
        image="/space-600x600.jpg"
        side="right"
        width={250}
        height={250}
        top={200}
        speed={0.7}
        rotation={-25}
      />
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-10 text-center">
        <h1 className="mt-6 text-4xl tracking-tight sm:text-5xl">
          Taxes made simple for{" "}
          <span
            className="block text-brand-700 font-bold underline underline-offset-8 decoration-blue-600 sm:text-7xl 
               bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 
               bg-clip-text text-transparent mt-6"
          >
            Marketplace sellers
          </span>
        </h1>
        <p className="mx-auto mt-10 max-w-2xl text-lg text-gray-600">
          Connect your shops, track profit, compare the £1,000 trading allowance
          vs expenses, and export the exact numbers you need for HMRC.
        </p>

        <p className="mx-auto max-w-2xl text-lg font-bold text-gray-900 mt-6">
          No spreadsheets.
        </p>

        <p className="mx-auto max-w-2xl text-lg font-bold text-gray-900 mt-2">
          No stress.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Button className="px-6 h-12">
            <Link href="/">Get Started Free</Link>
          </Button>
          <Button variant="outline" className="px-6 h-12" asChild>
            <Link href="/features">Learn More</Link>
          </Button>
        </div>
        <p className="mt-6 text-xs text-gray-500">
          Free plan available • Upgrade anytime
        </p>
      </section>

      {/* Carousel */}

      <section className="w-3/4 mx-auto flex items-center justify-center z-0 relative">
        <Carousel height={250} speed={50} pauseOnHover={false} />
      </section>

      {/* Features */}
      <section
        id="features"
        className="mx-auto max-w-6xl px-6 py-4 relative z-10"
      >
        <h2 className="text-center text-4xl">
          Everything you need,{" "}
          <span
            className={`font-bold underline underline-offset-2 mt-6 ${BlueGradient}`}
          >
            nothing you don’t
          </span>
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {features.map((f) => (
            <Link href={"/features"} key={f.title}>
              <article
                key={f.title}
                className="flex flex-col justify-between h-full rounded-xl border bg-white p-5 shadow-sm transition hover:shadow cursor-pointer hover:scale-105"
              >
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{f.description}</p>
                </div>
                <Image
                  src={f.image}
                  alt={f.title}
                  className="mt-4"
                  width={400}
                  height={400}
                />
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-14 relative z-10">
        <h2 className="text-center text-2xl font-semibold">
          Trusted by{" "}
          <span
            className={`${BlueGradient} font-bold underline underline-offset-2`}
          >
            Marketplace Sellers
          </span>
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <p className="text-gray-800 p-4">“{t.quote}”</p>
              <div className="flex flex-row gap-4 items-center justify-evenly">
                <div className="relative h-34 w-34 overflow-hidden rounded-full hover:scale-105 cursor-pointer">
                  <Image src={t.headshot} alt={`${t.author} headshot`} fill />
                </div>

                <footer className="mt-3 text-sm text-gray-600">
                  — {t.author}
                </footer>
              </div>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQHero />

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-16 text-center">
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold">
            Ready to ditch the spreadsheets?
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">
            Connect your shop and see your profit in minutes. Upgrade any time.
          </p>
          <div className="mt-6">
            <Button className="px-6">Get Started Free</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
