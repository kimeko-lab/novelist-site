# Landing Page Rebrand Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition novelist-site landing page from a generic writing app to an AI-first writing studio — new tagline, violet color scheme, AI Showcase section, Privacy Strip, updated FAQ and OG image.

**Architecture:** All changes are in a Next.js 14 App Router project. No backend changes. Two new components are added (`AIShowcase`, `PrivacyStrip`), six existing components are modified, and `app/page.tsx` wires everything together. No new dependencies required.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS v3 (violet palette built-in, no config changes needed)

**Spec:** `docs/superpowers/specs/2026-03-24-landing-page-rebrand-design.md`

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `components/Navbar.tsx` | Modify | Logo split violet, CTA button violet, download URL v2.2.0 |
| `components/Hero.tsx` | Rewrite | New tagline, violet, role pills, static app window mockup, provider strip, remove carousel |
| `components/AIShowcase.tsx` | Create | New 3-column AI scenarios section |
| `components/Features.tsx` | Modify | New section headline, AI card col-span-2 first, violet icons |
| `components/PrivacyStrip.tsx` | Create | Slim violet banner between Features and Pricing |
| `components/FAQ.tsx` | Modify | Merge offline Q, remove old AI Q, add 3 new Q&As |
| `components/Pricing.tsx` | Modify | Download URL v2.1.2 → v2.2.0 |
| `app/page.tsx` | Modify | Import + insert new components, update JSON-LD |
| `app/layout.tsx` | Modify | Meta title + description AI-first |
| `app/og/route.tsx` | Modify | Full violet OG image rebrand |

---

## Task 1: Start dev server and verify baseline

**Files:** none (setup only)

- [ ] **Step 1: Start dev server**

```bash
cd "C:/Users/ariep/novelist-site"
npm run dev
```

Expected: Server starts at `http://localhost:3000`. Open in browser and verify the current amber landing page loads correctly before making any changes.

- [ ] **Step 2: Confirm Tailwind violet is available**

Check that `bg-violet-500` renders correctly by inspecting an element in browser dev tools. Tailwind v3 includes violet — no config change needed.

---

## Task 2: Navbar — violet rebrand + URL update

**Files:**
- Modify: `components/Navbar.tsx`

- [ ] **Step 1: Update logo to split violet**

Find the logo text (currently renders as `Novelist` in a single element). Replace with:
```tsx
<span className="text-white font-black text-lg tracking-tight">
  Novel<span className="text-violet-400">ist</span>
</span>
```

- [ ] **Step 2: Update CTA "Download" button to violet outline**

Find the navbar download button/link. Replace its className with:
```tsx
className="bg-violet-500/10 hover:bg-violet-500/25 border border-violet-500/35 text-violet-400 font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
```

- [ ] **Step 3: Update navbar download URL from v2.1.2 to v2.2.0**

Find the href containing `v2.1.2/Novelist-Setup-2.1.2.exe`. Replace with:
```
https://github.com/kimeko-lab/novelist-releases/releases/download/v2.2.0/Novelist-Setup-2.2.0.exe
```

- [ ] **Step 4: Visual check**

Open `http://localhost:3000`. Verify: logo shows "Novel" white + "ist" violet, Download button is violet outline.

- [ ] **Step 5: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: navbar violet rebrand + v2.2.0 download URL"
```

---

## Task 3: Hero — full rewrite

**Files:**
- Modify: `components/Hero.tsx`

This is the largest change. The existing screenshot carousel is removed entirely and replaced with a static HTML app window mockup.

- [ ] **Step 1: Replace the entire file content**

Replace `components/Hero.tsx` with the following:

```tsx
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
```

- [ ] **Step 2: Visual check**

Open `http://localhost:3000`. Verify:
- Badge is violet, says "v2.2.0"
- H1 "Your novel's" white + "full creative team." violet
- 5 role pills in violet
- Primary CTA button is violet
- App window shows sidebar + editor + AI panel with chat bubble
- Provider strip shows Claude, GPT-4o, Gemini, Groq, Ollama, +5 more

- [ ] **Step 3: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: hero section full AI-first rewrite"
```

---

## Task 4: Create AIShowcase component

**Files:**
- Create: `components/AIShowcase.tsx`

- [ ] **Step 1: Create the file**

```tsx
const scenarios = [
  {
    icon: "🔍",
    role: "Plot Auditor",
    description: "Catch inconsistencies before your readers do.",
    user: "Is there anything inconsistent about Elena's timeline in the first half?",
    ai: "One gap: in ch 2 Elena says she hasn't been to the harbor in years, but in ch 5 there's a flashback placing her there 6 months ago. Also, her relationship with Marcus shifts from hostile to trusting without explanation between ch 4 and 5.",
  },
  {
    icon: "👤",
    role: "Character Developer",
    description: "Turn flat characters into people your readers remember.",
    user: "Elena feels flat in ch 4. She's just reacting to events. How do I make her more active?",
    ai: "Her profile says she's driven by guilt over her father's death. Right now she's reactive because she's avoiding confrontation. Give her a small goal in ch 4 that connects to that guilt — even a minor one — and it'll create tension against the external plot.",
  },
  {
    icon: "📝",
    role: "Scene Reviewer",
    description: "Make sure your key scenes land the way you intended.",
    user: "Does the confrontation scene in ch 6 feel earned?",
    ai: "The emotional beat lands, but it arrives too fast. You've built 5 chapters of tension — let the scene breathe. The line 'I never trusted you' hits harder if Marcus hesitates first. Consider adding 2–3 beats of silence before he speaks.",
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
```

- [ ] **Step 2: Visual check** (after Task 7 wires it into page.tsx)

Verify: 3 cards side-by-side on desktop, stacked on mobile. Each card has header with icon + role, then user bubble (violet, right-aligned) + AI bubble (gray, left-aligned).

- [ ] **Step 3: Commit**

```bash
git add components/AIShowcase.tsx
git commit -m "feat: add AIShowcase section with 3 chat scenarios"
```

---

## Task 5: Features — reorder + new headline + violet icons

**Files:**
- Modify: `components/Features.tsx`

- [ ] **Step 1: Update section headline and sub-copy**

Find:
```tsx
<h2 className="text-4xl font-bold text-white mb-4">
  Novel writing software built for the long haul
</h2>
<p className="text-gray-400 text-lg max-w-xl mx-auto">
  Every tool you need to go from blank page to finished manuscript —
  without the monthly bill.
</p>
```

Replace with:
```tsx
<h2 className="text-4xl font-bold text-white mb-4">
  Everything your novel needs — writing tools and intelligent assistance in one place.
</h2>
<p className="text-gray-400 text-lg max-w-xl mx-auto">
  All the structure to keep your story organized, plus an assistant that knows it inside out.
</p>
```

- [ ] **Step 2: Replace the AI feature card with an updated prominent version**

At the top of the `features` array (before the first item), add a new AI card object:

```ts
{
  title: "AI writing assistant — built into your story",
  description:
    "10 providers to choose from — Claude, GPT-4o, Gemini, Groq, Ollama, and more. Your assistant reads your characters, chapters, and world before answering. Your writing never leaves your machine.",
  featured: true,
  icon: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  ),
},
```

Remove the old AI card at the end of the array (titled "AI writing assistant").

- [ ] **Step 3: Update the grid to give the AI card a 2-column span**

Find the grid `div` and the `features.map(...)` render. Update to:

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {features.map((feature) => (
    <div
      key={feature.title}
      className={`bg-[#1a1a1a] border border-white/10 rounded-xl p-5 flex flex-col gap-3 hover:border-white/20 transition-colors ${
        feature.featured ? "lg:col-span-2 border-violet-500/20 hover:border-violet-500/35" : ""
      }`}
    >
      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-violet-500/10 text-violet-400">
        {feature.icon}
      </div>
      <div>
        <h3 className="text-white font-semibold text-sm mb-1.5 leading-snug">
          {feature.title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  ))}
</div>
```

Also add `featured?: boolean` to the feature type if TypeScript complains.

- [ ] **Step 4: Change all remaining icon bg colors from amber to violet**

Find all remaining icon wrappers using `bg-amber-500/10 text-amber-400`. Replace with `bg-violet-500/10 text-violet-400`.

- [ ] **Step 5: Visual check**

Verify: AI card spans 2 columns at lg breakpoint, has violet border glow. All 8 feature icons are violet. Section headline reads the new copy.

- [ ] **Step 6: Commit**

```bash
git add components/Features.tsx
git commit -m "feat: features section AI-first reorder, violet icons, new headline"
```

---

## Task 6: Create PrivacyStrip component

**Files:**
- Create: `components/PrivacyStrip.tsx`

- [ ] **Step 1: Create the file**

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add components/PrivacyStrip.tsx
git commit -m "feat: add PrivacyStrip component"
```

---

## Task 7: FAQ — merge offline, remove old AI Q, add 3 new Q&As

**Files:**
- Modify: `components/FAQ.tsx`

- [ ] **Step 1: Update the offline question answer (merge)**

Find the FAQ with `question: "Does it work offline?"`. Update its answer to:

```ts
answer:
  "Yes — completely. Novelist doesn't need an internet connection to run. Your files are stored locally and never touch a server. For AI assistance offline, use Ollama: install it locally, point Novelist to it in AI Settings, and every AI query stays on your machine with no internet required.",
```

- [ ] **Step 2: Replace the old AI question with 3 new ones**

Find and remove the FAQ entry with `question: "How does the AI feature work?"`.

In its place, add these three entries (insert them after the "Does it work offline?" entry):

```ts
{
  question: "Which AI providers does Novelist support?",
  answer:
    "Novelist supports 10 AI providers: Claude (Anthropic), GPT-4o (OpenAI), Gemini (Google), Groq, DeepSeek, Mistral, xAI (Grok), Perplexity, Cohere, and Ollama for fully local use. You bring your own API key — no extra subscription needed.",
},
{
  question: "Does the AI see my writing?",
  answer:
    "Your text is sent directly from your machine to your chosen provider's API — Novelist's servers never see it. With Ollama, nothing leaves your machine at all.",
},
{
  question: "Does the AI know my characters and plot?",
  answer:
    "Yes. Before every message, Novelist automatically injects your characters, plot lines, codex entries, and active scene as context — so answers are specific to your story, not generic writing advice.",
},
```

- [ ] **Step 3: Visual check**

Scroll to FAQ. Verify: offline question has the merged Ollama text. Old "How does the AI feature work?" is gone. 3 new AI Q&As appear.

- [ ] **Step 4: Commit**

```bash
git add components/FAQ.tsx
git commit -m "feat: FAQ — merge offline Q, add 3 AI/provider/privacy answers"
```

---

## Task 8: Pricing — update download URL

**Files:**
- Modify: `components/Pricing.tsx`

- [ ] **Step 1: Update download URL and label**

Find the anchor with `v2.1.2`. Update:
```tsx
href="https://github.com/kimeko-lab/novelist-releases/releases/download/v2.2.0/Novelist-Setup-2.2.0.exe"
```

- [ ] **Step 2: Commit**

```bash
git add components/Pricing.tsx
git commit -m "chore: update Pricing download URL to v2.2.0"
```

---

## Task 9: Wire everything in app/page.tsx + update JSON-LD

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Add imports for new components**

At the top of `app/page.tsx`, add:
```tsx
import AIShowcase from "@/components/AIShowcase";
import PrivacyStrip from "@/components/PrivacyStrip";
```

- [ ] **Step 2: Insert components in the correct order**

Update the `<main>` block to:
```tsx
<main>
  <Hero />
  <AIShowcase />
  <Features />
  <PrivacyStrip />
  <Pricing />
  <FAQ />
  <CTA />
</main>
```

- [ ] **Step 3: Update jsonLdSoftware**

```ts
softwareVersion: "2.2.0",
description: "A novel writing studio for Windows with an AI assistant that knows your story — characters, plot, codex, and more. 10 AI providers supported. One-time purchase, no subscription. Works fully offline.",
featureList: [
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
```

- [ ] **Step 4: Update jsonLdFaq**

Update the offline answer:
```ts
"text": "Yes — completely. Novelist doesn't need an internet connection to run. Your files are stored locally and never touch a server. For AI assistance offline, use Ollama: install it locally, point Novelist to it in AI Settings, and every AI query stays on your machine with no internet required.",
```

Remove the `"How does the AI writing assistant work?"` entry.

Add 3 new entries after the offline entry:
```ts
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
```

- [ ] **Step 5: Visual check**

Open `http://localhost:3000`. Scroll through the full page: Hero → AIShowcase → Features → PrivacyStrip → Pricing → FAQ.

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx
git commit -m "feat: wire AIShowcase + PrivacyStrip, update JSON-LD for v2.2.0 + AI-first"
```

---

## Task 10: app/layout.tsx — meta title + description

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update metadata**

Find the `metadata` export. Update `title` and `description`:

```ts
export const metadata: Metadata = {
  title: "Novelist — Your Novel's Full Creative Team",
  description:
    "A novel writing studio for Windows with an AI assistant that knows your story. Brainstorm partner, plot auditor, writing coach — 10 AI providers, works offline, one-time $49.",
  // keep all other fields unchanged
};
```

- [ ] **Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "chore: update meta title + description for AI-first positioning"
```

---

## Task 11: app/og/route.tsx — full violet OG image rebrand

**Files:**
- Modify: `app/og/route.tsx`

- [ ] **Step 1: Apply all amber→violet replacements**

Apply the following changes (all in `style={}` inline objects — not Tailwind):

| Element | Find | Replace |
|---------|------|---------|
| Background glow | `rgba(245,158,11,0.12)` | `rgba(139,92,246,0.12)` |
| Logo icon bg | `background: "#f59e0b"` | `background: "#7c3aed"` |
| Logo icon line color | `background: "#000"` | `background: "#fff"` |
| Badge bg | `rgba(245,158,11,0.15)` | `rgba(139,92,246,0.15)` |
| Badge border | `rgba(245,158,11,0.4)` | `rgba(139,92,246,0.4)` |
| Badge text color | `color: "#f59e0b"` (badge) | `color: "#a78bfa"` |
| Badge text content | `v2.1 · 14-day free trial` | `v2.2.0 · 14-day free trial` |
| Headline line 1 text | `Write your novel.` | `Your novel's` |
| Headline line 2 text | `Keep it yours.` | `full creative team.` |
| Headline line 2 color | `color: "#f59e0b"` (headline) | `color: "#a78bfa"` |
| Sub-copy text | `Novel writing software for Windows...` | `A writing studio with an AI assistant that knows your story — brainstorm partner, plot auditor, writing coach.` |
| Feature pills array | `["Offline · no account", "Drag-to-reorder chapters", "Character map", "AI assistant (BYOK)"]` | `["10 AI providers", "Plot auditor", "Character developer", "Works fully offline"]` |
| Price badge bg | `background: "#f59e0b"` (price) | `background: "#7c3aed"` |
| Price badge text | `color: "#000"` | `color: "#fff"` |
| Price badge sub text | `color: "rgba(0,0,0,0.6)"` | `color: "rgba(255,255,255,0.6)"` |

- [ ] **Step 2: Verify OG image**

Open `http://localhost:3000/og` in browser. Verify: violet glow, violet logo icon, new headline "Your novel's / full creative team.", violet price badge.

- [ ] **Step 3: Commit**

```bash
git add app/og/route.tsx
git commit -m "feat: OG image full violet rebrand + AI-first headline"
```

---

## Task 12: Final review + production push

- [ ] **Step 1: Full page scroll review at http://localhost:3000**

Check each section in order:
- Navbar: violet logo split + violet Download button
- Hero: tagline + role pills + app window mockup + provider strip
- AIShowcase: 3 cards with chat bubbles
- Features: AI card first (2-col span) + violet icons + new headline
- PrivacyStrip: violet banner "Your data, your rules"
- Pricing: download URL points to v2.2.0
- FAQ: 3 new AI questions present, old AI question gone
- Mobile: resize browser to 375px, verify responsive layout

- [ ] **Step 2: Production build check**

```bash
npm run build
```

Expected: Build completes with no errors. Fix any TypeScript or lint errors before proceeding.

- [ ] **Step 3: Push to remote**

Note: `novelist-site` uses its own `main` branch (separate from the Novelist app repo).

```bash
cd "C:/Users/ariep/novelist-site"
git push origin main
```

Vercel will auto-deploy from main. Verify deployment at `https://novelist-app.com` within ~2 minutes.

- [ ] **Step 4: Check live OG image**

Open `https://novelist-app.com/og` in browser. Verify the new violet OG image renders on the live URL.

- [ ] **Step 5: Demo GIFs (Phase 2 — separate session)**

After implementation is live, record GIFs from the Novelist desktop app:
- `demo-ai-chat.gif` — for Hero window replacement
- `demo-plot-audit.gif`, `demo-character.gif`, `demo-scene.gif` — for AIShowcase (optional enhancement)

See spec Demo Content Plan for recording details.
