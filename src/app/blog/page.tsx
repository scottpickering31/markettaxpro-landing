import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BlueGradient } from "@/styles/blue-gradient";

// Blog index page – place at app/blog/page.tsx
export default function page() {
  // Placeholder posts – replace with data from your CMS or filesystem
  const posts = [
    {
      slug: "getting-started-marketplace-taxes",
      title: "Getting started with marketplace taxes (UK)",
      excerpt:
        "A friendly primer on the £1,000 trading allowance vs. expenses, record-keeping, and what HMRC actually wants.",
      date: "2025-08-18",
      readingTime: "6 min read",
      image: "/placeholder.svg",
      tags: ["Basics", "HMRC"],
    },
    {
      slug: "etsy-ebay-fees-explained-2025",
      title: "Etsy & eBay fees explained in 2025",
      excerpt:
        "We break down listing, payment, and shipping fees so you can see your true profit per sale.",
      date: "2025-07-29",
      readingTime: "5 min read",
      image: "/placeholder.svg",
      tags: ["Fees", "Profit"],
    },
    {
      slug: "vat-threshold-tracking",
      title: "VAT threshold tracking: stay ahead of £90,000",
      excerpt:
        "How rolling 12‑month turnover works, when to register, and how MarketTaxPro keeps you warned.",
      date: "2025-06-12",
      readingTime: "4 min read",
      image: "/placeholder.svg",
      tags: ["VAT", "Compliance"],
    },
    {
      slug: "maximizing-expenses-deductions",
      title: "Maximizing your expense deductions as a marketplace seller",
      excerpt:
        "Learn which expenses you can claim, from shipping supplies to home office costs, and how to keep clean records for HMRC.",
      date: "2025-05-20",
      readingTime: "7 min read",
      image: "/placeholder.svg",
      tags: ["Expenses", "Tips"],
    },
    {
      slug: "depop-vinted-growth-hacks",
      title: "Growth hacks for Depop & Vinted sellers",
      excerpt:
        "Strategies to boost your visibility, close more sales, and grow your audience on resale marketplaces.",
      date: "2025-04-18",
      readingTime: "8 min read",
      image: "/placeholder.svg",
      tags: ["Growth", "Marketing"],
    },
    {
      slug: "year-end-tax-prep-checklist",
      title: "Year-end tax prep checklist for online sellers",
      excerpt:
        "Get ready for Self Assessment with this comprehensive checklist covering records, receipts, and filing tips.",
      date: "2025-03-05",
      readingTime: "6 min read",
      image: "/placeholder.svg",
      tags: ["Checklist", "HMRC"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-12 text-center">
        <h1 className="text-4xl tracking-tight sm:text-5xl">
          Insights for{" "}
          <span
            className={`block font-bold underline underline-offset-8 sm:text-6xl mt-4 ${BlueGradient}`}
          >
            Marketplace Sellers
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Guides, product updates and practical tips to grow your shop and stay
          compliant.
        </p>
      </section>

      {/* Posts list */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        {posts.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="mt-2 line-clamp-2 text-lg font-semibold tracking-tight">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border px-2.5 py-0.5 text-xs text-gray-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4">
                    <Button asChild className="w-full">
                      <Link href={`/blog/${post.slug}`}>Read article</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border bg-white p-10 text-center shadow-sm">
      <h3 className="text-lg font-semibold">No posts yet</h3>
      <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
        When you publish your first article it will appear here. You can start
        with company updates, guides, or feature announcements.
      </p>
      <div className="mt-6">
        <Button asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}

// Util: basic date formatter (kept here for simplicity)
function formatDate(input: string) {
  try {
    const d = new Date(input);
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return input;
  }
}
