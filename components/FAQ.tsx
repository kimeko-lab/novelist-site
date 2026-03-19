"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Does Novelist work offline?",
    answer:
      "Yes — completely. No internet required to write. Your files stay on your computer.",
  },
  {
    question: "What Windows versions are supported?",
    answer: "Windows 10 and Windows 11 (64-bit).",
  },
  {
    question: "Will I get free updates?",
    answer: "Yes, all future updates are free for existing customers.",
  },
  {
    question: "What happens after the 14-day trial?",
    answer:
      "The app will prompt you to purchase a license key. Your work is never deleted.",
  },
  {
    question: "Is there a subscription?",
    answer: "No. Pay once, use forever.",
  },
  {
    question: "Why does Windows show a security warning on install?",
    answer:
      "Because the app isn't code-signed yet. Click 'More info' → 'Run anyway' to install safely. We're working on adding a code signature in a future update.",
  },
  {
    question: "How does the AI assistant work?",
    answer:
      "The AI feature connects to a local LLM you set up separately (e.g., Ollama). It does not send your writing to any external server.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-[#1a1a1a] hover:bg-[#202020] transition-colors"
        aria-expanded={open}
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div className="px-6 py-4 bg-[#161616] border-t border-white/10">
          <p className="text-gray-400 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Have another question? Email us at{" "}
            <a
              href="mailto:hello@novelist-app.com"
              className="text-amber-400 hover:underline"
            >
              hello@novelist-app.com
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
