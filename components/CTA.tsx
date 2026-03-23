export default function CTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Start writing today.
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          14 days free. No payment info. Nothing to lose.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://github.com/kimeko-lab/novelist-releases/releases/download/v2.1.2/Novelist-Setup-2.1.2.exe"
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-base px-10 py-4 rounded-lg transition-colors w-full sm:w-auto shadow-lg shadow-amber-500/20"
          >
            Download Free Trial
          </a>
          <a
            href="https://novelist.lemonsqueezy.com/checkout/buy/f9a9f268-4ac1-46f0-8ed7-1370b35f17c9"
            className="bg-white/10 hover:bg-white/15 border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-lg transition-colors w-full sm:w-auto"
          >
            Buy Now — $49
          </a>
        </div>
        <p className="text-gray-600 text-sm mt-5">
          Windows 10 &amp; 11 &nbsp;·&nbsp; 30-day money-back guarantee
        </p>
      </div>
    </section>
  );
}
