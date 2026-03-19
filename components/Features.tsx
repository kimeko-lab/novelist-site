const features = [
  {
    icon: "✍️",
    title: "Distraction-Free Editor",
    description:
      "A clean, focused writing environment with live word count and auto-save every 1.5 seconds. Your progress is never lost.",
    screenshot: "Editor screenshot",
  },
  {
    icon: "📂",
    title: "Drag & Drop Organization",
    description:
      "Organize your chapters and scenes effortlessly. Drag to reorder, restructure your story with ease.",
    screenshot: "Chapter organization screenshot",
  },
  {
    icon: "🧑‍🤝‍🧑",
    title: "Character Profiles & Codex",
    description:
      "Build rich character profiles and a reference codex. Keep all your story lore in one place.",
    screenshot: "Character profiles screenshot",
  },
  {
    icon: "📅",
    title: "Plot Timeline & Corkboard",
    description:
      "Visualize your story's structure with an interactive timeline and corkboard view for plotting and outlining.",
    screenshot: "Timeline screenshot",
  },
  {
    icon: "🎯",
    title: "Daily Writing Goals",
    description:
      "Set daily word count targets and track your writing sessions. Build the habit that finishes novels.",
    screenshot: "Writing goals screenshot",
  },
  {
    icon: "🤖",
    title: "AI Writing Assistant",
    description:
      "Get writing suggestions and prompts from an AI assistant. Connects to a local LLM you set up separately — your writing stays private.",
    screenshot: "AI assistant screenshot",
  },
  {
    icon: "🔒",
    title: "One-Time Purchase, No Cloud",
    description:
      "Pay once, use forever. No subscription, no account required. Your stories live on your computer — not someone else's server.",
    screenshot: "Privacy screenshot",
  },
  {
    icon: "📤",
    title: "Export to .docx & .txt",
    description:
      "When you're ready to share, export your manuscript to Microsoft Word or plain text format in one click.",
    screenshot: "Export screenshot",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Everything you need to finish your novel
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Novelist gives you all the tools serious writers need — without the
            bloat or the monthly bill.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6 flex flex-col gap-4"
            >
              {/* Screenshot placeholder */}
              <div className="w-full aspect-video bg-[#252525] rounded-lg border border-white/10 flex items-center justify-center">
                <span className="text-gray-600 text-sm font-medium text-center px-4">
                  {feature.screenshot}
                </span>
              </div>

              {/* Icon + Title */}
              <div className="flex items-start gap-3">
                <span className="text-2xl">{feature.icon}</span>
                <div>
                  <h3 className="text-white font-semibold text-lg leading-tight">
                    {feature.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
