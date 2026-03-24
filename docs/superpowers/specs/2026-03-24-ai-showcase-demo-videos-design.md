# AI Showcase Demo Videos — Design Spec

## Goal

Add three short looping video demos to the AIShowcase section of novelist-site, replacing the static chat cards with video-on-top + chat-below layout. Videos show the Novelist AI panel responding to real queries about a pre-built dummy novel.

## Scope

- **In scope:** 3 demo videos (Plot Auditor, Character Developer, Scene Reviewer), dummy novel data, AIShowcase component update, video files in `public/demos/`
- **Out of scope:** Hero section video, Features section videos, character relationship map demo, other feature demos (deferred to phase 3)

---

## Part 1: Dummy Novel — "The Harbor Secret"

A purpose-built novel inserted directly into the Novelist SQLite database at `%APPDATA%\Novelist\novelist.db`. Content is carefully crafted so the AI gives specific, story-grounded answers to the three demo questions.

### Novel Metadata

| Field | Value |
|-------|-------|
| Title | The Harbor Secret |
| Description | A noir thriller set in a coastal city, following investigative journalist Elena Vasquez as she uncovers a decades-old conspiracy tied to the harbor district — and the man who's been hiding the truth all along. |

### Chapters (6 total)

| Position | Title |
|----------|-------|
| 0 | Ch 1 · The Beginning |
| 1 | Ch 2 · Old Wounds |
| 2 | Ch 3 · The Turn |
| 3 | Ch 4 · Losing Ground |
| 4 | Ch 5 · Shadows |
| 5 | Ch 6 · The Confrontation |

Each chapter has 2 scenes. Scene content is 80–150 words of prose that plants the facts the AI needs.

### Key Scene Content (for AI context)

**Ch 1, Scene 1 — "First Steps"**
Introduce Elena: driven journalist, guilt-ridden over father's death, just received a tip about the harbor district. She hasn't been to the harbor in years — makes this explicit in her internal monologue.

**Ch 2, Scene 1 — "The Contact"**
Elena meets a source near the docks. She tells Marcus: *"I haven't set foot near the harbor since my father died — not in years."* This line is the planted inconsistency.

**Ch 3, Scene 1 — "Shifting Alliances"**
Elena and Marcus begin to trust each other after a close call. No explicit bridge scene — the shift feels abrupt (intentional for Plot Auditor demo). Marcus's loyalty to his brother is mentioned.

**Ch 4, Scene 1 — "Stalled"**
Elena is reactive: she follows Marcus's lead, waits for his calls, defers decisions. Her guilt over her father is referenced but she takes no action tied to it.

**Ch 4, Scene 2 — "Dead End"**
Elena spends the scene reacting to an unexpected development. No proactive goal. She's passive throughout.

**Ch 5, Scene 1 — "The Flashback"**
A flashback: six months ago, Elena stood at the harbor watching her father's old fishing boat being auctioned. She was there. This directly contradicts Ch 2's *"I haven't set foot near the harbor in years."*

**Ch 6, Scene 1 — "Face to Face"**
Marcus and Elena confront each other in an empty warehouse. The emotional beat is there but arrives fast — they've barely spoken for 3 chapters and now Marcus says *"I never trusted you."* The scene needs a hesitation beat before he speaks.

### Characters (2)

**Elena Vasquez**
- Role: protagonist
- Description: Investigative journalist in her mid-30s. Sharp, tenacious, carries a quiet grief she rarely shows. Grew up watching her father work the docks before he died under circumstances she still considers suspicious.
- Personality: Driven, methodical, slow to trust. Uses work as an escape from guilt. When cornered emotionally, she deflects into facts and deadlines.
- Notes: Her central flaw is avoidance — she investigates everyone else's secrets but refuses to confront her own role in her father's death. Her active goal is to expose the harbor conspiracy, but her real goal is absolution.

**Marcus Cole**
- Role: supporting
- Description: Former dock worker turned reluctant informant. Late 30s, broad-shouldered, speaks slowly and means it. Has an older brother (Danny) who is entangled in the harbor conspiracy.
- Personality: Fiercely loyal to family above all else. Distrustful of outsiders, especially journalists. Opens up only when he believes someone is genuinely at risk.
- Notes: His central conflict is between protecting Danny and doing the right thing. He views Elena as a threat to Danny at first, then as the only person who can save him.

### Plot Lines (3)

| Title | Color |
|-------|-------|
| Main Investigation | #8b5cf6 |
| Elena & Marcus | #3b82f6 |
| The Harbor Secret | #10b981 |

---

## Part 2: Three Demo Videos

### Recording Setup

- **App:** Novelist desktop app (Electron), running in dev or production mode
- **AI Provider:** Groq (verified working, fast response, no quota issues)
- **AI Model:** llama-3.3-70b-versatile or similar fast Groq model
- **Crop area:** AI panel only — the right-side panel in Novelist (~350px wide × full height). Do NOT record the full app window.
- **Duration:** 4–6 seconds per video, from question submitted to full response visible
- **Format:** MP4 (H.264) primary + WebM (VP9) fallback
- **Output path:** `novelist-site/public/demos/`

### Video 1 — Plot Auditor (`demo-plot-auditor`)

| Field | Value |
|-------|-------|
| Files | `demo-plot-auditor.mp4`, `demo-plot-auditor.webm` |
| Question typed | "Is there anything inconsistent about Elena's timeline in the first half?" |
| Expected AI answer | Should catch the Ch 2 "haven't been to harbor in years" vs Ch 5 flashback 6 months ago. May also catch the Elena/Marcus trust shift. |
| Start frame | Cursor clicks send button |
| End frame | Full AI response visible on screen |

### Video 2 — Character Developer (`demo-character-dev`)

| Field | Value |
|-------|-------|
| Files | `demo-character-dev.mp4`, `demo-character-dev.webm` |
| Question typed | "Elena feels flat in Ch 4. She's just reacting to events. How do I make her more active?" |
| Expected AI answer | Should reference Elena's guilt over father's death, suggest giving her a small active goal in Ch 4 tied to that guilt. |
| Start frame | Cursor clicks send button |
| End frame | Full AI response visible |

### Video 3 — Scene Reviewer (`demo-scene-reviewer`)

| Field | Value |
|-------|-------|
| Files | `demo-scene-reviewer.mp4`, `demo-scene-reviewer.webm` |
| Question typed | "Does the confrontation scene in Ch 6 feel earned?" |
| Expected AI answer | Should note the tension buildup over 5 chapters, suggest adding a hesitation beat before Marcus speaks, reference the line "I never trusted you." |
| Start frame | Cursor clicks send button |
| End frame | Full AI response visible |

### Recording Tool: ffmpeg

Use `ffmpeg` with `gdigrab` (Windows screen capture) to record a region of the screen:

```bash
ffmpeg -f gdigrab -framerate 30 -offset_x <X> -offset_y <Y> -video_size <W>x<H> \
  -i desktop -vcodec libx264 -pix_fmt yuv420p -t 8 output.mp4
```

Trim to exact start/end with ffmpeg `-ss` and `-t` flags. Convert to WebM with `libvpx-vp9`.

If ffmpeg is not available, fallback: use Windows Xbox Game Bar (`Win+G → Record`) then crop with ffmpeg post-process.

---

## Part 3: AIShowcase Component Update

### New Card Layout

Each card in `components/AIShowcase.tsx` changes from:
```
[header: icon + role + description]
[chat bubbles: user + AI]
```

To:
```
[header: icon + role + description]
[video: autoPlay muted loop playsInline, aspect-video, rounded]
[chat bubbles: user + AI — unchanged]
```

### Video Element

```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  className="w-full aspect-video object-cover"
>
  <source src={`/demos/${s.videoSlug}.webm`} type="video/webm" />
  <source src={`/demos/${s.videoSlug}.mp4`} type="video/mp4" />
</video>
```

### Updated `scenarios` array

Each scenario object gains a `videoSlug` field:

| Scenario | videoSlug |
|----------|-----------|
| Plot Auditor | `demo-plot-auditor` |
| Character Developer | `demo-character-dev` |
| Scene Reviewer | `demo-scene-reviewer` |

### Fallback (before videos are recorded)

Until the video files exist, the `<video>` element shows nothing (graceful degradation — browser hides empty video). Chat bubbles remain visible. No placeholder image needed.

---

## Part 4: File Structure

```
novelist-site/
  public/
    demos/
      demo-plot-auditor.mp4
      demo-plot-auditor.webm
      demo-character-dev.mp4
      demo-character-dev.webm
      demo-scene-reviewer.mp4
      demo-scene-reviewer.webm
  components/
    AIShowcase.tsx          ← modified: add videoSlug + <video> element
```

---

## Implementation Sequence

1. **Seed dummy novel** — Node.js script runs against `novelist.db`, inserts all data, verifiable by opening Novelist app
2. **Configure Groq in Novelist** — set provider to Groq in AI Settings, verify with Test Key
3. **Record Video 1** (Plot Auditor) — type question, record, trim, encode MP4 + WebM
4. **Record Video 2** (Character Developer) — same process
5. **Record Video 3** (Scene Reviewer) — same process
6. **Update AIShowcase.tsx** — add videoSlug to scenarios, add `<video>` element to card
7. **Copy videos to `public/demos/`** — verify they autoplay in browser
8. **Build + push** — `npm run build`, `git push origin main`

---

## Success Criteria

- All 3 videos autoplay silently and loop in the AIShowcase section
- Each AI response in the video is clearly specific to the story (mentions Elena, Marcus, harbor, Ch numbers)
- Videos are ≤ 2 MB each
- Page loads without layout shift (video has fixed aspect ratio)
- Chat bubbles below each video remain readable and unchanged
