export default function Hero() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
          Write Your Novel.
          <br />
          <span className="text-amber-400">Own Your Story.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          A focused writing app for Windows. One-time purchase — no
          subscription, no cloud, no compromise.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="https://novelist-app.com/download"
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg px-8 py-4 rounded-xl transition-colors w-full sm:w-auto"
          >
            Download Free Trial
          </a>
          <a
            href="https://novelist.lemonsqueezy.com/buy/1421407"
            className="border border-white/30 hover:border-white/60 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors w-full sm:w-auto"
          >
            Buy Now — $24.99
          </a>
        </div>

        {/* Trust line */}
        <p className="text-gray-500 text-sm mb-16">
          14-day free trial · No payment info needed · 30-day money-back
          guarantee
        </p>

        {/* Screenshot placeholder */}
        <div className="relative w-full aspect-video bg-[#1a1a1a] rounded-xl border border-white/10 flex items-center justify-center">
          <span className="text-gray-600 text-lg font-medium">
            Editor screenshot
          </span>
        </div>
      </div>
    </section>
  );
}
