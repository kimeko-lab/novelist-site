'use client';
import { useState, useEffect, useRef } from 'react';

const scenarios = [
  {
    icon: "🔍",
    role: "Plot Auditor",
    description: "Catch inconsistencies before your readers do.",
    videoSlug: "demo-plot-auditor",
    label: "Catching a timeline inconsistency in Elena's arc",
  },
  {
    icon: "👤",
    role: "Character Developer",
    description: "Turn flat characters into people your readers remember.",
    videoSlug: "demo-character-dev",
    label: "Making Elena more active in Chapter 4",
  },
  {
    icon: "📝",
    role: "Scene Reviewer",
    description: "Make sure your key scenes land the way you intended.",
    videoSlug: "demo-scene-reviewer",
    label: "Checking if the Ch 6 confrontation feels earned",
  },
];

export default function AIShowcase() {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-advance every 18 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive(i => (i + 1) % scenarios.length);
    }, 18000);
    return () => clearInterval(timer);
  }, []);

  // Reload & play when tab changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [active]);

  const s = scenarios[active];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-4">
            See your creative team in action
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Every answer is grounded in your story — not generic advice.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {scenarios.map((sc, i) => (
            <button
              key={sc.role}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === i
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/20'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>{sc.icon}</span>
              <span>{sc.role}</span>
            </button>
          ))}
        </div>

        {/* Video player */}
        <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full block"
            style={{ aspectRatio: '1280 / 800' }}
          >
            <source src={`/demos/${s.videoSlug}.mp4`} type="video/mp4" />
          </video>
        </div>

        {/* Label */}
        <p className="text-center text-gray-500 text-sm mt-4">{s.label}</p>

      </div>
    </section>
  );
}
