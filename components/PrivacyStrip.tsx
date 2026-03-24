const items = [
  "10 AI providers",
  "Works fully offline (Ollama)",
  "Bring your own API key",
  "Nothing stored on our servers",
];

export default function PrivacyStrip() {
  return (
    <div
      className="py-4 px-4"
      style={{
        background: "rgba(139,92,246,0.06)",
        borderTop: "1px solid rgba(139,92,246,0.12)",
        borderBottom: "1px solid rgba(139,92,246,0.12)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <div className="flex items-center gap-2 text-violet-400">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-sm font-semibold">Your data, your rules</span>
        </div>
        <span className="hidden sm:block text-white/10">·</span>
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-4">
            <span className="text-sm text-violet-400/70">{item}</span>
            {i < items.length - 1 && <span className="text-white/10 hidden sm:inline">·</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
