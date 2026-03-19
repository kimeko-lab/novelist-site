export default function Hero() {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
          <span className="text-gray-400 text-sm">Windows 10 &amp; 11 &nbsp;·&nbsp; v1.4.0 &nbsp;·&nbsp; 14-day free trial</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
          Write your novel.
          <br />
          <span className="text-amber-400">Keep it yours.</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
          A writing app built for long-form fiction — chapters, characters,
          timelines, and a clean editor that stays out of your way.
          One price, no subscription.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
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

        <p className="text-gray-600 text-sm mb-14">
          No payment info needed &nbsp;·&nbsp; 30-day money-back guarantee
        </p>

        {/* App window mockup */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-black/60">
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-[#141414]">
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
            </div>
            {/* Screenshot */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/app-screenshot.png"
              alt="Novelist app — editor view"
              className="w-full block"
            />
          </div>
          {/* Glow */}
          <div className="absolute -inset-4 bg-amber-500/5 rounded-2xl blur-2xl -z-10" />
        </div>
      </div>
    </section>
  );
}
