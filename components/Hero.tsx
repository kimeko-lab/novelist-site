"use client";

import { useState, useEffect, useCallback } from "react";

const SCREENSHOTS = [
  { src: "/Screenshot 1.png", alt: "Novelist — writing editor", caption: "Distraction-free editor" },
  { src: "/Screenshot 2.png", alt: "Novelist — story overview", caption: "Story overview" },
  { src: "/Screenshot 3.png", alt: "Novelist — plot timeline", caption: "Plot timeline" },
  { src: "/Screenshot 4.png", alt: "Novelist — corkboard view", caption: "Corkboard view" },
  { src: "/Screenshot 5.png", alt: "Novelist — character map", caption: "Character relationship map" },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() => setActive((a) => (a - 1 + SCREENSHOTS.length) % SCREENSHOTS.length), []);
  const next = useCallback(() => setActive((a) => (a + 1) % SCREENSHOTS.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(next, 4000);
    return () => clearTimeout(t);
  }, [active, paused, next]);

  return (
    <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
          <span className="text-gray-400 text-sm">Windows 10 &amp; 11 &nbsp;·&nbsp; v2.1 &nbsp;·&nbsp; 14-day free trial</span>
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
            href="https://github.com/kimeko-lab/novelist/releases/download/v2.1.1/Novelist-Setup-2.1.1.exe"
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-base px-10 py-4 rounded-lg transition-colors w-full sm:w-auto shadow-lg shadow-amber-500/20"
          >
            Download Free Trial
          </a>
          <a
            href="https://novelist.lemonsqueezy.com/checkout/buy/f9a9f268-4ac1-46f0-8ed7-1370b35f17c9"
            className="bg-white/10 hover:bg-white/15 border border-white/25 text-white font-semibold text-base px-8 py-4 rounded-lg transition-colors w-full sm:w-auto"
          >
            Buy Now — $49
          </a>
        </div>

        <p className="text-gray-600 text-sm mb-12">
          No payment info needed &nbsp;·&nbsp; 30-day money-back guarantee
        </p>

        {/* App window mockup */}
        <div
          className="relative w-full max-w-5xl mx-auto group"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-black/60">
            {/* Window chrome — decorative dots only, no dynamic caption text */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-[#141414]">
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="ml-3 text-xs text-white/30">Novelist</span>
            </div>

            {/* Screenshot carousel
                - padding-bottom gives stable container height before images load (no layout jump)
                - all 5 images rendered + preloaded simultaneously
                - only active image visible via opacity, others opacity:0
                - top/right/bottom/left:0 fills the padding-box correctly (height:100% would resolve to 0)
            */}
            <div className="relative select-none" style={{ paddingBottom: "62.1%", height: 0 }}>
              {SCREENSHOTS.map((s, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  {...({ fetchPriority: i === 0 ? "high" : "low" } as object)}
                  style={{
                    position: "absolute",
                    top: 0, right: 0, bottom: 0, left: 0,
                    width: "100%",
                    objectFit: "cover",
                    display: "block",
                    // No crossfade: instant switch keeps caption always in sync with image
                    opacity: i === active ? 1 : 0,
                    pointerEvents: "none",
                  }}
                />
              ))}

              {/* Click left/right halves to navigate */}
              <button
                type="button"
                onMouseDown={e => e.preventDefault()}
                onClick={prev}
                className="absolute left-0 top-0 h-full w-1/2 cursor-w-resize z-10"
                aria-label="Previous screenshot"
              />
              <button
                type="button"
                onMouseDown={e => e.preventDefault()}
                onClick={next}
                className="absolute right-0 top-0 h-full w-1/2 cursor-e-resize z-10"
                aria-label="Next screenshot"
              />

              {/* Arrow hints on hover */}
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <div className="bg-black/50 rounded-full p-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <div className="bg-black/50 rounded-full p-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Dot navigation + caption — always in sync with active (no delay) */}
          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="flex items-center gap-2">
              {SCREENSHOTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); setPaused(false); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? "w-6 h-2 bg-amber-400" : "w-2 h-2 bg-white/20 hover:bg-white/50"
                  }`}
                  aria-label={`Screenshot ${i + 1}`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-400">{SCREENSHOTS[active].caption}</p>
          </div>

          {/* Glow */}
          <div className="absolute -inset-4 bg-amber-500/5 rounded-2xl blur-2xl -z-10" />
        </div>
      </div>
    </section>
  );
}
