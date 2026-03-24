import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AIShowcase from "@/components/AIShowcase";
import Features from "@/components/Features";
import PrivacyStrip from "@/components/PrivacyStrip";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const jsonLdSoftware = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Novelist",
  "operatingSystem": "Windows 10, Windows 11",
  "applicationCategory": "ProductivityApplication",
  "offers": {
    "@type": "Offer",
    "price": "49",
    "priceCurrency": "USD",
    "priceValidUntil": "2027-12-31",
    "availability": "https://schema.org/InStock",
  },
  "description": "A novel writing studio for Windows with an AI assistant that knows your story — characters, plot, codex, and more. 10 AI providers supported. One-time purchase, no subscription. Works fully offline.",
  "url": "https://novelist-app.com",
  "screenshot": "https://novelist-app.com/Screenshot 1.png",
  "softwareVersion": "2.2.0",
  "featureList": [
    "AI writing assistant with context-awareness (characters, plot, codex)",
    "10 AI providers: Claude, GPT-4o, Gemini, Groq, DeepSeek, Mistral, xAI, Perplexity, Cohere, Ollama",
    "Works fully offline with Ollama — no internet required",
    "Rich text editor with auto-save",
    "Chapter and scene structure with drag-to-reorder",
    "Character profiles and relationship map",
    "Plot timeline and corkboard view",
    "Find and replace across entire manuscript",
    "Lore and codex for world-building",
    "Export to DOCX and TXT",
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Novelist work offline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — completely. Novelist doesn't need an internet connection to run. Your files are stored locally and never touch a server. For AI assistance offline, use Ollama: install it locally, point Novelist to it in AI Settings, and every AI query stays on your machine with no internet required.",
      },
    },
    {
      "@type": "Question",
      "name": "Which AI providers does Novelist support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Novelist supports 10 AI providers: Claude (Anthropic), GPT-4o (OpenAI), Gemini (Google), Groq, DeepSeek, Mistral, xAI (Grok), Perplexity, Cohere, and Ollama for fully local use. You bring your own API key — no extra subscription needed.",
      },
    },
    {
      "@type": "Question",
      "name": "Does the AI see my writing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your text is sent directly from your machine to your chosen provider's API — Novelist's servers never see it. With Ollama, nothing leaves your machine at all.",
      },
    },
    {
      "@type": "Question",
      "name": "Does the AI know my characters and plot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Before every message, Novelist automatically injects your characters, plot lines, codex entries, and active scene as context — so answers are specific to your story, not generic writing advice.",
      },
    },
    {
      "@type": "Question",
      "name": "Which Windows versions does Novelist support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Windows 10 and Windows 11 (64-bit).",
      },
    },
    {
      "@type": "Question",
      "name": "Do I get updates after buying Novelist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All future updates are included at no extra cost. Pay once, get everything.",
      },
    },
    {
      "@type": "Question",
      "name": "Is there a subscription for Novelist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. $49 once, then it's yours forever. No monthly fee, no renewal.",
      },
    },
    {
      "@type": "Question",
      "name": "What happens when the Novelist trial ends?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The app will ask you to enter a license key. Your work is never deleted or locked — you just can't open new writing sessions until you activate.",
      },
    },
    {
      "@type": "Question",
      "name": "How does Novelist compare to other writing apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most dedicated writing apps either charge a monthly fee — Dabble runs $10–15/month, Campfire around $9/month — or come with a steep learning curve (Scrivener). Novelist sits in between: the core tools long-form writers actually need, at a one-time price of $49. No subscription, no renewal, no features you'll never use.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I use Novelist on multiple computers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each license is for one device. If you want to move it to a new machine, just email hello@novelist-app.com and we'll transfer it manually, usually within a few hours.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <div className="min-h-screen bg-[#0f0f0f]">
        <Navbar />
        <main>
          <Hero />
          <AIShowcase />
          <Features />
          <PrivacyStrip />
          <Pricing />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
