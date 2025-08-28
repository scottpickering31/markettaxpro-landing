const DESC =
  "Accruwise securely connects to Etsy via the official API to import sales, fees and payouts. " +
  "We organize data into clear summaries, compare the UK £1,000 trading allowance vs real expenses, " +
  "track VAT turnover, and generate CSV/PDF exports for HMRC filing. Read-only. No scraping."; // ~300 chars

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-indigo-600" aria-hidden />
          <span className="font-semibold">Accruwise</span>
        </div>
      </header>

      <section className="mt-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Bookkeeping & tax support for{" "}
          <span className="text-indigo-600">Etsy & Ebay</span> sellers
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Bookkeeping and tax support for Etsy, eBay, and marketplace sellers.
        </p>
        <p className="mt-3 text-gray-700">{DESC}</p>
      </section>

      <section id="contact" className="mt-20 rounded-lg border p-6">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-gray-600">
          Email:{" "}
          <a
            className="text-indigo-700 underline"
            href="mailto:hello@accruwise.com"
          >
            scottpickering31@gmail.com
          </a>
        </p>
        <p className="mt-1 text-gray-600">
          For Etsy developer review: This site represents the Accruwise
          application. We use Etsy’s official API (OAuth2) to import seller
          transactions and provide bookkeeping summaries.{" "}
          <strong>Read-only access.</strong>
        </p>
      </section>

      <footer className="mt-16 border-t pt-6 text-xs text-gray-500">
        © {new Date().getFullYear()} Accruwise ·{" "}
        <a href="/privacy" className="hover:underline">
          Privacy
        </a>{" "}
        ·{" "}
        <a href="/terms" className="hover:underline">
          Terms
        </a>
      </footer>
    </main>
  );
}
