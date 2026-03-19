"use client";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0f0f0f] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-white font-bold text-xl tracking-tight">
            Novelist
          </a>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* CTA */}
          <a
            href="https://github.com/kimeko-lab/novelist/releases/download/v1.4.0/Novelist.Setup.1.4.0.exe"
            className="bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            Download Free Trial
          </a>
        </div>
      </div>
    </nav>
  );
}
