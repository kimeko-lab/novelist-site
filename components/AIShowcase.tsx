const scenarios = [
  {
    icon: "🔍",
    role: "Plot Auditor",
    description: "Catch inconsistencies before your readers do.",
    user: "Is there anything inconsistent about Elena's timeline in the first half?",
    ai: "One gap: in ch 2 Elena says she hasn't been to the harbor in years, but in ch 5 there's a flashback placing her there 6 months ago. Also, her relationship with Marcus shifts from hostile to trusting without explanation between ch 4 and 5.",
    videoSlug: "demo-plot-auditor",
  },
  {
    icon: "👤",
    role: "Character Developer",
    description: "Turn flat characters into people your readers remember.",
    user: "Elena feels flat in ch 4. She's just reacting to events. How do I make her more active?",
    ai: "Her profile says she's driven by guilt over her father's death. Right now she's reactive because she's avoiding confrontation. Give her a small goal in ch 4 that connects to that guilt — even a minor one — and it'll create tension against the external plot.",
    videoSlug: "demo-character-dev",
  },
  {
    icon: "📝",
    role: "Scene Reviewer",
    description: "Make sure your key scenes land the way you intended.",
    user: "Does the confrontation scene in ch 6 feel earned?",
    ai: "The emotional beat lands, but it arrives too fast. You've built 5 chapters of tension — let the scene breathe. The line 'I never trusted you' hits harder if Marcus hesitates first. Consider adding 2–3 beats of silence before he speaks.",
    videoSlug: "demo-scene-reviewer",
  },
];

export default function AIShowcase() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            See your creative team in action
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Every answer is grounded in your story — not generic advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scenarios.map((s) => (
            <div
              key={s.role}
              className="bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-violet-500/30 transition-colors"
            >
              {/* Header */}
              <div className="px-5 py-4 border-b border-white/6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center text-base flex-shrink-0">
                  {s.icon}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{s.role}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{s.description}</div>
                </div>
              </div>

              {/* Demo video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-[8/5] object-cover"
              >
                <source src={`/demos/${s.videoSlug}.webm`} type="video/webm" />
                <source src={`/demos/${s.videoSlug}.mp4`} type="video/mp4" />
              </video>

              {/* Chat */}
              <div className="p-4 flex flex-col gap-3 flex-1">
                {/* User bubble */}
                <div className="self-end bg-violet-500/15 text-violet-200 text-xs rounded-xl rounded-br-sm px-3 py-2.5 max-w-[90%] leading-relaxed text-right">
                  {s.user}
                </div>
                {/* AI bubble */}
                <div className="self-start bg-white/5 text-white/60 text-xs rounded-xl rounded-bl-sm px-3 py-2.5 max-w-[95%] leading-relaxed">
                  {s.ai}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">
          Every response is grounded in your characters, plot lines, and world — not generic writing advice.
        </p>

      </div>
    </section>
  );
}
