# Landing Page Rebrand — Design Spec
**Date:** 2026-03-24
**Project:** novelist-site
**Status:** Approved for implementation

---

## Overview

Reposition Novelist's landing page from a "writing app with AI as a side feature" to an **AI-first writing studio**. The app name stays "Novelist". No pricing change. This is a messaging and visual overhaul only.

**Core insight:** Novelist's AI is context-aware — it reads the user's actual characters, plot lines, codex, and notes before answering. This is the primary differentiator vs. generic AI tools (ChatGPT, Sudowrite) and vs. traditional writing apps (Scrivener, Dabble).

---

## Design Decisions

### Tagline
**"Your novel's full creative team."**

- Does not mention "AI" explicitly
- Implies a multi-role assistant (brainstorming partner, plot auditor, writing coach)
- Direct, confident — not cheesy or motivational
- Works as a brand identity line

### Accent Color
**Violet** — use the built-in Tailwind violet scale throughout. No custom tokens needed.

| Token | Hex | Tailwind class | Usage |
|-------|-----|---------------|-------|
| Primary | `#7c3aed` | `violet-700` | CTA button background |
| Accent | `#8b5cf6` | `violet-500` | Badge dot, borders, glows |
| Text | `#a78bfa` | `violet-400` | Logo accent, link color, pill text |
| Subtle bg | `rgba(139,92,246,0.10)` | — | Pill bg, card hover |

Replaces amber (`amber-500`, `amber-400`) throughout. No changes to `tailwind.config.ts` or `globals.css` are required — all amber usage is via Tailwind utility classes in component files.

**Affected elements:** navbar logo accent, badge dot, H1 accent span, role pills, CTA primary button, border glows, hover states.

---

## Page Structure

```
1. Navbar          — logo + links + Download CTA (violet)
2. Hero            — updated tagline + violet + role pills + app window mockup + provider strip
3. AI Showcase     — NEW: 3-column section with real chat examples
4. Features        — reordered: AI card first (2-col span), then 7 existing tools in 4-col grid
5. Privacy Strip   — NEW: slim banner — 10 providers · offline · your key · local data
6. Pricing         — unchanged ($49 one-time), download link updated to v2.2.0
7. FAQ             — updated: merge offline questions, add AI/provider/privacy Q&As
8. Footer          — unchanged
```

---

## Section Specs

### 1. Navbar

- Logo: `<span className="text-white">Novel</span><span className="text-violet-400">ist</span>`
- Links: Features · Pricing · FAQ (unchanged)
- CTA button: "Download" — violet outline style:
  ```
  bg: rgba(139,92,246,0.15)
  border: 1px solid rgba(139,92,246,0.35)
  color: #a78bfa (violet-400)
  hover: bg rgba(139,92,246,0.25)
  ```

### 2. Hero

**Badge:** `v2.2.0 · Windows 10 & 11 · 14-day free trial`
Style: `bg-violet-500/10 border border-violet-500/20 text-violet-400`, dot glow `bg-violet-500 shadow shadow-violet-500`

**H1:**
```
Your novel's
full creative team.      ← text-violet-400
```

**Sub-headline:**
```
Brainstorm ideas, audit your plot, develop characters, and write —
all in one app that knows your story inside out.
Your data never leaves your machine.
```

**Role pills (5):** Brainstorming partner · Plot auditor · Writing coach · Character developer · Scene reviewer
Style: `bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-full text-xs font-semibold px-3 py-1`

**CTA row:**
- Primary: "Download Free Trial" — `bg-violet-700 hover:bg-violet-600 text-white shadow-lg shadow-violet-700/30`
- Ghost: "Buy Now — $49" — unchanged style

**Footnote:** `No payment info needed · 30-day money-back guarantee`

**App window mockup** (static HTML, not a screenshot carousel):
Shows 3-column layout inside a mock window chrome:
- Left: sidebar with chapter list
- Center: editor with text lines
- Right: AI panel with a sample exchange:
  - User: "Does Elena's motive make sense in ch 3?"
  - AI: "Based on her backstory in ch 1, her motive is consistent but the reveal feels too abrupt..."

Below the window: provider strip
```
Works with:  [Claude] [GPT-4o] [Gemini] [Groq] [Ollama] [+5 more]
```

**Demo GIF (Phase 2):** Once GIFs are recorded, replace the static HTML window mockup with `<img src="/demo-ai-chat.gif" />`. Use the static mockup as the interim placeholder — it is fully functional and ships with the initial PR.

### 3. AI Showcase ★ NEW

**Section headline:** `See your creative team in action`
**Sub:** `Every answer is grounded in your story — not generic advice.`

Three equal columns. Each column structure:
```
[Icon] Role title
One-sentence description
┌──────────────────────────────┐
│ User bubble (right-aligned)  │
│ AI bubble (left-aligned)     │
└──────────────────────────────┘
```

**Column 1 — Plot Auditor 🔍**
> *Description:* Catch inconsistencies before your readers do.

User: `"Is there anything inconsistent about Elena's timeline in the first half?"`

AI: `"One gap: in ch 2 Elena says she hasn't been to the harbor in years, but in ch 5 there's a flashback placing her there 6 months ago. Also, her relationship with Marcus shifts from hostile to trusting without explanation between ch 4 and 5."`

**Column 2 — Character Developer 👤**
> *Description:* Turn flat characters into people your readers remember.

User: `"Elena feels flat in ch 4. She's just reacting to events. How do I make her more active?"`

AI: `"Her profile says she's driven by guilt over her father's death. Right now she's reactive because she's avoiding confrontation. Give her a small goal in ch 4 that connects to that guilt — even a minor one — and it'll create tension against the external plot."`

**Column 3 — Scene Reviewer 📝**
> *Description:* Make sure your key scenes land the way you intended.

User: `"Does the confrontation scene in ch 6 feel earned?"`

AI: `"The emotional beat lands, but it arrives too fast. You've built 5 chapters of tension — let the scene breathe. The line 'I never trusted you' hits harder if Marcus hesitates first. Consider adding 2–3 beats of silence before he speaks."`

**Bottom note:** `Every response is grounded in your characters, plot lines, and world — not generic writing advice.`

Chat bubble styles: user `bg-violet-500/15 text-violet-200`, AI `bg-white/5 text-white/60`

### 4. Features (Reordered)

**Section headline (updated):**
```
Everything your novel needs — writing tools and intelligent assistance in one place.
```
(Replaces: "Novel writing software built for the long haul" — that line conflicts with AI-first positioning.)

**Section sub (updated):**
```
All the structure to keep your story organized, plus an assistant that knows it inside out.
```
(Replaces: "without the monthly bill" reference — redundant with Pricing section.)

**Grid layout:**
- AI card: `col-span-2` on `lg:grid-cols-4` → visually larger, top-left
- Remaining 7 cards: standard `col-span-1` filling the grid

**Updated AI card:**
- Title: `"AI writing assistant — built into your story"`
- Description: `"10 providers to choose from — Claude, GPT-4o, Gemini, Groq, Ollama, and more. Your assistant reads your characters, chapters, and world before answering. Your writing never leaves your machine."`
- Icon: sparkle/stars SVG — `text-violet-400` (was amber)

**Remaining 7 cards** (order and content unchanged, icon color amber → violet):
Editor · Chapters & Scenes · Characters · Plot Timeline · Daily Goals · Notes & Lore · Find & Replace

### 5. Privacy Strip ★ NEW

Slim full-width banner between Features and Pricing.

```
🛡 Your data, your rules
· 10 AI providers  · Works fully offline (Ollama)  · Bring your own API key  · Nothing stored on our servers
```

Style:
```
bg: rgba(139,92,246,0.06)
border-top + border-bottom: rgba(139,92,246,0.12)
text: text-violet-400/70
icon: text-violet-400
```

Layout: `flex items-center justify-center gap-6 py-4 text-sm flex-wrap`

### 6. Pricing

No content changes. Update both download links (hero + pricing) from `v2.1.2` to `v2.2.0`:

```
Old: .../releases/download/v2.1.2/Novelist-Setup-2.1.2.exe
New: .../releases/download/v2.2.0/Novelist-Setup-2.2.0.exe
```

Also update badge text in Hero from `v2.1` to `v2.2.0`.

### 7. FAQ — Updated

**Merge offline questions:** Remove the existing "Does it work offline?" and the proposed "Can I use it completely offline?" — replace both with a single merged entry:

> **"Does it work offline?"**
> Yes — completely. Novelist doesn't need an internet connection to run. Your files are stored locally and never touch a server. For AI assistance offline, use Ollama: install it locally, point Novelist to it in AI Settings, and every AI query stays on your machine with no internet required.

**Remove:** "How does the AI feature work?" (mentions only Claude/OpenAI, now outdated)

**Add (after the merged offline question):**
1. *"Which AI providers does Novelist support?"*
   → 10 providers: Claude (Anthropic), GPT-4o (OpenAI), Gemini (Google), Groq, DeepSeek, Mistral, xAI (Grok), Perplexity, Cohere, and Ollama for fully local/offline use. You bring your own API key — no extra subscription.

2. *"Does the AI see my writing?"*
   → Your text is sent directly from your machine to your chosen provider's API — Novelist's servers never see it. With Ollama, nothing leaves your machine at all.

3. *"Does the AI know my characters and plot?"*
   → Yes. Before every message, Novelist automatically injects your characters, plot lines, codex entries, and active scene as context — so answers are specific to your story, not generic writing advice.

**Keep unchanged:** Windows version, updates, trial, subscription, SmartScreen warning, multi-device, comparison to other apps.

---

## Demo Content Plan (Phase 2)

Record after initial landing page PR is merged. Use the static HTML window mockup as placeholder until GIFs are ready.

| File | What to record | Used in |
|------|---------------|---------|
| `public/demo-ai-chat.gif` | Open AI panel → type plot question → watch streaming response | Hero window (replaces static mockup) |
| `public/demo-plot-audit.gif` | Ask AI to check story consistency → AI finds a gap | AI Showcase col 1 (optional enhancement) |
| `public/demo-character.gif` | Ask AI about flat character → concrete advice | AI Showcase col 2 (optional enhancement) |
| `public/demo-scene.gif` | Ask AI to review scene → structural feedback | AI Showcase col 3 (optional enhancement) |

Target: 3–6 seconds per GIF, looping, no audio. Capture at 1280px width, crop to relevant area.
AI Showcase columns ship with static chat bubbles; GIFs are optional visual upgrades.

---

## Files to Change

| File | Change |
|------|--------|
| `components/Navbar.tsx` | Logo split color (violet), CTA button violet style, update download URL to v2.2.0 |
| `components/Hero.tsx` | New tagline, violet colors, role pills, static app window mockup, provider strip, remove screenshot carousel; swap for GIF in Phase 2 |
| `components/Features.tsx` | Updated section headline + sub, AI card col-span-2 + updated content, all icon colors amber→violet |
| `components/FAQ.tsx` | Merge offline questions, remove old AI Q, add 3 new AI/privacy/provider Q&As |
| `components/Pricing.tsx` | Update download URL to v2.2.0 |
| `app/page.tsx` | Add imports + insert `<AIShowcase />` after `<Hero />` and `<PrivacyStrip />` after `<Features />`. Update JSON-LD fields (see below). |
| `app/layout.tsx` | Update `<title>` and meta description to reflect AI-first positioning |
| `app/og/route.tsx` | Full violet rebrand of OG image (see below) |

**New files:**
| File | Purpose |
|------|---------|
| `components/AIShowcase.tsx` | New AI Showcase section (3-column, chat bubbles) |
| `components/PrivacyStrip.tsx` | New slim privacy banner |
| `public/demo-*.gif` | Demo GIFs — Phase 2, recorded from live app |

**No changes needed:**
- `tailwind.config.ts` — Tailwind v3 includes the violet palette built-in
- `globals.css` — no amber CSS variables exist; all amber is via Tailwind utility classes in components

---

## `app/page.tsx` — Detailed Changes

### Component insertion order
```tsx
<Navbar />
<main>
  <Hero />
  <AIShowcase />       {/* NEW — insert after Hero */}
  <Features />
  <PrivacyStrip />     {/* NEW — insert after Features */}
  <Pricing />
  <FAQ />
  <CTA />
</main>
<Footer />
```

Add imports at top:
```tsx
import AIShowcase from "@/components/AIShowcase";
import PrivacyStrip from "@/components/PrivacyStrip";
```

### `jsonLdSoftware` updates
```ts
softwareVersion: "2.2.0",   // was "2.1.2"
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
]
```

### `jsonLdFaq` updates

**Update** "Does Novelist work offline?" answer to merged version:
```
"Yes — completely. Novelist doesn't need an internet connection to run. Your files are stored locally and never touch a server. For AI assistance offline, use Ollama: install it locally, point Novelist to it in AI Settings, and every AI query stays on your machine with no internet required."
```

**Replace** "How does the AI writing assistant work?" with three new entries:

```ts
{
  "@type": "Question",
  "name": "Which AI providers does Novelist support?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Novelist supports 10 AI providers: Claude (Anthropic), GPT-4o (OpenAI), Gemini (Google), Groq, DeepSeek, Mistral, xAI (Grok), Perplexity, Cohere, and Ollama for fully local use. You bring your own API key — no extra subscription needed."
  }
},
{
  "@type": "Question",
  "name": "Does the AI see my writing?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Your text is sent directly from your machine to your chosen provider's API — Novelist's servers never see it. With Ollama, nothing leaves your machine at all."
  }
},
{
  "@type": "Question",
  "name": "Does the AI know my characters and plot?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes. Before every message, Novelist automatically injects your characters, plot lines, codex entries, and active scene as context — so answers are specific to your story, not generic writing advice."
  }
}
```

---

## `app/og/route.tsx` — Detailed Changes

Full amber→violet rebrand of the OG image. All `style=` values — no Tailwind.

| Element | Old value | New value |
|---------|-----------|-----------|
| Background glow color | `rgba(245,158,11,0.12)` | `rgba(139,92,246,0.12)` |
| Logo icon background | `#f59e0b` | `#7c3aed` |
| Logo icon foreground | `#000` | `#fff` |
| Badge background | `rgba(245,158,11,0.15)` | `rgba(139,92,246,0.15)` |
| Badge border | `rgba(245,158,11,0.4)` | `rgba(139,92,246,0.4)` |
| Badge text color | `#f59e0b` | `#a78bfa` |
| Badge text | `"Windows 10 & 11 · v2.1 · 14-day free trial"` | `"Windows 10 & 11 · v2.2.0 · 14-day free trial"` |
| Headline line 1 | `"Write your novel."` (white) | `"Your novel's"` (white `#ffffff`) |
| Headline line 2 | `"Keep it yours."` (`#f59e0b`) | `"full creative team."` (`#a78bfa`) |
| Sub-copy | `"Novel writing software for Windows — chapters, characters, plot timeline, corkboard & AI assistant."` | `"A writing studio with an AI assistant that knows your story — brainstorm partner, plot auditor, writing coach."` |
| Feature pills content | `["Offline · no account", "Drag-to-reorder chapters", "Character map", "AI assistant (BYOK)"]` | `["10 AI providers", "Plot auditor", "Character developer", "Works fully offline"]` |
| Price badge background | `#f59e0b` | `#7c3aed` |
| Price badge text | `color: "#000"` | `color: "#fff"` |
| Price badge sub text | `color: "rgba(0,0,0,0.6)"` | `color: "rgba(255,255,255,0.6)"` |

---

## Out of Scope

- App name change (deferred to post-April 9 sales review)
- Pricing change
- Mobile-specific redesign (responsive adjustments only, not a dedicated mobile layout)
- New pages (blog, docs, changelog)
- Backend/API changes
