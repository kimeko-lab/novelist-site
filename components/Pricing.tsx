const includedFeatures = [
  "Distraction-free editor with word count & auto-save",
  "Drag-and-drop chapter & scene organization",
  "Character profiles & codex",
  "Plot timeline & corkboard view",
  "Daily writing goals & session tracking",
  "AI writing assistant (requires separate LLM setup)",
  "Export to .docx and .txt",
  "All future updates — free forever",
  "30-day money-back guarantee",
  "No subscription, no cloud, no account required",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, honest pricing
          </h2>
          <p className="text-gray-400 text-lg">
            The most affordable dedicated novel writing app available.
          </p>
        </div>

        {/* Pricing card */}
        <div className="max-w-md mx-auto bg-[#1a1a1a] border border-amber-500/40 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl shadow-amber-500/5">
          {/* Badge */}
          <span className="bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            One-Time Purchase
          </span>

          {/* Price */}
          <div className="mb-2">
            <span className="text-6xl font-bold text-white">$24.99</span>
          </div>
          <p className="text-gray-500 text-sm mb-8">
            pay once · use forever
          </p>

          {/* Feature list */}
          <ul className="text-left w-full space-y-3 mb-8">
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Buy button */}
          <a
            href="https://novelist.lemonsqueezy.com/buy/1421407"
            className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg py-4 rounded-xl transition-colors block text-center mb-4"
          >
            Buy Now — $24.99
          </a>

          {/* Trial link */}
          <a
            href="https://novelist-app.com/download"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            or Download Free Trial
          </a>

          {/* Money-back badge */}
          <div className="mt-8 flex items-center gap-2 text-gray-500 text-xs">
            <svg
              className="w-4 h-4 text-amber-500 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span>30-day money-back guarantee. No questions asked.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
