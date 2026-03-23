"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Does it work offline?",
    answer:
      "Yes — completely. Novelist doesn't need an internet connection to run. Your files are stored locally and never touch a server.",
  },
  {
    question: "Which Windows versions does it support?",
    answer: "Windows 10 and Windows 11 (64-bit).",
  },
  {
    question: "Do I get updates after buying?",
    answer:
      "Yes. All future updates are included at no extra cost. Pay once, get everything.",
  },
  {
    question: "What happens when the trial ends?",
    answer:
      "The app will ask you to enter a license key. Your work is never deleted or locked — you just can't open new writing sessions until you activate.",
  },
  {
    question: "Is there a subscription?",
    answer: "No. $49 once, then it's yours forever.",
  },
  {
    question: "Windows shows a warning when I install — is that normal?",
    answer:
      "Yes. The installer isn't code-signed yet, so Windows SmartScreen flags it. Click \"More info\" → \"Run anyway\" to install. We're working on a code signature for a future release.",
  },
  {
    question: "How does the AI feature work?",
    answer:
      "You bring your own API key from Claude (Anthropic) or OpenAI. The AI panel sends your prompt directly to that API — nothing goes through our servers. If you don't have an API key, the rest of the app works perfectly without it.",
  },
  {
    question: "Can I use it on multiple computers?",
    answer:
      "Yes. Each license supports up to 2 machines. If you need more, just reach out.",
  },
  {
    question: "How do I sync my novels between devices?",
    answer:
      "Novelist stores your work in a single database file (novelist.db). To sync across devices, go to Settings → Storage and point the database location to a cloud-synced folder — OneDrive, Dropbox, or Google Drive all work great. Both devices need to point to the same synced folder. First-time setup: copy your existing novelist.db into the cloud folder, then change the path on each device.",
  },
  {
    question: "How do I move my license to a different computer?",
    answer:
      "Open Settings → License → \"Deactivate this device\". This frees up your activation slot instantly. Then install Novelist on the new machine and enter your license key to activate it there. If your old device is lost or broken and you can't deactivate it, just email us at hello@novelist-app.com and we'll reset it manually.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-[#1a1a1a] hover:bg-[#1e1e1e] transition-colors"
        aria-expanded={open}
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <svg
          className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 py-4 bg-[#161616] border-t border-white/5">
          <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Common Questions</h2>
          <p className="text-gray-400">
            Anything else?{" "}
            <a
              href="mailto:hello@novelist-app.com"
              className="text-amber-400 hover:underline"
            >
              hello@novelist-app.com
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
