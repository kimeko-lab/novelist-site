const includedFeatures = [
  "Full editor — rich text, auto-save, word count",
  "Chapter & scene structure with drag-to-reorder",
  "Character profiles & relationship map",
  "Plot timeline, corkboard & notes",
  "Find & replace across entire manuscript",
  "Lore & codex for world-building",
  "Export to .docx and .txt",
  "AI writing assistant (bring your own API key)",
  "All future updates, free",
  "Works fully offline — no account needed",
  "30-day money-back guarantee",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            One-time purchase. No subscription. No renewal.
          </h2>
          <p className="text-gray-400 text-lg">
            Pay once and the app is yours — no subscription, no renewal, no upsell.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-[#1a1a1a] border border-amber-500/30 rounded-2xl p-10 flex flex-col items-center text-center shadow-xl shadow-black/40">
          {/* Badge */}
          <span className="bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Lifetime license
          </span>

          {/* Price */}
          <div className="mb-1">
            <span className="text-6xl font-bold text-white">$49</span>
          </div>
          <p className="text-gray-600 text-sm mb-8">one-time · Windows 10 &amp; 11</p>

          {/* Feature list */}
          <ul className="text-left w-full space-y-2.5 mb-8">
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Buy button */}
          <a
            href="https://novelist.lemonsqueezy.com/checkout/buy/f9a9f268-4ac1-46f0-8ed7-1370b35f17c9"
            className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-base py-3.5 rounded-lg transition-colors block text-center mb-3"
          >
            Buy Now — $49
          </a>

          <a
            href="https://github.com/kimeko-lab/novelist-releases/releases/download/v2.2.0/Novelist-Setup-2.2.0.exe"
            className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
          >
            Try free for 14 days →
          </a>

          {/* Money-back */}
          <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-gray-600 text-xs w-full justify-center">
            <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>30-day refund — no questions asked</span>
          </div>
        </div>
      </div>
    </section>
  );
}
