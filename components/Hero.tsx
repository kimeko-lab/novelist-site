"use client";

export default function Hero() {
  return (
    <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-violet-500 shadow shadow-violet-500 inline-block" />
          <span className="text-violet-400 text-sm">Windows 10 &amp; 11 &nbsp;·&nbsp; v2.2.0 &nbsp;·&nbsp; 14-day free trial</span>
        </div>

        {/* H1 */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
          Your novel&apos;s<br />
          <span className="text-violet-400">full creative team.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
          Brainstorm ideas, audit your plot, develop characters, and write —
          all in one app that knows your story inside out.
          Your data never leaves your machine.
        </p>

        {/* Role pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            "Brainstorming partner",
            "Plot auditor",
            "Writing coach",
            "Character developer",
            "Scene reviewer",
          ].map((role) => (
            <span
              key={role}
              className="bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-full text-xs font-semibold px-3 py-1"
            >
              {role}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
          <a
            href="https://github.com/kimeko-lab/novelist-releases/releases/download/v2.2.0/Novelist-Setup-2.2.0.exe"
            className="bg-violet-700 hover:bg-violet-600 text-white font-bold text-base px-10 py-4 rounded-lg transition-colors w-full sm:w-auto shadow-lg shadow-violet-700/30"
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
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-black/60">
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-[#141414]">
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="ml-3 text-xs text-white/30">Novelist — Chapter 3 · The Reveal</span>
            </div>

            {/* App layout: sidebar + editor + AI panel */}
            <div className="flex" style={{ height: "320px" }}>
              {/* Sidebar */}
              <div className="w-44 flex-shrink-0 bg-[#111] border-r border-white/6 p-3 flex flex-col gap-1">
                <div className="text-[10px] text-white/20 uppercase tracking-widest mb-2 px-1">Chapters</div>
                {["Ch 1 · The Beginning", "Ch 2 · The Turn"].map((ch) => (
                  <div key={ch} className="text-[11px] text-white/30 px-2 py-1.5 rounded">{ch}</div>
                ))}
                <div className="text-[11px] text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2 py-1.5 rounded">
                  ▸ Ch 3 · The Reveal
                </div>
                <div className="mt-3 text-[10px] text-white/20 uppercase tracking-widest mb-1 px-1">Tools</div>
                {["Characters", "Plot", "Codex", "Notes"].map((t) => (
                  <div key={t} className="text-[11px] text-white/25 px-2 py-1.5 rounded">{t}</div>
                ))}
              </div>

              {/* Editor */}
              <div className="flex-1 bg-[#1a1a1a] p-6 flex flex-col gap-2">
                <div className="h-2 rounded bg-white/8 w-4/5" />
                <div className="h-2 rounded bg-white/8 w-11/12" />
                <div className="h-2 rounded bg-white/8 w-3/4" />
                <div className="h-2 rounded bg-white/8 w-full mt-3" />
                <div className="h-2 rounded bg-white/8 w-5/6" />
                <div className="h-2 rounded bg-white/8 w-10/12" />
                <div className="h-2 rounded bg-white/8 w-2/3" />
                <div className="h-2 rounded bg-white/8 w-full mt-3" />
                <div className="h-2 rounded bg-white/8 w-9/12" />
                <div className="h-2 rounded bg-white/8 w-4/5" />
              </div>

              {/* AI Panel */}
              <div className="w-56 flex-shrink-0 bg-[#111] border-l border-violet-500/20 flex flex-col">
                <div className="px-3 py-2.5 border-b border-violet-500/15 text-[11px] font-semibold text-violet-400">
                  ✦ AI Assistant
                </div>
                <div className="flex-1 p-3 flex flex-col gap-2 justify-end">
                  <div className="self-end bg-violet-500/15 text-violet-200 text-[10px] rounded-lg rounded-br-sm px-2.5 py-2 max-w-[90%] leading-relaxed text-right">
                    Does Elena&apos;s motive make sense in ch 3?
                  </div>
                  <div className="self-start bg-white/5 text-white/55 text-[10px] rounded-lg rounded-bl-sm px-2.5 py-2 max-w-[95%] leading-relaxed">
                    Based on her backstory in ch 1, her motive is consistent — but the reveal feels too abrupt. Consider adding a hesitation beat before she acts.
                  </div>
                </div>
                <div className="px-3 py-2 border-t border-white/6">
                  <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[10px] text-white/20">
                    Ask anything about your novel...
                  </div>
                </div>
              </div>
            </div>

            {/* Provider strip */}
            <div className="flex items-center justify-center gap-3 px-4 py-3 border-t border-white/6 flex-wrap">
              <span className="text-[10px] text-white/25">Works with</span>
              {["Claude", "GPT-4o", "Gemini", "Groq", "Ollama", "+5 more"].map((p) => (
                <span
                  key={p}
                  className="text-[10px] font-medium text-white/35 bg-white/4 border border-white/8 rounded px-2 py-0.5"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Glow */}
          <div className="absolute -inset-4 bg-violet-500/5 rounded-2xl blur-2xl -z-10" />
        </div>

      </div>
    </section>
  );
}
