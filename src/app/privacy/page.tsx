export default function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <p className="mt-3 text-gray-600">
        We connect to Etsy via OAuth with your consent and fetch read-only
        sales/financial data to provide summaries and exports. We do not post,
        list, or modify your shop. For access or deletion, email{" "}
        <a
          className="text-indigo-700 underline"
          href="mailto:hello@accruwise.com"
        >
          hello@accruwise.com
        </a>
        .
      </p>
    </main>
  );
}
