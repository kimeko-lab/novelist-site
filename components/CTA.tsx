export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Start writing today.
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          14 days free. No payment info. Nothing to lose.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://novelist-app.com/download"
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-base px-8 py-3.5 rounded-lg transition-colors w-full sm:w-auto"
          >
            Download Free Trial
          </a>
          <a
            href="https://novelist.lemonsqueezy.com/buy/1421407"
            className="bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold text-base px-8 py-3.5 rounded-lg transition-colors w-full sm:w-auto"
          >
            Buy Now — $24.99
          </a>
        </div>
        <p className="text-gray-600 text-sm mt-5">
          Windows 10 &amp; 11 &nbsp;·&nbsp; 30-day money-back guarantee
        </p>
      </div>
    </section>
  );
}
